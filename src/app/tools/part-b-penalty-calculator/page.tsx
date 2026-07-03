import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import PartBPenaltyClient from "./PartBPenaltyClient";

export const metadata: Metadata = {
  title: "Part B Late Enrollment Penalty Calculator | A&E Insurance Agency",
  description: "Calculate your Medicare Part B late enrollment penalty. Enter the number of months you went without creditable coverage to see your estimated monthly penalty for 2026.",
  alternates: { canonical: `${SITE_URL}/tools/part-b-penalty-calculator` },
  openGraph: {
    url: `${SITE_URL}/tools/part-b-penalty-calculator`,
    title: "Part B Late Enrollment Penalty Calculator | A&E Insurance Agency",
    description: "Calculate your Medicare Part B late enrollment penalty for 2026.",
  },
};

export default function PartBPenaltyPage() {
  return <PartBPenaltyClient />;
}
