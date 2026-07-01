import type { Metadata } from "next";
import LifeInsuranceClient from "./LifeInsuranceClient";

export const metadata: Metadata = {
  title: "Life Insurance & Retirement Solutions | A&E Insurance Agency",
  description: "Protect your family's future with the right life insurance. Term, Whole, Universal, IUL, Final Expense, and Annuities — explained in plain English by licensed broker Steve Germain.",
};

export default function LifeInsurancePage() {
  return <LifeInsuranceClient />;
}
