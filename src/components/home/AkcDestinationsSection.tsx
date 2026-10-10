/**
 * Akshaya Cabs — AkcDestinationsSection (TASK-12)
 * 6 sacred destinations with real WebP images delivered in TASK-10.
 * Server Component — no client JS.
 * No .svtt-* class names.
 */

import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";

interface Destination {
  id: string;
  image: string;
  nameEn: string;
  nameTe: string;
  subtitleEn: string;
  subtitleTe: string;
  descEn: string;
  descTe: string;
  href: string;
}

const DESTINATIONS: Destination[] = [
  {
    id: "tirumala",
    image: "/images/akshaya/destinations/tirumala-venkateswara.webp",
    nameEn: "Tirumala",
    nameTe: "తిరుమల",
    subtitleEn: "Sri Venkateswara Temple",
    subtitleTe: "శ్రీ వేంకటేశ్వర ఆలయం",
    descEn: "One of the most visited pilgrimage sites in the world. Our drivers navigate the sacred ghat road safely — day or night.",
    descTe: "ప్రపంచంలో అత్యధికంగా సందర్శించే యాత్రా ప్రాంతాలలో ఒకటి. మా డ్రైవర్లు పవిత్ర ఘాట్ రోడ్డును సురక్షితంగా నావిగేట్ చేస్తారు.",
    href: "tour-packages",
  },
  {
    id: "kanipakam",
    image: "/images/akshaya/destinations/kanipakam-temple.webp",
    nameEn: "Kanipakam",
    nameTe: "కాణిపాకం",
    subtitleEn: "Sri Varasiddhi Vinayaka",
    subtitleTe: "శ్రీ వరసిద్ధి వినాయక",
    descEn: "A serene 45 km journey from Tirupati to the revered Ganesha temple — perfect as a half-day or combined temple tour.",
    descTe: "తిరుపతి నుండి 45 కి.మీ దూరంలో ప్రసిద్ధ గణేష ఆలయం — అర్ధ-రోజు లేదా కలిపి దేవాలయ పర్యటనకు అనువైనది.",
    href: "tour-packages",
  },
  {
    id: "srikalahasti",
    image: "/images/akshaya/destinations/srikalahasti-temple.webp",
    nameEn: "Sri Kalahasti",
    nameTe: "శ్రీకాళహస్తి",
    subtitleEn: "Srikalahasti Shiva Temple",
    subtitleTe: "శ్రీకాళహస్తి శివాలయం",
    descEn: "Known for Rahu-Ketu Dosha Nivarana Pooja — 36 km from Tirupati. A deeply spiritual stop many combine with Tirumala darshan.",
    descTe: "రాహు-కేతు దోష నివారణ పూజకు ప్రసిద్ధి — తిరుపతి నుండి 36 కి.మీ. తిరుమల దర్శనంతో కలిపి చేసే ఒక ఆధ్యాత్మిక స్థలం.",
    href: "tour-packages",
  },
  {
    id: "padmavathi",
    image: "/images/akshaya/destinations/padmavathi-temple.webp",
    nameEn: "Padmavathi Temple",
    nameTe: "పద్మావతి ఆలయం",
    subtitleEn: "Tiruchanur, Tirupati",
    subtitleTe: "తిరుచానూర్, తిరుపతి",
    descEn: "The revered Goddess Padmavathi Temple — just 5 km from Tirupati. A must-visit for every pilgrim; easy to combine with Tirumala.",
    descTe: "పూజనీయ పద్మావతి దేవి ఆలయం — తిరుపతి నుండి కేవలం 5 కి.మీ. ప్రతి యాత్రికుడూ తప్పక దర్శించవలసిన స్థలం.",
    href: "tour-packages",
  },
  {
    id: "golden-temple",
    image: "/images/akshaya/destinations/golden-temple-vellore.webp",
    nameEn: "Golden Temple",
    nameTe: "గోల్డెన్ టెంపుల్",
    subtitleEn: "Sripuram, Vellore",
    subtitleTe: "శ్రీపురం, వేలూరు",
    descEn: "A breathtaking golden temple 155 km from Tirupati. Our cabs make it a comfortable day trip from Tirupati.",
    descTe: "తిరుపతి నుండి 155 కి.మీ దూరంలో శ్వాసను ఆపే బంగారు దేవాలయం. మా క్యాబ్‌లతో సుఖంగా వెళ్ళి రావచ్చు.",
    href: "tour-packages",
  },
  {
    id: "arunachalam",
    image: "/images/akshaya/destinations/arunachalam-temple.webp",
    nameEn: "Arunachalam",
    nameTe: "అరుణాచలం",
    subtitleEn: "Tiruvannamalai, Tamil Nadu",
    subtitleTe: "తిరువణ్ణామలై, తమిళనాడు",
    descEn: "Home to the legendary Arunachaleswara Temple. A deeply meaningful outstation journey with our experienced drivers.",
    descTe: "పౌరాణిక అరుణాచలేశ్వర ఆలయానికి నిలయం. మా అనుభవజ్ఞ డ్రైవర్లతో అర్థవంతమైన అవుట్‌స్టేషన్ ప్రయాణం.",
    href: "tour-packages",
  },
];

