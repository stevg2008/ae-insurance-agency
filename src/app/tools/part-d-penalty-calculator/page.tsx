import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import PartDPenaltyClient from "./PartDPenaltyClient";

export const metadata: Metadata = {
  title: "Part D Late Enrollment Penalty Calculator | A&E Insurance Agency",
  description: "Calculate your Medicare Part D late enrollment penalty. If you went without creditable drug coverage for 63+ days, you may owe a permanent monthly penalty added to your Part D premium.",
  alternates: { canonical: `${SITE_URL}/tools/part-d-penalty-calculator` },
  openGraph: {
    url: `${SITE_URL}/tools/part-d-penalty-calculator`,
    title: "Part D Late Enrollment Penalty Calculator | A&E Insurance Agency",
    description: "Calculate your Medicare Part D late enrollment penalty for 2026.",
  },
};

export default function PartDPenaltyPage() {
  return <PartDPenaltyClient />;
}
