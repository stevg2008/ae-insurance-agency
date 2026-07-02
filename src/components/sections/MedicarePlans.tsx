"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { WEBINAR_URL, WEBINAR_LABEL_SHORT } from "@/lib/constants";

export default function MedicarePlans() {
  return (
    <section id="medicare-plans" className="py-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0071BB] mb-3">
            Finding the Right Fit for Your Healthcare Needs
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E]">
            Medicare Supplement Vs Medicare Advantage
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Medicare Supplement — white card */}
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-xl p-8 h-full shadow-sm">
              <div className="flex gap-4 mb-5">
                {/* simple icons as text/emoji stand-ins */}
                <span className="text-2xl">🏥</span>
                <span className="text-2xl">💲</span>
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-5">Medicare Supplement</h3>
              <ul className="space-y-3 text-sm text-[#4B5563]">
                <li><span className="font-bold text-[#1A1A2E]">Freedom:</span> See any doctor in the USA that accepts Medicare.</li>
                <li><span className="font-bold text-[#1A1A2E]">Predictability:</span> The lowest out-of-pocket costs when seeing doctors.</li>
                <li><span className="font-bold text-[#1A1A2E]">Simplicity:</span> No referrals needed to see a specialist.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Medicare Advantage — dark navy card */}
          <AnimatedSection delay={0.2}>
            <div className="bg-[#0071BB] rounded-xl p-8 h-full">
              <div className="flex gap-4 mb-5">
                <span className="text-2xl">🏥</span>
                <span className="text-2xl">💲</span>
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-5">Medicare Advantage</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li><span className="font-bold text-white">Value:</span> Plans as low as $0 monthly premium.</li>
                <li><span className="font-bold text-white">Extras:</span> May include dental, vision, gym, and OTC benefits.</li>
                <li><span className="font-bold text-white">All-in-One:</span> Typically includes Part D prescription coverage.</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="text-center" delay={0.3}>
          <a
            href={WEBINAR_URL}
            className="inline-block bg-[#0071BB] hover:bg-[#155fa0] text-white font-bold uppercase tracking-wide text-sm px-8 py-3.5 rounded transition-colors"
          >
            {WEBINAR_LABEL_SHORT}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
