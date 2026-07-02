"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Phone, AlertCircle, Info } from "lucide-react";
import { PHONE, WEBINAR_URL } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// 2026 IRMAA DATA — Source: CMS Medicare Parts B & D Premium Announcement
// Income used = 2024 MAGI (two years prior). Update each fall when CMS announces.
// ─────────────────────────────────────────────────────────────────────────────

const PART_B_STANDARD_2026 = 202.90;

interface Bracket {
  label: string;
  individual: string;
  joint: string;
  partBSurcharge: number; // IRMAA surcharge on top of $202.90 standard premium
  partBTotal: number;     // Total Part B premium (standard + surcharge)
  partDSurcharge: number; // IRMAA surcharge added on top of actual Part D plan premium
}

// Source: Official CMS 2026 IRMAA announcement
const BRACKETS: Bracket[] = [
  {
    label: "Standard — no IRMAA",
    individual: "≤ $109,000",
    joint: "≤ $218,000",
    partBSurcharge: 0.00,
    partBTotal: 202.90,
    partDSurcharge: 0.00,
  },
  {
    label: "Bracket 1",
    individual: "$109,001 – $137,000",
    joint: "$218,001 – $274,000",
    partBSurcharge: 81.20,
    partBTotal: 284.10,
    partDSurcharge: 14.50,
  },
  {
    label: "Bracket 2",
    individual: "$137,001 – $171,000",
    joint: "$274,001 – $342,000",
    partBSurcharge: 202.90,
    partBTotal: 405.80,
    partDSurcharge: 37.50,
  },
  {
    label: "Bracket 3",
    individual: "$171,001 – $205,000",
    joint: "$342,001 – $410,000",
    partBSurcharge: 324.60,
    partBTotal: 527.50,
    partDSurcharge: 60.40,
  },
  {
    label: "Bracket 4",
    individual: "$205,001 – $499,999",
    joint: "$410,001 – $749,999",
    partBSurcharge: 446.30,
    partBTotal: 649.20,
    partDSurcharge: 83.30,
  },
  {
    label: "Bracket 5 — Highest",
    individual: "≥ $500,000",
    joint: "≥ $750,000",
    partBSurcharge: 487.00,
    partBTotal: 689.90,
    partDSurcharge: 91.00,
  },
];

// Married filing separately — Part D only (Part B uses individual brackets)
const MFS_PART_D_BRACKETS = [
  { label: "≤ $109,000", partDSurcharge: 0.00 },
  { label: "$109,001 – $390,999", partDSurcharge: 83.30 },
  { label: "≥ $391,000", partDSurcharge: 91.00 },
];

function fmt$(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
}

