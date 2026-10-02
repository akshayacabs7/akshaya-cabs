// Fleet Page — /fleet
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Task 10: Premium fleet gallery + vehicle comparison table

import type { Metadata } from "next";
import Link from "next/link";
import { VEHICLES } from "@/data/vehicles";
import { primaryWhatsAppUrl, serviceWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";
import FleetFilterGallery from "@/components/ui/FleetFilterGallery";

export const metadata: Metadata = {
  title: "Our Fleet | Sri Vinayaka Tours & Travels — Tirupati Cab Vehicles",
  description:
    "7 well-maintained AC vehicles — Dzire, Ertiga, Innova, Innova Crysta, Tavera, Tempo Traveller 12+1 & 17+1. Compare pricing, capacity & features. Book on WhatsApp.",
  alternates: { canonical: "https://svtttirupati.com/fleet" },
  openGraph: {
    title: "Our Fleet | Sri Vinayaka Tours & Travels",
    description:
      "7 AC cab options for every group size — Sedans to Tempo Travellers. View pricing, capacity & book on WhatsApp.",
    url: "https://svtttirupati.com/fleet",
    images: [{ url: "/images/logo/og-image.jpg", width: 1200, height: 630 }],
  },
};

function formatPrice(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

const generalWaUrl = primaryWhatsAppUrl(
  "Hello SVTT! I would like to enquire about your vehicle availability and pricing. Could you please help me choose the right cab? Thank you!"
);

export default function FleetPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <header className="svtt-fleet-hero" role="banner">
        <div className="svtt-container svtt-fleet-hero__content">
          <span className="svtt-fleet-hero__label">🚗 Our Fleet</span>
          <h1 className="svtt-fleet-hero__h1">
            {VEHICLES.length} Well-Maintained AC Vehicles —<br />
            <span style={{ color: "var(--svtt-accent)" }}>Every Group Size Covered</span>
          </h1>
          <p className="svtt-fleet-hero__desc">
            From compact sedans for solo pilgrims to 17-seater Tempo Travellers for
            large groups — all vehicles are air-conditioned, regularly serviced, and
            driven by experienced local professionals.
          </p>
          <p className="svtt-fleet-hero__note">
            All prices include driver &amp; fuel. Toll, parking &amp; state permits are extra (paid by customer).
          </p>
        </div>
      </header>

      {/* ── Filter Tabs + Gallery (Client Component) ── */}
      <FleetFilterGallery />

      {/* ── Vehicle Comparison Table ── */}
      <section className="svtt-fleet-compare" aria-labelledby="compare-heading">
        <div className="svtt-container">
          <div className="svtt-section-header svtt-section-header--center" style={{ marginBottom: "1.5rem" }}>
            <p className="section-label">Side-by-Side Comparison</p>
            <h2 id="compare-heading" className="section-title">
              Vehicle Comparison Table
            </h2>
            <p className="svtt-fleet-compare__note">
              Scroll horizontally on mobile to view all columns · Toll, parking &amp; state permits not included
            </p>
          </div>

          <div className="svtt-fleet-compare__wrap">
            <table className="svtt-fleet-table" aria-label="Vehicle comparison table">
              <thead>
                <tr>
                  <th scope="col">Vehicle</th>
                  <th scope="col">Capacity</th>
                  <th scope="col">Category</th>
                  <th scope="col">Per KM (Outstation)</th>
                  <th scope="col">Local / Day (8 hrs)</th>
                  <th scope="col">Driver Charges / Day</th>
                  <th scope="col">KM Limit</th>
                  <th scope="col">AC</th>
                  <th scope="col">Book</th>
                </tr>
              </thead>
              <tbody>
                {VEHICLES.map((v) => {
                  const waUrl = serviceWhatsAppUrl({
                    service: `Vehicle booking: ${v.name} (${v.capacity} seater)`,
                  });
                  return (
                    <tr key={v.id}>
                      <td>
                        <span className="svtt-fleet-table__veh-name">{v.name}</span>
                        {v.label && (
                          <span className="svtt-fleet-table__veh-label">{v.label}</span>
                        )}
                      </td>
                      <td>{v.capacity}</td>
                      <td style={{ textTransform: "capitalize" }}>{v.category}</td>
                      <td>
                        {v.price.perKm ? (
                          <span className="svtt-fleet-table__price">{formatPrice(v.price.perKm)}/km</span>
                        ) : "—"}
                      </td>
                      <td>
                        {v.price.localDay ? (
                          <span className="svtt-fleet-table__price">{formatPrice(v.price.localDay)}</span>
                        ) : "—"}
                      </td>
                      <td>
                        {v.price.driverCharges ? formatPrice(v.price.driverCharges) : "—"}
                      </td>
                      <td>
                        {v.price.kmLimit ? `${v.price.kmLimit} km` : "—"}
                      </td>
                      <td>
                        {v.acStatus ? (
                          <span className="svtt-fleet-table__badge svtt-fleet-table__badge--ac">✓ AC</span>
                        ) : "Non-AC"}
                      </td>
                      <td>
                        <div className="svtt-fleet-table__cta">
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp btn-sm"
                            aria-label={`Book ${v.name} on WhatsApp`}
                          >
                            Book
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Strip ── */}
      <section className="svtt-fleet-cta" aria-labelledby="fleet-cta-heading">
        <div className="svtt-container">
          <h2 id="fleet-cta-heading" className="svtt-fleet-cta__heading">
            Not Sure Which Vehicle to Choose?
          </h2>
          <p className="svtt-fleet-cta__sub">
            Tell us your group size, destination, and dates — we&apos;ll recommend the
            best vehicle and package for your trip. Available {BUSINESS.availability}.
          </p>
          <div className="svtt-fleet-cta__btns">
            <a
              href={generalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              aria-label="Ask us to recommend a vehicle on WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Get Vehicle Recommendation
            </a>
            <Link href="/tour-packages" className="btn btn-ghost btn-lg">
              View Tour Packages
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <a
              href={BUSINESS.phone.primaryTel}
              className="btn btn-ghost btn-lg"
              aria-label={`Call ${BUSINESS.phone.primaryDisplay}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call {BUSINESS.phone.primaryDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
