"use client";

import { WEBINAR_URL, WEBINAR_LABEL, PHONE } from "@/lib/constants";
import { Phone } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div id="global-announcement" className="bg-[#1A72C0] text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: phone */}
        <a
          href={`tel:${PHONE.replace(/\D/g, "")}`}
          className="flex items-center gap-1.5 hover:text-[#E8A020] transition-colors font-medium min-h-[36px] py-1"
        >
          <Phone size={13} />
          {PHONE}
        </a>

        {/* Center: value statement */}
        <span className="text-white/90 text-center font-medium">
          Independent Medicare Broker — Licensed in 35 States
        </span>

        {/* Right: trust signal */}
        <span className="text-white/80 hidden sm:block text-xs">
          25+ Carriers Compared
        </span>
      </div>
    </div>
  );
}
