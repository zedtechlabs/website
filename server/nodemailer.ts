import nodemailer from "nodemailer";
import { type ContactFormData } from "@shared/schema";

// Configure nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASSWORD || "",
  },
});

export async function sendContactEmail(formData: ContactFormData): Promise<void> {
  const { name, email, company, subject, message } = formData;
  
  const companyInfo = company ? `Company/Institution: ${company}` : "No company/institution provided";
  
  const mailOptions = {
    from: process.env.MAIL_FROM || "noreply@zedtechlab.com",
    to: process.env.MAIL_TO || "contact@zedtechlab.com",
    subject: `Contact Form: ${subject}`,
    text: `
Name: ${name}
Email: ${email}
${companyInfo}

Message:
${message}
    `,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0A9956;">New Message from Zed Tech Lab Website</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Company/Institution:</strong> ${company || "Not provided"}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <hr style="border: 1px solid #f0f0f0; margin: 20px 0;" />
  <h3>Message:</h3>
  <p>${message.replace(/\n/g, "<br>")}</p>
</div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
