import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import MedicareClient from "./MedicareClient";

export const metadata: Metadata = {
  title: "Medicare Explained: Parts A, B, C & D Guide | A&E Insurance Agency — Miami, FL",
  description:
    "A complete, plain-English Medicare guide covering enrollment timing, Original Medicare Parts A & B, Medicare Supplement vs. Medicare Advantage, and Part D drug coverage. Free guidance from licensed broker Steve Germain — serving South Florida since 2009.",
  alternates: { canonical: `${SITE_URL}/medicare` },
  openGraph: {
    url: `${SITE_URL}/medicare`,
    title: "Medicare Explained: Parts A, B, C & D Guide | A&E Insurance Agency",
    description:
      "Step-by-step Medicare education from a licensed South Florida broker. Enrollment timing, the 20% gap, Supplement vs. Advantage, and Part D — all explained in plain English.",
  },
};

export default function MedicarePage() {
  return <MedicareClient />;
}
