import type { Metadata } from "next";
import { COMPANY_NAME, SITE_URL, PHONE, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use | A&E Insurance Agency",
  description: "Terms of Use for A&E Insurance Agency website.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-[#1A1A2E] mb-2">Terms of Use</h1>
        <p className="text-[#6B7280] text-sm mb-10">Last updated: July 7, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-[#374151] leading-relaxed">

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website of {COMPANY_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) at{" "}
              <a href={SITE_URL} className="text-[#1A72C0] underline">{SITE_URL}</a>, you agree to
              be bound by these Terms of Use. If you do not agree, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">2. Not Government Affiliated</h2>
            <p>
              {COMPANY_NAME} is an independent insurance agency. This website is not affiliated with,
              endorsed by, or connected to the U.S. government, the federal Medicare program, or any
              state government agency. For official Medicare information, visit{" "}
              <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="text-[#1A72C0] underline">Medicare.gov</a>{" "}
              or call 1-800-MEDICARE (1-800-633-4227).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">3. Informational Purposes Only</h2>
            <p>
              The content on this website is provided for general informational and educational
              purposes only. It does not constitute insurance, legal, financial, or tax advice.
              Coverage, eligibility, premiums, and plan availability vary by location, income, and
              individual circumstances. Always consult a licensed insurance professional before making
              coverage decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">4. Solicitation Disclosure & Licensing</h2>
            <p>
              This website is a solicitation for insurance. By submitting a form, calling our office,
              or requesting information, you consent to being contacted by a licensed insurance agent
              regarding your insurance needs. We may contact you by phone, email, or text message.
              Standard message and data rates may apply.
            </p>
            <p className="mt-3">
              Steve Germain, National Producer Number (NPN): <strong>19921707</strong>. Licensed in Florida and multiple additional states. License status can be verified through the Florida Department of Financial Services at <a href="https://www.myfloridacfo.com" target="_blank" rel="noopener noreferrer" className="text-[#1A72C0] underline">myfloridacfo.com</a> or through the NIPR at <a href="https://www.nipr.com" target="_blank" rel="noopener noreferrer" className="text-[#1A72C0] underline">nipr.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">5. TCPA Consent</h2>
            <p>
              By providing your phone number and submitting any form on this website, you expressly
              consent to receive calls and text messages, including those made using an automatic
              telephone dialing system or pre-recorded voice, from {COMPANY_NAME} and its licensed
              agents at the number you provide. Consent is not a condition of purchase. You may
              opt out at any time by replying STOP to any text message or calling our office.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">6. Accuracy of Information</h2>
            <p>
              We make reasonable efforts to keep content accurate and up to date. However, Medicare
              rules, premiums, and plan availability change annually. We do not warrant that any
              information on this site is current, complete, or free of errors. Premium amounts and
              benefit information are subject to change by the Centers for Medicare & Medicaid
              Services (CMS) and individual carriers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">7. Plan Availability</h2>
            <p>
              Not all plans, carriers, or products mentioned on this website are available in all
              states or service areas. Plan availability, premiums, benefits, and network coverage
              vary by location. We do not offer every plan available in your area. Any information
              we provide is limited to plans we offer in your area. Please contact{" "}
              <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="text-[#1A72C0] underline">Medicare.gov</a>{" "}
              or 1-800-MEDICARE (1-800-633-4227) to get information on all of your options.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">8. Calculator & Tool Disclaimer</h2>
            <p>
              Interactive tools and calculators on this website — including Medicare enrollment
              calculators, penalty estimators, and IRMAA calculators — are provided for
              illustrative and educational purposes only. Results are estimates based on information
              you provide and publicly available data. They do not constitute insurance, financial,
              or legal advice. Actual premiums, penalties, and eligibility determinations are made
              by the Centers for Medicare & Medicaid Services (CMS) and Social Security
              Administration (SSA). Always verify your specific situation with a licensed broker
              or government agency before making enrollment decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">9. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, and downloadable
              materials — is the property of {COMPANY_NAME} or its content suppliers and is
              protected by applicable copyright and intellectual property laws. You may not
              reproduce, distribute, or republish any content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">10. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites, including Medicare.gov,
              CMS.gov, and SSA.gov. These links are provided for convenience only. We are not
              responsible for the content, accuracy, or privacy practices of any third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">11. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {COMPANY_NAME} shall not be liable for any
              direct, indirect, incidental, or consequential damages arising from your use of this
              website or reliance on any information provided herein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">12. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms of Use at any time. Changes are effective
              immediately upon posting. Continued use of this website after changes are posted
              constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">13. Governing Law</h2>
            <p>
              These Terms of Use are governed by the laws of the State of Florida, without regard
              to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">14. Contact Us</h2>
            <p>
              If you have questions about these Terms of Use, please contact us:
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
