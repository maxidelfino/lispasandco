import sgMail from "@sendgrid/mail";

// Inicializa con la clave desde la variable de entorno
if (!process.env.SENDGRID_API_KEY) {
  throw new Error("Falta la variable SENDGRID_API_KEY");
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan datos en el formulario" });
  }

  try {
    await sgMail.send({
      to: "maxidelfino1234@hotmail.com",
      from: email,
      templateId: "d-5df439268bf748e18bcd0bfa619c2cc3",
      dynamic_template_data: { name, message },
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error SendGrid:", error);
    return res.status(500).json({ error: "Error al enviar el correo" });
  }
}
