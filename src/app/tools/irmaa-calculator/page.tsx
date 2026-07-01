import type { Metadata } from "next";
import IrmaaClient from "./IrmaaClient";

export const metadata: Metadata = {
  title: "2026 IRMAA Calculator | Medicare Income Surcharge | A&E Insurance Agency",
  description: "Calculate your 2026 Medicare IRMAA surcharge. High-income beneficiaries pay more for Part B and Part D. Enter your filing status and income bracket to see your total monthly Medicare premium.",
};

export default function IrmaaPage() {
  return <IrmaaClient />;
}
