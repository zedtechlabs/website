import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, company, subject, message } = req.body;

  try {
    const response = await axios.post(
      "https://api.resend.com/emails",
      {
        from: "no-reply@zedtechlab.com",
        to: ["contact@zedtechlab.com", "zedtechlabs@gmail.com"],
        subject,
        html: `
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Company:</b> ${company || "N/A"}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`, // ✅ Securely use API key
          "Content-Type": "application/json",
        },
      }
    );

    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Email sending failed", error });
  }
}
