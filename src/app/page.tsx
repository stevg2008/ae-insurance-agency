import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, PHONE } from "@/lib/constants";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Independent Medicare Broker South Florida | A&E Insurance",
  description:
    "Compare Medicare plans from 25+ carriers with an independent broker you can trust. Steve Germain, author of Medicare Decoded, serving South Florida since 2013.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: "Get Your Medicare Right the First Time | A&E Insurance Agency",
    description:
      "Compare Medicare plans from 25+ carriers with an independent broker you can trust. Steve Germain, author of Medicare Decoded, serving South Florida since 2013.",
  },
};
import ThreeTruths from "@/components/sections/ThreeTruths";
import FreeBook from "@/components/sections/FreeBook";
import MedicarePlans from "@/components/sections/MedicarePlans";
import MedicareParts from "@/components/sections/MedicareParts";
import MajorExposures from "@/components/sections/MajorExposures";
import GoogleReviews from "@/components/sections/GoogleReviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeTruths />
      <FreeBook />
      <MedicarePlans />
      <MedicareParts />
      <MajorExposures />
      <GoogleReviews />

      {/* ── Bottom CTA ── */}
      <section className="bg-[#1A1A2E] py-20 px-4 text-center">
        <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-4">
          Independent · 25+ Carriers
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 max-w-2xl mx-auto leading-tight">
          Ready to Get Your Medicare Right?
        </h2>
        <p className="text-white/90 text-base mb-8 max-w-xl mx-auto leading-relaxed">
          We'll compare plans from over 25 carriers and find the right fit for your doctors, your budget, and your life — at no cost to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="inline-flex items-center justify-center bg-[#E8A020] hover:bg-[#D4911B] text-[#1A1A2E] font-extrabold uppercase tracking-wide text-base px-10 py-4 rounded-lg transition-colors shadow-lg whitespace-nowrap"
          >
            Call {PHONE}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#1A1A2E] font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors whitespace-nowrap"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