interface Props { locale: Locale; }

export default function AkcDestinationsSection({ locale }: Props) {
  const isEn = locale === "en";

  return (
    <section className="akc-section akc-destinations" aria-labelledby="destinations-heading">
      <div className="akc-container">

        {/* ── Header ── */}
        <div className="akc-section-header akc-section-header--center">
          <p className="akc-section-label">{isEn ? "Sacred Destinations" : "పవిత్ర గమ్యాలు"}</p>
          <h2 id="destinations-heading" className="akc-section-title">
            {isEn ? "Where We Take You" : "మేము మీకు ఎక్కడికి తీసుకెళ్తాం"}
          </h2>
          <p className="akc-section-subtitle">
            {isEn
              ? "From the ghat roads of Tirumala to the golden spires of Vellore — Akshaya Cabs connects you to South India's most sacred pilgrimage destinations."
              : "తిరుమల ఘాట్ రోడ్డు నుండి వేలూరు బంగారు శిఖరాల వరకు — అక్షయ క్యాబ్స్ మిమ్మల్ని దక్షిణ భారతంలోని అత్యంత పవిత్ర యాత్రా ప్రాంతాలతో కలిపిస్తుంది."}
          </p>
        </div>

        {/* ── 6-destination grid ── */}
        <ul role="list" className="akc-destinations__grid">
          {DESTINATIONS.map((d) => (
            <li key={d.id} className="akc-destinations__card">
              <Link href={`/${locale}/${d.href}`} className="akc-destinations__link">
                {/* Image */}
                <div className="akc-destinations__img-wrap">
                  <Image
                    src={d.image}
                    alt={isEn ? `${d.nameEn} — ${d.subtitleEn}` : `${d.nameTe} — ${d.subtitleTe}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="akc-destinations__img"
                  />
                  <div className="akc-destinations__img-overlay" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="akc-destinations__body">
                  <h3 className={`akc-destinations__name${locale === "te" ? " lang-te" : ""}`}>
                    {isEn ? d.nameEn : d.nameTe}
                  </h3>
                  <p className={`akc-destinations__subtitle${locale === "te" ? " lang-te" : ""}`}>
                    {isEn ? d.subtitleEn : d.subtitleTe}
                  </p>
                  <p className={`akc-destinations__desc${locale === "te" ? " lang-te" : ""}`}>
                    {isEn ? d.descEn : d.descTe}
                  </p>
                  <span className="akc-destinations__cta" aria-hidden="true">
                    {isEn ? "View packages" : "ప్యాకేజీలు చూడండి"} →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* ── CTA ── */}
        <div className="akc-section-cta akc-section-cta--center">
          <Link href={`/${locale}/tour-packages`} className="akc-btn akc-btn--primary">
            {isEn ? "Explore All Tour Packages" : "అన్ని టూర్ ప్యాకేజీలు చూడండి"}
          </Link>
        </div>
      </div>
    </section>
  );
}
