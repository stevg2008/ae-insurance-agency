import type { Metadata } from "next";
import BookThankYouClient from "./BookThankYouClient";

export const metadata: Metadata = {
  title: "Your Medicare Guide Is Ready | A&E Insurance Agency",
  description: "Your free copy of Medicare Decoded is ready to download.",
  robots: { index: false, follow: false },
};

export default function BookThankYouPage() {
  return <BookThankYouClient />;
}
