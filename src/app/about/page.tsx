import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Our Team",
  description:
    "Meet Steve Germain and the A&E Insurance Agency team. Licensed Medicare brokers serving South Florida families with honest, personalized guidance — at no cost to you.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "Meet Our Team | A&E Insurance Agency",
    description:
      "Licensed Medicare brokers serving South Florida. Honest guidance, no pressure, no cost to you.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
