"use client";

import Link from "next/link";
import {
  COMPANY_NAME,
  PHONE,
  EMAIL,
  BUSINESS_HOURS,
  LOCATIONS,
  SOCIAL,
} from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0071BB] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <img
              src="/A&E Transparent Logo (1).png"
              alt="A&E Insurance Agency"
              className="h-24 w-auto object-contain mb-5 brightness-0 invert"
            />
            <div className="flex gap-4 mt-2">
              <a href={SOCIAL.facebook} aria-label="Facebook" className="text-blue-100 hover:text-[#E8A020] transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={SOCIAL.instagram} aria-label="Instagram" className="text-blue-100 hover:text-[#E8A020] transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href={SOCIAL.tiktok} aria-label="TikTok" className="text-blue-100 hover:text-[#E8A020] transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/></svg>
              </a>
              <a href={SOCIAL.youtube} aria-label="YouTube" className="text-blue-100 hover:text-[#E8A020] transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-blue-100 text-sm">{LOCATIONS[0].address}</li>
              <li>
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-blue-100 hover:text-white text-sm transition-colors">{PHONE}</a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-blue-100 hover:text-white text-sm transition-colors">{EMAIL}</a>
              </li>
              <li className="text-blue-100 text-sm">{BUSINESS_HOURS}</li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                { label: "Terms of Use", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-blue-100 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Medicare", href: "/medicare" },
                { label: "Retirement", href: "/retirement" },
                { label: "Life Insurance", href: "/life-insurance" },
                { label: "Critical Illness", href: "/critical-illness" },
                { label: "FAQ", href: "/resources" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-blue-100 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Disclaimer + Copyright */}
      <div className="border-t border-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-3 text-center">
            <p className="text-blue-100 text-xs leading-relaxed max-w-4xl mx-auto">
              This is a solicitation for insurance. Submitting information or calling numbers listed on this website will direct you to a licensed Agent/Broker.
            </p>
            <p className="text-blue-100 text-xs leading-relaxed max-w-4xl mx-auto">
              <strong className="text-blue-100">Important disclosures about Medicare Plans:</strong> Medicare has neither endorsed nor reviewed this information. Not connected or affiliated with any United States Government or State agency. We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact <a href="https://www.medicare.gov" className="underline hover:text-white transition-colors">Medicare.gov</a> or 1-800-MEDICARE to get information on all of your options.
            </p>
            <p className="text-blue-200 text-xs">
              &copy; {currentYear} {COMPANY_NAME}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
