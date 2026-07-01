"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

// EDIT: Replace with real client testimonials from your reviews
const TESTIMONIALS = [
  {
    quote:
      "A&E Insurance Agency made my Medicare decision so much easier. They explained every option clearly and found me a plan that saves me money every month. I couldn't be happier!",
    name: "Maria G.",
    location: "Miami, FL",
  },
  {
    quote:
      "I had no idea how confusing Medicare could be until I called A&E. The team walked me through every option with zero pressure. I felt like I finally understood my coverage.",
    name: "Robert M.",
    location: "Hialeah, FL",
  },
  {
    quote:
      "After years of worrying about retirement and healthcare costs, I finally feel confident. A&E truly has my best interests at heart — they never pushed me toward anything I didn't need.",
    name: "Carol S.",
    location: "Kendall, FL",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-[#E8A020] text-xl">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          heading="What Our Clients Say"
          subheading="Real stories from real people we've helped navigate Medicare and retirement."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <AnimatedSection key={testimonial.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl shadow-md p-8 h-full flex flex-col">
                <span className="text-6xl text-[#1A72C0] opacity-20 leading-none font-serif mb-2">&ldquo;</span>
                <StarRating />
                <p className="text-[#1A1A2E] leading-relaxed flex-grow italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="font-bold text-[#1A1A2E]">{testimonial.name}</p>
                  <p className="text-sm text-[#6B7280]">{testimonial.location}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
