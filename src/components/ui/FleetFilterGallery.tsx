// FleetFilterGallery — client component for /fleet
// Sri Vinayaka Tours & Travels — svtttirupati.com

"use client";

import { useState } from "react";
import Image from "next/image";
import { VEHICLES } from "@/data/vehicles";
import { serviceWhatsAppUrl } from "@/lib/whatsapp";
import type { Vehicle } from "@/types";

type Cat = "all" | Vehicle["category"];

const FILTERS: { id: Cat; label: string; emoji: string }[] = [
  { id: "all",    label: "All Vehicles",  emoji: "🚗" },
  { id: "sedan",  label: "Sedans",        emoji: "🚙" },
  { id: "suv",    label: "SUVs",          emoji: "🚐" },
  { id: "van",    label: "Vans",          emoji: "🚌" },
  { id: "tempo",  label: "Tempo Travellers", emoji: "🚍" },
];

function formatPrice(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

function labelBadgeClass(cat: Vehicle["category"]) {
  switch (cat) {
    case "sedan": return "svtt-veh-card__label-badge--sedan";
    case "suv":   return "svtt-veh-card__label-badge--suv";
    case "van":   return "svtt-veh-card__label-badge--van";
    case "tempo": return "svtt-veh-card__label-badge--tempo";
  }
}

export default function FleetFilterGallery() {
  const [active, setActive] = useState<Cat>("all");

  const filtered = active === "all" ? VEHICLES : VEHICLES.filter((v) => v.category === active);
  const count = (cat: Cat) => cat === "all" ? VEHICLES.length : VEHICLES.filter((v) => v.category === cat).length;

  return (
    <>
      {/* ── Filter tabs ── */}
      <nav className="svtt-fleet-filters" aria-label="Filter vehicles by category">
        <div className="svtt-container">
          <div className="svtt-fleet-filters__inner" role="list">
            {FILTERS.map((f) => (
              <div key={f.id} role="listitem">
              <button
                className={`svtt-fleet-filter-btn${active === f.id ? " is-active" : ""}`}
                onClick={() => setActive(f.id)}
                aria-pressed={active === f.id}
              >
                <span aria-hidden="true">{f.emoji}</span>
                {f.label}
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    background: active === f.id ? "rgba(255,255,255,0.25)" : "rgba(141,28,34,0.10)",
                    color: active === f.id ? "#fff" : "var(--svtt-primary)",
                    borderRadius: "9999px",
                    padding: "0.05rem 0.45rem",
                    lineHeight: 1.4,
                  }}
                >
                  {count(f.id)}
                </span>
              </button>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Vehicle gallery ── */}
      <section className="svtt-fleet-section" aria-label="Vehicle gallery">
        <div className="svtt-container">
          <ul className="svtt-fleet-grid" role="list">
            {filtered.map((v, idx) => {
              const waUrl = serviceWhatsAppUrl({
                service: `Vehicle enquiry: ${v.name} (${v.capacity} seater)`,
              });
              return (
                <li key={v.id} className="svtt-veh-card">
                  {/* Image */}
                  <div className="svtt-veh-card__img-wrap">
                    <Image
                      src={v.image}
                      alt={`${v.name} — Sri Vinayaka Tours & Travels`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="svtt-veh-card__img"
                      loading={idx < 3 ? "eager" : "lazy"}
                    />
                    {/* Top badges */}
                    <div className="svtt-veh-card__overlay" aria-hidden="true">
                      <span className={`svtt-veh-card__label-badge ${labelBadgeClass(v.category)}`}>
                        {v.label}
                      </span>
                      {v.acStatus && (
                        <span className="svtt-veh-card__ac-badge">✓ AC</span>
                      )}
                    </div>
                    {/* Bottom capacity chip */}
                    <div className="svtt-veh-card__capacity-wrap" aria-hidden="true">
                      <span className="svtt-veh-card__capacity">👥 {v.capacity} Seater</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="svtt-veh-card__body">
                    <h2 className="svtt-veh-card__name">{v.name}</h2>

                    {v.variants && v.variants.length > 0 && (
                      <p className="svtt-veh-card__variants">
                        {v.variants.join(" · ")}
                      </p>
                    )}

                    {v.bestFor && (
                      <p className="svtt-veh-card__best-for">
                        <strong>Best for:</strong> {v.bestFor}
                      </p>
                    )}

                    {/* Feature chips */}
                    {v.features && v.features.length > 0 && (
                      <div className="svtt-veh-card__features" aria-label={`Features of ${v.name}`}>
                        {v.features.map((f) => (
                          <span key={f} className="svtt-veh-card__feat-chip">✓ {f}</span>
                        ))}
                      </div>
                    )}

                    {/* Pricing block */}
                    <div className="svtt-veh-card__pricing" aria-label={`Pricing for ${v.name}`}>
                      {v.price.perKm && (
                        <div className="svtt-veh-card__price-item">
                          <span className="svtt-veh-card__price-label">Per KM</span>
                          <span className="svtt-veh-card__price-val">{formatPrice(v.price.perKm)}</span>
                          <span className="svtt-veh-card__price-sub">outstation</span>
                        </div>
                      )}
                      {v.price.localDay && (
                        <div className="svtt-veh-card__price-item">
                          <span className="svtt-veh-card__price-label">Local / Day</span>
                          <span className="svtt-veh-card__price-val">{formatPrice(v.price.localDay)}</span>
                          <span className="svtt-veh-card__price-sub">8 hrs</span>
                        </div>
                      )}
                      {v.price.kmLimit && (
                        <div className="svtt-veh-card__km-limit">
                          📍 {v.price.kmLimit} km/day limit · Toll &amp; parking extra
                        </div>
                      )}
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="svtt-veh-card__cta">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                        aria-label={`Book ${v.name} on WhatsApp`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Book {v.name}
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
