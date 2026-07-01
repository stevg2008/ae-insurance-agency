import type { Metadata } from "next";
import RetirementClient from "./RetirementClient";

export const metadata: Metadata = {
  title: "Retirement Planning | A&E Insurance Agency",
  description: "Get expert retirement planning guidance from A&E Insurance Agency. We help South Florida families create income strategies, protect assets, and retire with confidence — at no cost to you.",
};

export default function RetirementPage() {
  return <RetirementClient />;
}
