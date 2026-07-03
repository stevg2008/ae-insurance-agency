import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, PHONE } from "@/lib/constants";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "A&E Insurance Agency | Medicare & Retirement Planning — Miami, FL",
  description:
    "South Florida's trusted independent Medicare insurance agency. We help Miami families choose the right Medicare plan — at no cost to you. No fees, no bias, same price.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: "A&E Insurance Agency | Medicare & Retirement Planning — Miami, FL",
    description:
      "South Florida's trusted independent Medicare insurance agency. We help Miami families choose the right Medicare plan — at no cost to you.",
  },
};
import ThreeTruths from "@/components/sections/ThreeTruths";
import FreeBook from "@/components/sections/FreeBook";
import MedicarePlans from "@/components/sections/MedicarePlans";
import MedicareParts from "@/components/sections/MedicareParts";
import MajorExposures from "@/components/sections/MajorExposures";
import GoogleReviews from "@/components/sections/GoogleReviews";
const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InsuranceAgency"],
  name: "A&E Insurance Agency",
  description:
    "South Florida's trusted independent Medicare insurance agency. We help Miami families choose the right Medicare Supplement, Medicare Advantage, and Prescription Drug Plans at no cost.",
  url: "https://www.aeinsurancefl.com",
  telephone: "+19542815622",
  email: "info@aeinsurancefl.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12855 SW 136th Avenue, Suite 105",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33186",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 25.6388, longitude: -80.4316 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "126",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/AEinsuranceFL/",
    "https://www.instagram.com/aeinsurancefl/",
    "https://www.youtube.com/@AEInsuranceFL",
    "https://www.tiktok.com/@aeinsuranceagency",
  ],
  founder: { "@type": "Person", name: "Steve Germain" },
  foundingDate: "2009",
  priceRange: "Free",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
          No Cost. No Pressure. No Obligation.
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
