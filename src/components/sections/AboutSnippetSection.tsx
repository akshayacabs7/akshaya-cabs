// AboutSnippetSection — Homepage Section 4
// Sri Vinayaka Tours & Travels — svtttirupati.com

import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";

export default function AboutSnippetSection() {
  const waUrl = primaryWhatsAppUrl(
    "Hello SVTT! I visited your website and would like to know more about your services. Please guide me."
  );

  return (
    <section className="svtt-section svtt-about-snippet" aria-labelledby="about-heading">
      <div className="svtt-container svtt-about-snippet__inner">

        {/* Image column */}
        <div className="svtt-about-snippet__media">
          <div className="svtt-about-snippet__img-wrap">
            <Image
              src="/images/about/tirupati-travel-service.webp"
              alt="Sri Vinayaka Tours & Travels — Tirupati cab service"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="svtt-about-snippet__img"
            />
          </div>
          {/* Floating owner card */}
          <div className="svtt-about-snippet__owner-card">
            <Image
              src="/images/owner/ravilla-hemanth-naidu.jpg"
              alt="Ravilla Hemanth Naidu — Owner, Sri Vinayaka Tours & Travels"
              width={56}
              height={56}
              className="svtt-about-snippet__owner-img"
            />
            <div>
              <strong className="svtt-about-snippet__owner-name">{BUSINESS.owner.name}</strong>
              <span className="svtt-about-snippet__owner-role">{BUSINESS.owner.role}</span>
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="svtt-about-snippet__content">
          <p className="section-label">About Us</p>
          <h2 id="about-heading" className="section-title">
            Tirupati&apos;s Trusted Name in Sacred Travel
          </h2>
          <p className="svtt-about-snippet__para">
            Sri Vinayaka Tours &amp; Travels was founded with a simple mission — to make
            every pilgrimage to Tirumala, every temple tour across Andhra Pradesh, and every
            outstation journey as smooth and stress-free as possible.
          </p>
          <p className="svtt-about-snippet__para">
            Based in Tirupati, our team of professional drivers and well-maintained vehicles
            has served thousands of pilgrims, tourists, and corporate travellers. We understand
            the spiritual significance of every journey and treat each trip with the care and
            respect it deserves.
          </p>

          {/* Quick stats */}
          <div className="svtt-about-snippet__stats" role="list" aria-label="Key statistics">
            <div className="svtt-about-snippet__stat" role="listitem">
              <strong className="svtt-about-snippet__stat-val">{BUSINESS.google.rating}★</strong>
              <span className="svtt-about-snippet__stat-label">Google Rating</span>
            </div>
            <div className="svtt-about-snippet__stat-divider" aria-hidden="true" />
            <div className="svtt-about-snippet__stat" role="listitem">
              <strong className="svtt-about-snippet__stat-val">10+</strong>
              <span className="svtt-about-snippet__stat-label">Tour Packages</span>
            </div>
            <div className="svtt-about-snippet__stat-divider" aria-hidden="true" />
            <div className="svtt-about-snippet__stat" role="listitem">
              <strong className="svtt-about-snippet__stat-val">7</strong>
              <span className="svtt-about-snippet__stat-label">Vehicle Types</span>
            </div>
            <div className="svtt-about-snippet__stat-divider" aria-hidden="true" />
            <div className="svtt-about-snippet__stat" role="listitem">
              <strong className="svtt-about-snippet__stat-val">24/7</strong>
              <span className="svtt-about-snippet__stat-label">Available</span>
            </div>
          </div>

          <div className="svtt-about-snippet__ctas">
            <Link href="/about" className="btn btn-primary">
              Our Story
            </Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat With Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}