// WhyChooseSection — Homepage Section 1
// Sri Vinayaka Tours & Travels — svtttirupati.com

import { BUSINESS } from "@/data/business";
export default function WhyChooseSection() {
  const pillars = [
    {
      id: "availability",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: "Available 24 / 7",
      body: "Round-the-clock service — early morning Tirumala runs, late-night airport pickups, or last-minute pilgrimage plans. We are always ready.",
    },
    {
      id: "drivers",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      title: "Experienced Drivers",
      body: "Professional, courteous drivers who know every temple route, every ghaat road, and every shortcut — ensuring a safe and comfortable journey.",
    },
    {
      id: "fleet",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: "Well-Maintained Fleet",
      body: "7 vehicle types from economy Dzire to spacious Tempo Traveller — all regularly serviced, clean, and GPS-tracked for your peace of mind.",
    },
    {
      id: "pricing",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      ),
      title: "Transparent Pricing",
      body: "No hidden charges. Fixed rates for Tirumala tours, packages, and outstation trips. Toll & parking extra — always disclosed upfront before you book.",
    },
    {
      id: "local",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: "Local Expertise",
      body: "Based in Tirupati with deep knowledge of Tirumala darshan timings, temple queues, and the best routes across Andhra Pradesh.",
    },
    {
      id: "rating",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      title: `${BUSINESS.google.rating}★ Google Rating`,
      body: "Our customers rate us top on Google. Our reputation is built on every journey we complete with care, comfort, and reliability.",
    },
  ];

  return (
    <section className="svtt-section svtt-why" aria-labelledby="why-heading">
      <div className="svtt-container">
        {/* Section header */}
        <div className="svtt-section-header">
          <p className="section-label">Why Travel With Us</p>
          <h2 id="why-heading" className="section-title">
            Tirupati&apos;s Most Trusted Cab Service
          </h2>
          <p className="section-subtitle">
            From Tirumala to South India — we&apos;ve driven thousands of pilgrims and
            travellers safely, comfortably, and on time.
          </p>
        </div>

        {/* Pillars grid */}
        <ul role="list" className="svtt-why__grid">
          {pillars.map((p) => (
            <li key={p.id} className="svtt-why__card">
              <div className="svtt-why__icon" aria-hidden="true">{p.icon}</div>
              <h3 className="svtt-why__title">{p.title}</h3>
              <p className="svtt-why__body">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}