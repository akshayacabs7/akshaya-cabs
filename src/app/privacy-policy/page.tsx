// Privacy Policy — Sri Vinayaka Tours & Travels
// svtttirupati.com/privacy-policy

import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Privacy Policy | Sri Vinayaka Tours & Travels",
  description:
    "Privacy Policy for Sri Vinayaka Tours & Travels — how we collect, use and protect your personal information when you use our website or book our cab and tour services.",
  alternates: { canonical: "https://svtttirupati.com/privacy-policy" },
  robots: { index: false, follow: true }, // Legal pages typically not indexed
};

const EFFECTIVE_DATE = "1 October 2024";

export default function PrivacyPolicyPage() {
  return (
    <main className="svtt-legal-page">
      <div className="svtt-container svtt-legal-page__content">

        <header className="svtt-legal-page__header">
          <h1>Privacy Policy</h1>
          <p className="svtt-legal-page__meta">
            Effective date: <time dateTime="2024-10-01">{EFFECTIVE_DATE}</time>
            {" "}·{" "}
            {BUSINESS.name}
          </p>
        </header>

        <section>
          <h2>1. Who We Are</h2>
          <p>
            Sri Vinayaka Tours &amp; Travels (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a
            cab and temple tour service based in Tirupati, Andhra Pradesh, India.
            Our website is{" "}
            <a href="https://svtttirupati.com" target="_blank" rel="noopener noreferrer">
              svtttirupati.com
            </a>.
          </p>
        </section>

        <section>
          <h2>2. What Information We Collect</h2>
          <p>We may collect the following information when you use our website or contact us:</p>
          <ul>
            <li><strong>Contact details</strong> — your name, phone number, and email address (when you fill our enquiry or quote forms).</li>
            <li><strong>Travel details</strong> — pickup location, destination, travel dates, and group size (provided by you for booking purposes).</li>
            <li><strong>Usage data</strong> — basic analytics data such as pages visited and browser type, collected via third-party services.</li>
          </ul>
          <p>
            We do <strong>not</strong> collect payment card information on our website. Payments, if any, are handled separately.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To respond to your enquiries and provide cab or tour booking services.</li>
            <li>To send booking confirmations and travel-related communications.</li>
            <li>To improve our website and service quality.</li>
          </ul>
          <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2>4. WhatsApp Communication</h2>
          <p>
            When you use the &ldquo;Book on WhatsApp&rdquo; or &ldquo;Request a Quote&rdquo; buttons on our website,
            you are redirected to WhatsApp. Any communication through WhatsApp is governed by
            WhatsApp&apos;s own privacy policy. We only use your WhatsApp messages to respond to
            your travel enquiry.
          </p>
        </section>

        <section>
          <h2>5. Cookies and Analytics</h2>
          <p>
            Our website may use cookies or similar technologies for basic analytics (e.g., page views).
            You can disable cookies through your browser settings, though this may affect website functionality.
          </p>
        </section>

        <section>
          <h2>6. Data Security</h2>
          <p>
            We take reasonable steps to protect your personal information from unauthorised access,
            misuse, or disclosure. However, no internet transmission is 100% secure.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal
            information that we hold. To exercise these rights, please contact us at:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
            </li>
            <li>
              Phone:{" "}
              <a href={BUSINESS.phone.primaryTel}>{BUSINESS.phone.primaryDisplay}</a>
            </li>
          </ul>
        </section>

        <section>
          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites (e.g., Google Maps, WhatsApp, Google Reviews).
            We are not responsible for the privacy practices of those websites.
          </p>
        </section>

        <section>
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated effective date. Continued use of our website after changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <address>
            <strong>{BUSINESS.name}</strong><br />
            {BUSINESS.address.full}<br />
            Email: <a href={BUSINESS.emailHref}>{BUSINESS.email}</a><br />
            Phone: <a href={BUSINESS.phone.primaryTel}>{BUSINESS.phone.primaryDisplay}</a>
          </address>
        </section>

        <div className="svtt-legal-page__footer-links">
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/">Home</Link>
        </div>

      </div>
    </main>
  );
}