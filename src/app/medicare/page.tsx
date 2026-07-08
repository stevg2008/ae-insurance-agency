import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import MedicareClient from "./MedicareClient";

export const metadata: Metadata = {
  title: "Medicare Explained: Parts A, B, C & D Guide | A&E Insurance Agency — Miami, FL",
  description:
    "A complete Medicare guide covering enrollment timing, Original Medicare Parts A & B, Medicare Supplement vs. Medicare Advantage, and Part D drug coverage. Free guidance from licensed broker Steve Germain — serving South Florida since 2009.",
  alternates: { canonical: `${SITE_URL}/medicare` },
  openGraph: {
    url: `${SITE_URL}/medicare`,
    title: "Medicare Explained: Parts A, B, C & D Guide | A&E Insurance Agency",
    description:
      "Step-by-step Medicare education from a licensed South Florida broker. Enrollment timing, the 20% gap, Supplement vs. Advantage, and Part D — written by Steve Germain, author of Medicare Decoded.",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Medicare Works: Parts A, B, C & D Explained",
  description:
    "A step-by-step guide to understanding Medicare — from enrollment timing to plan selection — by licensed broker Steve Germain of A&E Insurance Agency.",
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Understand Medicare Enrollment Timing",
      text: "Learn about the 7-month Initial Enrollment Period starting 3 months before your 65th birthday, and the consequences of missing it.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Learn Original Medicare: Parts A & B",
      text: "Understand what Part A (hospital) and Part B (medical) cover, their costs, and the 20% coverage gap that makes supplemental insurance essential.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Choose Between Medicare Supplement and Medicare Advantage",
      text: "Compare the two main options for closing the 20% coverage gap and select the path that fits your doctors, budget, and health needs.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Add Medicare Part D Prescription Drug Coverage",
      text: "Select a Part D drug plan to cover prescription medications, either as a standalone plan or bundled within a Medicare Advantage plan.",
    },
  ],
};

export default function MedicarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <MedicareClient />
    </>
  );
}
