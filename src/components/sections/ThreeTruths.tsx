"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const TRUTHS = [
  {
    title: "You Pay Nothing for Our Help.",
    description:
      "We never charge you a fee of any kind for our education or enrollment services.",
  },
  {
    title: "Your Premium Is the Same Whether You Use Us or Not.",
    description:
      "You pay the exact same price for your insurance whether you use our expert help or go it alone.",
  },
  {
    title: "We Recommend What's Best for You — Not What Pays Us More.",
    description:
      "We work with over 25 top-rated carriers. We don't work for them — we work for you.",
  },
];

export default function ThreeTruths() {
  return (
    <section className="py-20 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1558A0] mb-3">
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
                <p className="text-[#4B5563] text-base leading-relaxed">{truth.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
