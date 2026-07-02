"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Phone, Pill, AlertCircle } from "lucide-react";
import { PHONE, WEBINAR_URL } from "@/lib/constants";

// 2026 figures — update each January when CMS announces new rates
// Source: CMS.gov / Medicare.gov
const PART_D_BASE_PREMIUM_2026 = 38.99;  // national base beneficiary premium
const PART_D_MAX_DEDUCTIBLE_2026 = 615;  // no plan may exceed this
const PART_D_CATASTROPHIC_THRESHOLD_2026 = 2100; // out-of-pocket threshold for catastrophic coverage

interface Result {
  months: number;
  penaltyPct: number;       // months × 1%
  monthlyPenalty: number;   // rounded to nearest $0.10
  lifetimeCost: number;     // 20-year illustration
}

function calculate(months: number): Result {
  // 1% of the national base beneficiary premium for each uncovered month
  const penaltyPct = months * 1;

  // CMS rounds to nearest $0.10
  const raw = (penaltyPct / 100) * PART_D_BASE_PREMIUM_2026;
  const monthlyPenalty = Math.round(raw * 10) / 10;

  const lifetimeCost = monthlyPenalty * 240; // 20-year illustration

  return { months, penaltyPct, monthlyPenalty, lifetimeCost };
}

function fmt$(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
}

function fmtPenalty(n: number) {
  // Show one decimal for the $0.10-rounded penalty
  return "$" + n.toFixed(2);
}

