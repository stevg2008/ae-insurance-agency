import type { Metadata } from "next";
import CriticalIllnessClient from "./CriticalIllnessClient";

export const metadata: Metadata = {
  title: "Critical Illness & Major Exposures | A&E Insurance Agency",
  description: "Medicare doesn't cover everything. Learn about the 3 biggest gaps — and how a simple, affordable critical illness plan can protect your family from financial devastation.",
};

export default function CriticalIllnessPage() {
  return <CriticalIllnessClient />;
}
