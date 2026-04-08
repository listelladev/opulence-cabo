import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, experience, message } =
      await request.json();

    const { data, error } = await resend.emails.send({
      from: "Opulence Cabo <notifications@opulencecabo.com>",
      to: ["design@listella.co"],
      replyTo: email,
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #222;">
          <h2 style="margin: 0 0 20px; font-size: 20px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px;">Name</td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${
              phone
                ? `<tr>
              <td style="padding: 8px 0; color: #666;">Phone</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>`
                : ""
            }
            ${
              experience
                ? `<tr>
              <td style="padding: 8px 0; color: #666;">Inquiry Type</td>
              <td style="padding: 8px 0;">${experience}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
