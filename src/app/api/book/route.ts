import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, zip } = await req.json();

  if (!firstName || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const webhookUrl = "https://services.leadconnectorhq.com/hooks/KQ2C7PNRgoxVKqxmCXlN/webhook-trigger/c58f699e-0b40-4893-a619-14b74459f7f4";

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName || "",
        name: `${firstName} ${lastName || ""}`.trim(),
        email,
        phone,
        zip: zip || "",
        source: "Website — Medicare Decoded Book",
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
