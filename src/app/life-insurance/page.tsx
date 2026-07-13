import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import LifeInsuranceClient from "./LifeInsuranceClient";

export const metadata: Metadata = {
  title: "Life Insurance & Annuities for South Florida Families | A&E Insurance Agency — Miami, FL",
  description:
    "Life insurance and annuities guide — Term, Whole, Universal, IUL, Final Expense, and retirement annuities explained by licensed specialist Steve Germain. Free quotes. Serving South Florida since 2009.",
  alternates: { canonical: `${SITE_URL}/life-insurance` },
  openGraph: {
    url: `${SITE_URL}/life-insurance`,
    title: "Life Insurance & Annuities | A&E Insurance Agency — Miami, FL",
    description:
      "Term, Whole, Universal, IUL, Final Expense, and Annuities — explained by licensed specialist Steve Germain. Free quotes, no broker fees.",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Life Insurance & Annuity Products — A&E Insurance Agency",
  description:
    "A guide to the six main life insurance and annuity products available through A&E Insurance Agency, explained by licensed specialist Steve Germain.",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Term Life Insurance",
      description:
        "Affordable coverage for a specific term — typically 10, 20, or 30 years. Best for income replacement, mortgage protection, and family security.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Whole Life Insurance",
      description:
        "Lifelong coverage with guaranteed premiums and guaranteed cash value growth. The most straightforward permanent life insurance option.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Universal Life Insurance",
      description:
        "Permanent life insurance with flexible premiums and death benefit. Builds cash value tied to current interest rates.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Indexed Universal Life (IUL)",
      description:
        "Permanent protection with cash value growth linked to a market index like the S&P 500. Includes a floor to protect against market losses.",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Final Expense Insurance",
      description:
        "Smaller coverage amounts designed to cover funeral, burial, and end-of-life costs. No medical exam required; easy to qualify for.",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Annuities",
      description:
        "Retirement income products that grow tax-deferred and can provide guaranteed income for life. Protects principal from market losses.",
    },
  ],
};

export default function LifeInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <LifeInsuranceClient />
    </>
  );
}
