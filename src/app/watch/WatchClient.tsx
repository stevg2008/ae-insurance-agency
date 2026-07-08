"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Shield, Clock, Users, BookOpen, Map, FileText, CalendarCheck } from "lucide-react";
import { PHONE } from "@/lib/constants";
import { analytics } from "@/lib/analytics";

const LEARN_POINTS = [
  "How Medicare Part A & B actually work — in plain English",
  "Medicare Supplement vs. Medicare Advantage: which is right for you",
  "How to avoid the most costly Medicare enrollment mistakes",
  "Strategies to close coverage gaps and reduce out-of-pocket costs",
  "When and how to enroll without triggering late penalties",
  "How to get expert help at absolutely zero cost to you",
];

const FREE_RESOURCES = [
  { icon: BookOpen,     title: "Medicare Decoded Book",        desc: "Steve's step-by-step guide — digital or printed copy mailed to you free" },
  { icon: Map,          title: "Personalized Medicare Roadmap", desc: "A custom plan built around your doctors, budget, and health needs" },
  { icon: FileText,     title: "Medicare Cost Summary",         desc: "Side-by-side breakdown of your real options and costs" },
  { icon: CalendarCheck, title: "Free 1-on-1 Consultation",    desc: "Private call with Steve — no pressure, no sales pitch" },
];

const TRUST_BADGES = [
  { icon: Star,   label: "5-Star Google Rating" },
  { icon: Users,  label: "Serving South Florida Since 2009" },
  { icon: Clock,  label: "10+ Years Experience" },
  { icon: Shield, label: "100% Free — No Obligation" },
];

const MONTHS_OPTIONS = [
  "Less than 3 months",
  "3–6 months",
  "6–9 months",
  "Already on Medicare",
  "Just researching",
];

export default function WatchClient() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", months: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      analytics.watchRegistered();
      router.push("/watch/video");
    } catch {
      setError("Something went wrong. Please call us at " + PHONE);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">



      {/* ── Hero + Form ── */}
      <section className="bg-[#F3F4F6] py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left — headline + bullets + trust */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#DBEAFE] text-[#1A72C0] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Free Webinar — Instant Access
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-5">
              Learn How to Make Medicare<br className="hidden md:block" />
              <span className="text-[#1A72C0]"> Work For You, Not Against You</span>
            </h1>
            <p className="text-lg text-[#4B5563] mb-8 leading-relaxed">
              Watch our free workshop and discover how to choose the right plan, avoid costly mistakes, and get expert guidance — all at zero cost to you.
            </p>

            <h2 className="text-base font-extrabold text-[#1A1A2E] uppercase tracking-wide mb-4">
              In This Free Workshop You&apos;ll Discover:
            </h2>
            <ul className="space-y-3 mb-8">
              {LEARN_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#1A72C0] flex-shrink-0 mt-0.5" />
                  <span className="text-[#4B5563] text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

          </motion.div>

          {/* Right — native form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-[#1A72C0] rounded-2xl p-7 shadow-xl sticky top-6">
              <div className="text-center mb-6">
                <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-2">You Also Receive — 100% Free</p>
                <h2 className="text-white text-xl font-extrabold leading-snug">
                  Where Should We Send<br />Your Free Medicare Guide?
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    value={form.name}
                    onChange={set("name")}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#E8A020] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@email.com"
                    value={form.email}
                    onChange={set("email")}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#E8A020] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(954) 555-1234"
                    value={form.phone}
                    onChange={set("phone")}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#E8A020] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5">How soon do you need Medicare?</label>
                  <select
                    value={form.months}
                    onChange={set("months")}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E8A020] transition-colors"
                  >
                    <option value="" className="bg-[#1A72C0]">Select one...</option>
                    {MONTHS_OPTIONS.map((o) => (
                      <option key={o} value={o} className="bg-[#1A72C0]">{o}</option>
                    ))}
                  </select>
                </div>

                {error && <p className="text-red-400 text-xs text-center">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#E8A020] hover:bg-[#d08f18] disabled:opacity-60 text-white font-extrabold uppercase tracking-wide text-sm py-4 rounded-lg transition-colors mt-2"
                >
                  {loading ? "One moment..." : "Watch Free Workshop Now →"}
                </button>
              </form>

              <p className="text-white/40 text-xs text-center mt-4">
                🔒 Your info is 100% secure. No spam, ever.
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {TRUST_BADGES.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.label} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 text-white/80 text-xs font-semibold">
                      <Icon size={12} className="text-[#E8A020]" />
                      {b.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Free Resources ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E] mb-2">
            Everything Included — 100% Free
          </h2>
          <p className="text-[#4B5563] mb-10">No cost. No catch. No obligation.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FREE_RESOURCES.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="bg-[#F3F4F6] rounded-xl p-6 text-left flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#1A72C0]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A2E] mb-1">{r.title}</p>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About Steve ── */}
      <section className="py-14 px-4 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/slideshow/s09.jpg"
                alt="Steve Germain — Founder, A&E Insurance Agency"
                className="w-full object-cover object-top"
                style={{ maxHeight: 400 }}
              />
            </div>
            <div>
              <span className="inline-block bg-[#DBEAFE] text-[#1A72C0] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                Your Host
              </span>
              <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-1">Steve Germain</h2>
              <p className="text-[#1A72C0] font-semibold text-sm mb-4">Founder & Licensed Medicare Broker · A&E Insurance Agency</p>
              <p className="text-[#4B5563] text-sm leading-relaxed mb-5">
                Steve Germain is a licensed independent Medicare broker and author of <em>Medicare Decoded</em>. Based in Miami, he has served South Florida families since 2009 with education-first guidance — no pressure, no bias, no fees.
              </p>
              <ul className="space-y-2">
                {[
                  "10+ years of Medicare expertise",
                  "Licensed independent broker — works for YOU",
                  "5-Star Google rating from real clients",
                  "Author of Medicare Decoded",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#4B5563]">
                    <CheckCircle2 size={15} className="text-[#1A72C0] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-12 px-4 bg-[#1A72C0] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Have Questions? Call Us Directly.</h2>
          <p className="text-white/60 text-sm mb-6">No pressure, no fees — ever.</p>
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-white font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors"
          >
            📞 Call {PHONE}
          </a>
        </div>
      </section>


    </div>
  );
}
