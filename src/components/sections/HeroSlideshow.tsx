"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TAGLINE, SUBHEADLINE, WEBINAR_URL } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR SLIDES HERE
// Drop your photos into: /public/slides/
// Then add the filename + a caption for each slide below.
// ─────────────────────────────────────────────────────────────────────────────
const SLIDES = [
  { src: "/slides/slide-1.jpg",  alt: "A&E Insurance Agency — Client meeting",                        position: "top center" },
  { src: "/slides/slide-2.jpg",  alt: "A&E Insurance Agency — Community event",                       position: "center center" },
  { src: "/slides/slide-3.jpg",  alt: "A&E Insurance Agency — Medicare education",                    position: "center center" },
  { src: "/slides/slide-4.jpg",  alt: "A&E Insurance Agency — Medicare seminar wide view",            position: "center center" },
  { src: "/slides/slide-5.jpg",  alt: "A&E Insurance Agency — Steve at the office",                   position: "top center" },
  { src: "/slides/slide-6.jpg",  alt: "A&E Insurance Agency — Medicare Part A and Part B seminar",   position: "center center" },
  { src: "/slides/slide-7.jpg",  alt: "A&E Insurance Agency — 5-star client experience",             position: "center center" },
  { src: "/slides/slide-8.jpg",  alt: "A&E Insurance Agency — Agent consulting with couple",         position: "center center" },
  { src: "/slides/slide-9.jpg",  alt: "A&E Insurance Agency — Happy clients meeting with agent",     position: "center center" },
  { src: "/slides/slide-10.jpg", alt: "A&E Insurance Agency — The A&E team",                         position: "center center" },
];

// How long each slide stays visible (milliseconds)
const SLIDE_INTERVAL = 5000;

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "65vh", minHeight: 480, maxHeight: 680 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slides ────────────────────────────────────────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url('${SLIDES[current].src}')`,
              backgroundPosition: SLIDES[current].position,
            }}
            aria-label={SLIDES[current].alt}
          />

          {/* Dark gradient overlay so text is always readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* ── Fallback background when images haven't loaded yet ────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A72C0] to-[#0D4A8A] -z-10" />

      {/* ── Content overlay ───────────────────────────────────────────────── */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <span className="inline-block text-[#E8A020] font-semibold text-sm uppercase tracking-widest mb-4">
              South Florida&apos;s Independent Medicare Specialists
            </span>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {TAGLINE}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl">
              {SUBHEADLINE}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://link.aeinsurancefl.com/widget/booking/gnH26nD1h46Zd5rO88gz"
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer inline-block px-8 py-4 text-white font-bold rounded-lg shadow-lg hover:scale-[1.02] transition-transform text-base text-center"
              >
                Schedule a Free Consultation
              </a>
              <a
                href="#medicare-plans"
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1A72C0] transition-all text-base text-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Stat chips ────────────────────────────────────────────────────── */}
      <div className="absolute bottom-20 right-6 z-10 hidden lg:flex flex-col gap-3">
        {[
          { value: "500+", label: "Clients Served" },
          { value: "10+", label: "Years Experience" },
          { value: "$0", label: "Fees — Ever" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl px-5 py-3 text-white text-right"
          >
            <p className="text-2xl font-bold text-[#E8A020]">{s.value}</p>
            <p className="text-xs text-white/80">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── Prev / Next arrows ────────────────────────────────────────────── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
      >
        <ChevronRight size={22} />
      </button>

      {/* ── Dot navigation ────────────────────────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-2.5 bg-[#E8A020]"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* ── Progress bar ──────────────────────────────────────────────────── */}
      {!paused && (
        <motion.div
          key={`progress-${current}`}
          className="absolute bottom-0 left-0 h-0.5 bg-[#E8A020] z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: SLIDE_INTERVAL / 1000, ease: "linear" }}
        />
      )}
    </section>
  );
}
