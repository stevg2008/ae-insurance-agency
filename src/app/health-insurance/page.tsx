import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import HealthInsuranceClient from "./HealthInsuranceClient";

export const metadata: Metadata = {
  title: "Health Insurance Broker Miami, FL | Individual, Family & Private Plans | A&E Insurance Agency",
  description:
    "Independent health insurance broker serving Miami and South Florida. We compare Individual & Family, ACA Marketplace, private health insurance, and self-employed plans from top carriers. Free quotes. Call (954) 281-5622.",
  alternates: { canonical: `${SITE_URL}/health-insurance` },
  openGraph: {
    url: `${SITE_URL}/health-insurance`,
    title: "Health Insurance Broker Miami, FL | A&E Insurance Agency",
    description:
      "Compare Individual, Family, ACA Marketplace, and private health insurance plans in South Florida. Licensed independent broker — same price as going direct.",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Health Insurance Plans — A&E Insurance Agency Miami",
  description:
    "A guide to the four main health insurance options available through A&E Insurance Agency, an independent broker serving Miami and South Florida.",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Individual & Family Health Insurance",
      description:
        "Comprehensive major medical coverage for individuals and families who don't have access to employer-sponsored insurance. Covers doctor visits, hospital stays, prescriptions, and preventive care.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "ACA / Marketplace Health Insurance",
      description:
        "Federally regulated health plans available through the Affordable Care Act Marketplace. May qualify for subsidies that significantly reduce monthly premiums based on income.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Private Health Insurance",
      description:
        "Off-marketplace health plans purchased directly from insurance carriers. Often offer broader networks, faster access to care, and more plan flexibility than ACA plans.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Self-Employed & Small Business Health Insurance",
      description:
        "Health coverage options designed for freelancers, contractors, 1099 workers, and small business owners who need to secure their own coverage.",
    },
  ],
};

export default function HealthInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <HealthInsuranceClient />
    </>
  );
}
