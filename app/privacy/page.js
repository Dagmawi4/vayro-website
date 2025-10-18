"use client";

// Format "Last updated"
const formatUpdated = (d = new Date()) => {
  const opts = { year: "numeric", month: "long" };
  return d.toLocaleDateString(undefined, opts);
};

export default function PrivacyPage() {
  const updated = formatUpdated();

  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "scope", title: "Scope" },
    { id: "collect", title: "Information We Collect" },
    { id: "sources", title: "Sources of Information" },
    { id: "cookies", title: "Cookies & Similar Technologies" },
    { id: "use", title: "How We Use Information" },
    { id: "legal-basis", title: "Legal Basis (GDPR)" },
    { id: "share", title: "How We Share Information" },
    { id: "ai", title: "AI Processing & Outputs" },
    { id: "retention", title: "Data Retention" },
    { id: "security", title: "Security" },
    { id: "your-rights", title: "Your Privacy Rights" },
    { id: "children", title: "Children&apos;s Privacy" },
    { id: "intl", title: "International Transfers" },
    { id: "links", title: "Third-Party Links" },
    { id: "changes", title: "Changes to This Policy" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Privacy Policy</h1>
          <p className="mt-3 text-gray-500">Last updated: {updated}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* TOC */}
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
                  This Privacy Policy explains how <span className="font-semibold">Vayro</span> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                  collects, uses, discloses, and protects information about you when you use our website, mobile
                  applications, and related services (collectively, the &quot;Service&quot;). We value your trust and are committed
                  to handling your data responsibly and transparently.
                </p>
              </section>

              {/* Scope */}
              <section id="scope" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Scope</h2>
                <p className="text-gray-700 leading-relaxed">
                  This policy applies to all users of the Service worldwide. Additional disclosures may apply depending
                  on your region (e.g., EEA/UK GDPR, California CCPA/CPRA). Where local law requires, we will honor those
                  additional rights and obligations.
                </p>
              </section>

              {/* Collect */}
              <section id="collect" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">Account &amp; Contact Information:</span> email, name (if provided),
                    authentication details, and communication preferences.
                  </li>
                  <li>
                    <span className="font-medium">Profile &amp; Trip Preferences:</span> travel style, interests, budget,
                    accessibility or dietary needs, preferred airlines or lodging types, group composition.
                  </li>
                  <li>
                    <span className="font-medium">Usage &amp; Device Data:</span> pages viewed, features used, app settings,
                    IP address, device type, operating system, browser, session metadata, crash logs, and performance data.
                  </li>
                  <li>
                    <span className="font-medium">Location:</span> if you grant permission, approximate or precise
                    location to improve nearby recommendations and transport guidance.
                  </li>
                  <li>
                    <span className="font-medium">Transaction Data:</span> if paid features become available, limited
                    billing information and transaction history (processed via PCI-compliant providers).
                  </li>
                  <li>
                    <span className="font-medium">User Content:</span> notes, saved places, itineraries, and messages
                    you provide to personalize planning.
                  </li>
                </ul>
              </section>

              {/* Sources */}
              <section id="sources" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Sources of Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We collect information directly from you, automatically through your device, and from trusted partners
                  (e.g., mapping, booking, travel data providers) to enable accurate planning and up-to-date recommendations.
                </p>
              </section>

              {/* Cookies */}
              <section id="cookies" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookies &amp; Similar Technologies</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We use cookies, local storage, and similar technologies to keep you signed in, remember preferences,
                  measure performance, and understand how the Service is used. You can control cookies via your browser
                  settings; some features may not function correctly if certain cookies are disabled.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><span className="font-medium">Essential:</span> required for authentication and core functionality.</li>
                  <li><span className="font-medium">Analytics:</span> help us improve reliability and user experience.</li>
                  <li><span className="font-medium">Functional:</span> remember preferences like language or saved filters.</li>
                </ul>
              </section>

              {/* Use */}
              <section id="use" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Use Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide, personalize, and improve trip planning and recommendations.</li>
                  <li>Understand usage to enhance performance, reliability, and safety.</li>
                  <li>Communicate about product updates, early access invitations, or support.</li>
                  <li>Prevent abuse, secure accounts, and enforce our Terms of Service.</li>
                  <li>Comply with legal obligations and respond to lawful requests.</li>
                </ul>
              </section>

              {/* Legal Basis */}
              <section id="legal-basis" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Legal Basis (GDPR)</h2>
                <p className="text-gray-700 leading-relaxed">
                  Where GDPR applies, we process personal data based on one or more of the following:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                  <li><span className="font-medium">Performance of a contract</span> (to provide the Service).</li>
                  <li><span className="font-medium">Legitimate interests</span> (to improve and secure the Service).</li>
                  <li><span className="font-medium">Consent</span> (e.g., marketing emails, precise location, certain cookies).</li>
                  <li><span className="font-medium">Legal obligation</span> (where we must retain or disclose data).</li>
                </ul>
              </section>

              {/* Share */}
              <section id="share" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Share Information</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We do not sell your personal information. We may share limited data with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><span className="font-medium">Service providers &amp; processors</span> who help us host, analyze, and deliver the Service under confidentiality agreements.</li>
                  <li><span className="font-medium">Travel partners / APIs</span> (e.g., flight, lodging, maps) when needed to show availability, prices, or routes.</li>
                  <li><span className="font-medium">Legal &amp; safety</span> when required by law or to protect users, our platform, or the public.</li>
                  <li><span className="font-medium">Business transfers</span> in the event of a merger, acquisition, or reorganization, subject to this Policy.</li>
                </ul>
              </section>

              {/* AI */}
              <section id="ai" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">AI Processing &amp; Outputs</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our recommendations may be generated with AI using your inputs and partner data. We apply safeguards to reduce bias and inaccuracies, but AI outputs may not always be perfect. Do not rely on AI content for critical decisions without verifying with official sources. We do not use your personal content to train public models; if we fine-tune internal models, we do so with strict privacy controls.
                </p>
              </section>

              {/* Retention */}
              <section id="retention" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain personal data only for as long as necessary to provide the Service, comply with legal
                  obligations, resolve disputes, and enforce our agreements. Retention periods vary by data type and
                  operational needs.
                </p>
              </section>

              {/* Security */}
              <section id="security" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use administrative, technical, and physical safeguards to protect your information, including
                  encryption, access controls, and monitoring. However, no method of transmission or storage is
                  completely secure, and we cannot guarantee absolute protection.
                </p>
              </section>

              {/* Rights */}
              <section id="your-rights" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Privacy Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Depending on your region, you may have rights to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access, correct, or delete your personal information.</li>
                  <li>Object to or restrict certain processing, or withdraw consent.</li>
                  <li>Port your data to another service where technically feasible.</li>
                  <li>Opt out of certain analytics or marketing communications.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  To exercise any rights, contact{" "}
                  <a href="mailto:contact@vayro.org" className="text-blue-600 hover:underline">
                    contact@vayro.org
                  </a>. We may require verification before responding.
                </p>
              </section>

              {/* Children */}
              <section id="children" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Children&apos;s Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Service is not directed to children under the age required by local law (e.g., 13 in the U.S.,
                  16 in parts of the EEA). We do not knowingly collect personal information from children. If we learn
                  that a child has provided personal data, we will take steps to delete it.
                </p>
              </section>

              {/* Intl */}
              <section id="intl" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">International Transfers</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may process and store information in countries other than where you live. When we transfer personal
                  data internationally, we use safeguards such as Standard Contractual Clauses or equivalent mechanisms
                  required by applicable law.
                </p>
              </section>

              {/* Links */}
              <section id="links" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our Service may link to third-party sites or services. We are not responsible for their privacy
                  practices and encourage you to review their policies before using them.
                </p>
              </section>

              {/* Changes */}
              <section id="changes" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy periodically. If changes are material, we will provide notice (e.g.,
                  by updating the &quot;Last updated&quot; date or via in-product messaging). Your continued use of the
                  Service after changes take effect signifies acceptance of the updated policy.
                </p>
              </section>

              {/* Contact */}
              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions or requests regarding this policy, contact us at{" "}
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


