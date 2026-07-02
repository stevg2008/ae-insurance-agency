"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { WEBINAR_URL, WEBINAR_LABEL_SHORT } from "@/lib/constants";

const TRUTHS = [
  {
    number: "1",
    title: "No Fees",
    description:
      "We never charge you a fee of any kind for our education or enrollment services.",
  },
  {
    number: "2",
    title: "Same Price",
    description:
      "You pay the exact same price for your insurance whether you use our expert help or go it alone.",
  },
  {
    number: "3",
    title: "No Bias",
    description:
      "We work with over 25 top-rated companies. We don't work for them — we work for you.",
  },
];

export default function ThreeTruths() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-xs font-bold uppercase tracking-widest text-[#0071BB] mb-3">
            Our Commitment to Your Peace of Mind
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-12">
            Our Three Truths: Total Transparency For You
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TRUTHS.map((truth, i) => (
            <AnimatedSection key={truth.number} delay={i * 0.1}>
              <div className="bg-[#F3F4F6] rounded-xl p-8 h-full text-left">
                <div className="w-12 h-12 rounded-full bg-[#E8A020] flex items-center justify-center mb-5">
                  <span className="text-white font-extrabold text-lg">{truth.number}</span>
                </div>
                <h3 className="text-base font-extrabold text-[#1A1A2E] uppercase tracking-wide mb-3">
                  {truth.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{truth.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
