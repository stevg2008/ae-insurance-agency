"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", zip: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      // Redirect to PDF download
      window.open("/medicare-decoded-guide.pdf", "_blank");
      onClose();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#9CA3AF] hover:text-[#1A1A2E] transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-2">
          Get Your Free Medicare Guide
        </h2>
        <p className="text-[#4B5563] text-sm mb-6">
          Enter your information below to receive your comprehensive Medicare guide.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#1A1A2E] mb-1">First Name</label>
              <input
                name="firstName"
                placeholder="John"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1A1A2E] mb-1">Last Name</label>
              <input
                name="lastName"
                placeholder="Doe"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1A1A2E] mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1A1A2E] mb-1">Phone Number</label>
            <input
              name="phone"
              type="tel"
              placeholder="(555) 555-5555"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1A1A2E] mb-1">Zip Code</label>
            <input
              name="zip"
              placeholder="12345"
              value={form.zip}
              onChange={handleChange}
              className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0] transition-colors"
            />
          </div>

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E8A020] hover:bg-[#d08f18] text-white font-extrabold uppercase tracking-wide text-sm py-3.5 rounded-lg transition-colors disabled:opacity-60"
          >
            {loading ? "Sending…" : "Get Your Free Guide"}
          </button>
        </form>
      </div>
    </div>
  );
}
