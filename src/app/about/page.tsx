import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Our Team",
  description:
    "Meet Steve Germain and the A&E Insurance Agency team. Licensed Medicare brokers serving South Florida families with honest, personalized guidance — at no cost to you.",
  alternates: { canonical: "https://www.aeinsurancefl.com/about" },
  openGraph: {
    url: "https://www.aeinsurancefl.com/about",
    title: "Meet Our Team | A&E Insurance Agency",
    description:
      "Licensed Medicare brokers serving South Florida. Steve Germain has helped families since 2013. 25+ carriers compared. Same price as going direct.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
