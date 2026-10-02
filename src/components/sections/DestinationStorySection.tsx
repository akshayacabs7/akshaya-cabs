// DestinationStorySection — Homepage Section 7
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Emotional + SEO storytelling about Tirupati & pilgrimage destinations

import Link from "next/link";

const DESTINATIONS = [
  {
    emoji: "🏔️",
    name: "Tirumala",
    subtitle: "Ghat Road to Divinity",
    desc: "Home to Sri Venkateswara Temple — one of the most visited pilgrimage sites in the world. Our drivers navigate the sacred ghat road safely, at any hour of the day or night.",
    href: "/pickup-drop#tirumala",
  },
  {
    emoji: "🛕",
    name: "Kanipakam",
    subtitle: "Sri Varasiddhi Vinayaka Temple",
    desc: "A serene 45 km journey from Tirupati to the famous Ganesha temple — perfect as a half-day temple tour or part of a multi-temple pilgrimage.",
    href: "/tour-packages",
  },
  {
    emoji: "🌊",
    name: "Sri Kalahasti",
    subtitle: "Srikalahasti Shiva Temple",
    desc: "Known for Rahu-Ketu Dosha Nivarana Pooja, Srikalahasti is 36 km from Tirupati. A deeply spiritual detour that many pilgrims combine with Tirumala darshan.",
    href: "/tour-packages",
  },
  {
    emoji: "✨",
    name: "Golden Temple",
    subtitle: "Sripuram, Vellore",
    desc: "A breathtaking golden temple with a stunning spiritual atmosphere. Our cabs make it a comfortable day trip from Tirupati, covering the 155 km distance with ease.",
    href: "/tour-packages",
  },
  {
    emoji: "🔥",
    name: "Arunachalam",
    subtitle: "Tiruvannamalai, Tamil Nadu",
    desc: "Home to the legendary Arunachaleswara Temple. A deeply meaningful outstation journey — our experienced drivers ensure a safe and on-time round trip.",
    href: "/tour-packages",
  },
  {
    emoji: "🌸",
    name: "Sri Padmavathi",
    subtitle: "Tiruchanur, Tirupati",
    desc: "The revered Goddess Padmavathi Temple in Tiruchanur — just 5 km from Tirupati city. A must-visit for every pilgrim, easy to combine with any Tirumala trip.",
    href: "/tour-packages",
  },
];

export default function DestinationStorySection() {
  return (
    <section className="svtt-section-sm svtt-destinations" aria-labelledby="destinations-heading">
      <div className="svtt-container">
        <div className="svtt-section-header svtt-section-header--center">
          <p className="section-label">Sacred Destinations</p>
          <h2 id="destinations-heading" className="section-title">
            Where We Take You
          </h2>
          <p className="section-subtitle">
            From the ghat roads of Tirumala to the golden temple of Vellore —
            Sri Vinayaka Tours &amp; Travels connects you to South India&apos;s most
            sacred pilgrimage destinations.
          </p>
        </div>

        <ul role="list" className="svtt-destinations__grid">
          {DESTINATIONS.map((d) => (
            <li key={d.name}>
              <Link href={d.href} className="svtt-destinations__card">
                <span className="svtt-destinations__emoji" aria-hidden="true">{d.emoji}</span>
                <div>
                  <h3 className="svtt-destinations__name">{d.name}</h3>
                  <p className="svtt-destinations__subtitle">{d.subtitle}</p>
                  <p className="svtt-destinations__desc">{d.desc}</p>
                </div>
                <span className="svtt-destinations__arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/tour-packages" className="btn btn-secondary">
            View All Tour Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
