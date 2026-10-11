/**
 * Akshaya Cabs — AkcDarshanAssistanceSection
 * Promotional Tirumala Darshan Assistance & Pilgrimage Travel Guidance.
 * Server Component — bilingual (EN + TE).
 * Strictly complies with TTD rules: guidance and transport only, no guaranteed darshan claims.
 */

import Image from "next/image";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";
import type { Locale } from "@/i18n/config";

interface Props {
  locale: Locale;
}

export default function AkcDarshanAssistanceSection({ locale }: Props) {
  const isEn = locale === "en";

  const waMessage = isEn
    ? "Hello Akshaya Cabs, I would like to enquire about Tirumala darshan assistance and cab services. Please share the available options and details."
    : "నమస్కారం అక్షయ క్యాబ్స్, నాకు తిరుమల దర్శన సహాయం మరియు క్యాబ్ సర్వీసుల గురించి వివరాలు కావాలి. దయచేసి అందుబాటులో ఉన్న అవకాశాలను తెలియజేయండి.";

  const waUrl = primaryWhatsAppUrl(waMessage);

  const benefits = [
    {
      en: "Comfortable Tirupati & Tirumala Cab Services",
      te: "తిరుపతి & తిరుమల క్యాబ్ సర్వీసులు",
    },
    {
      en: "Guidance on Darshan Options",
      te: "దర్శన విధానాలపై మార్గదర్శనం",
    },
    {
      en: "Personalized Pilgrimage Travel Assistance",
      te: "మీ అవసరాలకు తగిన ప్రయాణ సహాయం",
    },
  ];

  const imageAlt = isEn
    ? "Tirumala Sri Venkateswara Swamy Temple golden gopuram at sunrise in Andhra Pradesh"
    : "ఆంధ్రప్రదేశ్‌లోని సూర్యోదయ వేళ తిరుమల శ్రీ వేంకటేశ్వర స్వామి వారి ఆలయ స్వర్ణ గోపురం";

  return (
    <section
      className="akc-section akc-darshan-promo"
      aria-labelledby="darshan-assistance-heading"
    >
      <div className="akc-container">
        <div className="akc-darshan-promo__card">
          {/* ── Left Column: Temple Photograph ── */}
          <div className="akc-darshan-promo__media">
            <div className="akc-darshan-promo__img-wrap">
              <Image
                src="/images/akshaya/darshan/tirumala-darshan-guidance.webp"
                alt={imageAlt}
                width={720}
                height={480}
                sizes="(max-width: 900px) 100vw, 560px"
                className="akc-darshan-promo__img"
                loading="lazy"
              />
              <div className="akc-darshan-promo__badge" aria-hidden="true">
                <span className="akc-darshan-promo__badge-icon">🕉️</span>
                <span className="akc-darshan-promo__badge-text">
                  {isEn ? "Pilgrimage Assistance" : "శ్రీవారి దర్శన సహాయం"}
                </span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Content & WhatsApp CTA ── */}
          <div className="akc-darshan-promo__content">
            <p className="akc-section-label">
              {isEn ? "TRAVEL & DARSHAN ASSISTANCE" : "ప్రయాణం & దర్శన సహాయం"}
            </p>

            <h2
              id="darshan-assistance-heading"
              className={`akc-darshan-promo__title${isEn ? "" : " lang-te"}`}
            >
              {isEn ? (
                <>
                  Planning a <span className="akc-darshan-promo__title-accent">Tirumala Darshan?</span>
                </>
              ) : (
                <>
                  తిరుమల దర్శనానికి <span className="akc-darshan-promo__title-accent">ప్లాన్ చేస్తున్నారా?</span>
                </>
              )}
            </h2>

            <p className={`akc-darshan-promo__desc${isEn ? "" : " lang-te"}`}>
              {isEn
                ? "Travel comfortably with Akshaya Cabs. We can also guide you on Tirumala darshan arrangements, including VIP Break Darshan eligibility and applicable official procedures, based on your requirements."
                : "అక్షయ క్యాబ్స్ తో సౌకర్యవంతంగా ప్రయాణించండి. మీ అవసరాలకు అనుగుణంగా తిరుమల దర్శన ఏర్పాట్లు, VIP బ్రేక్ దర్శనం అర్హత మరియు అధికారిక విధానాల గురించి మార్గదర్శనం అందిస్తాము."}
            </p>

            {/* Benefit Points */}
            <ul className="akc-darshan-promo__benefits" role="list">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="akc-darshan-promo__benefit-item">
                  <span className="akc-darshan-promo__check" aria-hidden="true">
                    ✓
                  </span>
                  <span className={isEn ? "" : "lang-te"}>
                    {isEn ? benefit.en : benefit.te}
                  </span>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA Button */}
            <div className="akc-darshan-promo__action">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="akc-btn akc-btn--wa akc-btn--lg akc-darshan-promo__btn"
                aria-label={
                  isEn
                    ? "Enquire About Darshan Assistance on WhatsApp"
                    : "వాట్సాప్‌లో దర్శన సహాయం కోసం సంప్రదించండి"
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className={isEn ? "" : "lang-te"}>
                  {isEn ? "Enquire About Darshan Assistance" : "దర్శన సహాయం కోసం సంప్రదించండి"}
                </span>
              </a>
            </div>

            {/* Disclaimer */}
            <div className="akc-darshan-promo__disclaimer" role="note">
              <span className="akc-darshan-promo__disc-icon" aria-hidden="true">
                ℹ️
              </span>
              <p className={`akc-darshan-promo__disc-text${isEn ? "" : " lang-te"}`}>
                {isEn
                  ? "Darshan arrangements are subject to applicable TTD rules, eligibility, approval, and availability. No darshan or entry is guaranteed."
                  : "దర్శన ఏర్పాట్లు TTD నిబంధనలు, అర్హత, అనుమతి మరియు లభ్యతపై ఆధారపడి ఉంటాయి. దర్శనానికి హామీ ఇవ్వబడదు."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
