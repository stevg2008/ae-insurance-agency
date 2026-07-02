import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone, months } = await req.json();

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/KQ2C7PNRgoxVKqxmCXlN/webhook-trigger/5790f9cf-800a-4f28-80eb-0de2fe05ff53";

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        first_name: name.split(" ")[0] || name,
        last_name: name.split(" ").slice(1).join(" ") || "",
        email,
        phone,
        months_until_65: months || "",
        source: "Website — Medicare Made Simple Webinar",
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
