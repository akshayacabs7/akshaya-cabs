// Akshaya Cabs — Privacy Policy (TASK-28)
// /[lang]/privacy-policy — locale-aware, bilingual EN+TE
// Server Component. Original Akshaya Cabs policy. No SVTT identity.

import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { LOCALES, type Locale } from "@/i18n/config";
import Breadcrumb from "@/components/ui/Breadcrumb";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isTe = locale === "te";

  const title = isTe
    ? "గోప్యతా విధానం | అక్షయ క్యాబ్స్ తిరుపతి — డేటా భద్రత"
    : "Privacy Policy | Akshaya Cabs Tirupati — Customer Privacy & Data Protection";

  const description = isTe
    ? "అక్షయ క్యాబ్స్ తిరుపతి గోప్యతా విధానం. కస్టమర్ సమాచారం, WhatsApp విచారణలు మరియు సురక్షిత ప్రయాణ సమన్వయం ఎలా నిర్వహించబడతాయో తెలుసుకోండి."
    : "Privacy policy for Akshaya Cabs Tirupati. Learn how we handle customer contact details, travel enquiries, and WhatsApp communication with complete privacy and zero data selling.";

  return {
    title,
    description,
    // Legal pages: disallow indexing — excluded from sitemap too.
    robots: { index: false, follow: false },
    alternates: {
      canonical: `https://akshayacabs.com/${locale}/privacy-policy`,
      languages: {
        "en-IN": "https://akshayacabs.com/en/privacy-policy",
        "te-IN": "https://akshayacabs.com/te/privacy-policy",
        "x-default": "https://akshayacabs.com/en/privacy-policy",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://akshayacabs.com/${locale}/privacy-policy`,
    },
  };
}

