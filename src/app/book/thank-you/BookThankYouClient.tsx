"use client";

import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function BookThankYouClient() {
  useEffect(() => {
    // Fire conversion event if pixel is present
    const w = window as Window & { fbq?: (event: string, name: string) => void };
    if (w.fbq) {
      w.fbq("track", "Lead");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={64} className="text-green-500" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-4">
          Your guide is on its way!
        </h1>
        <p className="text-[#4B5563] text-base leading-relaxed mb-8">
          Check your inbox — we just sent you a link to download <strong>Medicare Decoded</strong>. While you wait, you can grab your copy below.
        </p>

        {/* Download CTA */}
        <a
          href="https://assets.cdn.filesafe.space/KQ2C7PNRgoxVKqxmCXlN/media/69964f3ff02fa42d366984e9.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#E8A020] hover:bg-[#D4911B] text-[#1A1A2E] font-extrabold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors mb-4 w-full max-w-sm"
        >
          Download Medicare Decoded Now
        </a>

        {/* Divider */}
        <div className="my-8 border-t border-[#E5E7EB]" />

        {/* Consultation CTA */}
        <p className="text-[#4B5563] text-sm mb-4">
          Have questions after reading? Talk to Steve directly — no pressure, no sales pitch.
        </p>
        <a
          href="https://link.aeinsurancefl.com/widget/booking/gnH26nD1h46Zd5rO88gz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#1A1A2E] hover:bg-[#2d2d4e] text-white font-extrabold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors w-full max-w-sm"
        >
          Book a Free Consultation
        </a>

        {/* Back link */}
        <div className="mt-10">
          <Link href="/" className="text-[#1A72C0] text-sm hover:underline">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
