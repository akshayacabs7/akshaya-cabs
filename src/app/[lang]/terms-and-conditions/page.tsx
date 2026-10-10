// Terms & Conditions — Sri Vinayaka Tours & Travels
// svtttirupati.com/terms-and-conditions

import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sri Vinayaka Tours & Travels",
  description:
    "Terms and Conditions for Sri Vinayaka Tours & Travels — booking terms, cancellation policy, pricing policy, and passenger responsibilities for cab and tour services in Tirupati.",
  alternates: { canonical: "https://svtttirupati.com/terms-and-conditions" },
  robots: { index: false, follow: true }, // Legal pages typically not indexed
};

const EFFECTIVE_DATE = "1 October 2024";

export default function TermsAndConditionsPage() {
  return (
    <main className="svtt-legal-page">
      <div className="svtt-container svtt-legal-page__content">

        <header className="svtt-legal-page__header">
          <h1>Terms &amp; Conditions</h1>
          <p className="svtt-legal-page__meta">
            Effective date: <time dateTime="2024-10-01">{EFFECTIVE_DATE}</time>
            {" "}·{" "}
            {BUSINESS.name}
          </p>
        </header>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By booking a cab, tour package, or any service from Sri Vinayaka Tours &amp; Travels
            (&ldquo;SVTT&rdquo;), you agree to these Terms &amp; Conditions. Please read them carefully
            before making a booking.
          </p>
        </section>

        <section>
          <h2>2. Booking and Confirmation</h2>
          <ul>
            <li>Bookings can be made via WhatsApp, phone call, or the Request a Quote form on our website.</li>
            <li>A booking is confirmed only after SVTT explicitly confirms it via WhatsApp or phone.</li>
            <li>Please provide accurate pickup location, destination, date, time and group size to avoid delays.</li>
          </ul>
        </section>

        <section>
          <h2>3. Pricing and Payments</h2>
          <ul>
            <li>All prices quoted are for the vehicle/route and do not include tolls, parking charges, or state permits unless explicitly stated.</li>
            <li>
              <strong>{BUSINESS.pricingNote}</strong>
            </li>
            <li>Prices for tour packages are starting prices and may vary based on vehicle type, group size, and season.</li>
            <li>Payment terms will be communicated at the time of booking confirmation.</li>
          </ul>
        </section>

        <section>
          <h2>4. Cancellation Policy</h2>
          <ul>
            <li><strong>Cancellation 24+ hours before departure:</strong> No cancellation charge.</li>
            <li><strong>Cancellation within 24 hours of departure:</strong> A partial charge may apply — to be discussed at time of booking.</li>
            <li><strong>No-show:</strong> Full fare may be charged if the passenger does not arrive at the agreed pickup point.</li>
            <li>SVTT reserves the right to cancel bookings in case of vehicle breakdown, natural calamity, or unavoidable circumstances. In such cases, a full refund or rescheduling will be offered.</li>
          </ul>
        </section>

        <section>
          <h2>5. Vehicle and Driver</h2>
          <ul>
            <li>SVTT will provide a clean, well-maintained, air-conditioned vehicle as confirmed at the time of booking.</li>
            <li>In exceptional circumstances, SVTT may substitute the booked vehicle with one of similar or higher category.</li>
            <li>Drivers will be professional, courteous, and licensed.</li>
            <li>Passengers must comply with driver instructions, especially on Tirumala ghat roads and narrow routes.</li>
          </ul>
        </section>

        <section>
          <h2>6. Passenger Responsibilities</h2>
          <ul>
            <li>Passengers must be ready at the agreed pickup point at the agreed time. Waiting beyond 15 minutes may incur additional charges.</li>
            <li>No smoking, alcohol consumption, or use of illegal substances in the vehicle.</li>
            <li>Passengers are responsible for their personal belongings. SVTT is not liable for lost or damaged items left in the vehicle.</li>
            <li>Passengers must not request the driver to violate traffic rules or drive unsafely.</li>
          </ul>
        </section>

        <section>
          <h2>7. Liability</h2>
          <ul>
            <li>SVTT carries appropriate vehicle insurance as required by Indian law.</li>
            <li>SVTT&apos;s liability is limited to the cost of the booked service. We are not liable for indirect, consequential, or special damages.</li>
            <li>SVTT is not responsible for delays caused by traffic, road conditions, government restrictions, or acts of God.</li>
          </ul>
        </section>

        <section>
          <h2>8. Pilgrim-Specific Terms</h2>
          <ul>
            <li>For Tirumala tours: Entry to the Tirumala ghat road by private vehicles is subject to TTD (Tirumala Tirupati Devasthanams) regulations. Any restrictions imposed by TTD are beyond SVTT&apos;s control.</li>
            <li>Darshan queue timings and waiting periods are controlled by TTD. SVTT cannot guarantee darshan access or timing.</li>
          </ul>
        </section>

        <section>
          <h2>9. Governing Law</h2>
          <p>
            These Terms &amp; Conditions are governed by the laws of India. Any disputes shall be
            subject to the jurisdiction of courts in Tirupati, Andhra Pradesh.
          </p>
        </section>

        <section>
          <h2>10. Changes to Terms</h2>
          <p>
            SVTT reserves the right to update these Terms &amp; Conditions at any time. Updated terms
            will be posted on this page. Continued use of our services constitutes acceptance.
          </p>
        </section>

        <section>
          <h2>11. Contact</h2>
          <address>
            <strong>{BUSINESS.name}</strong><br />
            {BUSINESS.address.full}<br />
            Email: <a href={BUSINESS.emailHref}>{BUSINESS.email}</a><br />
            Phone: <a href={BUSINESS.phone.primaryTel}>{BUSINESS.phone.primaryDisplay}</a>
          </address>
        </section>

        <div className="svtt-legal-page__footer-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/">Home</Link>
        </div>

      </div>
    </main>
  );
}