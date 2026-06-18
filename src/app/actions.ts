// src/app/actions.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail =  "info@Softurix.com";

export interface ContactData {
  nombre: string;
  email: string;
  asunto?: string;
  mensaje: string;
}

export interface CartItem {
  title: string;
  price: number;
  quantity: number;
  slug: string;
}

export interface PaymentPayload {
  contact: {
    nombre: string;
    apellidos: string;
    email: string;
    telefono: string;
  };
  billing: {
    pais: string;
    calle: string;
    colonia: string;
    ciudad: string;
    estado: string;
    cp: string;
  };
  order: {
    notas: string;
  };
  card: {
    titular: string;
    number: string;
    expiry: string;
    cvc: string;
  };
  items: CartItem[];
  total: number;
}

// --- DICCIONARIOS PARA CORREOS ---
const emailDict = {
  es: {
    contactSubjectUser: "Hemos recibido tu mensaje - Talentrika",
    contactSubjectAdmin: "Nuevo mensaje de contacto",
    purchaseSubjectUser: "Confirmación de tu pedido - Talentrika",
    purchaseSubjectAdmin: "Nueva venta procesada",
    greeting: "Hola",
  },
  en: {
    contactSubjectUser: "We have received your message - Talentrika",
    contactSubjectAdmin: "New contact message",
    purchaseSubjectUser: "Order Confirmation - Talentrika",
    purchaseSubjectAdmin: "New sale processed",
    greeting: "Hello",
  },
};

// ==========================================
// 1. ACCIÓN: ENVIAR CORREO DE CONTACTO
// ==========================================
export async function sendContactEmail(
  data: ContactData,
  lang: "es" | "en"
) {
  const t = emailDict[lang];

  try {
    // Correo al Admin
    await resend.emails.send({
      from: "Softurix <info@Softurix.com>",
      to: [adminEmail],
      subject: `${t.contactSubjectAdmin}: ${data.asunto || "Sin asunto"}`,
      html: `<p><strong>Nombre:</strong> ${data.nombre}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p><strong>Mensaje:</strong></p>
             <p>${data.mensaje}</p>`,
    });

    // Correo al Usuario
    await resend.emails.send({
      from: "Softurix <info@Softurix.com>",
      to: [data.email],
      subject: t.contactSubjectUser,
      html: `<p>${t.greeting} ${data.nombre},</p>
             <p>${lang === "es" ? "Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto." : "Thank you for contacting us. We have received your message and will reply shortly."}</p>
             <hr />
             <p><em>${data.mensaje}</em></p>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error: "Error sending email" };
  }
}

// ==========================================
// 2. PROCESAR PAGO CON OCTANO Y CORREO
// ==========================================
export async function processPayment(
  data: PaymentPayload,
  lang: "es" | "en"
) {
  const t = emailDict[lang];

  try {
    // 1. Login en Octano
    const authParams = new URLSearchParams();
    authParams.append("email", process.env.OCTANO_EMAIL!);
    authParams.append("password", process.env.OCTANO_PASSWORD!);

    const authRes = await fetch("https://pagos.octanopayments.com/api/v1/signin", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: authParams.toString(),
    });
    
    const authData = await authRes.json();
    if (!authData.authToken) throw new Error("Octano Auth Failed");

    const token = authData.authToken;

    // 2. Tokenizar Tarjeta
    const [month, year] = data.card.expiry.split("/"); 
    const cardRes = await fetch("https://pagos.octanopayments.com/api/v1/card/tokenizer", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        cardData: {
          cardNumber: data.card.number.replace(/\s/g, ""),
          cardholderName: data.card.titular,
          expirationMonth: month.trim(),
          expirationYear: year.trim().length === 2 ? `20${year.trim()}` : year.trim(),
        }
      }),
    });

    const cardTokenData = await cardRes.json();
    if (!cardTokenData.cardNumberToken) throw new Error("Card Tokenization Failed");

    // 3. Procesar Venta
    const orderId = `TLK-${Math.floor(100000 + Math.random() * 900000)}`;
    const fullAddress = data.billing.colonia 
      ? `${data.billing.calle}, ${data.billing.colonia}` 
      : data.billing.calle;
    
    const salePayload = {
      amount: data.total,
      currency: 484, // Código para MXN
      reference: orderId,
      customerInformation: {
        firstName: data.contact.nombre,
        lastName: data.contact.apellidos,
        email: data.contact.email,
        phone1: data.contact.telefono,
        city: data.billing.ciudad,
        address1: fullAddress,
        postalCode: data.billing.cp,
        state: data.billing.estado,
        country: data.billing.pais === "México" ? "Mx" : data.billing.pais,
      },
      cardData: {
        cardNumberToken: cardTokenData.cardNumberToken,
        cvv: data.card.cvc,
      },
      items: data.items.map((item: CartItem) => ({
        title: item.title,
        amount: item.price,
        quantity: item.quantity,
        id: item.slug,
      })),
      redirectUrl: "https://talentrika.com/checkout", // Ajusta a tu URL de producción
    };

    const saleRes = await fetch("https://pagos.octanopayments.com/api/v1/sale", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(salePayload),
    });

    const saleData = await saleRes.json();

    if (saleData.status !== "APPROVED") {
      return { success: false, error: "Payment declined by Octano" };
    }

    // 4. Enviar Correos de Confirmación
    const itemsHtml = data.items.map((i: CartItem) => `<li>${i.quantity}x ${i.title} - $${i.price}</li>`).join("");

    // Admin Email
    await resend.emails.send({
      from: "Talentrika Ventas <no-reply@talentrika.com>",
      to: [adminEmail],
      subject: `${t.purchaseSubjectAdmin} - ${orderId}`,
      html: `<h2>Nueva Venta: ${orderId}</h2>
             <p><strong>Cliente:</strong> ${data.contact.nombre} ${data.contact.apellidos} (${data.contact.email})</p>
             <p><strong>Total:</strong> MXN $${data.total}</p>
             <ul>${itemsHtml}</ul>
             <p><strong>Notas del pedido:</strong> ${data.order.notas || "Ninguna"}</p>`,
    });

    // User Email
    await resend.emails.send({
      from: "Talentrika <no-reply@talentrika.com>",
      to: [data.contact.email],
      subject: t.purchaseSubjectUser,
      html: `<h2>${t.greeting} ${data.contact.nombre},</h2>
             <p>${lang === "es" ? "Gracias por tu compra. Aquí tienes el resumen de tu pedido:" : "Thank you for your purchase. Here is your order summary:"}</p>
             <p><strong>${lang === "es" ? "Folio" : "Order ID"}:</strong> ${orderId}</p>
             <ul>${itemsHtml}</ul>
             <p><strong>Total:</strong> MXN $${data.total}</p>`,
    });

    return { success: true, orderId };

  } catch (error) {
    console.error("Payment processing error:", error);
    return { success: false, error: "System error processing payment" };
  }
}