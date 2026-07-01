import type { Metadata } from "next";
import VideoClient from "./VideoClient";

export const metadata: Metadata = {
  title: "Watch Medicare Made Simple — Your Free Workshop | A&E Insurance Agency",
  description: "You're in! Watch the Medicare Made Simple workshop now and discover how to choose the right plan with zero pressure.",
  robots: "noindex", // keep this page out of search — it's post-optin only
};

export default function VideoPage() {
  return <VideoClient />;
}
