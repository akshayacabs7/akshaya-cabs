// FinalCtaSection — Homepage Section 11
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Blueprint: "Planning Your Tirupati Trip? Let's Make It Simple."
// Buttons: WhatsApp Us | Call Now | Request a Quote

import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";

const waUrl = primaryWhatsAppUrl(
  "Hello Sri Vinayaka Tours & Travels! I am planning a trip to Tirupati and would like to know more about your cab and tour services. Please share details and availability. Thank you!"
);

export default function FinalCtaSection() {
  return (
    <section className="svtt-final-cta" aria-labelledby="final-cta-heading">
      <div className="svtt-container svtt-final-cta__content">
        <p className="svtt-final-cta__eyebrow">Ready to Travel?</p>
        <h2 id="final-cta-heading" className="svtt-final-cta__heading">
          Planning Your Tirupati Trip?<br />
          <span style={{ color: "var(--svtt-accent)" }}>Let&apos;s Make It Simple.</span>
        </h2>
        <p className="svtt-final-cta__desc">
          We are available {BUSINESS.availability} for bookings, enquiries &amp; support.
          WhatsApp us, call, or request a quote — we respond quickly.
        </p>
        <div className="svtt-final-cta__btns">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-xl"
            aria-label="Book on WhatsApp"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </a>
          <a
            href={BUSINESS.phone.primaryTel}
            className="btn btn-ghost btn-xl"
            aria-label={`Call ${BUSINESS.phone.primaryDisplay}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call {BUSINESS.phone.primaryDisplay}
          </a>
          <Link href="/request-a-quote" className="btn btn-gold btn-xl">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
