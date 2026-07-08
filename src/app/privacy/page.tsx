import type { Metadata } from "next";
import { COMPANY_NAME, SITE_URL, PHONE, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | A&E Insurance Agency",
  description: "Privacy Policy for A&E Insurance Agency website.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-[#1A1A2E] mb-2">Privacy Policy</h1>
        <p className="text-[#6B7280] text-sm mb-10">Last updated: July 7, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-[#374151] leading-relaxed">

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">1. Introduction</h2>
            <p>
              {COMPANY_NAME} ("we," "us," or "our") is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit{" "}
              <a href={SITE_URL} className="text-[#1A72C0] underline">{SITE_URL}</a>{" "}
              or submit information through our forms and tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Personal information</strong> you voluntarily provide, including your name,
                email address, phone number, and ZIP code when submitting a contact form, booking
                a consultation, or registering for a webinar.
              </li>
              <li>
                <strong>Usage data</strong> automatically collected when you visit our website,
                including IP address, browser type, pages visited, and time spent on pages.
              </li>
              <li>
                <strong>Cookies and tracking technologies</strong> used by analytics tools (such as
                Google Analytics) to understand how visitors use our website.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respond to your inquiries and provide insurance guidance</li>
              <li>Schedule and confirm consultations or appointments</li>
              <li>Send educational content and follow-up communications related to your request</li>
              <li>Improve our website and understand visitor behavior</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">4. How We Share Your Information</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share your information
              with:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>GoHighLevel (CRM)</strong> — our customer relationship management platform
                used to store and manage contact records and appointment bookings.
              </li>
              <li>
                <strong>Licensed insurance carriers</strong> — only when you request a quote or
                enrollment assistance, and only to the extent necessary to fulfill your request.
              </li>
              <li>
                <strong>Service providers</strong> — third-party vendors who assist us in operating
                our website and conducting our business, bound by confidentiality agreements.
              </li>
              <li>
                <strong>Legal requirements</strong> — when required by law or in response to valid
                legal processes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">5. TCPA / SMS and Email Communications</h2>
            <p>
              By submitting a form on this website, you consent to receive communications from
              {" "}{COMPANY_NAME}, including phone calls, emails, and SMS/text messages related to
              your insurance inquiry. You may opt out of text messages at any time by replying STOP.
              You may unsubscribe from emails by clicking the unsubscribe link in any email we send.
              Standard message and data rates may apply.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">6. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to analyze website traffic and
              improve your experience. You can control cookie settings through your browser.
              Disabling cookies may affect the functionality of certain features on our website.
              We use Google Analytics to collect aggregated, anonymized usage data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes
              described in this policy, unless a longer retention period is required by law. You
              may request deletion of your personal information at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">8. Health Information & HIPAA</h2>
            <p>
              As an independent insurance broker, we may receive or discuss health-related information
              in connection with your insurance needs — such as Medicare eligibility, coverage gaps,
              or prescription information. We treat all health-related information with the same
              care as personal information and share it only as necessary to fulfill your request
              (e.g., obtaining quotes or enrolling you in a plan). When we work with insurance
              carriers who are HIPAA-covered entities, those carriers&apos; own HIPAA privacy notices apply
              to information they hold about you. We implement reasonable safeguards for any
              health-related data we receive.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">9. Do Not Sell My Personal Information</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties for their
              own marketing purposes. This applies to residents of all states, including California
              (CCPA) and other states with similar consumer privacy laws. If you have questions
              about how your information is used, please contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">10. Your Rights (Florida &amp; Other Residents)</h2>
            <p>
              Depending on your state of residence, you may have rights including the right to
              access, correct, or delete personal information we hold about you. To exercise these
              rights, please contact us using the information below. We will respond within
              <strong> 45 days</strong> of receiving your request, as required under applicable law.
              In some cases, we may need to verify your identity before fulfilling a request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">11. Children's Privacy</h2>
            <p>
              Our website is not directed to children under the age of 13. We do not knowingly
              collect personal information from children. If you believe we have inadvertently
              collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">12. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites such as Medicare.gov, CMS.gov,
              and SSA.gov. We are not responsible for the privacy practices of these sites and
              encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">13. Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect
              your personal information. However, no method of transmission over the internet is
              100% secure. We cannot guarantee absolute security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">14. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be
              indicated by a revised "Last updated" date at the top of this page. Continued use of
              our website after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">15. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights,
              please contact us:
            </p>
            <address className="not-italic mt-3 space-y-1 text-[#374151]">
              <p className="font-semibold">{COMPANY_NAME}</p>
              <p>12855 SW 136th Avenue, Suite 105, Miami, FL 33186</p>
              <p>
                Phone:{" "}
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-[#1A72C0] underline">{PHONE}</a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#1A72C0] underline">{EMAIL}</a>
              </p>
            </address>
          </section>

        </div>
      </div>
    </div>
  );
}
