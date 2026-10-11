// Akshaya Cabs — Terms & Conditions (TASK-28)
// /[lang]/terms-and-conditions — locale-aware, bilingual EN+TE
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
    ? "నిబంధనలు & షరతులు | అక్షయ క్యాబ్స్ తిరుపతి — బుకింగ్ విధానం"
    : "Terms & Conditions | Akshaya Cabs Tirupati — Booking & Travel Policy";

  const description = isTe
    ? "అక్షయ క్యాబ్స్ తిరుపతి బుకింగ్ నిబంధనలు, పారదర్శక ధరలు, రద్దు విధానం, తిరుమల ఘాట్ రోడ్ మార్గదర్శకాలు మరియు ప్రయాణికుల బాధ్యతలు."
    : "Official booking terms, transparent pricing, cancellation policy, Tirumala ghat road guidelines, and passenger responsibilities for Akshaya Cabs Tirupati.";

  return {
    title,
    description,
    // Legal pages: disallow indexing — excluded from sitemap too.
    robots: { index: false, follow: false },
    alternates: {
      canonical: `https://akshayacabs.com/${locale}/terms-and-conditions`,
      languages: {
        "en-IN": "https://akshayacabs.com/en/terms-and-conditions",
        "te-IN": "https://akshayacabs.com/te/terms-and-conditions",
        "x-default": "https://akshayacabs.com/en/terms-and-conditions",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://akshayacabs.com/${locale}/terms-and-conditions`,
    },
  };
}

const EFFECTIVE_DATE = "1 January 2025";

