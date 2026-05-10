import { NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import nodemailer from "nodemailer";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "submissions.json");

interface Submission {
  id: string;
  timestamp: string;
  source: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget?: string;
  message: string;
}

async function saveSubmission(data: Submission) {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }

  let existing: Submission[] = [];
  if (existsSync(DB_FILE)) {
    try {
      const content = await readFile(DB_FILE, "utf-8");
      existing = JSON.parse(content);
    } catch {
      existing = [];
    }
  }

  existing.unshift(data);
  await writeFile(DB_FILE, JSON.stringify(existing, null, 2), "utf-8");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, budget, message, source } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const submission: Submission = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      timestamp: new Date().toISOString(),
      source: source || "contact-form",
      name,
      company: company || "",
      email,
      phone: phone || "",
      service: service || "",
      budget: budget || "",
      message,
    };

    await saveSubmission(submission);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Inter', Arial, sans-serif; background: #030712; color: #f9fafb; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #050d1f; border: 1px solid rgba(212,175,55,0.15); border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #0a1628, #050d1f); padding: 32px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); }
    .brand { font-size: 20px; font-weight: 700; letter-spacing: 0.15em; color: #d4af37; text-transform: uppercase; }
    .subtitle { font-size: 10px; letter-spacing: 0.4em; color: #6b7280; text-transform: uppercase; }
    .body { padding: 32px 40px; }
    .title { font-size: 22px; font-weight: 700; color: #ffffff; margin-bottom: 8px; }
    .desc { font-size: 14px; color: #9ca3af; margin-bottom: 28px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 10px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 6px; }
    .value { font-size: 14px; color: #f9fafb; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 16px; }
    .message-value { font-size: 14px; color: #f9fafb; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; line-height: 1.6; }
    .footer { background: rgba(0,0,0,0.3); padding: 20px 40px; text-align: center; font-size: 11px; color: #4b5563; border-top: 1px solid rgba(255,255,255,0.05); }
    .gold-bar { height: 2px; background: linear-gradient(90deg, transparent, #d4af37, transparent); }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="gold-bar"></div>
    <div class="header">
      <div class="brand">GOLDENLINING</div>
      <div class="subtitle">Solution — New Enquiry</div>
    </div>
    <div class="body">
      <div class="title">New ${source === "consultation-modal" ? "Consultation Request" : "Contact Form Submission"}</div>
      <div class="desc">A new enquiry has been received through your website.</div>

      <div class="grid">
        <div class="field">
          <div class="label">Full Name</div>
          <div class="value">${name}</div>
        </div>
        <div class="field">
          <div class="label">Company</div>
          <div class="value">${company || "—"}</div>
        </div>
        <div class="field">
          <div class="label">Email Address</div>
          <div class="value"><a href="mailto:${email}" style="color:#d4af37;text-decoration:none;">${email}</a></div>
        </div>
        <div class="field">
          <div class="label">Phone Number</div>
          <div class="value">${phone || "—"}</div>
        </div>
        <div class="field">
          <div class="label">Service Interested In</div>
          <div class="value">${service || "—"}</div>
        </div>
        <div class="field">
          <div class="label">Project Budget</div>
          <div class="value">${budget || "—"}</div>
        </div>
      </div>

      <div class="field">
        <div class="label">Message</div>
        <div class="message-value">${message.replace(/\n/g, "<br>")}</div>
      </div>

      <div style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.15);border-radius:10px;padding:16px;margin-top:16px;">
        <div style="font-size:11px;color:#9ca3af;">Submission ID: <span style="color:#d4af37;">${submission.id}</span></div>
        <div style="font-size:11px;color:#9ca3af;margin-top:4px;">Received: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Brisbane" })} AEST</div>
      </div>
    </div>
    <div class="footer">
      Goldenlining Solution &mdash; goldenlining.com.au<br>
      This email was sent from your website contact form.
    </div>
    <div class="gold-bar"></div>
  </div>
</body>
</html>`;

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: `"Goldenlining Solution" <${process.env.SMTP_USER}>`,
        to: "sobur112@gmail.com",
        replyTo: email,
        subject: `New ${source === "consultation-modal" ? "Consultation" : "Enquiry"}: ${name} — ${service || "General Enquiry"}`,
        html: emailHtml,
      });
    }

    return NextResponse.json(
      { success: true, message: "Your consultation request has been received. Our team will contact you shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Goldenlining Solution API — Discover Premium Digital Solutions" },
    { status: 200 }
  );
}
