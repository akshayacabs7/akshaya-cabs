/**
 * Akshaya Cabs – Footer
 * src/components/layout/Footer.tsx
 *
 * TASK 08: Completely original footer — akc-footer__* CSS classes.
 * Server Component (no "use client" needed — no interactivity).
 *
 * Columns:
 *  1. Brand — logo, tagline, availability badge, social links
 *  2. Tour Packages — 6 links
 *  3. Services — 7 service links
 *  4. Quick Links — policy, about, fleet, etc.
 *  5. Contact — phones, WhatsApp, email, address
 *
 * Legal bar: copyright, pricing note, privacy / terms links
 */

import Link from "next/link";
import LogoMark from "@/components/ui/LogoMark";
import { BUSINESS } from "@/data/business";
import { SOCIAL_LINKS } from "@/data/social";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";
import type { Locale } from "@/i18n/config";

// ─── Column link definitions ─────────────────────────────────────────────────

const PACKAGE_LINKS = [
  { path: "/tour-packages/tirupati-tirumala-local-temples",          en: "Tirupati & Tirumala",        te: "తిరుపతి & తిరుమల" },
  { path: "/tour-packages/tirumala-kanipakam-padmavathi",            en: "Tirumala & Kanipakam",       te: "తిరుమల & కాణిపాకం" },
  { path: "/tour-packages/tirumala-srikalahasti-padmavathi",         en: "Tirumala & Sri Kalahasti",   te: "తిరుమల & శ్రీ కాళహస్తి" },
  { path: "/tour-packages/kanipakam-golden-temple-arunachalam",      en: "Golden Temple Tour",         te: "గోల్డెన్ టెంపుల్ టూర్" },
  { path: "/tour-packages/kanipakam-golden-temple-arunachalam-tiruthani", en: "2-Day Pilgrimage",    te: "2-రోజుల యాత్ర" },
  { path: "/tour-packages",                                            en: "All 10 Packages →",         te: "అన్ని 10 ప్యాకేజీలు →" },
] as const;

const SERVICE_LINKS = [
  { path: "/services#local-cab-services",           en: "Local Cab Services",      te: "స్థానిక క్యాబ్ సేవలు" },
  { path: "/services#tirumala-taxi-services",       en: "Tirumala Taxi",           te: "తిరుమల టాక్సీ" },
  { path: "/services#temple-tour-packages",         en: "Temple Tours",            te: "దేవాలయ పర్యటనలు" },
  { path: "/services#outstation-cab-services",      en: "Outstation Cabs",         te: "అవుట్‌స్టేషన్ క్యాబ్స్" },
  { path: "/services#airport-pickup-drop",          en: "Airport Transfers",       te: "విమానాశ్రయ ట్రాన్స్‌ఫర్" },
  { path: "/services#tempo-traveller-rental",       en: "Tempo Traveller",         te: "Tempo Traveller" },
  { path: "/services#south-india-pilgrimage-tours", en: "South India Pilgrimage",  te: "దక్షిణ భారత యాత్ర" },
] as const;

const QUICK_LINKS = [
  { path: "/about",           en: "About Us",         te: "మా గురించి" },
  { path: "/fleet",           en: "Our Fleet",        te: "మా వాహనాలు" },
  { path: "/routes",          en: "Popular Routes",   te: "ప్రసిద్ధ మార్గాలు" },
  { path: "/pickup-drop",     en: "Pickup & Drop",    te: "పికప్ & డ్రాప్" },
  { path: "/blog",            en: "Travel Guides",    te: "ట్రావెల్ గైడ్స్" },
  { path: "/why-choose-us",   en: "Why Choose Us",    te: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి" },
  { path: "/request-a-quote", en: "Request a Quote",  te: "కోటేషన్ అడగండి" },
  { path: "/contact",         en: "Contact Us",       te: "సంప్రదించండి" },
] as const;

// ─── Social icon map ─────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="akc-footer__contact-icon">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 010 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="akc-footer__contact-icon" style={{ color: "#25D366" }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="akc-footer__contact-icon">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="akc-footer__contact-icon" style={{ flexShrink: 0, marginTop: "3px" }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, React.FC> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
};

