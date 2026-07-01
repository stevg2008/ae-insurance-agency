import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "A&E Insurance Agency | Medicare & Retirement Planning — Miami, FL",
  description:
    "South Florida's trusted independent Medicare insurance agency. We help Miami families choose the right Medicare plan — at no cost to you. No fees, no bias, same price.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: "A&E Insurance Agency | Medicare & Retirement Planning — Miami, FL",
    description:
      "South Florida's trusted independent Medicare insurance agency. We help Miami families choose the right Medicare plan — at no cost to you.",
  },
};
import ThreeTruths from "@/components/sections/ThreeTruths";
import FreeBook from "@/components/sections/FreeBook";
import MedicarePlans from "@/components/sections/MedicarePlans";
import MedicareParts from "@/components/sections/MedicareParts";
import MajorExposures from "@/components/sections/MajorExposures";
import GoogleReviews from "@/components/sections/GoogleReviews";
export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeTruths />
      <FreeBook />
      <MedicarePlans />
      <MedicareParts />
      <MajorExposures />
      <GoogleReviews />
    </>
  );
}
