"use client";

import Script from "next/script";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function GoogleReviews() {
  return (
    <section className="py-20 bg-[#1A72C0]">
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            What South Florida Families Are Saying
          </h2>
        </AnimatedSection>
        <div className="elfsight-app-ccce4a10-d499-45b6-a309-ce72ab2fb977" data-elfsight-app-lazy />
      </div>
    </section>
  );
}
