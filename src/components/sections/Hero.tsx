"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TAGLINE, WEBINAR_URL, WEBINAR_LABEL_SHORT, PHONE } from "@/lib/constants";

const SLIDES = [
  { src: "/slideshow/s01.jpg",  alt: "A&E client meeting — Jonathan and Elaine",  pos: "top center" },
  { src: "/slideshow/s02.jpg",  alt: "Medicare Decoded book by Steve Germain",     pos: "center center" },
  { src: "/slideshow/s03.jpg",  alt: "Steve with Jos and Marie",                   pos: "center center" },
  { src: "/slideshow/s06.jpg",  alt: "Steve and Annabella laughing",               pos: "top center" },
  { src: "/slideshow/s07.jpg",  alt: "Steve helping Eleonora at home",             pos: "top center" },
  { src: "/slideshow/s08.jpg",  alt: "Steve with Leslie and Jennifer",             pos: "center center" },
  { src: "/slideshow/s09.jpg",  alt: "Steve holding Medicare Decoded book",        pos: "top center" },
  { src: "/slideshow/s10.jpg",  alt: "A&E Insurance Agency team photo",            pos: "center center" },
  { src: "/slideshow/s11.jpg",  alt: "Steve at the seminar",                       pos: "top center" },
  { src: "/slideshow/s13.jpg",  alt: "Wide view of Medicare seminar",              pos: "center center" },
];

const INTERVAL = 2000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section className="bg-white pt-10 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top row: headline left, benefit + CTAs right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-[#1A1A2E] leading-tight">
              {TAGLINE}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pt-2"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#1A72C0] mb-2">
              Lifetime Support
            </p>
            <p className="text-[#4B5563] text-lg leading-relaxed mb-7">
              Comprehensive, no-cost support for every chapter of your Medicare journey — from first enrollment to annual plan reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/watch"
                className="inline-block bg-[#1A72C0] hover:bg-[#155fa0] text-white font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded transition-colors text-center"
              >
                Watch Our Free Medicare Workshop
              </a>
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="inline-block border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A72C0] hover:text-white font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded transition-colors text-center whitespace-nowrap"
              >
                Call {PHONE}
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Compact slideshow (matches Gruening video area height) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full overflow-hidden rounded-t-xl"
          style={{ height: 620 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides */}
          <AnimatePresence mode="sync">
            <motion.img
              key={current}
              src={SLIDES[current].src}
              alt={SLIDES[current].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: SLIDES[current].pos }}
            />
          </AnimatePresence>

          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dot navigation */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-5 h-2 bg-[#E8A020]"
                    : "w-2 h-2 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
