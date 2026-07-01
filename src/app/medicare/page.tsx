import type { Metadata } from "next";
import MedicareClient from "./MedicareClient";

export const metadata: Metadata = {
  title: "Medicare Guide & Enrollment Help | A&E Insurance Agency",
  description: "Get a clear, step-by-step Medicare guide from licensed broker Steve Germain. Learn about Parts A & B, Medicare Supplement, Medicare Advantage, and Part D — at no cost to you.",
};

export default function MedicarePage() {
  return <MedicareClient />;
}
