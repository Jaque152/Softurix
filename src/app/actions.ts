// src/app/actions.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = "info@softurix.com";

// ==========================================
// INTERFACES (Definición estricta de tipos)
// ==========================================
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

// ==========================================
// DISEÑO Y PLANTILLAS HTML PARA CORREOS
// ==========================================
const COLORS = {
  pine: "#16382D",     // Verde oscuro
  cream: "#F6F4EB",    // Crema claro de fondo
  gold: "#C5994E",     // Dorado acento
  espresso: "#1F1C18", // Texto oscuro
  border: "#E5E1D5",   // Bordes sutiles
};

function getEmailTemplate(title: string, contentHtml: string) {
  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
  </head>
  <body style="margin: 0; padding: 40px 20px; background-color: ${COLORS.cream}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid ${COLORS.border}; text-align: left;">
            <!-- Header Brand -->
            <tr>
              <td style="background-color: ${COLORS.pine}; padding: 35px 30px; text-align: center;">
                <h1 style="margin: 0; color: ${COLORS.cream}; font-family: Georgia, serif; font-size: 32px; font-weight: normal; letter-spacing: 1px;">Softurix</h1>
              </td>
            </tr>
            <!-- Content -->
            <tr>
              <td style="padding: 40px 30px; color: ${COLORS.espresso}; font-size: 16px; line-height: 1.6;">
                ${contentHtml}
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="background-color: ${COLORS.cream}; border-top: 1px solid ${COLORS.border}; padding: 24px 30px; text-align: center;">
                <p style="margin: 0; color: #736b60; font-size: 13px;">
                  © ${new Date().getFullYear()} Softurix. Formación que se traduce en resultados.
                </p>
                <p style="margin: 5px 0 0 0; color: #a1998f; font-size: 12px;">
                  Torcuato Tasso No. 245, Col. Polanco, CDMX.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

// Función auxiliar para formatear la tabla de productos
function generateItemsTable(items: CartItem[], total: number) {
  return `
    <table width="100%" cellpadding="12" cellspacing="0" style="border-collapse: collapse; margin-top: 25px; margin-bottom: 25px; font-size: 15px;">
      <thead>
        <tr style="border-bottom: 2px solid ${COLORS.pine}; text-align: left;">
          <th style="color: ${COLORS.pine}; font-weight: bold; padding-left: 0;">Producto</th>
          <th style="color: ${COLORS.pine}; font-weight: bold; text-align: center;">Cant.</th>
          <th style="color: ${COLORS.pine}; font-weight: bold; text-align: right; padding-right: 0;">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(i => `
          <tr style="border-bottom: 1px solid ${COLORS.border};">
            <td style="padding-left: 0;">${i.title}</td>
            <td style="text-align: center;">${i.quantity}</td>
            <td style="text-align: right; padding-right: 0;">$${(i.price * i.quantity).toFixed(2)}</td>
          </tr>
        `).join('')}
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" style="padding-top: 20px; text-align: right; font-weight: bold; font-size: 18px;">Total Pagado:</td>
          <td style="padding-top: 20px; text-align: right; font-weight: bold; color: ${COLORS.pine}; font-size: 18px; padding-right: 0;">MXN $${total.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  `;
}

// ==========================================
// 1. ACCIÓN: ENVIAR CORREO DE CONTACTO
// ==========================================
export async function sendContactEmail(
  data: ContactData,
  lang: "es" | "en"
) {
  const isEs = lang === "es";

  try {
    // ------------------------------------
    // Correo al Admin (Aviso de nuevo Lead)
    // ------------------------------------
    const adminHtml = getEmailTemplate(
      "Nuevo mensaje de contacto",
      `
      <h2 style="color: ${COLORS.pine}; margin-top: 0; font-family: Georgia, serif; font-size: 24px;">Nuevo mensaje de contacto</h2>
      <p>Hola equipo,</p>
      <p>Se ha registrado un nuevo formulario de contacto desde la página web. Aquí están los detalles:</p>
      
      <table width="100%" cellpadding="12" cellspacing="0" style="margin-top: 20px; border: 1px solid ${COLORS.border}; border-radius: 8px; background-color: #faf9f5;">
        <tr>
          <td width="30%" style="font-weight: bold; border-bottom: 1px solid ${COLORS.border};">Nombre:</td>
          <td style="border-bottom: 1px solid ${COLORS.border};">${data.nombre}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; border-bottom: 1px solid ${COLORS.border};">Email:</td>
          <td style="border-bottom: 1px solid ${COLORS.border};"><a href="mailto:${data.email}" style="color: ${COLORS.gold};">${data.email}</a></td>
        </tr>
        <tr>
          <td style="font-weight: bold; border-bottom: 1px solid ${COLORS.border};">Asunto:</td>
          <td style="border-bottom: 1px solid ${COLORS.border};">${data.asunto || "Sin asunto"}</td>
        </tr>
        <tr>
          <td colspan="2" style="font-weight: bold; padding-bottom: 4px;">Mensaje:</td>
        </tr>
        <tr>
          <td colspan="2" style="padding-top: 0; font-style: italic; color: #555;">"${data.mensaje}"</td>
        </tr>
      </table>
      `
    );

    await resend.emails.send({
      from: "Softurix Web <info@softurix.com>",
      to: [adminEmail],
      subject: `Nuevo Lead: ${data.asunto || "Contacto web"}`,
      html: adminHtml,
    });

    // ------------------------------------
    // Correo al Usuario (Agradecimiento)
    // ------------------------------------
    const userHtml = getEmailTemplate(
      isEs ? "Mensaje recibido" : "Message received",
      `
      <h2 style="color: ${COLORS.pine}; margin-top: 0; font-family: Georgia, serif; font-size: 24px;">
        ${isEs ? "¡Hola" : "Hello"} ${data.nombre.split(" ")[0]}!
      </h2>
      <p>${isEs ? "Hemos recibido exitosamente tu mensaje en nuestro sistema." : "We have successfully received your message in our system."}</p>
      <p>${isEs ? "Uno de nuestros especialistas revisará tu solicitud y se pondrá en contacto contigo muy pronto a través de este correo." : "One of our specialists will review your request and contact you very soon through this email."}</p>
      
      <div style="margin-top: 30px; padding: 20px; background-color: #faf9f5; border-left: 4px solid ${COLORS.gold}; border-radius: 0 8px 8px 0;">
        <p style="margin: 0 0 10px 0; font-weight: bold; font-size: 14px; text-transform: uppercase; color: ${COLORS.pine};">
          ${isEs ? "Resumen de tu mensaje" : "Your message summary"}:
        </p>
        <p style="margin: 0; font-style: italic; color: #666;">"${data.mensaje}"</p>
      </div>
      
      <p style="margin-top: 30px;">
        ${isEs ? "Saludos cordiales," : "Best regards,"}<br>
        <strong>${isEs ? "El equipo de Softurix" : "The Softurix Team"}</strong>
      </p>
      `
    );

    await resend.emails.send({
      from: "Softurix <info@softurix.com>",
      to: [data.email],
      subject: isEs ? "Hemos recibido tu mensaje - Softurix" : "We have received your message - Softurix",
      html: userHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error: "Error sending email" };
  }
}

// ==========================================
// 2. ACCIÓN: PROCESAR PAGO Y ENVIAR RECIBOS
// ==========================================
export async function processPayment(
  data: PaymentPayload,
  lang: "es" | "en"
) {
  const isEs = lang === "es";

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
      redirectUrl: "https://softurix.com/checkout", 
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

    // 4. Construir Correos de Confirmación
    const tableHtml = generateItemsTable(data.items, data.total);

    // ------------------------------------
    // Correo al Admin (Aviso de Venta)
    // ------------------------------------
    const adminSaleHtml = getEmailTemplate(
      "Nueva Venta Procesada",
      `
      <h2 style="color: ${COLORS.pine}; margin-top: 0; font-family: Georgia, serif; font-size: 24px;">¡Nueva venta procesada! 🎉</h2>
      <p>Se ha registrado un pago exitoso a través de Octano Payments. Aquí están los detalles de la orden:</p>
      
      <div style="background-color: #faf9f5; border: 1px solid ${COLORS.border}; border-radius: 8px; padding: 20px; margin-top: 20px;">
        <h3 style="margin-top: 0; color: ${COLORS.gold}; font-size: 16px; text-transform: uppercase;">Detalles del Cliente</h3>
        <p style="margin: 5px 0;"><strong>Folio de orden:</strong> <span style="font-family: monospace; background: #eee; padding: 2px 6px; border-radius: 4px;">${orderId}</span></p>
        <p style="margin: 5px 0;"><strong>Nombre:</strong> ${data.contact.nombre} ${data.contact.apellidos}</p>
        <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${data.contact.email}" style="color: ${COLORS.pine};">${data.contact.email}</a></p>
        <p style="margin: 5px 0;"><strong>Teléfono:</strong> ${data.contact.telefono || "N/A"}</p>
        <p style="margin: 5px 0;"><strong>Notas del pedido:</strong> <em>${data.order.notas || "Ninguna"}</em></p>
      </div>

      <h3 style="margin-top: 30px; color: ${COLORS.pine}; font-size: 18px;">Resumen del pedido</h3>
      ${tableHtml}
      `
    );

    await resend.emails.send({
      from: "softurix Ventas <info@softurix.com>",
      to: [adminEmail],
      subject: `¡Nueva Venta Procesada! Folio: ${orderId}`,
      html: adminSaleHtml,
    });

    // ------------------------------------
    // Correo al Usuario (Recibo de Compra)
    // ------------------------------------
    const userSaleHtml = getEmailTemplate(
      isEs ? "Confirmación de Pedido" : "Order Confirmation",
      `
      <h2 style="color: ${COLORS.pine}; margin-top: 0; font-family: Georgia, serif; font-size: 24px;">
        ${isEs ? "¡Gracias por tu compra" : "Thank you for your purchase"}, ${data.contact.nombre.split(" ")[0]}!
      </h2>
      <p>${isEs ? "Tu pago ha sido procesado exitosamente y tu lugar está confirmado. A continuación te presentamos el comprobante de tu transacción:" : "Your payment has been successfully processed and your place is confirmed. Below is the receipt for your transaction:"}</p>
      
      <div style="background-color: #faf9f5; border: 1px solid ${COLORS.border}; border-radius: 8px; padding: 20px; margin-top: 20px; text-align: center;">
        <p style="margin: 0; font-size: 14px; text-transform: uppercase; color: #666; letter-spacing: 1px;">
          ${isEs ? "Folio de Operación" : "Order Reference"}
        </p>
        <p style="margin: 5px 0 0 0; font-family: monospace; font-size: 22px; color: ${COLORS.pine}; font-weight: bold;">
          ${orderId}
        </p>
      </div>

      <h3 style="margin-top: 35px; color: ${COLORS.pine}; font-size: 18px; border-bottom: 1px solid ${COLORS.border}; padding-bottom: 10px;">
        ${isEs ? "Detalle de tu orden" : "Order details"}
      </h3>
      ${tableHtml}

      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid ${COLORS.border}; text-align: center;">
        <p style="margin-bottom: 5px; font-weight: bold;">${isEs ? "¿Qué sigue?" : "What's next?"}</p>
        <p style="color: #555; margin-top: 0;">${isEs ? "Nuestro equipo se pondrá en contacto contigo en breve para brindarte las instrucciones de acceso a tus programas." : "Our team will contact you shortly to provide access instructions to your programs."}</p>
      </div>
      `
    );

    await resend.emails.send({
      from: "Softurix <info@softurix.com>",
      to: [data.contact.email],
      subject: isEs ? `Confirmación de pedido - Folio: ${orderId}` : `Order Confirmation - Ref: ${orderId}`,
      html: userSaleHtml,
    });

    return { success: true, orderId };

  } catch (error) {
    console.error("Payment processing error:", error);
    return { success: false, error: "System error processing payment" };
  }
}