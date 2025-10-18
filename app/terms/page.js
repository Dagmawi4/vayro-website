"use client";

const formatUpdated = (d = new Date()) => {
  const opts = { year: "numeric", month: "long" };
  return `${d.toLocaleDateString(undefined, opts)}`;
};

export default function TermsPage() {
  const updated = formatUpdated();

  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "eligibility", title: "Eligibility" },
    { id: "accounts", title: "Accounts & Security" },
    { id: "acceptable-use", title: "Acceptable Use" },
    { id: "ai-content", title: "AI Content & Accuracy" },
    { id: "third-parties", title: "Planning & Third-Party Services" },
    { id: "payments", title: "Payments & Subscriptions" },
    { id: "ip", title: "Intellectual Property" },
    { id: "user-content", title: "User Content" },
    { id: "privacy", title: "Privacy" },
    { id: "disclaimers", title: "Disclaimers" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "indemnity", title: "Indemnification" },
    { id: "termination", title: "Termination" },
    { id: "changes", title: "Changes to the Service & Terms" },
    { id: "law", title: "Governing Law" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Terms of Service</h1>
          <p className="mt-3 text-gray-500">Last updated: {updated}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* TOC (desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white shadow-sm p-5">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">On this page</h3>
              <ul className="space-y-2 text-sm">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-gray-600 hover:text-blue-600">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <article className="lg:col-span-9">
            <div className="space-y-10">
              {/* Intro */}
              <section id="intro" className="scroll-mt-28">
                <p className="text-gray-700 leading-relaxed">
                  Welcome to <span className="font-semibold">Vayro</span>. These Terms of Service (“Terms”)
                  govern your access to and use of Vayro’s website, applications, and services
                  (collectively, the “Service”). By using the Service, you agree to be bound by these Terms.
                  If you do not agree, do not use the Service.
                </p>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Eligibility</h2>
                <p className="text-gray-700 leading-relaxed">
                  You must be at least the age of majority in your jurisdiction (or have parental consent)
                  to use the Service. By using Vayro, you represent that you have the legal capacity
                  to enter into these Terms.
                </p>
              </section>

              {/* Accounts */}
              <section id="accounts" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Accounts & Security</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You agree to provide accurate, current, and complete information when creating an account.</li>
                  <li>You are responsible for maintaining the confidentiality of your credentials
                      and all activities that occur under your account.</li>
                  <li>Notify us immediately of any unauthorized use or suspected breach of security.</li>
                </ul>
              </section>

              {/* Acceptable Use */}
              <section id="acceptable-use" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Acceptable Use</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You agree not to misuse the Service. For example, you will not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Probe, scan, or test the vulnerability of the Service or any related system or network.</li>
                  <li>Access or search the Service by any means other than our publicly supported interfaces.</li>
                  <li>Interfere with or disrupt any user, host, or network (e.g., sending a virus, overloading, spamming).</li>
                  <li>Use the Service to violate any law or the rights of others, including privacy and intellectual property rights.</li>
                </ul>
              </section>

              {/* AI Content */}
              <section id="ai-content" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">AI Content & Accuracy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Vayro generates and curates recommendations using artificial intelligence and third-party data sources.
                  We strive for accuracy and usefulness, but the output may not be error-free, complete, or up to date.
                  Always verify critical details such as prices, schedules, visa requirements, health and safety guidance,
                  and booking terms with official sources. The Service is provided for planning and informational purposes only.
                </p>
              </section>

              {/* Third Parties */}
              <section id="third-parties" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Planning & Third-Party Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Service may include links to or integrations with third-party providers (e.g., airlines, hotels,
                  activity operators, mapping or payments services). Vayro does not control and is not responsible for
                  the content, policies, or practices of third parties. Your interactions with them are solely between
                  you and the third party, and their terms and privacy policies apply.
                </p>
              </section>

              {/* Payments */}
              <section id="payments" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Payments & Subscriptions</h2>
                <p className="text-gray-700 leading-relaxed">
                  Some features may be offered as paid plans or subscriptions in the future. If you purchase a paid plan,
                  you authorize Vayro or its payment processor to charge your selected payment method for the applicable
                  fees and taxes. Except where required by law, fees are non-refundable. We may change prices with prior notice.
                </p>
              </section>

              {/* Intellectual Property */}
              <section id="ip" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  Vayro, the Vayro name and logo, product designs, software, and all related content are owned by
                  or licensed to Vayro and are protected by intellectual property laws. Except for the limited rights
                  expressly granted to you to use the Service, no rights are transferred or assigned.
                </p>
              </section>

              {/* User Content */}
              <section id="user-content" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">User Content</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You may submit information such as trip preferences, notes, or itinerary details (“User Content”).
                  You retain ownership of your User Content. You grant Vayro a non-exclusive, worldwide, royalty-free
                  license to use your User Content to operate, improve, and provide the Service.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You represent that you have the rights to submit User Content and that it does not infringe the rights of others
                  or violate any law.
                </p>
              </section>

              {/* Privacy */}
              <section id="privacy" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your use of the Service is also governed by our{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>,
                  which explains how we collect, use, and protect your information.
                </p>
              </section>

              {/* Disclaimers */}
              <section id="disclaimers" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Disclaimers</h2>
                <p className="text-gray-700 leading-relaxed">
                  THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND,
                  WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. VAYRO DOES NOT WARRANT
                  THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section id="liability" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, VAYRO AND ITS AFFILIATES, OFFICERS, EMPLOYEES,
                  AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                  OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM OR RELATED
                  TO YOUR USE OF THE SERVICE. VAYRO’S TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE
                  AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING THE SERVICE IN THE TWELVE (12) MONTHS PRIOR
                  TO THE EVENT GIVING RISE TO THE CLAIM.
                </p>
              </section>

              {/* Indemnification */}
              <section id="indemnity" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless Vayro and its affiliates from and against
                  any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees)
                  arising out of or in any way connected with your use of the Service or your violation of these Terms.
                </p>
              </section>

              {/* Termination */}
              <section id="termination" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may suspend or terminate your access to the Service at any time, with or without notice,
                  if we reasonably believe you have violated these Terms or if required by law. Upon termination,
                  your right to use the Service will cease immediately.
                </p>
              </section>

              {/* Changes */}
              <section id="changes" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to the Service & Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may modify the Service or these Terms from time to time. If changes are material, we will
                  provide reasonable notice (e.g., by updating the “Last updated” date or via in-product messaging).
                  Your continued use of the Service after changes take effect constitutes acceptance of the revised Terms.
                </p>
              </section>

              {/* Governing Law */}
              <section id="law" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of your primary country of operation for Vayro, without regard to
                  conflict of laws principles. Where applicable, disputes will be subject to the exclusive jurisdiction of
                  the courts located in that jurisdiction.
                </p>
              </section>

              {/* Contact */}
              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  Questions about these Terms? Reach us at{" "}
                  <a href="mailto:contact@vayro.org" className="text-blue-600 hover:underline">
                    contact@vayro.org
                  </a>.
                </p>
              </section>

              {/* Back to top */}
              <div className="pt-4">
                <a href="#intro" className="text-sm text-blue-600 hover:underline">Back to top ↑</a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

