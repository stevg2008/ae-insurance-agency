"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { WEBINAR_URL } from "@/lib/constants";

const navLinks = [
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Medicare", href: "/medicare" },
      { label: "Health Insurance", href: "/health-insurance" },
      { label: "Retirement", href: "/retirement" },
      { label: "Life Insurance", href: "/life-insurance" },
      { label: "Critical Illness", href: "/critical-illness" },
    ],
  },
  {
    label: "Learn",
    href: "#",
    children: [
      { label: "FAQ", href: "/resources" },
      { label: "Enrollment Calculator", href: "/tools/medicare-enrollment-calculator" },
      { label: "Part B Penalty Calculator", href: "/tools/part-b-penalty-calculator" },
      { label: "Part D Penalty Calculator", href: "/tools/part-d-penalty-calculator" },
      { label: "IRMAA Calculator", href: "/tools/irmaa-calculator" },
    ],
  },
  { label: "Blog", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 100);
  };

  return (
    <header
      id="global-header"
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/logo.jpg"
              alt="A&E Insurance Agency"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-[#1A1A2E] hover:text-[#1A72C0] font-medium text-sm transition-colors">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5"
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-[#1A1A2E] hover:bg-[#EBF5FF] hover:text-[#1A72C0] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#1A1A2E] hover:text-[#1A72C0] font-medium text-sm transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <a
            href="/contact"
            className="hidden lg:inline-flex items-center px-4 py-2 bg-[#E8A020] text-white text-sm font-semibold rounded-lg hover:bg-[#D4911B] transition-colors shadow-md whitespace-nowrap"
          >
            Schedule a Consultation
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-[#1A1A2E]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-2 text-[#1A1A2E] hover:text-[#1A72C0] font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block py-1.5 pl-4 text-sm text-[#6B7280] hover:text-[#1A72C0]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <a
                href="/contact"
                className="block mt-4 px-4 py-3 bg-[#E8A020] text-white text-center font-semibold rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Schedule a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
