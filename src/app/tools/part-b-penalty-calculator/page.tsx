import type { Metadata } from "next";
import PartBPenaltyClient from "./PartBPenaltyClient";

export const metadata: Metadata = {
  title: "Part B Late Enrollment Penalty Calculator | A&E Insurance Agency",
  description: "Calculate your Medicare Part B late enrollment penalty. Enter the number of months you went without creditable coverage to see your estimated monthly penalty for 2026.",
};

export default function PartBPenaltyPage() {
  return <PartBPenaltyClient />;
}
