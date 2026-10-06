import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = "freddie.ley@icloud.com";
const FROM_EMAIL = "Bluo Website <hello@bluo.co.uk>";

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service is not configured yet." }, { status: 503 });
    }

    const body = await request.json();
    if (clean(body.website_url, 100)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 100);
    const business = clean(body.business, 150);
    const email = clean(body.email, 254);
    const website = clean(body.website, 500);
    const brief = clean(body.brief, 5000);

    if (!name || !business || !email || !brief) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [OWNER_EMAIL],
      replyTo: [email],
      subject: `Website enquiry — ${business}`,
      text: [
        `Name: ${name}`,
        `Business: ${business}`,
        `Email: ${email}`,
        `Current website: ${website || "None"}`,
        "",
        "Project brief:",
        brief,
      ].join("\n"),
      tags: [{ name: "source", value: "website-contact-form" }],
      idempotencyKey: `contact-${crypto.randomUUID()}`,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json({ error: "The enquiry could not be sent. Please email me directly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "The enquiry could not be sent. Please email me directly." }, { status: 500 });
  }
}
