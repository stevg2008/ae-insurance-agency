"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Phone, DollarSign, AlertCircle } from "lucide-react";
import { PHONE, WEBINAR_URL } from "@/lib/constants";

// ─── ANNUAL UPDATE REQUIRED — every November ───────────────────────────────
// 1. Update PART_B_PREMIUM_XXXX to the new standard Part B premium
// 2. Rename the constant to match the new year (e.g. PART_B_PREMIUM_2027)
// 3. Find-and-replace the old year string "2026" → "2027" across this file
// Source: https://www.medicare.gov/your-medicare-costs/part-b-costs
// Last verified: November 2025 for plan year 2026
// ───────────────────────────────────────────────────────────────────────────
const PART_B_PREMIUM_2026 = 202.90;

interface Result {
  months: number;
  fullYears: number;
  penaltyPct: number;
  monthlyPenalty: number;
  totalMonthlyPremium: number;
  lifetimeCost: number; // 20-year estimate
}

function calculate(months: number): Result {
  // Only full 12-month periods count toward the penalty
  const fullYears = Math.floor(months / 12);

  // 10% per full year of no creditable coverage
  const penaltyPct = fullYears * 10;

  const monthlyPenalty = (penaltyPct / 100) * PART_B_PREMIUM_2026;
  // Medicare rounds the total premium (not just the penalty) to the nearest $0.10
  const totalMonthlyPremium = Math.round((PART_B_PREMIUM_2026 + monthlyPenalty) * 10) / 10;

  // Illustrate lifetime cost over 20 years (240 months) as a wake-up call
  const lifetimeCost = monthlyPenalty * 240;

  return { months, fullYears, penaltyPct, monthlyPenalty, totalMonthlyPremium, lifetimeCost };
}

function fmt$(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
}

