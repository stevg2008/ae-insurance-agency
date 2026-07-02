"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, AlertCircle, Phone, CheckCircle2 } from "lucide-react";
import { PHONE, WEBINAR_URL } from "@/lib/constants";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const MONTH_DAYS: Record<number, number> = {
  1:31, 2:29, 3:31, 4:30, 5:31, 6:30,
  7:31, 8:31, 9:30, 10:31, 11:30, 12:31,
};

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 80 }, (_, i) => currentYear - 64 + i - 15).reverse();

interface Result {
  iepStart: Date;
  iepEnd: Date;
  birthdayMonth: Date; // the "Medicare birthday month" (may shift if born on 1st)
  bornOnFirst: boolean;
  turnsAge: number;
  birthdayYear: number;
}

function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  // Clamp to last day of month if overflow (e.g. Jan 31 + 1 month = Feb 28)
  return d;
}

function lastDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function firstDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function calculate(month: number, day: number, year: number): Result {
  const dob = new Date(year, month - 1, day);

  // Medicare rule: if born on the 1st of the month, your Medicare
  // "birthday month" is treated as the PREVIOUS calendar month.
  const bornOnFirst = day === 1;

  // The year the person turns 65
  const birthdayYear = year + 65;

  // Their actual 65th birthday date
  const birthday65 = new Date(birthdayYear, month - 1, day);

  // Medicare birthday month — shifts back one month if born on 1st
  const medicareBirthdayMonth = bornOnFirst
    ? new Date(birthdayYear, month - 2, 1)  // prior month
    : new Date(birthdayYear, month - 1, 1); // same month

  // IEP = 3 months before Medicare birthday month through 3 months after
  const iepStart = firstDayOfMonth(addMonths(medicareBirthdayMonth, -3));
  const iepEnd = lastDayOfMonth(addMonths(medicareBirthdayMonth, 3));

  return { iepStart, iepEnd, birthdayMonth: medicareBirthdayMonth, bornOnFirst, turnsAge: 65, birthdayYear };
}

