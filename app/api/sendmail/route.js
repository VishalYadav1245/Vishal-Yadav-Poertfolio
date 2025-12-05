import { NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    const response = await emailjs.send(
      "service_lxs4oji",        // ✔ Your Service ID
      "template_f3xwr1e",       // ✔ Your Template ID
      {
        firstName,
        lastName,
        email,
        subject,
        message,
      },
      {
        publicKey: "Ltttaizx70nG01pr2",  // ✔ Your Public Key
      }
    );

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("EmailJS Error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
