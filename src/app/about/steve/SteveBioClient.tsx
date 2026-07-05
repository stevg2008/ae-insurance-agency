"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, ArrowLeft, BookOpen, Star, Clock } from "lucide-react";
import { PHONE, EMAIL, WEBINAR_URL } from "@/lib/constants";

const CREDENTIALS = [
  { icon: Clock,    label: "Serving South Florida Since 2009" },
  { icon: Star,     label: "5-Star Google Rating" },
  { icon: BookOpen, label: "Author of Medicare Decoded" },
];

export default function SteveBioClient() {
  return (
    <div className="bg-white min-h-screen">

      {/* Back link */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <Link href="/about" className="inline-flex items-center gap-2 text-[#1A72C0] text-sm font-semibold hover:underline">
          <ArrowLeft size={15} />
          Back to Team
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/team/steve.jpg"
                alt="Steve Germain — Founder, A&E Insurance Agency"
                className="w-full object-cover object-top"
                style={{ maxHeight: 580 }}
              />
            </div>
            {/* Contact under photo */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="flex items-center gap-3 bg-[#1A72C0] hover:bg-[#155fa0] text-white font-bold px-5 py-3.5 rounded-lg transition-colors text-sm"
              >
                <Phone size={16} />
                Call {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A72C0] hover:text-white font-bold px-5 py-3.5 rounded-lg transition-colors text-sm"
              >
                <Mail size={16} />
                {EMAIL}
              </a>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="inline-block bg-[#DBEAFE] text-[#1A72C0] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Founder & Licensed Medicare Broker
            </span>
            <h1 className="text-4xl font-extrabold text-[#1A1A2E] mb-2">Steve Germain</h1>
            <p className="text-[#1A72C0] font-semibold mb-6">A&E Insurance Agency, LLC · Miami, FL</p>

            <div className="w-12 h-1 bg-[#E8A020] rounded mb-6" />

            <div className="space-y-4 text-[#4B5563] leading-relaxed mb-8">
              <p>
                Steve Germain is a licensed independent Medicare insurance broker and author with more than a decade of experience helping South Florida families navigate Medicare with clarity and confidence.
              </p>
              <p>
                His commitment to service was shaped early on by accompanying his grandfather to doctor appointments and witnessing firsthand the real challenges people face when trying to understand Medicare. That personal experience became a professional mission: to make Medicare easier to understand and more accessible for everyone.
              </p>
              <p>
                Steve truly enjoys making confusing topics easy to understand and believes every client deserves honest guidance, personalized education, and exceptional service. As the founder of A&E Insurance Agency, LLC, he leads a team dedicated to helping people make informed, confident decisions about their healthcare every step of the way.
              </p>
              <p>
                He is also the author of <em className="font-semibold text-[#1A1A2E]">Medicare Decoded</em> — a step-by-step guide written specifically for people approaching Medicare for the first time.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {CREDENTIALS.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-center gap-3 bg-[#F3F4F6] rounded-lg px-4 py-3">
                    <Icon size={16} className="text-[#1A72C0] flex-shrink-0" />
                    <span className="text-sm font-semibold text-[#1A1A2E]">{c.label}</span>
                  </div>
                );
              })}
            </div>

            <a
              href={WEBINAR_URL}
              className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-white font-extrabold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors"
            >
              Watch Steve&apos;s Free Medicare Workshop →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Free book CTA */}
      <section className="bg-[#1A72C0] py-14 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-3">Free Resource</p>
          <h2 className="text-2xl font-extrabold text-white mb-3">Get Steve&apos;s Medicare Decoded Book</h2>
          <p className="text-white/60 text-sm mb-7">Download the digital copy free or call us to have a printed copy mailed to you.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/medicare-decoded-guide.pdf"
              download
              className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-white font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-lg transition-colors"
            >
              Download Free PDF
            </a>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1A1A2E] font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-lg transition-colors"
            >
              Call to Get a Copy Mailed
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
