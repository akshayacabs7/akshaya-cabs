// GoogleReputationSection — Homepage Section 8
// Akshaya Cabs — akshayacabs.com
//
// TASK-03 TEMPORARY: This section has been neutered because:
//   1. Akshaya Cabs has no verified Google reviews or star rating yet.
//   2. SVTT testimonials have been removed (wrong business).
//   3. SVTT Google rating (5.0 ★) must NOT appear on Akshaya pages.
//
// This section will be REBUILT in TASK-23 as a "What to Expect" /
// "Why Travel With Us" section — no fake ratings, no borrowed reviews.
//
// Until TASK-23, this renders a neutral placeholder that does NOT break the build.

import Link from "next/link";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";

const waUrl = primaryWhatsAppUrl();

export default function GoogleReputationSection() {
  return (
    <section className="svtt-section svtt-reputation" aria-labelledby="reputation-heading">
      <div className="svtt-container">

        <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
          <p className="section-label">Why Choose Akshaya Cabs</p>
          <h2 id="reputation-heading" className="section-title" style={{ marginBottom: "0.75rem" }}>
            Trusted Tirupati Cab Service — Every Journey, Beautifully Planned
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "1.5rem", maxWidth: "640px", margin: "0 auto 1.5rem" }}>
            Akshaya Cabs has been serving pilgrims and travellers in and around Tirupati
            with reliable, comfortable and honest cab services. Our drivers know the routes,
            the temples, and the roads — so you can focus on your journey.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              aria-label="Chat with Akshaya Cabs on WhatsApp"
            >
              Book on WhatsApp
            </a>
            <Link href="/about" className="btn btn-ghost">
              About Akshaya Cabs
            </Link>
          </div>
          {/* TODO TASK-23: Replace this entire section with original "What to Expect" content */}
        </div>

      </div>
    </section>
  );
}
