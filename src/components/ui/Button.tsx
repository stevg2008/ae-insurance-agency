"use client";

import { clsx } from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-[#E8A020] text-white hover:scale-[1.02] hover:bg-[#D4911B] focus:ring-[#E8A020] shadow-md",
    secondary:
      "border-2 border-[#1A72C0] text-[#1A72C0] hover:bg-[#1A72C0] hover:text-white focus:ring-[#1A72C0]",
    ghost: "text-[#1A72C0] hover:underline focus:ring-[#1A72C0]",
  };

  const classes = clsx(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
