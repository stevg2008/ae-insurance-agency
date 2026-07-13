import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with A&E Insurance Agency. We serve South Florida families navigating Medicare enrollment, plan changes, and retirement planning — at no cost to you.",
  alternates: { canonical: "https://www.aeinsurancefl.com/contact" },
  openGraph: {
    url: "https://www.aeinsurancefl.com/contact",
    title: "Contact A&E Insurance Agency | Medicare Help in Miami, FL",
    description:
      "Reach licensed Medicare broker Steve Germain — licensed in 35 states. 25+ carriers compared, no broker fees.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