// ─── Footer Component ─────────────────────────────────────────────────────────

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const isTe = locale === "te";
  const prefix = `/${locale}`;
  const currentYear = new Date().getFullYear();
  const waUrl = primaryWhatsAppUrl(
    isTe
      ? `నమస్కారం! అక్షయ క్యాబ్స్ సేవల గురించి విచారించాలనుకుంటున్నాను.`
      : `Hello! I'd like to enquire about Akshaya Cabs.`
  );

  return (
    <footer className="akc-footer" role="contentinfo" aria-label={isTe ? "సైట్ ఫుటర్" : "Site footer"}>

      {/* ── Main grid ── */}
      <div className="akc-footer__grid">

        {/* Column 1 – Brand */}
        <div className="akc-footer__brand">
          <Link href={`${prefix}/`} aria-label={`${BUSINESS.name} – ${isTe ? "హోమ్" : "Home"}`}>
            <LogoMark variant="light" height={44} className="akc-footer__logo" />
          </Link>

          <p className="akc-footer__tagline">
            {isTe
              ? "తిరుపతిలో దేవాలయ యాత్రలు, అవుట్‌స్టేషన్ మరియు విమానాశ్రయ ట్రాన్స్‌ఫర్‌కు మీ విశ్వసనీయ క్యాబ్ సేవ."
              : "Your trusted cab partner in Tirupati for temple tours, outstation travel and airport transfers."}
          </p>

          <div className="akc-footer__avail" aria-label={isTe ? "సేవ అందుబాటు" : "Service availability"}>
            <span className="akc-footer__avail-dot" aria-hidden="true" />
            {isTe ? "24/7 అందుబాటులో" : "Available 24/7"}
          </div>

          <div className="akc-footer__socials" aria-label={isTe ? "సోషల్ మీడియా" : "Social media"}>
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon];
              return Icon ? (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="akc-footer__social-link"
                  aria-label={`${BUSINESS.name} on ${social.name} (${isTe ? "కొత్త ట్యాబ్‌లో తెరుచుకుంటుంది" : "opens in new tab"})`}
                >
                  <Icon />
                </a>
              ) : null;
            })}
          </div>
        </div>

        {/* Column 2 – Tour Packages */}
        <div>
          <h3 className="akc-footer__col-title">
            {isTe ? "టూర్ ప్యాకేజీలు" : "Tour Packages"}
          </h3>
          <ul className="akc-footer__links" role="list">
            {PACKAGE_LINKS.map((link) => (
              <li key={link.path}>
                <Link href={`${prefix}${link.path}`} className="akc-footer__link">
                  {isTe ? link.te : link.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 – Services + Quick Links */}
        <div>
          <h3 className="akc-footer__col-title">
            {isTe ? "మా సేవలు" : "Our Services"}
          </h3>
          <ul className="akc-footer__links" role="list">
            {SERVICE_LINKS.map((link) => (
              <li key={link.path}>
                <Link href={`${prefix}${link.path}`} className="akc-footer__link">
                  {isTe ? link.te : link.en}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="akc-footer__col-title" style={{ marginTop: "1.75rem" }}>
            {isTe ? "త్వరిత లింకులు" : "Quick Links"}
          </h3>
          <ul className="akc-footer__links" role="list">
            {QUICK_LINKS.map((link) => (
              <li key={link.path}>
                <Link href={`${prefix}${link.path}`} className="akc-footer__link">
                  {isTe ? link.te : link.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 – Contact */}
        <div>
          <h3 className="akc-footer__col-title">
            {isTe ? "సంప్రదింపు" : "Contact Us"}
          </h3>
          <address style={{ fontStyle: "normal" }}>
            <ul className="akc-footer__contact-list">
              {/* Primary phone */}
              <li className="akc-footer__contact-item">
                <PhoneIcon />
                <span className="akc-footer__contact-text">
                  <a
                    href={BUSINESS.phone.primaryTel}
                    className="akc-footer__contact-link"
                    aria-label={`${isTe ? "ప్రాథమిక నంబర్ కి కాల్ చేయండి" : "Call primary number"}: ${BUSINESS.phone.primaryDisplay}`}
                  >
                    {BUSINESS.phone.primaryDisplay}
                  </a>
                </span>
              </li>

              {/* Secondary phone */}
              <li className="akc-footer__contact-item">
                <PhoneIcon />
                <span className="akc-footer__contact-text">
                  <a
                    href={BUSINESS.phone.secondaryTel}
                    className="akc-footer__contact-link"
                    aria-label={`${isTe ? "ఆల్టర్నేట్ నంబర్ కి కాల్ చేయండి" : "Call alternate number"}: ${BUSINESS.phone.secondaryDisplay}`}
                  >
                    {BUSINESS.phone.secondaryDisplay}
                  </a>
                  <span style={{ display: "block", fontSize: "0.75rem", color: "rgba(255,255,255,0.30)", marginTop: "1px" }}>
                    {isTe ? "ఆల్టర్నేట్ సంప్రదింపు" : "Alternate Contact"}
                  </span>
                </span>
              </li>

              {/* WhatsApp */}
              <li className="akc-footer__contact-item">
                <WhatsAppIcon />
                <span className="akc-footer__contact-text">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="akc-footer__contact-link akc-footer__contact-link--wa"
                    aria-label={isTe ? "వాట్సాప్‌లో సంప్రదించండి" : "Chat with us on WhatsApp"}
                  >
                    {isTe ? "వాట్సాప్ చేయండి" : "WhatsApp Us"}
                  </a>
                </span>
              </li>

              {/* Email */}
              <li className="akc-footer__contact-item">
                <EmailIcon />
                <span className="akc-footer__contact-text">
                  <a
                    href={BUSINESS.emailHref}
                    className="akc-footer__contact-link"
                    aria-label={`${isTe ? "ఇమెయిల్ పంపండి" : "Send email"}: ${BUSINESS.email}`}
                  >
                    {BUSINESS.email}
                  </a>
                </span>
              </li>

              {/* Address */}
              <li className="akc-footer__contact-item">
                <MapPinIcon />
                <span className="akc-footer__contact-text">
                  <a
                    href={BUSINESS.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="akc-footer__contact-link"
                    aria-label={`${isTe ? "Google Maps లో చూడండి" : "View on Google Maps"}: ${BUSINESS.address.full}`}
                  >
                    {BUSINESS.address.line1}, {BUSINESS.address.line2},<br />
                    {BUSINESS.address.city}, {BUSINESS.address.stateCode} {BUSINESS.address.pincode}
                  </a>
                </span>
              </li>
            </ul>
          </address>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="akc-footer__divider" aria-hidden="true" />

      {/* ── Legal bar ── */}
      <div className="akc-footer__legal">
        <p className="akc-footer__copyright">
          © {currentYear} {BUSINESS.name}.{" "}
          {isTe ? "సర్వ హక్కులు రిజర్వ్ చేయబడ్డాయి." : "All rights reserved."}
        </p>

        <nav className="akc-footer__legal-links" aria-label={isTe ? "లీగల్ లింకులు" : "Legal links"}>
          <Link href={`${prefix}/privacy-policy`} className="akc-footer__legal-link">
            {isTe ? "గోప్యతా విధానం" : "Privacy Policy"}
          </Link>
          <Link href={`${prefix}/terms-and-conditions`} className="akc-footer__legal-link">
            {isTe ? "నిబంధనలు & షరతులు" : "Terms & Conditions"}
          </Link>
        </nav>

        <p className="akc-footer__pricing-note">
          {isTe
            ? "ధరలు డ్రైవర్ అలవెన్స్ తో కలిపి ఉంటాయి. టోల్స్, పార్కింగ్ మరియు రాష్ట్ర పర్మిట్లు వేరుగా వసూలు చేయబడతాయి."
            : BUSINESS.pricingNote}
        </p>
      </div>

    </footer>
  );
}