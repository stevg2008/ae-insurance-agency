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

export default function ResourcesPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-[#0071BB] py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Medicare FAQ
        </h1>
        <p className="text-lg font-semibold text-[#CBD5E1] max-w-2xl mx-auto">
          Get the answers to your most pressing Medicare questions.
        </p>
      </section>

      {/* ── FAQ Grid ── */}
      <section className="py-16 px-4 bg-[#F3F4F6]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FAQS.map((faq) => (
              <div
                key={faq.slug}
                className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-6 flex flex-col hover:shadow-md transition-shadow"
              >
                <h2 className="text-lg font-bold text-[#1A1A2E] mb-3 leading-snug">
                  {faq.title}
                </h2>
                <p className="text-[#6B7280] text-sm leading-relaxed flex-1 mb-4">
                  {faq.excerpt}
                </p>
                <Link
                  href={`/resources/faq/${faq.slug}`}
                  className="inline-flex items-center gap-1 text-[#0071BB] font-semibold text-sm hover:underline"
                >
                  Read More <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
