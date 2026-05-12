import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name         = formData.get("name") as string;
    const email        = formData.get("email") as string;
    const location     = formData.get("location") as string;
    const techStack    = formData.get("techStack") as string;
    const qualification = formData.get("qualification") as string;
    const role         = formData.get("role") as string;
    const cvFile       = formData.get("cv") as File | null;

    if (!name || !email || !techStack || !qualification) {
      return NextResponse.json({ error: "Please fill all required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Build attachments array if CV uploaded
    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
    if (cvFile && cvFile.size > 0) {
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({
        filename: cvFile.name,
        content: buffer,
        contentType: cvFile.type,
      });
    }

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background: #030712; color: #f9fafb; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #0d1f14; border: 1px solid rgba(212,175,55,0.2); border-radius: 16px; overflow: hidden; }
    .gold-bar { height: 3px; background: linear-gradient(90deg, transparent, #d4af37, transparent); }
    .header { background: linear-gradient(135deg, #0d1f14, #091a0f); padding: 32px 40px; border-bottom: 1px solid rgba(212,175,55,0.1); }
    .brand { font-size: 20px; font-weight: 700; letter-spacing: 0.15em; color: #d4af37; text-transform: uppercase; }
    .subtitle { font-size: 10px; letter-spacing: 0.4em; color: #6b7280; text-transform: uppercase; margin-top: 4px; }
    .body { padding: 32px 40px; }
    .title { font-size: 22px; font-weight: 700; color: #ffffff; margin-bottom: 6px; }
    .desc { font-size: 13px; color: #9ca3af; margin-bottom: 28px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 8px; }
    .field { margin-bottom: 18px; }
    .label { font-size: 10px; color: #d4af37; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 6px; }
    .value { font-size: 14px; color: #f9fafb; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 11px 14px; }
    .value-block { font-size: 14px; color: #f9fafb; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 14px; line-height: 1.7; white-space: pre-wrap; }
    .badge { display: inline-block; background: rgba(212,175,55,0.12); border: 1px solid rgba(212,175,55,0.3); color: #d4af37; font-size: 11px; padding: 4px 12px; border-radius: 20px; font-weight: 600; }
    .footer { padding: 20px 40px; text-align: center; font-size: 11px; color: #4b5563; border-top: 1px solid rgba(255,255,255,0.05); }
  </style>
</head>
<body>
<div class="container">
  <div class="gold-bar"></div>
  <div class="header">
    <div class="brand">GOLDENLINING</div>
    <div class="subtitle">Solution — New Job Application</div>
  </div>
  <div class="body">
    <div class="title">New Career Application 🎯</div>
    <div class="desc">Someone just applied to join the Goldenlining team.</div>

    <div class="grid">
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}" style="color:#d4af37;text-decoration:none;">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Location</div>
        <div class="value">${location || "—"}</div>
      </div>
      <div class="field">
        <div class="label">Role Applying For</div>
        <div class="value">${role || "Open / Not specified"}</div>
      </div>
    </div>

    <div class="field">
      <div class="label">Tech Stack</div>
      <div class="value-block">${techStack}</div>
    </div>

    <div class="field">
      <div class="label">Qualifications & Experience</div>
      <div class="value-block">${qualification}</div>
    </div>

    <div style="margin-top:20px;padding:16px;background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.15);border-radius:10px;">
      <div style="font-size:12px;color:#9ca3af;">CV Attached: <span style="color:#d4af37;">${cvFile && cvFile.size > 0 ? `Yes — ${cvFile.name}` : "No CV uploaded"}</span></div>
      <div style="font-size:12px;color:#9ca3af;margin-top:4px;">Received: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Brisbane" })} AEST</div>
    </div>
  </div>
  <div class="footer">
    Goldenlining Solution &mdash; goldenliningsolution@gmail.com<br>
    This application was submitted via the website careers form.
  </div>
  <div class="gold-bar"></div>
</div>
</body>
</html>`;

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: `"Goldenlining Careers" <${process.env.SMTP_USER}>`,
        to: "goldenliningsolution@gmail.com",
        replyTo: email,
        subject: `New Application: ${name} — ${role || "Open Role"}`,
        html: emailHtml,
        attachments,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Careers form error:", error);
    return NextResponse.json({ error: "Failed to submit application. Please try again." }, { status: 500 });
  }
}
