"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { TAGLINE, PHONE, WEBINAR_URL } from "@/lib/constants";

const SLIDES = [
  { src: "/slideshow/s01.jpg",  alt: "A&E Insurance Agency Medicare consultation with South Florida client",  pos: "top center" },
  { src: "/slideshow/s03.jpg",  alt: "Steve Germain meeting with Medicare clients Jos and Marie in Miami",    pos: "center center" },
  { src: "/slideshow/s06.jpg",  alt: "Steve Germain laughing with Medicare client Annabella",                pos: "top center" },
  { src: "/slideshow/s07.jpg",  alt: "Steve Germain helping Medicare client Eleonora at home in South Florida", pos: "top center" },
  { src: "/slideshow/s08.jpg",  alt: "Steve Germain reviewing Medicare plans with clients Leslie and Jennifer", pos: "center center" },
  { src: "/slideshow/s09.jpg",  alt: "Steve Germain holding Medicare Decoded book — A&E Insurance Agency",   pos: "top center" },
  { src: "/slideshow/s02.jpg",  alt: "Medicare Decoded — A clear guide for people turning 65 by Steve Germain", pos: "center center" },
  { src: "/slideshow/s10.jpg",  alt: "A&E Insurance Agency team — independent Medicare brokers in Miami FL", pos: "center center" },
{ src: "/slideshow/s13.jpg",  alt: "Attendees at an A&E Insurance Agency Medicare workshop in Miami",      pos: "center center" },
];

const INTERVAL = 4000;

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

        {/* ── Headline + CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#1558A0] mb-3">
            Independent Medicare Brokers — Serving South Florida Since 2009
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A2E] leading-tight mb-5">
            Get Your Medicare Right<br className="hidden sm:block" /> the First Time.
          </h1>
          <p className="text-[#374151] text-xl leading-relaxed mb-5 max-w-2xl">
            As an independent Medicare broker, we compare Medicare Supplement, Medicare Advantage, and Prescription Drug Plans from over 25 carriers — then recommend the one that fits your doctors, your budget, and your life. Expert guidance, at no cost to you.
          </p>
          <p className="text-[#4B5563] text-base mb-10 max-w-xl leading-relaxed">
            Licensed Independent Broker · Author of <em>Medicare Decoded</em> · 4,200+ South Florida Families Helped
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center bg-[#E8A020] hover:bg-[#D4911B] text-[#1A1A2E] font-extrabold uppercase tracking-wide text-base px-10 py-4 rounded-lg transition-colors shadow-lg whitespace-nowrap"
            >
              Call {PHONE}
            </a>
            <Link
              href={WEBINAR_URL}
              className="inline-flex items-center justify-center border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors text-center whitespace-nowrap"
            >
              Watch Free Medicare Workshop
            </Link>
          </div>
        </motion.div>

        {/* ── Slideshow ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full overflow-hidden rounded-t-xl"
          style={{ height: 620 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
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

          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight size={18} />
          </button>

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
