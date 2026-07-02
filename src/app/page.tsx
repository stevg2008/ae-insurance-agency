import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
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
    </>
  );
}
