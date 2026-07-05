import type { Metadata } from "next";
import Link from "next/link";
import { FAQS } from "@/lib/faqs";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Medicare Resources & FAQ",
  description:
    "Free Medicare guides, FAQs, and tools from A&E Insurance Agency. Get plain-English answers to the most common Medicare questions — from costs and coverage to enrollment and supplements.",
  alternates: { canonical: "/resources" },
  openGraph: {
    url: "/resources",
    title: "Free Medicare Resources & FAQ | A&E Insurance Agency",
    description:
      "Plain-English answers to the Medicare questions South Florida families are actually asking.",
  },
};

const CATEGORIES = [
  {
    label: "Getting Started",
    slugs: [
      "what-is-medicare-and-who-is-eligible",
      "what-are-the-different-parts-of-medicare",
      "what-is-medicare-advantage",
      "difference-between-original-medicare-advantage-and-medigap",
      "how-much-does-medicare-cost",
    ],
  },
  {
    label: "Enrollment & Deadlines",
    slugs: [
      "when-should-i-sign-up-for-medicare",
      "what-happens-if-i-miss-my-enrollment-window",
      "can-i-delay-enrolling-in-medicare-part-b",
      "how-does-medicare-work-with-employer-coverage",
      "can-i-change-my-medicare-plan",
      "what-to-expect-from-your-welcome-to-medicare-visit",
    ],
  },
  {
    label: "Coverage & Costs",
    slugs: [
      "does-medicare-cover-all-my-medical-bills",
      "will-medicare-cover-my-procedure",
      "does-medicare-cover-dental",
      "does-medicare-cover-cataract-surgery",
      "how-does-medicare-cover-colonoscopies",
      "does-medicare-cover-travel",
      "what-is-irmaa",
    ],
  },
  {
    label: "Supplement & Drug Plans",
    slugs: [
      "what-is-medigap",
      "what-is-medicare-plan-g",
      "can-i-change-my-supplement-plan-during-annual-enrollment",
      "does-medicare-plan-g-cover-gym-membership",
      "how-does-medicare-cover-insulin",
      "what-is-the-medicare-glp1-bridge-program",
    ],
  },
  {
    label: "Help & Savings Programs",
    slugs: [
      "what-is-a-medicare-savings-program",
      "what-is-extra-help-for-medicare-prescription-drugs",
      "how-does-a-medicare-broker-get-paid",
      "how-do-i-get-help-choosing-the-right-medicare-plan",
      "veterans-and-medicare",
    ],
  },
];

export default function ResourcesPage() {
  const faqBySlug = Object.fromEntries(FAQS.map((f) => [f.slug, f]));

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-[#1A72C0] py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Medicare FAQ
        </h1>
        <p className="text-lg font-semibold text-[#CBD5E1] max-w-2xl mx-auto">
          Get the answers to your most pressing Medicare questions.
        </p>
      </section>

      {/* ── Categorized FAQ sections ── */}
      <section className="py-16 px-4 bg-[#F3F4F6]">
        <div className="max-w-6xl mx-auto space-y-14">
          {CATEGORIES.map((cat) => {
            const faqs = cat.slugs.map((s) => faqBySlug[s]).filter(Boolean);
            if (faqs.length === 0) return null;
            return (
              <div key={cat.label}>
                <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-6 pb-2 border-b-2 border-[#1A72C0]">
                  {cat.label}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {faqs.map((faq) => (
                    <div
                      key={faq.slug}
                      className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-6 flex flex-col hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-bold text-[#1A1A2E] mb-3 leading-snug">
                        {faq.title}
                      </h3>
                      <p className="text-[#6B7280] text-sm leading-relaxed flex-1 mb-4">
                        {faq.excerpt}
                      </p>
                      <Link
                        href={`/resources/faq/${faq.slug}`}
                        className="inline-flex items-center gap-1 text-[#1A72C0] font-semibold text-sm hover:underline"
                      >
                        Read More <ChevronRight size={16} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
