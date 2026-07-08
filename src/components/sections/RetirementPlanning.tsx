"use client";

import { TrendingUp, Calculator, Heart } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

// EDIT: Update retirement pillars as needed
const PILLARS = [
  {
    icon: TrendingUp,
    title: "Income Stability",
    description: "Guaranteed income streams that last your lifetime",
  },
  {
    icon: Calculator,
    title: "Tax Strategy",
    description: "Minimize taxes on Social Security and retirement distributions",
  },
  {
    icon: Heart,
    title: "Healthcare Integration",
    description: "Coordinate Medicare with your retirement income plan",
  },
];

export default function RetirementPlanning() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Retirement Planning"
          heading="Retirement Planning Built Around You"
          centered={false}
        />
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: 60% */}
          <div className="w-full lg:w-3/5 space-y-6">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <AnimatedSection key={pillar.title} delay={i * 0.1}>
                  <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-[#F8F9FC] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF5FF] flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[#1A72C0]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">{pillar.title}</h3>
                      <p className="text-[#6B7280]">{pillar.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}

            {/* Callout stat */}
            <AnimatedSection delay={0.35}>
              <div className="mt-4 p-6 bg-[#1A72C0] rounded-2xl text-white">
                <p className="text-4xl font-bold text-[#E8A020] mb-1">South Florida&apos;s Trusted Agency</p>
                <p className="text-blue-100">Helping Miami families build retirement clarity for over a decade</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: 40% */}
          <AnimatedSection delay={0.2} className="w-full lg:w-2/5">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/Steve and Mr Heinrich.JPG"
                alt="Steve Germain meeting with a client to discuss retirement planning — A&E Insurance Agency"
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