export default function PartBPenaltyClient() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    const months = parseInt(input, 10);
    if (!input || isNaN(months) || months < 1 || months > 600) {
      setError("Please enter a valid number of months (1–600).");
      return;
    }
    setResult(calculate(months));
  };

  const handleReset = () => {
    setInput(""); setResult(null); setError("");
  };

  const noPenalty = result?.penaltyPct === 0;

  return (
    <div className="bg-[#F3F4F6] min-h-screen py-14 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1A72C0] mb-5">
            <DollarSign size={26} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-3">
            Part B Late Enrollment Penalty Calculator
          </h1>
          <p className="text-[#4B5563] leading-relaxed max-w-lg mx-auto">
            If you missed your Medicare enrollment window without creditable coverage, you may owe a permanent penalty added to your monthly Part B premium — for life.
          </p>
        </motion.div>

        {/* Explainer card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h2 className="text-lg font-extrabold text-[#1A1A2E] mb-3">Will I Have to Pay a Part B Penalty?</h2>
          <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
            If you failed to sign up for Medicare Part B when you were first eligible and you didn't have any creditable coverage, you will be subject to the Medicare Part B late enrollment penalty. This penalty is equal to <strong className="text-[#1A1A2E]">10% for every 12 full months</strong> that you went without coverage, and is permanently added to your monthly premium.
          </p>
          <div className="bg-[#FEF3C7] border border-[#E8A020] rounded-xl px-5 py-4 flex gap-3 items-start">
            <AlertTriangle size={16} className="text-[#E8A020] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#92400E]">
              <strong>Partial years don't count.</strong> 23 months = 10% penalty. 24 months = 20% penalty. Only <em>complete</em> 12-month periods are counted.
            </p>
          </div>
        </motion.div>

        {/* Calculator */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label className="block text-xs font-semibold text-[#6B7280] mb-2">
            Number of Months You Went Without Creditable Coverage
          </label>
          <div className="flex gap-3">
            <input
              type="number"
              min={1}
              max={600}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
              placeholder="e.g. 24"
              className="flex-1 border border-[#D1D5DB] rounded-lg px-4 py-3 text-base text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0]"
            />
            <button
              onClick={handleCalculate}
              className="bg-[#1A72C0] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              Calculate Penalty
            </button>
          </div>
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm mt-3">
              <AlertCircle size={14} /> {error}
            </div>
          )}
          <p className="text-[#6B7280] text-xs mt-3">
            Based on the 2026 standard Part B premium of {fmt$(PART_B_PREMIUM_2026)}/month.
          </p>
        </motion.div>

        {/* Results */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Main result */}
              <div className={`rounded-2xl p-8 mb-4 text-center ${noPenalty ? "bg-green-700" : "bg-[#1A72C0]"}`}>
                <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-3">
                  Estimated Monthly Penalty for 2026
                </p>

                {noPenalty ? (
                  <>
                    <p className="text-white text-4xl font-extrabold mb-2">No Penalty</p>
                    <p className="text-white/90 text-sm">
                      {result.months} month{result.months !== 1 ? "s" : ""} is less than 12 full months — no penalty applies.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-white text-5xl font-extrabold mb-1">{fmt$(result.monthlyPenalty)}</p>
                    <p className="text-white/90 text-sm mb-5">added to your Part B premium every month, permanently</p>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Penalty %", value: `${result.penaltyPct}%` },
                        { label: "Your Monthly Part B", value: fmt$(result.totalMonthlyPremium) },
                        { label: "20-Year Cost", value: fmt$(result.lifetimeCost) },
                      ].map((s) => (
                        <div key={s.label} className="bg-white/10 rounded-xl p-4">
                          <p className="text-white/90 text-xs mb-1">{s.label}</p>
                          <p className="text-white font-extrabold text-base">{s.value}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Breakdown */}
              {!noPenalty && (
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
                  <h3 className="font-extrabold text-[#1A1A2E] text-base uppercase tracking-wide mb-5">How This Is Calculated</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Months without creditable coverage", value: `${result.months} months` },
                      { label: "Full 12-month periods counted", value: `${result.fullYears} year${result.fullYears !== 1 ? "s" : ""}` },
                      { label: "Penalty percentage", value: `${result.fullYears} × 10% = ${result.penaltyPct}%` },
                      { label: "2026 standard Part B premium", value: fmt$(PART_B_PREMIUM_2026) },
                      { label: "Monthly penalty", value: `${result.penaltyPct}% × ${fmt$(PART_B_PREMIUM_2026)} = ${fmt$(result.monthlyPenalty)}` },
                      { label: "Your total monthly Part B cost", value: fmt$(result.totalMonthlyPremium), highlight: true },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className={`flex justify-between items-center py-3 border-b border-[#F3F4F6] last:border-0 ${row.highlight ? "bg-[#DBEAFE] -mx-4 px-4 rounded-lg" : ""}`}
                      >
                        <span className={`text-sm ${row.highlight ? "font-extrabold text-[#1A1A2E]" : "text-[#4B5563]"}`}>{row.label}</span>
                        <span className={`text-sm font-bold ${row.highlight ? "text-[#1A72C0]" : "text-[#1A1A2E]"}`}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Can I avoid it */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
                <h3 className="font-extrabold text-[#1A1A2E] text-base uppercase tracking-wide mb-4">
                  {noPenalty ? "You're in Good Shape — Here's What to Do Next" : "Can the Penalty Be Avoided or Reduced?"}
                </h3>
                {noPenalty ? (
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    Since you were without coverage for less than 12 full months, no late enrollment penalty applies. Make sure you enroll in Part B as soon as possible to avoid any future penalty accumulating.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {[
                      { title: "The penalty is permanent", body: "Once assessed, the Part B late enrollment penalty stays with you for as long as you have Medicare. It recalculates each year based on whatever the new standard premium is." },
                      { title: "Creditable coverage is the exception", body: "If you had qualifying employer coverage, union coverage, or other creditable insurance, you may not owe a penalty. Documentation is critical — we can help you verify your coverage history." },
                      { title: "There may be a Special Enrollment Period", body: "Depending on your situation, you may qualify for a Special Enrollment Period that limits your penalty exposure. A licensed broker can review your specific timeline." },
                    ].map((r) => (
                      <div key={r.title} className="flex gap-3 items-start">
                        <div className="w-2 h-2 rounded-full bg-[#E8A020] flex-shrink-0 mt-2" />
                        <div>
                          <p className="font-bold text-[#1A1A2E] text-sm mb-0.5">{r.title}</p>
                          <p className="text-[#4B5563] text-sm leading-relaxed">{r.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="bg-[#1A72C0] rounded-2xl p-8 text-center mb-4">
                <p className="text-white font-extrabold text-lg mb-2">
                  {noPenalty ? "Ready to Enroll the Right Way?" : "Don't Pay More Than You Have To"}
                </p>
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  {noPenalty
                    ? "Let Steve review your situation and make sure you enroll at the right time with the right plan — at no cost to you."
                    : "A licensed Medicare broker can review your coverage history, verify whether a penalty applies, and help you minimize the financial impact."}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={WEBINAR_URL}
                    className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-[#1A1A2E] font-extrabold uppercase tracking-wide text-xs px-6 py-3.5 rounded-lg transition-colors"
                  >
                    Watch Free Medicare Workshop
                  </a>
                  <a
                    href={`tel:${PHONE.replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1A72C0] font-bold uppercase tracking-wide text-xs px-6 py-3.5 rounded-lg transition-colors"
                  >
                    <Phone size={13} />
                    Call {PHONE}
                  </a>
                </div>
              </div>

              <div className="text-center">
                <button onClick={handleReset} className="text-[#1A72C0] text-sm font-semibold hover:underline">
                  ← Calculate a different amount
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-[#6B7280] text-xs mt-8 leading-relaxed max-w-lg mx-auto">
          This calculator is an estimate based on the 2026 standard Part B premium of {fmt$(PART_B_PREMIUM_2026)}/month. The Part B premium changes annually. Actual penalty amounts may vary based on your specific enrollment history. This tool is for educational purposes only.
        </p>
      </div>
    </div>
  );
}
