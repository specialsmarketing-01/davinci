import { contact, siteName } from "@/lib/site";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type LeadRequest = {
  formType?: string;
  sourcePath?: string;
  payload?: Record<string, string>;
};

const formLabels: Record<string, string> = {
  contact: "Contact Form",
  get_in_touch: "Get In Touch Lead Form",
  list_your_property: "List Your Property Form",
  international_properties: "International Properties Form",
  sell_property: "Sell Property Form",
};

function clean(input: unknown) {
  if (typeof input !== "string") return "";
  return input.trim();
}

function toTextLines(payload: Record<string, string>) {
  return Object.entries(payload)
    .filter(([, value]) => clean(value).length > 0)
    .map(([key, value]) => `${key}: ${value}`);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadRequest;
    const formType = clean(body.formType);
    const sourcePath = clean(body.sourcePath) || "/";
    const payload = body.payload ?? {};

    const email = clean(payload.email);
    const name = clean(payload.name);
    if (!email || !name || !formLabels[formType]) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || "587");
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.LEADS_FROM_EMAIL || smtpUser || contact.email;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            "Email transport is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const lines = toTextLines(payload);
    const label = formLabels[formType];

    await transporter.sendMail({
      from: `${siteName} Leads <${fromEmail}>`,
      to: contact.email,
      replyTo: email,
      subject: `[Lead] ${label} — ${name}`,
      text: [
        `Form: ${label}`,
        `Source: ${sourcePath}`,
        "",
        ...lines,
        "",
        "This lead was submitted from davinci-properties.com",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send lead" }, { status: 500 });
  }
}