const EFFECTIVE_DATE = "1 January 2025";

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isTe = locale === "te";
  const prefix = `/${locale}`;

  return (
    <main className="akc-legal-page">
      <div className="akc-container">
        <div className="akc-legal-card">
          <div className="akc-legal-breadcrumb">
            <Breadcrumb
              locale={locale}
              items={[
                { label: isTe ? "హోమ్" : "Home", href: prefix },
                {
                  label: isTe ? "గోప్యతా విధానం" : "Privacy Policy",
                  href: `${prefix}/privacy-policy`,
                },
              ]}
            />
          </div>

          <header className="akc-legal-header">
            <h1 className="akc-legal-title">
              {isTe ? "గోప్యతా విధానం" : "Privacy Policy"}
            </h1>
            <div className="akc-legal-meta">
              <span>
                {isTe ? "అమలులోకి వచ్చిన తేదీ:" : "Effective Date:"}{" "}
                <strong>{EFFECTIVE_DATE}</strong>
              </span>
              <span>•</span>
              <span className="akc-legal-badge">
                {BUSINESS.name} • Tirupati
              </span>
            </div>
          </header>

          {/* Section 1 */}
          <section className="akc-legal-section">
            <h2>
              <span>1.</span>{" "}
              {isTe ? "మేము ఎవరము" : "Who We Are"}
            </h2>
            <p>
              {isTe
                ? `అక్షయ క్యాబ్స్ (${BUSINESS.name}), తిరుపతి కేంద్రంగా పనిచేస్తున్న విశ్వసనీయ ప్రయాణ మరియు ఆలయ టూర్ల సేవా సంస్థ. వ్యవస్థాపకుడు: ${BUSINESS.owner.name}. మా అధికారిక వెబ్‌సైట్: ${BUSINESS.siteUrl}. తిరుపతి, తిరుమల మరియు దక్షిణ భారతదేశ యాత్రల కోసం స్వచ్ఛమైన, నైతికమైన సేవలను అందించడం మా ప్రధాన లక్ష్యం.`
                : `Akshaya Cabs (${BUSINESS.name}), founded by ${BUSINESS.owner.name}, is a licensed cab hire and pilgrimage tour provider headquartered in Tirupati, Andhra Pradesh, India (${BUSINESS.siteUrl}). We specialize in Tirumala hill taxi services, temple circuit tour packages, airport transfers, and outstation trips across South India.`}
            </p>
          </section>

          {/* Section 2 */}
          <section className="akc-legal-section">
            <h2>
              <span>2.</span>{" "}
              {isTe ? "మేము సేకరించే సమాచారం" : "Information We Collect"}
            </h2>
            <p>
              {isTe
                ? "మీరు మా వెబ్‌సైట్ ద్వారా లేదా WhatsApp ద్వారా మమ్మల్ని సంప్రదించినప్పుడు మాత్రమే మేము అవసరమైన ప్రయాణ సమాచారాన్ని సేకరిస్తాము:"
                : "We collect only the essential information necessary to quote, coordinate, and execute your travel arrangements:"}
            </p>
            <ul>
              <li>
                <strong>{isTe ? "సంప్రదింపు వివరాలు:" : "Contact Information:"}</strong>{" "}
                {isTe
                  ? "మీ పూర్తి పేరు, ఫోన్ నంబర్ మరియు ఐచ్ఛిక ఈమెయిల్ చిరునామా (విచారణ లేదా కోటేషన్ ఫారం ద్వారా అందించబడినప్పుడు)."
                  : "Your name, primary telephone / WhatsApp number, and optional email address provided voluntarily via our booking and enquiry forms."}
              </li>
              <li>
                <strong>{isTe ? "ప్రయాణ వివరాలు:" : "Itinerary & Logistics Details:"}</strong>{" "}
                {isTe
                  ? "పికప్ ప్రదేశం, డ్రాప్ గమ్యం, ప్రయాణ తేదీ, విమాన/రైలు రాకపోకల సమయాలు, ప్రయాణికుల సంఖ్య మరియు వాహన ప్రాధాన్యత."
                  : "Pickup address, drop destination, travel dates, passenger headcounts, preferred vehicle class, and arrival flight or train timings."}
              </li>
              <li>
                <strong>{isTe ? "ఆర్థిక సమాచారం సేకరించబడదు:" : "Zero Financial Data Collection:"}</strong>{" "}
                {isTe
                  ? "మా వెబ్‌సైట్‌లో ఎలాంటి క్రెడిట్ కార్డు, డెబిట్ కార్డు లేదా బ్యాంకింగ్ సమాచారాన్ని మేము అడగము మరియు నిల్వ చేయము. చెల్లింపులు ప్రయాణం ముగిసిన తర్వాత నేరుగా నగదు లేదా డ్రైవర్ UPI ద్వారా చేయబడతాయి."
                  : "We do NOT collect, process, or store credit card numbers, debit card details, net banking credentials, or UPI PINs on our website. Standard payments are made directly to the driver via cash or UPI upon journey completion."}
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="akc-legal-section">
            <h2>
              <span>3.</span>{" "}
              {isTe ? "సమాచారాన్ని ఎలా ఉపయోగిస్తాము" : "How We Use Your Information"}
            </h2>
            <p>
              {isTe
                ? "మీ సమాచారాన్ని మేము క్రింది ప్రయోజనాల కోసం మాత్రమే ఉపయోగిస్తాము:"
                : "Your information is used strictly for operational and customer service purposes:"}
            </p>
            <ul>
              <li>
                {isTe
                  ? "మీ క్యాబ్ విచారణకు త్వరితంగా స్పందించి ఖచ్చితమైన ధర మరియు వాహన లభ్యతను తెలియజేయడానికి."
                  : "To calculate transparent travel quotes and confirm vehicle availability."}
              </li>
              <li>
                {isTe
                  ? "డ్రైవర్‌ను మీ పికప్ సమయానికి సరిగ్గా పంపడానికి మరియు ప్రయాణ సమన్వయాన్ని సులభతరం చేయడానికి."
                  : "To dispatch the appropriate vehicle and assist your driver in reaching your pickup location on time."}
              </li>
              <li>
                {isTe
                  ? "విమానం లేదా రైలు ఆలస్యమైనప్పుడు తగిన విధంగా రీషెడ్యూల్ చేయడానికి."
                  : "To coordinate pickup adjustments if your scheduled flight or train experiences delays."}
              </li>
            </ul>
            <p>
              <strong>
                {isTe
                  ? "డేటా అమ్మకం లేదా దుర్వినియోగం ఉండదు:"
                  : "Zero Data Selling Commitment:"}
              </strong>{" "}
              {isTe
                ? "మేము మీ ఫోన్ నంబర్‌ను లేదా వ్యక్తిగత సమాచారాన్ని ఏ మూడవ పక్షం టెలిమార్కెటర్లకు లేదా ప్రకటనదారులకు ఎప్పటికీ విక్రయించము లేదా అద్దెకు ఇవ్వము."
                : "Akshaya Cabs never sells, rents, monetizes, or shares your personal details or mobile numbers with any third-party marketing agencies, advertisers, or lead generators."}
            </p>
          </section>

          {/* Section 4 */}
          <section className="akc-legal-section">
            <h2>
              <span>4.</span>{" "}
              {isTe ? "WhatsApp కమ్యూనికేషన్" : "WhatsApp Communication"}
            </h2>
            <p>
              {isTe
                ? "మా వెబ్‌సైట్‌లోని 'WhatsApp లో బుక్ చేయండి' లేదా 'కోటేషన్ అడగండి' బటన్లను నొక్కినప్పుడు, మీరు నేరుగా WhatsApp అప్లికేషన్‌కు మళ్ళించబడతారు. ఈ సంభాషణ కేవలం మీ ప్రయాణ అవసరాలను తీర్చడానికి మాత్రమే ఉపయోగించబడుతుంది మరియు మీ నంబర్ సురక్షితంగా ఉంటుంది."
                : "When you tap our 'Book on WhatsApp' or 'Request a Quote' buttons, you communicate directly with our dispatch desk on the WhatsApp platform. Conversations are utilized exclusively to coordinate your pilgrimage or cab requirements. We do not broadcast automated marketing spam to your WhatsApp."}
            </p>
          </section>

          {/* Section 5 */}
          <section className="akc-legal-section">
            <h2>
              <span>5.</span>{" "}
              {isTe ? "కుకీలు మరియు విశ్లేషణలు" : "Cookies & Web Technologies"}
            </h2>
            <p>
              {isTe
                ? "మా వెబ్‌సైట్ ప్రాథమిక పనితీరు కోసం మాత్రమే ప్రామాణిక వెబ్ సెట్టింగులను ఉపయోగిస్తుంది. మేము వినియోగదారులను వేధించే ట్రాకింగ్ లేదా ప్రైవేట్ సమాచారాన్ని సేకరించే అనైతిక సాధనాలను ఉపయోగించము."
                : "Our website utilizes basic technical hosting cookies necessary for page delivery and performance. We do not deploy invasive cross-site behavioral tracking scripts or intrusive surveillance advertising technologies."}
            </p>
          </section>

          {/* Section 6 */}
          <section className="akc-legal-section">
            <h2>
              <span>6.</span>{" "}
              {isTe ? "డేటా భద్రత & నిల్వ" : "Data Security & Retention"}
            </h2>
            <p>
              {isTe
                ? "మీ సంప్రదింపు సమాచారాన్ని అనధికారిక ప్రాప్యత నుండి రక్షించడానికి మేము తగిన సాంకేతిక జాగ్రత్తలు తీసుకుంటాము. మీ ప్రయాణం పూర్తయిన తర్వాత, అవసరమైన చట్టపరమైన లెక్కల రికార్డులను మినహాయించి అనవసరమైన వ్యక్తిగత వివరాలను నిల్వ ఉంచము."
                : "We enforce administrative and digital safeguards to protect customer contact records against unauthorized access or disclosure. Details are retained only for the duration required to complete trip fulfillment and satisfy basic tax/accounting statutory requirements."}
            </p>
          </section>

          {/* Section 7 */}
          <section className="akc-legal-section">
            <h2>
              <span>7.</span>{" "}
              {isTe ? "మీ హక్కులు మరియు సంప్రదింపులు" : "Your Rights & Privacy Inquiries"}
            </h2>
            <p>
              {isTe
                ? "మా వద్ద ఉన్న మీ సంప్రదింపు వివరాలను తొలగించమని లేదా నవీకరించమని కోరే పూర్తి హక్కు మీకు ఉంది. ఈ క్రింది చిరునామాలో మమ్మల్ని సంప్రదించవచ్చు:"
                : "You may request the deletion, correction, or verification of any personal contact details held in our dispatch logs by reaching out to our management team:"}
            </p>
            <address className="akc-legal-address">
              <strong>{BUSINESS.name}</strong> ({BUSINESS.owner.role}: {BUSINESS.owner.name})<br />
              {BUSINESS.address.line1}, {BUSINESS.address.line2}, {BUSINESS.address.city}, {BUSINESS.address.state} — {BUSINESS.address.pincode}<br />
              {isTe ? "ఫోన్:" : "Phone:"}{" "}
              <a href={BUSINESS.phone.primaryTel}>{BUSINESS.phone.primaryDisplay}</a><br />
              {isTe ? "ఈమెయిల్:" : "Email:"}{" "}
              <a href={BUSINESS.emailHref}>{BUSINESS.email}</a><br />
              {isTe ? "వెబ్‌సైట్:" : "Website:"}{" "}
              <a href={BUSINESS.siteUrl}>{BUSINESS.siteUrl}</a>
            </address>
          </section>

          {/* Footer links */}
          <nav className="akc-legal-nav" aria-label="Legal footer links">
            <Link href={`${prefix}/terms-and-conditions`} className="akc-legal-nav-link">
              📜 {isTe ? "నిబంధనలు & షరతులు" : "Terms & Conditions"}
            </Link>
            <Link href={`${prefix}/request-a-quote`} className="akc-legal-nav-link">
              📝 {isTe ? "కోటేషన్ అడగండి" : "Request a Quote"}
            </Link>
            <Link href={`${prefix}/contact`} className="akc-legal-nav-link">
              📞 {isTe ? "సంప్రదించండి" : "Contact Us"}
            </Link>
            <Link href={prefix} className="akc-legal-nav-link">
              🏠 {isTe ? "హోమ్ పేజీ" : "Home"}
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}