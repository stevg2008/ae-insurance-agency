import { SITE_URL, COMPANY_NAME, PHONE, EMAIL, SOCIAL } from "@/lib/constants";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ── InsuranceAgency + LocalBusiness ─────────────────────────────
      {
        "@type": ["InsuranceAgency", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY_NAME,
        alternateName: "A&E Insurance",
        description:
          "Independent Medicare insurance broker serving Miami, South Florida, and 35+ states since 2009. Steve Germain helps individuals turning 65 choose the right Medicare plan — Advantage, Supplement (Medigap), and Part D — at no cost, no pressure, same price as going direct.",
        url: SITE_URL,
        telephone: PHONE,
        email: EMAIL,
        foundingDate: "2009",
        address: {
          "@type": "PostalAddress",
          streetAddress: "12855 SW 136th Avenue, Suite 105",
          addressLocality: "Miami",
          addressRegion: "FL",
          postalCode: "33186",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.6437,
          longitude: -80.4418,
        },
        hasMap: "https://maps.google.com/maps?cid=15178142734129409106",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
          },
        ],
        priceRange: "Free",
        areaServed: [
          { "@type": "City", name: "Miami", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Kendall", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Doral", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Coral Gables", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Hialeah", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Hollywood", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Fort Lauderdale", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Homestead", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Cutler Bay", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Miami Beach", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "North Miami", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "South Miami", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Pinecrest", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Palmetto Bay", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Miami Gardens", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Pompano Beach", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "State", name: "Florida" },
          { "@type": "State", name: "Texas" },
          { "@type": "State", name: "Georgia" },
          { "@type": "State", name: "North Carolina" },
          { "@type": "State", name: "Tennessee" },
          { "@type": "State", name: "Arizona" },
          { "@type": "State", name: "Virginia" },
          { "@type": "State", name: "Pennsylvania" },
          { "@type": "State", name: "Ohio" },
          { "@type": "State", name: "Illinois" },
          { "@type": "State", name: "New York" },
          { "@type": "State", name: "New Jersey" },
          { "@type": "State", name: "California" },
          { "@type": "State", name: "Colorado" },
          { "@type": "State", name: "Nevada" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "126",
          bestRating: "5",
          worstRating: "1",
        },
        founder: { "@id": `${SITE_URL}/#steve-germain` },
        employee: { "@id": `${SITE_URL}/#steve-germain` },
        sameAs: [
          SOCIAL.facebook,
          SOCIAL.instagram,
          SOCIAL.youtube,
          SOCIAL.tiktok,
          "https://www.linkedin.com/company/a-e-insurance-agency-llc/",
          "https://maps.google.com/maps?cid=15178142734129409106",
        ],
        knowsAbout: [
          "Medicare Part A",
          "Medicare Part B",
          "Medicare Part C — Medicare Advantage",
          "Medicare Part D — Prescription Drug Plans",
          "Medicare Supplement Insurance (Medigap)",
          "Medigap Plan G",
          "Medigap Plan N",
          "Medicare Advantage HMO",
          "Medicare Advantage PPO",
          "Special Enrollment Periods",
          "Initial Enrollment Period",
          "Annual Enrollment Period",
          "IRMAA",
          "Late Enrollment Penalty",
          "Medicare Savings Programs",
          "Extra Help for Part D",
          "Critical Illness Insurance",
          "Term Life Insurance",
          "Whole Life Insurance",
          "Retirement Income Planning",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Medicare & Insurance Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Medicare Plan Comparison & Enrollment",
                description:
                  "Free, unbiased comparison of Medicare Advantage, Medigap, and Part D plans from 25+ top-rated carriers.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Medicare Supplement (Medigap) Consulting",
                description:
                  "Expert guidance on Medigap Plan G, Plan N, and other supplement options in Florida and nationwide.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Life Insurance",
                description:
                  "Term, whole, and permanent life insurance planning for individuals and families in South Florida.",
              },
            },
          ],
        },
      },

      // ── Person: Steve Germain (E-E-A-T + AEO) ──────────────────────
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#steve-germain`,
        name: "Steve Germain",
        givenName: "Steve",
        familyName: "Germain",
        jobTitle: "Licensed Medicare Insurance Broker & Agency Owner",
        description:
          "Steve Germain is the founder of A&E Insurance Agency and author of 'Medicare Decoded.' A licensed Medicare broker serving South Florida since 2009, Steve is licensed in 35+ states and has helped hundreds of families navigate Medicare Advantage, Medigap, and Part D. Known for his concierge-style, no-pressure approach and bilingual service in English and Spanish.",
        url: `${SITE_URL}/about/steve`,
        image: `${SITE_URL}/team/steve.jpg`,
        worksFor: { "@id": `${SITE_URL}/#organization` },
        knowsLanguage: ["English", "Spanish"],
        knowsAbout: [
          "Medicare Insurance",
          "Medicare Advantage Plans",
          "Medicare Supplement Insurance",
          "Medigap",
          "Medicare Part D",
          "Retirement Planning",
          "Life Insurance",
          "Critical Illness Insurance",
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Licensed Insurance Broker",
          recognizedBy: {
            "@type": "Organization",
            name: "Florida Department of Financial Services",
          },
        },
        sameAs: [
          SOCIAL.facebook,
          SOCIAL.instagram,
          SOCIAL.youtube,
          SOCIAL.tiktok,
          "https://www.linkedin.com/company/a-e-insurance-agency-llc/",
        ],
      },

      // ── WebSite with SearchAction (AEO: sitelinks search box) ───────
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: COMPANY_NAME,
        description:
          "Medicare broker serving Miami, South Florida, and 35 states. Free consultations. No fees. No bias. Same price as going direct.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["en-US", "es"],
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/blogs?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