export default async function TermsAndConditionsPage({
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
                  label: isTe ? "నిబంధనలు & షరతులు" : "Terms & Conditions",
                  href: `${prefix}/terms-and-conditions`,
                },
              ]}
            />
          </div>

          <header className="akc-legal-header">
            <h1 className="akc-legal-title">
              {isTe ? "నిబంధనలు & షరతులు" : "Terms & Conditions"}
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
              {isTe ? "నిబంధనల ఆమోదం" : "Acceptance of Terms"}
            </h2>
            <p>
              {isTe
                ? `అక్షయ క్యాబ్స్ (${BUSINESS.name}), తిరుపతి నుండి క్యాబ్, టూర్ ప్యాకేజీ లేదా ప్రయాణ సేవను బుక్ చేసుకోవడం ద్వారా, మీరు ఈ క్రింది నిబంధనలు మరియు షరతులను పూర్తిగా అంగీకరిస్తున్నారు. దయచేసి బుకింగ్ చేయడానికి ముందు వీటిని శ్రద్ధగా చదవండి.`
                : `By booking a taxi, temple tour package, airport transfer, or outstation service with Akshaya Cabs (${BUSINESS.name}, Tirupati, founded by ${BUSINESS.owner.name}), you agree to comply with and be bound by these Terms & Conditions. Please read them carefully before submitting your booking enquiry.`}
            </p>
          </section>

          {/* Section 2 */}
          <section className="akc-legal-section">
            <h2>
              <span>2.</span>{" "}
              {isTe
                ? "బుకింగ్, విచారణలు & నిర్ధారణ ప్రక్రియ"
                : "Enquiry, Booking & Confirmation Policy"}
            </h2>
            <p>
              {isTe
                ? "అక్షయ క్యాబ్స్ కస్టమర్ల ప్రయాణ అవసరాల కోసం రోజుకు 24 గంటలు, వారానికి 7 రోజులు (24/7) WhatsApp, ఫోన్ కాల్ మరియు వెబ్‌సైట్ ద్వారా అందుబాటులో ఉంటుంది."
                : "Akshaya Cabs operates 24 hours a day, 7 days a week (24/7) for customer travel enquiries via WhatsApp, phone calls, and our website trip planner."}
            </p>
            <ul>
              <li>
                <strong>
                  {isTe ? "విచారణ vs తక్షణ నిర్ధారణ:" : "Enquiry vs Immediate Confirmation:"}
                </strong>{" "}
                {isTe
                  ? "మా వెబ్‌సైట్ లేదా WhatsApp ద్వారా పంపిన అభ్యర్థనలు విచారణగా మాత్రమే పరిగణించబడతాయి. మా ఆపరేషన్స్ బృందం వాహనం లభ్యత, ప్రయాణ సమయం మరియు ఫేర్ వివరాలను మీతో మాట్లాడి నిర్ధారించిన తర్వాతే బుకింగ్ లాంఛనంగా పూర్తవుతుంది."
                  : "All trip details submitted through our website or initial WhatsApp messages constitute travel enquiries. A booking is formally confirmed only after our dispatch team reviews vehicle availability, route feasibility, and communicates confirmation in writing or via direct call."}
              </li>
              <li>
                <strong>{isTe ? "ఖచ్చితమైన సమాచారం:" : "Accurate Travel Information:"}</strong>{" "}
                {isTe
                  ? "పికప్ స్థానం, గమ్యం, ప్రయాణ తేదీ, బయలుదేరే సమయం మరియు ప్రయాణికుల సంఖ్యను ఖచ్చితంగా తెలియజేయాలి."
                  : "Passengers are requested to provide accurate pickup addresses, flight/train details, departure times, and passenger headcounts to prevent dispatch delays."}
              </li>
              <li>
                <strong>{isTe ? "చెల్లింపు విధానం:" : "No Mandatory Advance Payment:"}</strong>{" "}
                {isTe
                  ? "సాధారణ స్థానిక మరియు తిరుమల పర్యటనల కోసం ముందస్తు చెల్లింపు అవసరం లేదు. ప్రయాణం ముగిసిన తర్వాత నేరుగా డ్రైవర్‌కు నగదు లేదా UPI ద్వారా చెల్లించవచ్చు."
                  : "For standard local journeys, Tirumala hill transfers, and airport pickups, advance deposits are generally not required. You may pay the driver directly via cash or UPI upon journey completion."}
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="akc-legal-section">
            <h2>
              <span>3.</span>{" "}
              {isTe ? "పారదర్శక ధరల విధానం" : "Transparent Pricing & Toll / Permit Exclusions"}
            </h2>
            <p>
              {isTe
                ? "అక్షయ క్యాబ్స్ నిజాయితీ గల పారదర్శక ధరలను మాత్రమే పాటిస్తుంది. దాచిన లేదా అప్రకటిత ఛార్జీలు ఏవీ ఉండవు."
                : "Akshaya Cabs is committed to total fare transparency with zero unexpected surcharges."}
            </p>
            <ul>
              <li>
                <strong>{isTe ? "డ్రైవర్ అలవెన్స్ కలిపి ఉంటుంది:" : "Driver Allowance Included:"}</strong>{" "}
                {isTe
                  ? "ప్రకటించిన అన్ని ప్యాకేజీలు మరియు వాహన రేట్లలో డ్రైవర్ అలవెన్స్ (Driver Batta) ఇప్పటికే చేర్చబడి ఉంటుంది. దీని కోసం అదనంగా డిమాండ్ చేయబడదు."
                  : "Driver allowance (driver batta) is already included in all published package prices and agreed vehicle rental tariffs. You will not be asked to pay separate driver charges."}
              </li>
              <li>
                <strong>{isTe ? "టోల్స్, పార్కింగ్ & పర్మిట్లు:" : "Tolls, Parking & State Permits at Actuals:"}</strong>{" "}
                {isTe
                  ? "హైవే టోల్ గేట్లు, దేవాలయ/విమానాశ్రయ పార్కింగ్ రుసుములు మరియు అంతర్రాష్ట్ర సరిహద్దు ప్రవేశ పర్మిట్లు (తమిళనాడు, కర్ణాటక) కస్టమర్ అసలు రశీదు ప్రకారం వేరుగా చెల్లించాలి."
                  : "National highway tolls, temple and airport parking fees, and inter-state commercial entry permits (such as Tamil Nadu or Karnataka commercial transport permits) are payable at actuals by the passenger as incurred during the trip."}
              </li>
              <li>
                <strong>{isTe ? "అవుట్‌స్టేషన్ కనిష్ట దూరం:" : "Outstation Daily Minimum:"}</strong>{" "}
                {isTe
                  ? "అవుట్‌స్టేషన్ ట్రిప్పుల కోసం రోజుకు 300 కి.మీ కనిష్ట దూరం వర్తిస్తుంది. అదనపు కిలోమీటర్లు ఎంచుకున్న వాహనం యొక్క ప్రతి కి.మీ రేటు ప్రకారం లెక్కించబడతాయి."
                  : "Outstation round-trips are calculated with a standard baseline allowance of 300 km per calendar day. Additional distance traveled beyond the agreed package is billed at the vehicle's standard per-kilometer tariff."}
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="akc-legal-section">
            <h2>
              <span>4.</span>{" "}
              {isTe ? "రద్దు మరియు ప్రయాణ మార్పులు" : "Cancellations & Trip Rescheduling"}
            </h2>
            <ul>
              <li>
                <strong>{isTe ? "ముందస్తు సమాచారం:" : "Friendly Cancellation Notice:"}</strong>{" "}
                {isTe
                  ? "మీ ప్రయాణ ప్రణాళికలో ఏవైనా మార్పులు ఉంటే దయచేసి మా WhatsApp లేదా ఫోన్ నంబర్‌కు వీలైనంత త్వరగా తెలియజేయండి. వాహనం బయలుదేరడానికి ముందు తెలియజేస్తే ఎలాంటి రద్దు ఛార్జీలు వర్తించవు."
                  : "If your plans change, please message us on WhatsApp or call our team as early as possible. If canceled prior to vehicle dispatch from our garage, no cancellation fees will be charged."}
              </li>
              <li>
                <strong>{isTe ? "విమానం లేదా రైలు ఆలస్యం:" : "Flight or Train Delays:"}</strong>{" "}
                {isTe
                  ? "రైలు లేదా విమానం ఆలస్యమైతే డ్రైవర్ సమయాన్ని ఉచితంగా సర్దుబాటు చేస్తాము. దయచేసి ఆలస్యం తెలిసిన వెంటనే సమాచారం అందించండి."
                  : "We do not penalize passengers for scheduled flight or train arrival delays. Notify us promptly so we can adjust driver pickup timings accordingly."}
              </li>
              <li>
                <strong>{isTe ? "అనివార్య పరిస్థితులు:" : "Unforeseen Breakdowns:"}</strong>{" "}
                {isTe
                  ? "అరుదైన సాంకేతిక లోపం లేదా అత్యవసర పరిస్థితి ఏర్పడితే, సమానమైన లేదా మెరుగైన ప్రత్యామ్నాయ వాహనాన్ని వెంటనే ఏర్పాటు చేయడానికి మేము పూర్తి బాధ్యత వహిస్తాము."
                  : "In the unlikely event of an unexpected mechanical breakdown or driver emergency, Akshaya Cabs will promptly dispatch an equivalent or upgraded replacement vehicle to prevent pilgrim inconvenience."}
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="akc-legal-section">
            <h2>
              <span>5.</span>{" "}
              {isTe
                ? "తిరుమల ఘాట్ రోడ్లు & TTD భక్తుల నిబంధనలు"
                : "Tirumala Ghat Roads & TTD Pilgrim Regulations"}
            </h2>
            <p>
              {isTe
                ? "తిరుమల ఘాట్ రోడ్లపై ప్రయాణం తిరుమల తిరుపతి దేవస్థానం (TTD) మరియు స్థానిక ట్రాఫిక్ నిబంధనలకు లోబడి ఉంటుంది:"
                : "Travel along the Tirumala hill ghat roads is governed strictly by the Tirumala Tirupati Devasthanams (TTD) and Andhra Pradesh traffic authorities:"}
            </p>
            <ul>
              <li>
                <strong>{isTe ? "ఘాట్ రోడ్ వేగ పరిమితులు:" : "Ghat Road Transit Rules:"}</strong>{" "}
                {isTe
                  ? "అలిపిరి మరియు ఘాట్ రోడ్ల వద్ద TTD నిర్ణయించిన కనిష్ట ప్రయాణ సమయాన్ని (28 నిమిషాలు) మా డ్రైవర్లు తప్పనిసరిగా పాటిస్తారు. భద్రత మా మొదటి ప్రాధాన్యత; డ్రైవర్‌ను వేగంగా వెళ్లమని ఒత్తిడి చేయకూడదు."
                  : "Our drivers strictly comply with TTD minimum ghat transit duration guidelines (28 minutes on down-ghat, 40 minutes on up-ghat) for passenger safety. Passengers must not insist on speeding or violating hairpin bend regulations."}
              </li>
              <li>
                <strong>{isTe ? "దర్శనం & క్యూ లైన్లు:" : "Darshan Tickets & Queue Delays:"}</strong>{" "}
                {isTe
                  ? "శ్రీవారి దర్శన టికెట్లు, స్లాట్లు, ప్రోటోకాల్ దర్శనాలు మరియు లడ్డూల పంపిణీ పూర్తిగా TTD పరిధిలో ఉంటాయి. అక్షయ క్యాబ్స్ రవాణా సౌకర్యాన్ని మాత్రమే అందిస్తుంది; దేవాలయ క్యూ సమయాలపై లేదా దర్శన స్లాట్‌లపై మాకు ఎలాంటి నియంత్రణ ఉండదు."
                  : "Darshan tickets, VIP break slots, Seeghra darshan queue wait times, and laddu distribution are exclusively governed by TTD. Akshaya Cabs provides cab transport only and has no authority over temple queue wait times or slot availability."}
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="akc-legal-section">
            <h2>
              <span>6.</span>{" "}
              {isTe ? "వాహన శుభ్రత & ప్రయాణికుల ప్రవర్తన" : "Vehicle Upkeep & Passenger Conduct"}
            </h2>
            <ul>
              <li>
                <strong>{isTe ? "ఆధ్యాత్మిక పవిత్రత & చట్టబద్ధత:" : "Strict Sanctity of Pilgrimage:"}</strong>{" "}
                {isTe
                  ? "తిరుపతి మరియు తిరుమల పవిత్రతను గౌరవిస్తూ వాహనంలో ధూమపానం, మద్యపానం లేదా మత్తు పదార్థాల వినియోగం ఖచ్చితంగా నిషేధించబడింది."
                  : "In reverence of Tirupati’s spiritual sacredness and in strict adherence to Andhra Pradesh law, smoking, alcohol consumption, and possession of prohibited substances inside the vehicle are strictly prohibited."}
              </li>
              <li>
                <strong>{isTe ? "లగేజీ మరియు విలువైన వస్తువులు:" : "Personal Belongings:"}</strong>{" "}
                {isTe
                  ? "ప్రయాణికులు తమ వ్యక్తిగత వస్తువులు, పర్సులు మరియు బంగారు ఆభరణాలపై శ్రద్ధ వహించాలి. ఏదైనా వస్తువు మరచిపోతే మా డ్రైవర్లు సహాయం చేస్తారు, అయితే పోగొట్టుకున్న వస్తువులకు సంస్థ బాధ్యత వహించదు."
                  : "Passengers are advised to safeguard their personal belongings, darshan tokens, and electronic devices. While our drivers are honest and assist in recovering misplaced belongings, Akshaya Cabs cannot accept liability for unattended items."}
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="akc-legal-section">
            <h2>
              <span>7.</span>{" "}
              {isTe ? "చట్టపరమైన పరిధి" : "Governing Law & Legal Jurisdiction"}
            </h2>
            <p>
              {isTe
                ? "ఈ నిబంధనలు మరియు షరతులు భారతదేశ చట్టాలకు లోబడి ఉంటాయి. ఏవైనా వివాదాలు తలెత్తితే అవి కేవలం ఆంధ్రప్రదేశ్, తిరుపతిలోని న్యాయస్థానాల పరిధిలో మాత్రమే పరిష్కరించబడతాయి."
                : "These Terms & Conditions are governed by and construed in accordance with the substantive laws of India. Any legal actions or disputes arising under these terms shall fall under the exclusive jurisdiction of the competent courts in Tirupati, Andhra Pradesh."}
            </p>
          </section>

          {/* Section 8 */}
          <section className="akc-legal-section">
            <h2>
              <span>8.</span>{" "}
              {isTe ? "వ్యాపార సమాచారం & సంప్రదింపులు" : "Registered Business & Contact Information"}
            </h2>
            <address className="akc-legal-address">
              <strong>{BUSINESS.name}</strong> ({BUSINESS.owner.role}: {BUSINESS.owner.name})<br />
              {BUSINESS.address.line1}, {BUSINESS.address.line2}, {BUSINESS.address.city}, {BUSINESS.address.state} — {BUSINESS.address.pincode}<br />
              {isTe ? "ఫోన్:" : "Phone:"}{" "}
              <a href={BUSINESS.phone.primaryTel}>{BUSINESS.phone.primaryDisplay}</a> /{" "}
              <a href={BUSINESS.phone.secondaryTel}>{BUSINESS.phone.secondaryDisplay}</a><br />
              {isTe ? "ఈమెయిల్:" : "Email:"}{" "}
              <a href={BUSINESS.emailHref}>{BUSINESS.email}</a><br />
              {isTe ? "వెబ్‌సైట్:" : "Website:"}{" "}
              <a href={BUSINESS.siteUrl}>{BUSINESS.siteUrl}</a>
            </address>
          </section>

          {/* Footer links */}
          <nav className="akc-legal-nav" aria-label="Legal footer links">
            <Link href={`${prefix}/privacy-policy`} className="akc-legal-nav-link">
              🛡️ {isTe ? "గోప్యతా విధానం" : "Privacy Policy"}
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