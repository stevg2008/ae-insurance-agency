"use client";

import { useEffect } from "react";

export default function WatchLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.setAttribute("data-funnel", "true");
    return () => document.body.removeAttribute("data-funnel");
  }, []);

  return <>{children}</>;
}
