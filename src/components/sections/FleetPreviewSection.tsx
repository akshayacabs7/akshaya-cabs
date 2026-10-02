// FleetPreviewSection — Homepage Section 5
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Show 4 key vehicles: image, name, capacity, price, short desc, enquiry CTA

import Image from "next/image";
import Link from "next/link";
import { VEHICLES } from "@/data/vehicles";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";

// Show top 4 vehicles on homepage
const PREVIEW_IDS = ["dzire-amaze-etios", "innova-crysta", "tempo-traveller-12", "tempo-traveller-17"];

export default function FleetPreviewSection() {
  const preview = VEHICLES.filter((v) => PREVIEW_IDS.includes(v.id));
  // Fallback: if IDs don't match exactly, take first 4
  const vehicles = preview.length >= 4 ? preview : VEHICLES.slice(0, 4);

  return (
    <section className="svtt-section svtt-fleet-preview" aria-labelledby="fleet-preview-heading">
      <div className="svtt-container">
        <div className="svtt-section-header">
          <p className="section-label">Our Fleet</p>
          <h2 id="fleet-preview-heading" className="section-title">
            Clean, AC Vehicles for Every Group
          </h2>
          <p className="section-subtitle">
            From compact sedans for couples to 17-seater Tempo Travellers for large pilgrim
            groups — all vehicles are air-conditioned and well-maintained.
          </p>
        </div>

        <ul role="list" className="svtt-fleet-preview__grid">
          {vehicles.map((v) => {
            const waMsg = `Hello SVTT! I am interested in renting the ${v.name} (${v.capacity} Seater). Please share availability and pricing. Thank you!`;
            const waUrl = primaryWhatsAppUrl(waMsg);
            return (
              <li key={v.id} className="svtt-fleet-preview__card">
                {/* Image */}
                <div className="svtt-fleet-preview__img-wrap">
                  <Image
                    src={v.image}
                    alt={`${v.name} — Sri Vinayaka Tours & Travels`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="svtt-fleet-preview__img"
                  />
                  <span className="svtt-fleet-preview__capacity-badge" aria-label={`${v.capacity} seater`}>
                    {v.capacity} Seater
                  </span>
                </div>

                {/* Card body */}
                <div className="svtt-fleet-preview__body">
                  <h3 className="svtt-fleet-preview__name">{v.name}</h3>
                  <p className="svtt-fleet-preview__best-for">{v.bestFor}</p>
                  <div className="svtt-fleet-preview__price">
                    <span className="svtt-fleet-preview__price-label">From</span>
                    <strong className="svtt-fleet-preview__price-value">
                      ₹{v.price.perKm}/km
                    </strong>
                  </div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    aria-label={`Enquire about ${v.name} on WhatsApp`}
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="svtt-fleet-preview__cta">
          <Link href="/fleet" className="btn btn-secondary">
            View Full Fleet & Pricing
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
