import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, bestTime, message } = await req.json();

  if (!firstName || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const webhookUrl = process.env.GHL_CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName || "",
        name: `${firstName} ${lastName || ""}`.trim(),
        email: email || "",
        phone,
        best_time: bestTime || "",
        message: message || "",
        source: "Website — Contact Page",
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "GHL error" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
