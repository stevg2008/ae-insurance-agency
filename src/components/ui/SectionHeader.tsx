"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  label?: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  heading,
  subheading,
  centered = true,
}: SectionHeaderProps) {
  return (
    <AnimatedSection className={clsx("mb-12", centered && "text-center")}>
      {label && (
        <span className="text-sm font-semibold uppercase tracking-widest text-[#1A72C0] mb-2 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
        {heading}
      </h2>
      {subheading && (
        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">{subheading}</p>
      )}
    </AnimatedSection>
  );
}

// clsx inline since it's a small util
function clsx(...args: (string | boolean | undefined)[]) {
  return args.filter(Boolean).join(" ");
}
