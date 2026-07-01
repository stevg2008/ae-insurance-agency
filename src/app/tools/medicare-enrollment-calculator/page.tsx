import type { Metadata } from "next";
import EnrollmentCalculatorClient from "./EnrollmentCalculatorClient";

export const metadata: Metadata = {
  title: "Medicare Enrollment Calculator | A&E Insurance Agency",
  description: "Find your Medicare Initial Enrollment Period. Enter your date of birth to instantly calculate the exact 7-month window when you can enroll in Medicare without penalty.",
};

export default function EnrollmentCalculatorPage() {
  return <EnrollmentCalculatorClient />;
}
