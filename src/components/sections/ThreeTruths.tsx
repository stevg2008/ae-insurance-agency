"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const TRUTHS = [
  {
    title: "No Fees. Ever.",
    description:
      "We never charge you a fee of any kind for our education or enrollment services.",
  },
  {
    title: "Same Price as Going Alone.",
    description:
      "You pay the exact same price for your insurance whether you use our expert help or go it alone.",
  },
  {
    title: "We Work for You — Not the Carriers.",
    description:
      "We work with over 25 top-rated companies. We don't work for them — we work for you.",
  },
];

export default function ThreeTruths() {
  return (
    <section className="py-20 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1A72C0] mb-3">
            Our Commitment to You
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E]">
            Total Transparency. No Exceptions.
          </h2>
        </AnimatedSection>

        <div className="divide-y divide-[#E5E7EB]">
          {TRUTHS.map((truth, i) => (
            <AnimatedSection key={truth.title} delay={i * 0.1}>
              <div className="py-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10">
                <h3 className="text-lg font-extrabold text-[#1A1A2E] sm:w-72 shrink-0">
                  {truth.title}
                </h3>
                <p className="text-[#6B7280] text-base leading-relaxed">{truth.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
