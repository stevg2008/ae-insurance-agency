import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import RetirementClient from "./RetirementClient";

export const metadata: Metadata = {
  title: "Retirement Income Planning for South Florida Families | A&E Insurance Agency — Miami, FL",
  description:
    "A complete guide to retirement income planning — Social Security timing, 401(k) strategy, healthcare costs, and legacy planning. Free guidance from licensed retirement specialist Steve Germain, serving South Florida since 2009.",
  alternates: { canonical: `${SITE_URL}/retirement` },
  openGraph: {
    url: `${SITE_URL}/retirement`,
    title: "Retirement Income Planning | A&E Insurance Agency — Miami, FL",
    description:
      "Step-by-step retirement planning guidance from a licensed South Florida specialist. Income strategies, asset protection, Social Security optimization, and legacy planning — all explained in plain English.",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Plan for Retirement: Income, Protection & Legacy",
  description:
    "A step-by-step guide to retirement income planning — from taking stock of your assets to creating guaranteed income, protecting against healthcare costs, and leaving a legacy — by licensed retirement specialist Steve Germain of A&E Insurance Agency.",
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Know What You Have",
      text: "Take inventory of your Social Security benefits, pensions, 401(k)s, IRAs, and all other income sources. Understanding your starting point is the foundation of every retirement plan.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Protect What You've Built",
      text: "Identify and plan for the three biggest risks in retirement: healthcare costs not covered by Medicare, market volatility, and inflation eroding your purchasing power over time.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Create Reliable Income",
      text: "Turn your savings into a paycheck you can count on for life using guaranteed income strategies, the bucket approach, and tax-efficient withdrawal sequencing.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Leave a Legacy",
      text: "Review beneficiary designations, evaluate life insurance in retirement, and put a long-term care plan in place so your assets go to the people and causes you care about.",
    },
  ],
};

export default function RetirementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <RetirementClient />
    </>
  );
}
