import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // Enable CORS if needed
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let apiKey = process.env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error("Missing Resend API Key in environment variables!");
    return res.status(500).json({ error: 'Server configuration error: Missing API Key' });
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, message, toEmail } = req.body;

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: [toEmail], // This must be the email address you verified on Resend
      reply_to: email,
      subject: `New Message from ${name} (Portfolio)`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
