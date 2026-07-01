import type { Metadata } from "next";
import WatchClient from "./WatchClient";

export const metadata: Metadata = {
  title: "Watch Medicare Made Simple — Free Webinar | A&E Insurance Agency",
  description:
    "Watch our free Medicare webinar and learn how to choose the right plan, avoid costly mistakes, and get lifetime support — at no cost to you.",
};

export default function WatchPage() {
  return <WatchClient />;
}
