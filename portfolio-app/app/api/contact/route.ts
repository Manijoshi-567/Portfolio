import { NextResponse } from "next/server";

// Server-side recipient email - completely hidden from client bundles & browser network tab
const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || "alokammanijoshi@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, _hp } = body;

    // 1. Honeypot bot protection: if hidden field is filled, silently ignore
    if (_hp) {
      return NextResponse.json({ success: true, message: "Message sent." });
    }

    // 2. Strict Input Validation
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name (up to 100 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim()) || email.length > 150) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5 || message.length > 5000) {
      return NextResponse.json(
        { success: false, message: "Message must be between 5 and 5000 characters." },
        { status: 400 }
      );
    }

    // 3. Server-side forward to FormSubmit
    const forwardPayload = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      _subject: `New Portfolio Inquiry from ${name.trim()}`,
      _template: "table",
      _captcha: "false",
    };

    const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(forwardPayload),
    });

    const data = await response.json();

    if (data.success === "true" || data.success === true) {
      return NextResponse.json({
        success: true,
        message: "Your message has been received! I will reply to your email shortly.",
      });
    }

    if (data.message && typeof data.message === "string" && data.message.includes("Activation")) {
      return NextResponse.json({
        success: false,
        message: "One-time setup pending: Please check your inbox and click 'Activate Form' to enable incoming submissions.",
      });
    }

    return NextResponse.json({
      success: false,
      message: data.message || "Failed to process message.",
    });
  } catch (err) {
    console.error("Contact API route error:", err);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred while processing your message." },
      { status: 500 }
    );
  }
}
