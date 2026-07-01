import type { Metadata } from "next";
import SteveBioClient from "./SteveBioClient";

export const metadata: Metadata = {
  title: "Steve Germain — Founder & Licensed Medicare Broker | A&E Insurance Agency",
  description: "Meet Steve Germain, founder of A&E Insurance Agency and author of Medicare Decoded. Over 10 years helping South Florida families navigate Medicare with clarity and confidence.",
};

export default function StevePage() {
  return <SteveBioClient />;
}
