import type { Metadata } from "next";
import SteveBioClient from "./SteveBioClient";

export const metadata: Metadata = {
  title: "Steve Germain — Founder & Licensed Medicare Broker | A&E Insurance Agency",
  description: "Meet Steve Germain, founder of A&E Insurance Agency and author of Medicare Decoded. Over 10 years helping South Florida families navigate Medicare with clarity and confidence.",
  alternates: { canonical: "https://www.aeinsurancefl.com/about/steve" },
};

export default function StevePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: { "@id": "https://www.aeinsurancefl.com/#steve-germain" },
            name: "Steve Germain — Licensed Medicare Broker & Agency Founder",
            description:
              "Profile page for Steve Germain, founder of A&E Insurance Agency and author of Medicare Decoded. Licensed Medicare insurance broker serving South Florida since 2009.",
            url: "https://www.aeinsurancefl.com/about/steve",
          }),
        }}
      />
      <SteveBioClient />
    </>
  );
}
