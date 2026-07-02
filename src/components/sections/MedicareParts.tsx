"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function MedicareParts() {
  return (
    <section className="py-20 bg-[#0071BB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#E8A020] mb-3">
            The Essentials of Part A and Part B Explained
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Understanding Your Base Coverage
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Part A */}
          <AnimatedSection delay={0.1} className="text-center">
            <div className="w-24 h-24 mx-auto mb-5 flex items-center justify-center">
              {/* Hospital icon SVG */}
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                <rect x="8" y="24" width="64" height="48" rx="2" stroke="white" strokeWidth="3" fill="none"/>
                <rect x="20" y="8" width="40" height="20" rx="2" stroke="white" strokeWidth="3" fill="none"/>
                <line x1="40" y1="36" x2="40" y2="52" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <line x1="32" y1="44" x2="48" y2="44" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <rect x="28" y="56" width="24" height="16" rx="1" stroke="white" strokeWidth="2.5" fill="none"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Part A (Hospital)</h3>
            <hr className="border-white/20 mb-5 mx-auto w-40" />
            <p className="text-white/70 text-base leading-relaxed">
              Covers inpatient stays. For most, the premium is $0.
            </p>
          </AnimatedSection>

          {/* Part B */}
          <AnimatedSection delay={0.2} className="text-center">
            <div className="w-24 h-24 mx-auto mb-5 flex items-center justify-center">
              {/* Doctor icon SVG */}
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                <circle cx="40" cy="22" r="14" stroke="white" strokeWidth="3" fill="none"/>
                <path d="M16 72c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <circle cx="56" cy="56" r="10" stroke="white" strokeWidth="2.5" fill="none"/>
                <line x1="56" y1="51" x2="56" y2="61" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="51" y1="56" x2="61" y2="56" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Part B (Medical)</h3>
            <hr className="border-white/20 mb-5 mx-auto w-40" />
            <p className="text-white/70 text-base leading-relaxed">
              Covers doctor visits and outpatient care. The standard monthly premium is $202.90 in 2026.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
