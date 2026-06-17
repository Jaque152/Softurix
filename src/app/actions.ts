// src/app/actions.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail =  "info@Softurix.com";

// --- DICCIONARIOS PARA CORREOS ---
const emailDict = {
  es: {
    contactSubjectUser: "Hemos recibido tu mensaje - Softurix",
    contactSubjectAdmin: "Nuevo mensaje de contacto",
    purchaseSubjectUser: "Confirmación de tu pedido - Softurix",
    purchaseSubjectAdmin: "Nueva venta procesada",
    greeting: "Hola",
  },
  en: {
    contactSubjectUser: "We have received your message - Softurix",
    contactSubjectAdmin: "New contact message",
    purchaseSubjectUser: "Order Confirmation - Softurix",
    purchaseSubjectAdmin: "New sale processed",
    greeting: "Hello",
  },
};

// ==========================================
// 1. ACCIÓN: ENVIAR CORREO DE CONTACTO
// ==========================================
export async function sendContactEmail(
  data: { nombre: string; email: string; asunto: string; mensaje: string },
  lang: "es" | "en"
) {
  const t = emailDict[lang];

  try {
    // Correo al Admin
    await resend.emails.send({
      from: "Softurix <info@softurix.com>",
      to: [adminEmail],
      subject: `${t.contactSubjectAdmin}: ${data.asunto || "Sin asunto"}`,
      html: `<p><strong>Nombre:</strong> ${data.nombre}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p><strong>Mensaje:</strong></p>
             <p>${data.mensaje}</p>`,
    });

    // Correo al Usuario
    await resend.emails.send({
      from: "Softurix <info@softurix.com>",
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
// 2. ACCIÓN: PROCESAR PAGO CON OCTANO Y CORREO
// ==========================================
export async function processPayment(
  data: any,
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
        "Content-Type": "application/x-www-form-urlencoded", // Requerido por Octano
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
          cardholderName: data.card.titular, // <--- Actualizado para usar el nombre del titular
          expirationMonth: month.trim(),
          expirationYear: year.trim().length === 2 ? `20${year.trim()}` : year.trim(),
        }
      }),
    });

    const cardTokenData = await cardRes.json();
    if (!cardTokenData.cardNumberToken) throw new Error("Card Tokenization Failed");

    // 3. Procesar Venta
    const orderId = `TLK-${Math.floor(100000 + Math.random() * 900000)}`;
    
    // Concatenar la calle y la colonia para enviarlo a Octano
    const fullAddress = data.billing.colonia 
      ? `${data.billing.calle}, ${data.billing.colonia}` 
      : data.billing.calle;

    const salePayload = {
      amount: data.total,
      currency: 484, // MXN
      reference: orderId,
      customerInformation: {
        firstName: data.contact.nombre,           // <--- Separado
        lastName: data.contact.apellidos,         // <--- Separado
        email: data.contact.email,
        phone1: data.contact.telefono,
        city: data.billing.ciudad,
        address1: fullAddress,                    // <--- Calle + Colonia
        postalCode: data.billing.cp,
        state: data.billing.estado,               // <--- Estado agregado
        country: data.billing.pais === "México" ? "Mx" : data.billing.pais, // <--- País agregado
      },
      cardData: {
        cardNumberToken: cardTokenData.cardNumberToken,
        cvv: data.card.cvc,
      },
      items: data.items.map((item: any) => ({
        title: item.title,
        amount: item.price,
        quantity: item.quantity,
        id: item.slug,
      })),
      redirectUrl: "https://Softurix.com/checkout", // Ajusta a tu URL de producción
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
    const itemsHtml = data.items.map((i: any) => `<li>${i.quantity}x ${i.title} - $${i.price}</li>`).join("");

    // Admin Email
    await resend.emails.send({
      from: "Softurix Ventas <info@softurix.com>",
      to: [adminEmail],
      subject: `${t.purchaseSubjectAdmin} - ${orderId}`,
      html: `<h2>Nueva Venta: ${orderId}</h2>
             <p><strong>Cliente:</strong> ${data.contact.nombre} (${data.contact.email})</p>
             <p><strong>Total:</strong> MXN $${data.total}</p>
             <ul>${itemsHtml}</ul>`,
    });

    // User Email
    await resend.emails.send({
      from: "Softurix <info@softurix.com>",
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