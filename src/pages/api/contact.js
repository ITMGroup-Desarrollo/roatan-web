import nodemailer from "nodemailer";

export async function POST({ request }) {
  const form = await request.formData();
  const captcha = form.get("g-recaptcha-response");

  if (!captcha) {
    return new Response(
      JSON.stringify({ success: false, message: "Captcha requerido." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const secretKey = import.meta.env.RECAPTCHA_SECRET_KEY;

  const verify = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${captcha}`,
    }
  );

  const result = await verify.json();

  if (!result.success) {
    return new Response(
      JSON.stringify({ success: false, message: "Captcha inválido." }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const name = form.get("nombre")?.toString() || "";
  const lastName = form.get("apellido")?.toString() || "";
  const correo = form.get("correo")?.toString() || "";
  const phone = form.get("telefono")?.toString() || "";
  const naviera = form.get("naviera")?.toString() || "";
  const country = form.get("country")?.toString() || "";
  const mensaje = form.get("mensaje")?.toString() || "";

  const transporter = nodemailer.createTransport({
    host: import.meta.env.MAIL_HOST,
    port: Number(import.meta.env.MAIL_PORT),
    auth: {
      user: import.meta.env.MAIL_USER,
      pass: import.meta.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulario Web" <itmgroupmxappsg@gmail.com>`,
      to: "cristian.mendoza.026@gmail.com",
      // to: "info@porttainobay.com",
      subject: `Nuevo contacto de ${name} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #003366; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
            Nuevo mensaje desde el formulario de contacto
          </h2>
          <p style="margin: 10px 0;"><strong>Origen:</strong> Port Roatan</p>
          <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name} ${lastName}</p>
          <p style="margin: 10px 0;"><strong>Correo electrónico:</strong> <a href="mailto:${correo}" style="color: #0066cc;">${correo}</a></p>
          <p style="margin: 10px 0;"><strong>Naviera:</strong> ${naviera}</p>
          <p style="margin: 10px 0;"><strong>País:</strong> ${country}</p>
          <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${phone}</p>
          <p style="margin: 20px 0;"><strong>Mensaje:</strong></p>
          <div style="background-color: #fff; padding: 15px; border: 1px solid #ccc; border-radius: 4px;">
            ${mensaje.replace(/\n/g, "<br>")}
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #999;">
            Este mensaje fue enviado automáticamente desde el sitio web. No respondas directamente a este correo.
          </p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Formulario enviado correctamente.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Error al enviar correo:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Error al enviar el correo." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
