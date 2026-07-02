"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BookModal from "@/components/BookModal";
import { PHONE } from "@/lib/constants";

export default function FreeBook() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <BookModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left: text + CTAs */}
            <AnimatedSection>
              <span className="inline-block bg-[#DBEAFE] text-[#0071BB] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                Free Resource
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] leading-tight mb-4">
                Get Your Free Copy of<br />
                <span className="text-[#0071BB]">Medicare Decoded</span>
              </h2>
              <p className="text-[#4B5563] text-lg leading-relaxed mb-8">
                Steve Germain's comprehensive guide to understanding your Medicare options — written in plain English. Learn about plans, costs, and how to make the right choice for your healthcare needs.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-white font-bold uppercase tracking-wide text-sm px-7 py-4 rounded transition-colors text-center"
              >
                Download Free PDF
              </button>
              <p className="text-[#9CA3AF] text-sm mt-5">
                Prefer a physical copy? Call <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-[#0071BB] font-semibold hover:underline">{PHONE}</a> and we'll mail one to your door — free.
              </p>
            </AnimatedSection>

            {/* Right: book image */}
            <AnimatedSection delay={0.2} className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-md w-full">
                <img
                  src="/slideshow/s09.jpg"
                  alt="Steve Germain holding Medicare Decoded book"
                  className="w-full h-full object-cover object-top"
                  style={{ maxHeight: 420 }}
                />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
}
