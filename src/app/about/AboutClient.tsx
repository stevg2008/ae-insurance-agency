"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const TEAM = [
  {
    name: "Steve Germain",
    title: "Founder & Licensed Medicare Broker",
    image: "/team/steve.jpg",
    bioLink: "/about/steve",
    bio: [
      "Steve Germain is a licensed independent Medicare insurance broker and author with more than a decade of experience helping more than 4,200 individuals navigate Medicare with clarity and confidence.",
      "His commitment to service was shaped early on by accompanying his grandfather to doctor appointments and witnessing firsthand the real challenges people face when trying to understand Medicare. That personal experience became a professional mission: to make Medicare easier to understand and more accessible for everyone.",
      "Steve truly enjoys making confusing topics easy to understand and believes every client deserves honest guidance, personalized education, and exceptional service. As the founder of A&E Insurance Agency, LLC, he leads a team dedicated to helping people make informed, confident decisions about their healthcare every step of the way.",
    ],
  },
  {
    name: "Miderve Germain",
    title: "Associate Financial Advisor / Medicare Broker",
    image: "/team/miderve.jpg",
    bio: [
      "Miderve Germain is an Associate Financial Advisor holding both her Series 6 and Series 7 licenses, bringing over 14 years of financial planning experience from her time at Northwestern Mutual.",
      "Now proudly part of the A&E Insurance Agency family, she channels that same depth of expertise into helping our clients approach retirement with clarity, confidence, and a plan they truly understand.",
      "Miderve has a genuine passion for guiding people through one of life’s most important transitions — ensuring every client she serves feels informed, empowered, and ready for what’s ahead.",
    ],
  },
];

export default function AboutClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero banner */}
      <section className="bg-gradient-to-br from-[#1A72C0] to-[#0D4A8A] py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#E8A020] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the People Behind A&E
          </h1>
        </motion.div>
      </section>

      {/* Team members */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {TEAM.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`flex flex-col ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-12 items-start`}
          >
            {/* Photo — clickable, opens bio */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <Link href={member.bioLink ?? "/contact"} className="group block">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1A72C0]/0 group-hover:bg-[#1A72C0]/20 transition-colors duration-300 flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-semibold text-center">
                        {member.bioLink ? "View Full Bio →" : "Click to get in touch"}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Name + title under photo */}
              <div className="mt-5 text-center lg:text-left">
                <h2 className="text-2xl font-bold text-[#1A1A2E]">
                  {member.name}
                </h2>
                <p className="text-[#1A72C0] font-semibold mt-1">
                  {member.title}
                </p>

              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 pt-2">
              <div className="w-12 h-1 bg-[#E8A020] rounded mb-6" />
              <div className="space-y-4">
                {member.bio.map((para, j) => (
                  <p key={j} className="text-[#1A1A2E] leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
