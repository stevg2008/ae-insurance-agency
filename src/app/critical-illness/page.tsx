import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import CriticalIllnessClient from "./CriticalIllnessClient";

export const metadata: Metadata = {
  title: "Critical Illness Insurance & Medicare Gap Coverage | A&E Insurance Agency — Miami, FL",
  description:
    "The 3 biggest gaps Medicare doesn't cover — the 20% exposure, long-term care costs, and critical illness expenses — explained by licensed specialist Steve Germain. Free coverage review. Serving South Florida since 2013.",
  alternates: { canonical: `${SITE_URL}/critical-illness` },
  openGraph: {
    url: `${SITE_URL}/critical-illness`,
    title: "Critical Illness Insurance & Medicare Gap Coverage | A&E Insurance Agency",
    description:
      "Medicare doesn't cover everything. Learn about the 3 biggest financial gaps — the 20% exposure, long-term care, and critical illness — and how to protect yourself.",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The 3 Gaps Medicare Doesn't Close — A&E Insurance Agency",
  description:
    "A guide to the three biggest financial exposures not covered by Medicare — the 20% cost-sharing gap, long-term care costs, and critical illness expenses — by licensed specialist Steve Germain.",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "The 20% Exposure",
      description:
        "Original Medicare covers 80% of approved costs, leaving beneficiaries responsible for 20% with no out-of-pocket maximum. A Medicare Supplement or Advantage plan closes this gap.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "The Long-Term Care Exposure",
      description:
        "Medicare covers only short-term skilled nursing care. Extended nursing home, assisted living, or in-home care — averaging over $100,000/year — is not covered.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "The Critical Illness Exposure",
      description:
        "A cancer, heart attack, or stroke diagnosis brings hidden costs Medicare never covers — lost income, travel for specialist care, home modifications, and daily living expenses. A critical illness plan pays a tax-free lump sum directly to you.",
    },
  ],
};

export default function CriticalIllnessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <CriticalIllnessClient />
    </>
  );
}
