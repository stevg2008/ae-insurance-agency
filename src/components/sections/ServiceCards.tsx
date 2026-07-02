"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, TrendingUp, HeartPulse, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

// EDIT: Update service card content as needed
const SERVICES = [
  {
    icon: Shield,
    title: "Medicare Solutions",
    description: "Find the right Medicare plan for your specific needs and budget.",
    href: "/medicare",
  },
  {
    icon: TrendingUp,
    title: "Retirement Income Planning",
    description: "Create lasting income strategies that keep pace with your lifestyle.",
    href: "/retirement",
  },
  {
    icon: HeartPulse,
    title: "Protection Gap Coverage",
    description: "Guard against catastrophic costs from cancer, heart attack, and stroke.",
    href: "/major-exposures",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-20 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          heading="How We Help You"
          subheading="Comprehensive guidance for every stage of your Medicare and retirement journey."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl shadow-md p-8 h-full flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#EBF5FF] flex items-center justify-center mb-5">
                    <Icon size={28} className="text-[#1A72C0]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{service.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed flex-grow">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-[#1A72C0] font-semibold mt-6 hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
