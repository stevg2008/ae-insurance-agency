"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const STEPS = [
  {
    color: "#DC2626",
    title: "The Risk",
    description:
      'A diagnosis of Cancer, Heart Attack, or Stroke often comes with "hidden costs" — travel for specialists, home modifications, and non-medical bills that continue even when you can\'t work.',
  },
  {
    color: "#E8A020",
    title: "The Exposure",
    description:
      "These expenses can quickly drain a retirement nest egg because they fall outside of traditional medical coverage.",
  },
  {
    color: "#1A72C0",
    title: "The Solution",
    description:
      "We recommend Critical Illness coverage for every client. These plans pay a tax-free cash benefit directly to you, giving you the freedom to focus on healing instead of finances.",
  },
];

export default function MajorExposures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: heading + icon list */}
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-5 leading-tight">
              Closing The Gaps In<br className="hidden md:block" /> Your Coverage
            </h2>
            <p className="text-[#1A72C0] text-sm font-semibold mb-5">
              Original Medicare covers the essentials — but it has gaps that can become costly when it matters most.
            </p>
            <p className="text-[#374151] text-lg mb-8 leading-relaxed">
              Medicare is designed to pay your doctors and hospitals, but it wasn't built to cover the personal financial toll of a major illness.
            </p>
            <ul className="space-y-7">
              {STEPS.map((step) => (
                <li key={step.title} className="flex gap-5 items-start">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: step.color + "18" }}
                  >
                    {/* Simple colored dot */}
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: step.color }} />
                  </div>
                  <div>
                    <p className="font-bold text-base mb-1" style={{ color: step.color }}>
                      {step.title}
                    </p>
                    <p className="text-[#374151] text-base leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Right: image */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/slides/slide-2.jpg"
                alt="A&E Insurance Agency agent consulting with a client"
                className="w-full h-full object-cover"
                style={{ maxHeight: 480 }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