export default function IrmaaClient() {
  const [filingStatus, setFilingStatus] = useState<"individual" | "joint" | "mfs">("individual");
  const [bracketIndex, setBracketIndex] = useState<number | "">("");
  const [mfsBracketIndex, setMfsBracketIndex] = useState<number | "">("");
  const [knowsPartD, setKnowsPartD] = useState<"yes" | "no" | "">("");
  const [partDPremiumInput, setPartDPremiumInput] = useState("");
  const [partDError, setPartDError] = useState("");

  const isMfs = filingStatus === "mfs";
  const bracket = !isMfs && bracketIndex !== "" ? BRACKETS[bracketIndex] : null;
  const mfsBracket = isMfs && mfsBracketIndex !== "" ? MFS_PART_D_BRACKETS[mfsBracketIndex] : null;

  // MFS uses individual Part B brackets; Part D uses the separate MFS table
  const partBTotal = bracket ? bracket.partBTotal : 0;
  const activeSurcharge = bracket?.partDSurcharge ?? mfsBracket?.partDSurcharge ?? 0;

  const partDPremium = parseFloat(partDPremiumInput) || 0;
  const partDTotal = partDPremium + activeSurcharge;

  const showResults = bracket !== null || mfsBracket !== null;
  const showPartDBreakdown = showResults && knowsPartD !== "";

  const resetSelections = () => {
    setBracketIndex(""); setMfsBracketIndex("");
    setKnowsPartD(""); setPartDPremiumInput(""); setPartDError("");
  };

  const handleBracketChange = (val: string) => {
    setBracketIndex(val === "" ? "" : Number(val));
    setKnowsPartD(""); setPartDPremiumInput(""); setPartDError("");
  };

  const handlePartDInput = (val: string) => {
    setPartDError("");
    setPartDPremiumInput(val);
    const num = parseFloat(val);
    if (val && (isNaN(num) || num < 0 || num > 500)) {
      setPartDError("Please enter a valid monthly premium (e.g. 42.50).");
    }
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
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1A72C0] mb-5">
            <TrendingUp size={26} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-3">
            2026 Medicare IRMAA Calculator
          </h1>
          <p className="text-[#4B5563] leading-relaxed max-w-lg mx-auto">
            Higher-income beneficiaries pay an Income-Related Monthly Adjustment Amount (IRMAA) on top of their standard Part B and Part D premiums. Find out what you owe.
          </p>
        </motion.div>

        {/* What is IRMAA */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h2 className="text-lg font-extrabold text-[#1A1A2E] mb-3">What Is IRMAA?</h2>
          <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
            IRMAA is an extra monthly surcharge added to your Part B and Part D premiums if your income exceeds certain thresholds. It is determined by Medicare using your tax return from <strong className="text-[#1A1A2E]">two years prior</strong> — so your 2026 IRMAA is based on your <strong className="text-[#1A1A2E]">2024 Modified Adjusted Gross Income (MAGI)</strong>.
          </p>
          <div className="bg-[#FEF3C7] border border-[#E8A020] rounded-xl px-5 py-4 flex gap-3 items-start">
            <AlertCircle size={16} className="text-[#E8A020] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#92400E]">
              <strong>If your income dropped significantly</strong> due to retirement, loss of a spouse, divorce, or other life event, you can appeal your IRMAA determination using SSA Form SSA-44. A Medicare broker can help you navigate this.
            </p>
          </div>
        </motion.div>

        {/* Calculator inputs */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Filing status */}
          <p className="text-xs font-semibold text-[#6B7280] mb-3">Select how you file your taxes:</p>
          <div className="flex flex-wrap gap-4 mb-6">
            {([
              { value: "individual", label: "Individual" },
              { value: "joint",      label: "Married Filing Jointly" },
              { value: "mfs",        label: "Married Filing Separately" },
            ] as const).map((s) => (
              <label key={s.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="filing"
                  value={s.value}
                  checked={filingStatus === s.value}
                  onChange={() => { setFilingStatus(s.value); resetSelections(); }}
                  className="accent-[#1A72C0] w-4 h-4"
                />
                <span className="text-sm font-semibold text-[#1A1A2E]">{s.label}</span>
              </label>
            ))}
          </div>

          {/* MFS note */}
          {isMfs && (
            <div className="bg-[#FEF3C7] border border-[#E8A020] rounded-xl px-4 py-3 mb-4 flex gap-2 items-start">
              <AlertCircle size={14} className="text-[#E8A020] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#92400E]">
                <strong>Married filing separately:</strong> Your Part B premium uses the individual brackets below. Part D uses a separate, stricter scale — select your income below to see your Part D IRMAA surcharge.
              </p>
            </div>
          )}

          {/* Income bracket — Individual / Joint */}
          {!isMfs && (
            <>
              <p className="text-xs font-semibold text-[#6B7280] mb-2">
                Select the 2024 MAGI income bracket you fall within:
              </p>
              <select
                value={bracketIndex}
                onChange={(e) => handleBracketChange(e.target.value)}
                className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0] bg-white mb-1"
              >
                <option value="">— Select Income Bracket —</option>
                {BRACKETS.map((b, i) => (
                  <option key={i} value={i}>
                    {filingStatus === "individual" ? b.individual : b.joint} — {b.label}
                  </option>
                ))}
              </select>
              <p className="text-[#9CA3AF] text-xs">Based on your 2024 Modified Adjusted Gross Income (MAGI).</p>
            </>
          )}

          {/* Income bracket — Married Filing Separately */}
          {isMfs && (
            <>
              <p className="text-xs font-semibold text-[#6B7280] mb-2">
                Select your 2024 MAGI bracket (married filing separately):
              </p>
              <select
                value={mfsBracketIndex}
                onChange={(e) => { setMfsBracketIndex(e.target.value === "" ? "" : Number(e.target.value)); setKnowsPartD(""); setPartDPremiumInput(""); }}
                className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0] bg-white mb-1"
              >
                <option value="">— Select Income Bracket —</option>
                {MFS_PART_D_BRACKETS.map((b, i) => (
                  <option key={i} value={i}>{b.label}</option>
                ))}
              </select>
              <p className="text-[#9CA3AF] text-xs">Based on your 2024 Modified Adjusted Gross Income (MAGI).</p>
            </>
          )}
        </motion.div>

        {/* Results */}
        <AnimatePresence>
          {showResults && bracket && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Part B result */}
              <div className="bg-[#1A72C0] rounded-2xl p-8 mb-4">
                <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-4">
                  Your 2026 Part B Premium
                </p>
                {isMfs ? (
                  <div className="text-center">
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      Married filing separately beneficiaries use the <strong className="text-white">individual income brackets</strong> for Part B IRMAA. Select your bracket above under the individual scale to see your Part B premium.
                    </p>
                    <p className="text-white/50 text-xs">Standard Part B premium: {fmt$(PART_B_STANDARD_2026)}/month</p>
                  </div>
                ) : bracket && (
                  <>
                    <div className="flex items-center justify-center gap-3 flex-wrap mb-5">
                      <div className="text-center">
                        <p className="text-white/60 text-xs mb-1">Standard Premium</p>
                        <p className="text-white text-2xl font-extrabold">{fmt$(PART_B_STANDARD_2026)}</p>
                      </div>
                      <p className="text-white/40 text-2xl font-light">+</p>
                      <div className="text-center">
                        <p className="text-white/60 text-xs mb-1">IRMAA Surcharge</p>
                        <p className="text-[#E8A020] text-2xl font-extrabold">{fmt$(bracket.partBSurcharge)}</p>
                      </div>
                      <p className="text-white/40 text-2xl font-light">=</p>
                      <div className="text-center bg-white/10 rounded-xl px-5 py-3">
                        <p className="text-white/60 text-xs mb-1">Your Monthly Part B</p>
                        <p className="text-white text-3xl font-extrabold">{fmt$(partBTotal)}</p>
                      </div>
                    </div>
                    {bracket.partBSurcharge === 0 ? (
                      <p className="text-center text-green-400 text-sm font-semibold">
                        ✓ Your income is below the IRMAA threshold — you pay the standard premium only.
                      </p>
                    ) : (
                      <p className="text-center text-white/60 text-xs">
                        IRMAA surcharge of {fmt$(bracket.partBSurcharge)}/month is billed separately by Medicare.
                      </p>
                    )}
                  </>
                )}
              </div>

              {/* Part D section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
                <p className="text-xs font-semibold text-[#6B7280] mb-3">Do you know your Part D plan premium?</p>
                <div className="flex gap-6 mb-5">
                  {(["yes", "no"] as const).map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="knowsPartD"
                        value={v}
                        checked={knowsPartD === v}
                        onChange={() => { setKnowsPartD(v); setPartDPremiumInput(""); setPartDError(""); }}
                        className="accent-[#1A72C0] w-4 h-4"
                      />
                      <span className="text-sm font-semibold text-[#1A1A2E] capitalize">{v === "yes" ? "Yes" : "No / Not sure"}</span>
                    </label>
                  ))}
                </div>

                {knowsPartD === "yes" && (
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-[#6B7280] mb-1.5">
                      Enter your monthly Part D plan premium ($)
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={500}
                      step={0.01}
                      value={partDPremiumInput}
                      onChange={(e) => handlePartDInput(e.target.value)}
                      placeholder="e.g. 42.50"
                      className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0]"
                    />
                    {partDError && (
                      <div className="flex items-center gap-2 text-red-600 text-xs mt-2">
                        <AlertCircle size={13} /> {partDError}
                      </div>
                    )}
                  </div>
                )}

                {showPartDBreakdown && activeSurcharge > 0 && (
                  <div className="border-t border-[#F3F4F6] pt-5">
                    <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wide mb-4">Part D Breakdown</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <div className="text-center">
                        <p className="text-[#6B7280] text-xs mb-1">
                          {knowsPartD === "yes" ? "Your Plan Premium" : "Plan Premium*"}
                        </p>
                        <p className="text-[#1A1A2E] text-xl font-extrabold">
                          {knowsPartD === "yes" && partDPremiumInput ? fmt$(partDPremium) : "$—"}
                        </p>
                      </div>
                      <p className="text-[#9CA3AF] text-xl">+</p>
                      <div className="text-center">
                        <p className="text-[#6B7280] text-xs mb-1">IRMAA Surcharge</p>
                        <p className="text-[#E8A020] text-xl font-extrabold">{fmt$(activeSurcharge)}</p>
                      </div>
                      <p className="text-[#9CA3AF] text-xl">=</p>
                      <div className="text-center bg-[#DBEAFE] rounded-xl px-4 py-3">
                        <p className="text-[#6B7280] text-xs mb-1">Total Part D</p>
                        <p className="text-[#1A72C0] text-xl font-extrabold">
                          {knowsPartD === "yes" && partDPremiumInput && !partDError
                            ? fmt$(partDTotal)
                            : `${fmt$(activeSurcharge)} + your plan premium`}
                        </p>
                      </div>
                    </div>
                    {knowsPartD === "no" && (
                      <p className="text-[#9CA3AF] text-xs mt-3 text-center">
                        *Add your plan's monthly premium to the IRMAA surcharge above to get your total Part D cost.
                      </p>
                    )}
                  </div>
                )}

                {showPartDBreakdown && activeSurcharge === 0 && (
                  <p className="text-green-700 text-sm font-semibold">
                    ✓ No Part D IRMAA surcharge at this income level.
                  </p>
                )}
              </div>

              {/* Combined total (only if individual/joint with Part D premium entered) */}
              {!isMfs && knowsPartD === "yes" && partDPremiumInput && !partDError && bracket && (
                <div className="bg-[#1A72C0] rounded-2xl p-8 mb-4 text-center">
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">
                    Total Estimated Monthly Medicare Cost
                  </p>
                  <p className="text-white text-5xl font-extrabold mb-1">
                    {fmt$(partBTotal + partDTotal)}
                  </p>
                  <p className="text-white/60 text-sm">Part B ({fmt$(partBTotal)}) + Part D ({fmt$(partDTotal)})</p>
                </div>
              )}

              {/* Full bracket table — Individual / Joint */}
              {!isMfs && (
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-4 overflow-x-auto">
                  <h3 className="font-extrabold text-[#1A1A2E] text-base uppercase tracking-wide mb-1">
                    2026 Full IRMAA Bracket Table
                  </h3>
                  <p className="text-[#9CA3AF] text-xs mb-5">
                    Based on 2024 MAGI · {filingStatus === "individual" ? "Individual filer" : "Married filing jointly"}
                  </p>
                  <table className="w-full text-xs min-w-[480px]">
                    <thead>
                      <tr className="border-b-2 border-[#E5E7EB]">
                        <th className="text-left py-2 pr-3 text-[#6B7280] font-semibold">2024 Income</th>
                        <th className="text-right py-2 pr-3 text-[#6B7280] font-semibold">Part B Surcharge</th>
                        <th className="text-right py-2 pr-3 text-[#6B7280] font-semibold">Total Part B</th>
                        <th className="text-right py-2 text-[#6B7280] font-semibold">Part D Surcharge</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F3F4F6]">
                      {BRACKETS.map((b, i) => {
                        const isActive = i === bracketIndex;
                        return (
                          <tr key={i} className={isActive ? "bg-[#DBEAFE]" : ""}>
                            <td className={`py-3 pr-3 font-medium ${isActive ? "text-[#1A72C0] font-bold" : "text-[#4B5563]"}`}>
                              {filingStatus === "individual" ? b.individual : b.joint}
                              {isActive && <span className="ml-1 text-[10px] font-bold text-[#1A72C0]">← YOU</span>}
                            </td>
                            <td className={`py-3 pr-3 text-right font-semibold ${b.partBSurcharge === 0 ? "text-green-600" : "text-[#E8A020]"}`}>
                              {b.partBSurcharge === 0 ? "None" : `+${fmt$(b.partBSurcharge)}`}
                            </td>
                            <td className="py-3 pr-3 text-right font-extrabold text-[#1A1A2E]">
                              {fmt$(b.partBTotal)}
                            </td>
                            <td className={`py-3 text-right font-semibold ${b.partDSurcharge === 0 ? "text-green-600" : "text-[#E8A020]"}`}>
                              {b.partDSurcharge === 0 ? "None" : `+${fmt$(b.partDSurcharge)}`}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {/* MFS Part D bracket table */}
              {isMfs && (
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
                  <h3 className="font-extrabold text-[#1A1A2E] text-base uppercase tracking-wide mb-1">
                    2026 Part D IRMAA — Married Filing Separately
                  </h3>
                  <p className="text-[#9CA3AF] text-xs mb-5">Based on 2024 MAGI</p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-[#E5E7EB]">
                        <th className="text-left py-2 pr-4 text-[#6B7280] font-semibold">2024 Income (MFS)</th>
                        <th className="text-right py-2 text-[#6B7280] font-semibold">Part D Surcharge</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F3F4F6]">
                      {MFS_PART_D_BRACKETS.map((b, i) => {
                        const isActive = i === mfsBracketIndex;
                        return (
                          <tr key={i} className={isActive ? "bg-[#DBEAFE]" : ""}>
                            <td className={`py-3 pr-4 font-medium ${isActive ? "text-[#1A72C0] font-bold" : "text-[#4B5563]"}`}>
                              {b.label}
                              {isActive && <span className="ml-1 text-[10px] font-bold text-[#1A72C0]">← YOU</span>}
                            </td>
                            <td className={`py-3 text-right font-semibold ${b.partDSurcharge === 0 ? "text-green-600" : "text-[#E8A020]"}`}>
                              {b.partDSurcharge === 0 ? "None" : `+${fmt$(b.partDSurcharge)}`}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <p className="text-[#9CA3AF] text-xs mt-4">
                    Part B IRMAA for married filing separately follows the individual income brackets. Contact Medicare or a licensed broker to confirm your specific Part B premium.
                  </p>
                </div>
              )}

              {/* IRMAA appeal info */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
                <div className="flex gap-3 items-start">
                  <Info size={16} className="text-[#1A72C0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-2">Can I Appeal My IRMAA?</h3>
                    <p className="text-[#4B5563] text-sm leading-relaxed mb-3">
                      Yes — if your income dropped significantly in the past 2 years due to a qualifying life event, you may be able to use a more recent tax year. Qualifying events include:
                    </p>
                    <ul className="space-y-1.5 text-sm text-[#4B5563]">
                      {[
                        "Retirement or reduced work hours",
                        "Death of a spouse",
                        "Divorce or annulment",
                        "Loss of income-producing property (not by choice)",
                        "Loss of pension income due to plan termination",
                        "Receipt of settlement from an employer due to closure or bankruptcy",
                      ].map((item) => (
                        <li key={item} className="flex gap-2 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E8A020] flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[#6B7280] text-xs mt-3">
                      File SSA Form SSA-44 with Social Security to request a reconsideration using a more recent year's income.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#1A72C0] rounded-2xl p-8 text-center mb-4">
                <p className="text-white font-extrabold text-lg mb-2">Surprised by Your IRMAA?</p>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  IRMAA can add hundreds of dollars a month to your Medicare costs. Steve can help you understand your notice, explore an appeal if you qualify, and plan your retirement income to minimize future surcharges.
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
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1A72C0] font-bold uppercase tracking-wide text-xs px-6 py-3.5 rounded-lg transition-colors"
                  >
                    <Phone size={13} />
                    Call {PHONE}
                  </a>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={resetSelections}
                  className="text-[#1A72C0] text-sm font-semibold hover:underline"
                >
                  ← Start over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-[#9CA3AF] text-xs mt-8 leading-relaxed max-w-lg mx-auto">
          This calculator is for educational purposes only. IRMAA surcharge amounts are based on 2024 MAGI and are set annually by CMS. Figures may vary. Always confirm your IRMAA with your Medicare notice or a licensed broker.
        </p>
      </div>
    </div>
  );
}