export default function PartDPenaltyClient() {
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
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0071BB] mb-5">
            <Pill size={26} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-3">
            Part D Late Enrollment Penalty Calculator
          </h1>
          <p className="text-[#4B5563] leading-relaxed max-w-lg mx-auto">
            If you went 63 or more consecutive days without Medicare drug coverage or other creditable coverage after your Initial Enrollment Period ended, you may owe a permanent monthly penalty.
          </p>
        </motion.div>

        {/* Explainer card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h2 className="text-lg font-extrabold text-[#1A1A2E] mb-3">Will I Have to Pay a Part D Penalty?</h2>
          <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
            If, after your Initial Enrollment Period ends, there is a period of <strong className="text-[#1A1A2E]">63 or more consecutive days</strong> where you don't have Medicare drug coverage or other creditable coverage, you may have to pay a Part D Late Enrollment Penalty. This penalty is permanently added to your monthly Part D premium.
          </p>

          {/* Key difference from Part B */}
          <div className="bg-[#DBEAFE] border border-[#0071BB] rounded-xl px-5 py-4 mb-4">
            <p className="text-sm text-[#1A1A2E] font-bold mb-1">Part D penalty works differently than Part B</p>
            <p className="text-sm text-[#1A1A2E]/80 leading-relaxed">
              Part D is <strong>1% per uncovered month</strong> — based on the national base beneficiary premium, not your actual plan premium. The more months you wait, the higher the permanent penalty.
            </p>
          </div>

          <div className="bg-[#FEF3C7] border border-[#E8A020] rounded-xl px-5 py-4 flex gap-3 items-start">
            <AlertTriangle size={16} className="text-[#E8A020] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#92400E]">
              <strong>Every month counts.</strong> Unlike Part B (which only counts full 12-month periods), Part D counts <em>every individual month</em> you were uncovered. 6 months = 6% penalty. 24 months = 24% penalty.
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
            Number of Months You Went Without Creditable Drug Coverage
          </label>
          <div className="flex gap-3">
            <input
              type="number"
              min={1}
              max={600}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
              placeholder="e.g. 18"
              className="flex-1 border border-[#D1D5DB] rounded-lg px-4 py-3 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#0071BB]"
            />
            <button
              onClick={handleCalculate}
              className="bg-[#0071BB] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              Calculate Penalty
            </button>
          </div>
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm mt-3">
              <AlertCircle size={14} /> {error}
            </div>
          )}
          <p className="text-[#9CA3AF] text-xs mt-3">
            Based on the 2026 national base beneficiary premium of {fmt$(PART_D_BASE_PREMIUM_2026)}/month.
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
              <div className="bg-[#0071BB] rounded-2xl p-8 mb-4 text-center">
                <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-3">
                  Estimated Monthly Penalty for 2026
                </p>
                <p className="text-white text-5xl font-extrabold mb-1">
                  {fmtPenalty(result.monthlyPenalty)}
                </p>
                <p className="text-white/60 text-sm mb-5">added to your Part D premium every month, permanently</p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Penalty %", value: `${result.penaltyPct}%` },
                    { label: "Base Premium Used", value: fmt$(PART_D_BASE_PREMIUM_2026) },
                    { label: "20-Year Cost", value: fmt$(result.lifetimeCost) },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/10 rounded-xl p-4">
                      <p className="text-white/60 text-xs mb-1">{s.label}</p>
                      <p className="text-white font-extrabold text-base">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Breakdown */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
                <h3 className="font-extrabold text-[#1A1A2E] text-base uppercase tracking-wide mb-5">
                  How This Is Calculated
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Months without creditable drug coverage", value: `${result.months} months` },
                    { label: "Penalty rate", value: "1% per uncovered month" },
                    { label: "Your penalty percentage", value: `${result.months} × 1% = ${result.penaltyPct}%` },
                    { label: "2026 national base beneficiary premium", value: fmt$(PART_D_BASE_PREMIUM_2026) },
                    { label: "Raw penalty", value: `${result.penaltyPct}% × ${fmt$(PART_D_BASE_PREMIUM_2026)} = ${fmt$((result.penaltyPct / 100) * PART_D_BASE_PREMIUM_2026)}` },
                    { label: "Rounded to nearest $0.10 (CMS rule)", value: fmtPenalty(result.monthlyPenalty), highlight: true },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className={`flex justify-between items-center py-3 border-b border-[#F3F4F6] last:border-0 ${row.highlight ? "bg-[#DBEAFE] -mx-4 px-4 rounded-lg" : ""}`}
                    >
                      <span className={`text-sm ${row.highlight ? "font-extrabold text-[#1A1A2E]" : "text-[#4B5563]"}`}>{row.label}</span>
                      <span className={`text-sm font-bold ${row.highlight ? "text-[#0071BB]" : "text-[#1A1A2E]"}`}>{row.value}</span>
                    </div>
                  ))}
                </div>

                {/* Important note about base premium */}
                <div className="mt-5 bg-[#F3F4F6] rounded-xl p-4">
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    <strong className="text-[#1A1A2E]">Important:</strong> The penalty is based on the <em>national base beneficiary premium</em> set by CMS each year — not your actual plan premium. As the base premium changes annually, so does the dollar amount of your penalty, even though the percentage stays fixed.
                  </p>
                </div>
              </div>

              {/* Part D vs Part B comparison */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
                <h3 className="font-extrabold text-[#1A1A2E] text-base uppercase tracking-wide mb-5">
                  Part D vs. Part B Penalty — Key Differences
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#E5E7EB]">
                        <th className="text-left py-2 pr-4 text-[#6B7280] font-semibold"></th>
                        <th className="text-left py-2 pr-4 text-[#0071BB] font-extrabold">Part D</th>
                        <th className="text-left py-2 text-[#1A1A2E] font-extrabold">Part B</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F3F4F6]">
                      {[
                        { label: "Rate", d: "1% per uncovered month", b: "10% per full year" },
                        { label: "Counted periods", d: "Every individual month", b: "Full 12-month blocks only" },
                        { label: "Based on", d: `National base premium ($${PART_D_BASE_PREMIUM_2026})`, b: "Standard Part B premium ($202.90)" },
                        { label: "Trigger", d: "63+ consecutive days uncovered", b: "Missed Initial Enrollment Period" },
                        { label: "Permanent?", d: "Yes", b: "Yes" },
                      ].map((r) => (
                        <tr key={r.label}>
                          <td className="py-3 pr-4 text-[#6B7280] font-medium">{r.label}</td>
                          <td className="py-3 pr-4 text-[#1A1A2E]">{r.d}</td>
                          <td className="py-3 text-[#1A1A2E]">{r.b}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2026 Coverage Stages */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
                <h3 className="font-extrabold text-[#1A1A2E] text-base uppercase tracking-wide mb-1">
                  2026 Part D Coverage Stages
                </h3>
                <p className="text-[#6B7280] text-xs mb-6">How your costs change as your spending grows throughout the year.</p>
                <div className="space-y-4">
                  {[
                    {
                      num: "01",
                      color: "#0071BB",
                      stage: "Deductible Stage",
                      threshold: `Up to $${PART_D_MAX_DEDUCTIBLE_2026.toLocaleString()}/year maximum`,
                      body: "If your plan has a deductible, you pay 100% of covered drug costs until you reach it. No Medicare drug plan may charge more than $615 in 2026. Many plans have a $0 deductible.",
                    },
                    {
                      num: "02",
                      color: "#E8A020",
                      stage: "Initial Coverage Stage",
                      threshold: `After deductible → until $${PART_D_CATASTROPHIC_THRESHOLD_2026.toLocaleString()} out-of-pocket`,
                      body: "You pay 25% coinsurance for both generic and brand-name covered drugs. Your plan pays the rest. This stage ends once your total out-of-pocket spending on covered Part D drugs reaches $2,100 in 2026.",
                    },
                    {
                      num: "03",
                      color: "#1A1A2E",
                      stage: "Catastrophic Coverage Stage",
                      threshold: `After $${PART_D_CATASTROPHIC_THRESHOLD_2026.toLocaleString()} out-of-pocket`,
                      body: "Once you hit the $2,100 out-of-pocket threshold, you pay $0 for covered Part D drugs for the rest of the calendar year. Coverage resets every January 1st.",
                    },
                  ].map((s) => (
                    <div key={s.num} className="flex gap-4 items-start">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-extrabold text-sm"
                        style={{ backgroundColor: s.color }}
                      >
                        {s.num}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-extrabold text-[#1A1A2E] text-sm mb-0.5">{s.stage}</p>
                        <p className="text-xs font-semibold mb-1" style={{ color: s.color }}>{s.threshold}</p>
                        <p className="text-[#4B5563] text-sm leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 bg-[#F3F4F6] rounded-xl p-4">
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    <strong className="text-[#1A1A2E]">Note:</strong> The deductible maximum and catastrophic threshold are set by CMS each year. Your actual plan deductible may be lower than the maximum. Thresholds reset every January 1st.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#0071BB] rounded-2xl p-8 text-center mb-4">
                <p className="text-white font-extrabold text-lg mb-2">Don't Pay More Than You Have To</p>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  A licensed broker can review your coverage history, determine if the penalty applies, and find you the best Part D plan to minimize your total cost going forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={WEBINAR_URL}
                    className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-white font-extrabold uppercase tracking-wide text-xs px-6 py-3.5 rounded-lg transition-colors"
                  >
                    Watch Free Medicare Workshop
                  </a>
                  <a
                    href={`tel:${PHONE.replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0071BB] font-bold uppercase tracking-wide text-xs px-6 py-3.5 rounded-lg transition-colors"
                  >
                    <Phone size={13} />
                    Call {PHONE}
                  </a>
                </div>
              </div>

              <div className="text-center">
                <button onClick={handleReset} className="text-[#0071BB] text-sm font-semibold hover:underline">
                  ← Calculate a different amount
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-[#9CA3AF] text-xs mt-8 leading-relaxed max-w-lg mx-auto">
          This calculator is an estimate based on the 2026 national base beneficiary premium of {fmt$(PART_D_BASE_PREMIUM_2026)}/month set by CMS. The base premium changes annually and so will the dollar amount of your penalty. Actual amounts may vary. This tool is for educational purposes only.
        </p>
      </div>
    </div>
  );
}