function fmt(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function fmtMonth(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

const PERIOD_LABELS = [
  { offset: -3, label: "Month 1 of 7", note: "3 months before your Medicare birthday month" },
  { offset: -2, label: "Month 2 of 7", note: "2 months before your Medicare birthday month" },
  { offset: -1, label: "Month 3 of 7", note: "1 month before your Medicare birthday month" },
  { offset:  0, label: "Month 4 of 7 ★", note: "Your Medicare birthday month — coverage starts the 1st of this month if you enroll in months 1–3" },
  { offset:  1, label: "Month 5 of 7", note: "1 month after — coverage delayed 1 month" },
  { offset:  2, label: "Month 6 of 7", note: "2 months after — coverage delayed 2 months" },
  { offset:  3, label: "Month 7 of 7", note: "3 months after — coverage delayed 3 months" },
];

export default function EnrollmentCalculatorClient() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  const availableDays = month
    ? Array.from({ length: MONTH_DAYS[Number(month)] }, (_, i) => i + 1)
    : [];

  const handleCalculate = () => {
    setError("");
    if (!month || !day || !year) {
      setError("Please select your birth month, day, and year.");
      return;
    }
    const m = Number(month), d = Number(day), y = Number(year);
    const dob = new Date(y, m - 1, d);
    if (isNaN(dob.getTime())) {
      setError("Invalid date. Please check your entries.");
      return;
    }
    setResult(calculate(m, d, y));
  };

  const handleReset = () => {
    setMonth(""); setDay(""); setYear("");
    setResult(null); setError("");
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
            <CalendarDays size={26} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-3">
            Medicare Enrollment Calculator
          </h1>
          <p className="text-[#4B5563] leading-relaxed max-w-lg mx-auto">
            Enter your date of birth to instantly calculate your 7-month Initial Enrollment Period — the window when you can sign up for Medicare without a late penalty.
          </p>
        </motion.div>

        {/* Calculator card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-base font-extrabold text-[#1A1A2E] uppercase tracking-wide mb-6">
            Enter Your Date of Birth
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Month */}
            <div>
              <label className="block text-xs font-semibold text-[#6B7280] mb-1.5">Birth Month</label>
              <select
                value={month}
                onChange={(e) => { setMonth(e.target.value); setDay(""); }}
                className="w-full border border-[#D1D5DB] rounded-lg px-3 py-3 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#0071BB] bg-white"
              >
                <option value="">Month</option>
                {MONTHS.map((m, i) => (
                  <option key={m} value={i + 1}>{m}</option>
                ))}
              </select>
            </div>

            {/* Day */}
            <div>
              <label className="block text-xs font-semibold text-[#6B7280] mb-1.5">Birth Day</label>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                disabled={!month}
                className="w-full border border-[#D1D5DB] rounded-lg px-3 py-3 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#0071BB] bg-white disabled:opacity-40"
              >
                <option value="">Day</option>
                {availableDays.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div>
              <label className="block text-xs font-semibold text-[#6B7280] mb-1.5">Birth Year</label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full border border-[#D1D5DB] rounded-lg px-3 py-3 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#0071BB] bg-white"
              >
                <option value="">Year</option>
                {YEARS.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm mb-4">
              <AlertCircle size={15} />
              {error}
            </div>
          )}

          <button
            onClick={handleCalculate}
            className="w-full bg-[#0071BB] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm py-4 rounded-lg transition-colors"
          >
            Calculate My Enrollment Period
          </button>
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
              {/* Born on 1st notice */}
              {result.bornOnFirst && (
                <div className="bg-[#FFFBEB] border border-[#E8A020] rounded-xl p-4 mb-4 flex gap-3 items-start">
                  <AlertCircle size={16} className="text-[#E8A020] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#92400E] leading-relaxed">
                    <strong>Birthday on the 1st:</strong> Medicare considers your birthday to be the last day of the prior month. Your enrollment window has been shifted one month earlier.
                  </p>
                </div>
              )}

              {/* Main result */}
              <div className="bg-[#0071BB] rounded-2xl p-8 mb-4 text-center">
                <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-3">
                  Your Initial Enrollment Period
                </p>
                <p className="text-white text-3xl md:text-4xl font-extrabold mb-2">
                  {fmt(result.iepStart)}
                </p>
                <p className="text-white/50 text-sm mb-2">through</p>
                <p className="text-white text-3xl md:text-4xl font-extrabold mb-5">
                  {fmt(result.iepEnd)}
                </p>
                <div className="inline-block bg-white/10 rounded-lg px-5 py-2">
                  <p className="text-white/80 text-sm">
                    You turn 65 in <strong className="text-white">{fmtMonth(result.birthdayMonth)}</strong>
                    {result.bornOnFirst ? " (Medicare birthday shifted to prior month)" : ""}
                  </p>
                </div>
              </div>

              {/* 7-month breakdown */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
                <h3 className="font-extrabold text-[#1A1A2E] text-base uppercase tracking-wide mb-5">
                  Your 7-Month Window — Month by Month
                </h3>
                <div className="space-y-3">
                  {PERIOD_LABELS.map((p) => {
                    const monthDate = addMonths(result.birthdayMonth, p.offset);
                    const isbirthMonth = p.offset === 0;
                    return (
                      <div
                        key={p.offset}
                        className={`flex gap-4 items-start rounded-xl p-4 ${isbirthMonth ? "bg-[#DBEAFE] border border-[#0071BB]" : "bg-[#F3F4F6]"}`}
                      >
                        <CheckCircle2
                          size={16}
                          className={`flex-shrink-0 mt-0.5 ${isbirthMonth ? "text-[#0071BB]" : "text-[#9CA3AF]"}`}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-0.5">
                            <span className={`text-xs font-bold uppercase tracking-wide ${isbirthMonth ? "text-[#0071BB]" : "text-[#6B7280]"}`}>
                              {p.label}
                            </span>
                            <span className={`font-extrabold text-sm ${isbirthMonth ? "text-[#1A1A2E]" : "text-[#1A1A2E]"}`}>
                              {fmtMonth(monthDate)}
                            </span>
                          </div>
                          <p className="text-xs text-[#6B7280] leading-relaxed">{p.note}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key rules */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
                <h3 className="font-extrabold text-[#1A1A2E] text-base uppercase tracking-wide mb-5">
                  What This Means for You
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Enroll in months 1–3 (before your birthday month)", body: "Coverage starts the 1st of your Medicare birthday month — the earliest possible start date." },
                    { title: "Enroll in month 4 (your birthday month)", body: "Coverage starts the 1st of the following month." },
                    { title: "Enroll in months 5–7 (after your birthday month)", body: "Coverage is delayed by 1–3 months depending on when you enroll." },
                    { title: "Miss the window entirely", body: "You may face a permanent late enrollment penalty added to your Part B premium for as long as you have Medicare." },
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
              </div>

              {/* CTA */}
              <div className="bg-[#0071BB] rounded-2xl p-8 text-center mb-4">
                <p className="text-white font-extrabold text-lg mb-2">Have Questions About Your Enrollment?</p>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Don't navigate Medicare alone. Steve will review your timeline, compare your options, and make sure you enroll at exactly the right time — for free.
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

              {/* Reset */}
              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="text-[#0071BB] text-sm font-semibold hover:underline"
                >
                  ← Calculate a different birthday
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Disclaimer */}
        <p className="text-center text-[#9CA3AF] text-xs mt-8 leading-relaxed max-w-lg mx-auto">
          This calculator is for educational purposes only. Enrollment rules may vary based on your specific situation, including whether you have employer coverage. Always confirm your dates with a licensed Medicare broker.
        </p>
      </div>
    </div>
  );
}
