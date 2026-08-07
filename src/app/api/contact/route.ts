import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Free tier uses this sender
      to: ["jehanusama3@gmail.com"],                     // ← Your email
      replyTo: email,                                    // Reply goes directly to the sender
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #1a1a1a; margin-bottom: 4px;">New Portfolio Message</h2>
          <p style="color: #666; font-size: 14px; margin-bottom: 24px;">Someone reached out via your portfolio contact form.</p>

          <div style="background: #fff; border-radius: 8px; padding: 20px; margin-bottom: 16px; border-left: 4px solid #2b5748;">
            <p style="margin: 0 0 8px; font-size: 13px; color: #999; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
            <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1a1a1a;">${name}</p>
          </div>

          <div style="background: #fff; border-radius: 8px; padding: 20px; margin-bottom: 16px; border-left: 4px solid #2b5748;">
            <p style="margin: 0 0 8px; font-size: 13px; color: #999; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
            <a href="mailto:${email}" style="margin: 0; font-size: 16px; font-weight: 600; color: #2b5748; text-decoration: none;">${email}</a>
          </div>

          <div style="background: #fff; border-radius: 8px; padding: 20px; border-left: 4px solid #2b5748;">
            <p style="margin: 0 0 8px; font-size: 13px; color: #999; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
            <p style="margin: 0; font-size: 15px; color: #1a1a1a; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #aaa; text-align: center;">
            Sent via your portfolio at jehanusama.dev
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
