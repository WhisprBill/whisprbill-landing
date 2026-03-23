import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | WhisprBill",
  description: "Terms and Conditions for using WhisprBill.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <article className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <h1 className="text-3xl font-bold text-secondary sm:text-4xl">
                Terms of Service
              </h1>
              <p className="mt-3 text-sm text-accent/70 sm:text-base">
                Last Updated On: March 21, 2026
              </p>

              <div className="mt-8 space-y-8 text-sm leading-relaxed text-accent/80 sm:text-base">
                <section>
                  <h2 className="text-xl font-semibold text-secondary">1. Introduction</h2>
                  <p className="mt-2">
                    These Terms and Conditions ("Terms") govern your access to and use of the
                    WhisprBill platform, including its website and application (collectively,
                    the "Service").
                  </p>
                  <p className="mt-2">
                    By accessing or using WhisprBill, you agree to be bound by these Terms and
                    our Privacy Policy. If you do not agree, you must not use the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">2. Eligibility</h2>
                  <p className="mt-2">You may use the Service only if:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>You are at least 18 years old</li>
                    <li>You are capable of entering into a legally binding agreement</li>
                    <li>You are not prohibited from using such services under applicable Indian laws</li>
                  </ul>
                  <p className="mt-2">The Service is intended for users located in India.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">3. Description of Service</h2>
                  <p className="mt-2">WhisprBill is a software platform that enables users to:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Create and manage invoices</li>
                    <li>Generate GST-compliant documents</li>
                    <li>Manage customers and inventory</li>
                    <li>Use AI-assisted features for data entry and workflows</li>
                  </ul>
                  <p className="mt-2">
                    The Service may evolve over time and features may be added, modified, or removed.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">4. License to Use the Service</h2>
                  <p className="mt-2">
                    We grant you a limited, non-exclusive, non-transferable, revocable license to
                    use the Service for your business or personal use, subject to these Terms.
                  </p>
                  <p className="mt-2">You do not acquire any ownership rights in the Service.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">5. Account Responsibility</h2>
                  <p className="mt-2">You are responsible for:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>All activities under your account</li>
                    <li>Ensuring information provided is accurate and updated</li>
                  </ul>
                  <p className="mt-2">
                    You must notify us immediately of any unauthorized access or security breach.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">6. AI-Assisted Features Disclaimer</h2>
                  <p className="mt-2">
                    WhisprBill includes AI-powered features to assist with data entry and workflows.
                  </p>
                  <p className="mt-2">You acknowledge that:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>AI-generated outputs may be inaccurate, incomplete, or outdated</li>
                    <li>AI outputs are not authoritative or legally binding</li>
                    <li>You are solely responsible for reviewing and verifying all data before use</li>
                  </ul>
                  <p className="mt-2">
                    WhisprBill does not guarantee the accuracy of AI-generated content.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">7. User Responsibilities</h2>
                  <p className="mt-2">You agree that:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>All data entered is accurate and lawful</li>
                    <li>You will review all invoices before using them</li>
                    <li>You are responsible for compliance with applicable laws, including GST</li>
                  </ul>
                  <p className="mt-2">WhisprBill is not a tax advisor or legal authority.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">8. Payments and Subscriptions</h2>
                  <p className="mt-2">WhisprBill offers free and paid plans.</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Paid subscriptions may be billed monthly or annually</li>
                    <li>Payments are processed through third-party providers</li>
                    <li>By subscribing, you authorize applicable recurring charges</li>
                  </ul>
                  <p className="mt-2 font-medium text-secondary">No Refund Policy</p>
                  <p className="mt-2">All payments are final.</p>
                  <p className="mt-2">No refunds will be provided for:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Subscription fees</li>
                    <li>Partial usage</li>
                    <li>Unused time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">9. Data Storage and Usage</h2>
                  <p className="mt-2">
                    WhisprBill stores user data including invoices, customer data, and business information.
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>You retain ownership of your data</li>
                    <li>You are responsible for ensuring accuracy of stored data</li>
                    <li>Data deletion features may be provided, but we do not guarantee permanent storage</li>
                  </ul>
                  <p className="mt-2">
                    We may process and store data as required to provide the Service and comply with applicable laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">10. Prohibited Use</h2>
                  <p className="mt-2">You agree not to:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Use the Service for illegal or fraudulent activities</li>
                    <li>Generate misleading or unlawful documents</li>
                    <li>Attempt to access unauthorized data</li>
                    <li>Reverse engineer, copy, or misuse the platform</li>
                    <li>Interfere with system performance or security</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">11. Intellectual Property</h2>
                  <p className="mt-2">
                    All rights, title, and interest in the Service, including software, design,
                    branding, and content, are owned by WhisprBill.
                  </p>
                  <p className="mt-2">You may not:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Copy, modify, or distribute the Service</li>
                    <li>Reverse engineer or extract source code</li>
                    <li>Use branding without permission</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">12. Third-Party Services</h2>
                  <p className="mt-2">
                    The Service may integrate with third-party providers such as payment gateways.
                  </p>
                  <p className="mt-2">We are not responsible for:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Failures, errors, or downtime caused by third-party services</li>
                    <li>Any loss arising from use of such services</li>
                  </ul>
                  <p className="mt-2">
                    Your use of third-party services is subject to their terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">13. Limitation of Liability</h2>
                  <p className="mt-2">To the maximum extent permitted by law:</p>
                  <p className="mt-2">WhisprBill shall not be liable for:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Errors in invoices or financial data</li>
                    <li>Tax miscalculations or compliance issues</li>
                    <li>Loss of revenue, business, or data</li>
                    <li>AI-generated inaccuracies</li>
                    <li>System downtime or technical failures</li>
                  </ul>
                  <p className="mt-2">
                    Our total liability shall not exceed the amount paid by you for the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">14. Disclaimer of Warranties</h2>
                  <p className="mt-2">
                    The Service is provided on an "as is" and "as available" basis.
                  </p>
                  <p className="mt-2">We do not guarantee that:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>The Service will be uninterrupted or error-free</li>
                    <li>Outputs will be accurate or reliable</li>
                    <li>The platform will meet your expectations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">15. Indemnification</h2>
                  <p className="mt-2">
                    You agree to indemnify and hold harmless WhisprBill and its operators from
                    any claims, damages, or losses arising from:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Your use of the Service</li>
                    <li>Your violation of these Terms</li>
                    <li>Any incorrect or unlawful data you provide</li>
                    <li>Any third-party claims resulting from your actions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">16. Termination</h2>
                  <p className="mt-2">We may suspend or terminate your access if:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>You violate these Terms</li>
                    <li>Required by law</li>
                    <li>Necessary to protect the platform or other users</li>
                  </ul>
                  <p className="mt-2">You may stop using the Service at any time.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">17. Communication</h2>
                  <p className="mt-2">
                    By using the Service, you consent to receive communications including:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Emails</li>
                    <li>SMS or messaging notifications</li>
                    <li>Service-related updates</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">18. Dispute Resolution and Governing Law</h2>
                  <p className="mt-2">These Terms are governed by the laws of India.</p>
                  <p className="mt-2">
                    Any disputes shall be resolved by arbitration in Bengaluru, India, in accordance
                    with applicable laws. Courts in Bengaluru shall have jurisdiction.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">19. Force Majeure</h2>
                  <p className="mt-2">
                    We are not liable for delays or failures caused by events beyond our control,
                    including natural disasters, technical failures, or third-party outages.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">20. Changes to Terms</h2>
                  <p className="mt-2">We may update these Terms from time to time.</p>
                  <p className="mt-2">
                    Continued use of the Service after changes constitutes acceptance of the updated Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">21. Contact</h2>
                  <p className="mt-2">
                    For any questions or concerns regarding these Terms, you may contact us at:
                  </p>
                  <p className="mt-2 font-medium text-secondary">contact@whisprbill.com</p>
                </section>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
