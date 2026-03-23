import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | WhisprBill",
  description: "Privacy Policy for WhisprBill.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <article className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <h1 className="text-3xl font-bold text-secondary sm:text-4xl">
                Privacy Policy
              </h1>
              <p className="mt-3 text-sm text-accent/70 sm:text-base">
                Last Updated: March 21, 2026
              </p>

              <div className="mt-8 space-y-8 text-sm leading-relaxed text-accent/80 sm:text-base">
                <section>
                  <h2 className="text-xl font-semibold text-secondary">1. Introduction</h2>
                  <p className="mt-2">
                    This Privacy Policy explains how WhisprBill ("we", "us", or "our")
                    collects, uses, stores, and protects your information when you access or
                    use our platform (the "Service").
                  </p>
                  <p className="mt-2">
                    By using WhisprBill, you consent to the practices described in this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">2. Who This Policy Applies To</h2>
                  <p className="mt-2">This Privacy Policy applies to:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Users of the WhisprBill application</li>
                    <li>Visitors to our website</li>
                    <li>Individuals who interact with our services or contact us</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">3. Information We Collect</h2>
                  <h3 className="mt-3 font-semibold text-secondary">3.1 Account Information</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number (if provided)</li>
                    <li>
                      Authentication-related data (via third-party providers such as Supabase
                      or OAuth providers)
                    </li>
                  </ul>

                  <h3 className="mt-4 font-semibold text-secondary">3.2 Business and Financial Data</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Invoice data</li>
                    <li>Customer information</li>
                    <li>Product and inventory data</li>
                    <li>Business-related details (including GST-related fields if provided)</li>
                  </ul>

                  <h3 className="mt-4 font-semibold text-secondary">3.3 AI Input and Interaction Data</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Text prompts and inputs provided to AI features</li>
                    <li>Structured data generated from such inputs</li>
                    <li>Interaction history used to improve system performance and reliability</li>
                  </ul>

                  <h3 className="mt-4 font-semibold text-secondary">3.4 Usage and Technical Data</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Server logs and activity records</li>
                    <li>Device and browser information</li>
                    <li>IP address</li>
                  </ul>
                  <p className="mt-2">
                    We may also collect analytics data on our landing page using tools such
                    as Google Analytics.
                  </p>

                  <h3 className="mt-4 font-semibold text-secondary">3.5 Payment Information</h3>
                  <p className="mt-2">
                    Payments are processed via third-party payment providers (e.g., Razorpay).
                  </p>
                  <p className="mt-2">
                    We do not store complete payment card or banking details. Such information
                    is handled by the respective providers in accordance with their policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">4. How We Use Your Information</h2>
                  <p className="mt-2">We use your information to:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Provide and operate the Service</li>
                    <li>Generate invoices and manage workflows</li>
                    <li>Process subscriptions and payments</li>
                    <li>Improve product performance and reliability</li>
                    <li>Debug, monitor, and fix issues</li>
                    <li>Respond to user queries and support requests</li>
                    <li>Detect and prevent fraud or misuse</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                  <p className="mt-2">
                    We may also use aggregated and anonymized data for analytics and product improvement.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">5. AI Data Processing</h2>
                  <p className="mt-2">WhisprBill uses AI to assist with data entry and workflows.</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Inputs provided by you may be processed by third-party AI providers</li>
                    <li>We aim to use providers that do not retain or train on your data</li>
                    <li>However, we do not guarantee zero retention in all cases</li>
                  </ul>
                  <p className="mt-2">We may store prompts and outputs to:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>improve system reliability</li>
                    <li>debug incorrect responses</li>
                    <li>enhance user experience</li>
                  </ul>
                  <p className="mt-2">
                    AI-generated outputs may be inaccurate, and you are responsible for verifying
                    all information before use.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">6. Data Sharing and Disclosure</h2>
                  <p className="mt-2">We do not sell your personal data.</p>
                  <p className="mt-2">We may share your data with:</p>

                  <h3 className="mt-3 font-semibold text-secondary">6.1 Service Providers</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Cloud hosting providers (e.g., AWS)</li>
                    <li>Database and authentication providers (e.g., MongoDB, Supabase)</li>
                    <li>Payment processors (e.g., Razorpay)</li>
                  </ul>
                  <p className="mt-2">
                    These providers may process data on our behalf and are expected to maintain
                    reasonable security standards.
                  </p>

                  <h3 className="mt-4 font-semibold text-secondary">6.2 Legal Requirements</h3>
                  <p className="mt-2">
                    We may disclose your information if required by law, regulation, or legal process.
                  </p>

                  <h3 className="mt-4 font-semibold text-secondary">6.3 Business Transfers</h3>
                  <p className="mt-2">
                    In the event of a merger, acquisition, or restructuring, your data may be
                    transferred as part of business assets.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">7. Data Storage and Retention</h2>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      Data is stored on infrastructure primarily located in India (e.g., AWS
                      Mumbai region), though some third-party services may process data outside India
                    </li>
                    <li>
                      We retain your data as long as your account is active or as necessary to
                      provide the Service
                    </li>
                    <li>
                      We may retain certain data to comply with legal, tax, or regulatory requirements
                    </li>
                  </ul>
                  <p className="mt-2">
                    You may delete specific data (such as invoices or customers) through the
                    platform. Full account deletion may not currently be available.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">8. Data Security</h2>
                  <p className="mt-2">
                    We implement reasonable technical and organizational safeguards to protect your data.
                  </p>
                  <p className="mt-2">However:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>No system is completely secure</li>
                    <li>We do not guarantee absolute security</li>
                  </ul>
                  <p className="mt-2">
                    You are responsible for maintaining the confidentiality of your account credentials.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">9. Cookies and Tracking</h2>
                  <p className="mt-2">
                    We use cookies and similar technologies on our website to:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>understand user behavior</li>
                    <li>improve website performance</li>
                    <li>analyze traffic using tools such as Google Analytics</li>
                  </ul>
                  <p className="mt-2">
                    You can control cookie preferences through your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">10. Communications</h2>
                  <p className="mt-2">
                    By using the Service, you agree to receive service-related communications, including:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>account notifications</li>
                    <li>transaction updates</li>
                    <li>important product updates</li>
                  </ul>
                  <p className="mt-2">
                    We may introduce marketing communications in the future, and you may be given
                    options to opt out where applicable.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">11. Your Rights</h2>
                  <p className="mt-2">Subject to applicable laws, you may:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>access your personal data</li>
                    <li>request correction of inaccurate data</li>
                    <li>request deletion of certain data</li>
                    <li>withdraw consent where applicable</li>
                  </ul>
                  <p className="mt-2">
                    Some requests may be limited due to legal or operational requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">12. Data Breach</h2>
                  <p className="mt-2">
                    In the event of a data breach affecting your personal information, we will
                    take reasonable steps to investigate and mitigate the issue and notify affected
                    users where appropriate.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">13. Children&apos;s Privacy</h2>
                  <p className="mt-2">
                    The Service is not intended for individuals under the age of 18. We do not
                    knowingly collect data from minors.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">14. Third-Party Services</h2>
                  <p className="mt-2">
                    Our Service may include integrations or links to third-party platforms.
                  </p>
                  <p className="mt-2">
                    We are not responsible for the privacy practices of such services, and you
                    should review their policies separately.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">15. Disclaimer</h2>
                  <p className="mt-2">
                    While we take reasonable steps to protect your data, we are not responsible
                    for any loss or damage arising from:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>unauthorized access</li>
                    <li>data breaches</li>
                    <li>technical failures</li>
                    <li>user negligence</li>
                  </ul>
                  <p className="mt-2">
                    You are responsible for maintaining backups of critical data.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">16. Changes to This Policy</h2>
                  <p className="mt-2">
                    We may update this Privacy Policy from time to time.
                  </p>
                  <p className="mt-2">
                    Continued use of the Service after updates constitutes acceptance of the revised policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">17. Governing Law</h2>
                  <p className="mt-2">
                    This Privacy Policy is governed by the laws of India. Any disputes shall be
                    subject to the jurisdiction of courts in Bengaluru, India.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-secondary">18. Contact</h2>
                  <p className="mt-2">
                    For any questions, concerns, or requests related to this Privacy Policy, contact:
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
