// Akshaya Cabs — Service Category Data
// akshayacabs.com | Tirupati, Andhra Pradesh
// 9 core service categories — all verified against master execution plan Section 01F.
//
// RULES:
// - No false real-time feature claims (GPS tracking, flight tracking, train tracking).
// - No live vehicle availability — we confirm via WhatsApp/phone.
// - Content descriptions must be independently written — not copied from SVTT.
// - All 9 service categories must be preserved (feature parity requirement).

import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "local-cab",
    slug: "local-cab-services",
    title: "Tirupati Local Cab Services",
    shortTitle: "Local Cabs",
    description:
      "Comfortable and reliable local cab services for all your travel needs within Tirupati. Whether it is a temple visit, hospital trip, city sightseeing, hotel transfer, or a local errand — our well-maintained AC cabs and professional drivers are ready to assist, any time of day.",
    icon: "MapPin",
    image: "/images/akshaya/services/local-cab.webp",
    features: [
      "All major Tirupati landmarks covered",
      "Flexible local day packages",
      "Temple city sightseeing routes",
      "Punctual, courteous drivers",
      "Available 24 hours a day, 7 days a week",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta"],
    cta: "Book Local Cab",
  },
  {
    id: "tirumala-taxi",
    slug: "tirumala-taxi-services",
    title: "Tirupati to Tirumala Taxi",
    shortTitle: "Tirumala Taxi",
    description:
      "Dedicated taxi service from Tirupati to Tirumala, operated by experienced local drivers who are thoroughly familiar with the ghat road. We ensure a safe, comfortable, and timely journey for your Tirumala darshan — available at any hour.",
    icon: "Mountain",
    image: "/images/akshaya/services/tirumala-taxi.webp",
    features: [
      "Tirupati to Tirumala and back",
      "Experienced ghat-road drivers",
      "Available around the clock",
      "AC vehicles for all group sizes",
      "Safe and punctual service",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta"],
    cta: "Book Tirumala Taxi",
  },
  {
    id: "temple-tours",
    slug: "temple-tour-packages",
    title: "Temple Tour Packages",
    shortTitle: "Temple Tours",
    description:
      "Thoughtfully planned pilgrimage tour packages covering the most sacred temples in and around Tirupati and across South India. From city-level Tirupati temple darshans to multi-day inter-state pilgrimage journeys — we have a package to suit every devotee.",
    icon: "Landmark",
    image: "/images/akshaya/packages/akc0001-tirupati-tirumala.webp", // temple tours shares package hero
    features: [
      "10 planned pilgrimage packages",
      "Local, nearby and outstation options",
      "Multi-day South India tours",
      "Clear inclusions and exclusions",
      "Enquiry-based with confirmed pricing",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta", "tempo-traveller-12"],
    cta: "View All Packages",
  },
  {
    id: "outstation-cabs",
    slug: "outstation-cab-services",
    title: "Outstation Cabs",
    shortTitle: "Outstation Cabs",
    description:
      "Intercity cab service from Tirupati to Chennai, Bangalore, Hyderabad, Vijayawada and all major cities across Andhra Pradesh, Tamil Nadu, Karnataka, Telangana and Kerala. Comfortable AC vehicles with experienced long-distance drivers. One-way and round-trip options available.",
    icon: "Navigation",
    image: "/images/akshaya/services/outstation-cab.webp",
    features: [
      "All major South Indian cities covered",
      "One-way and round-trip options",
      "300 km/day included in base fare",
      "Tolls, parking paid separately by customer",
      "Experienced highway drivers",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta", "tempo-traveller-12", "tempo-traveller-17"],
    cta: "Book Outstation Cab",
  },
  {
    id: "airport-transfers",
    slug: "airport-pickup-drop",
    title: "Tirupati Airport Pickup & Drop",
    shortTitle: "Airport Transfers",
    description:
      "Professional cab service to and from Tirupati Airport. Our drivers arrive on time for your departure and are ready to receive you on arrival — available for early morning, late night and all scheduled flights. No extra waiting charges for minor delays.",
    icon: "Plane",
    image: "/images/akshaya/services/airport-transfer.webp",
    features: [
      "Tirupati Airport pickup and drop",
      "Available for all flight timings",
      "Early morning and late-night service",
      "Luggage assistance included",
      "Professional and courteous drivers",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta"],
    cta: "Book Airport Transfer",
  },
  {
    id: "railway-transfers",
    slug: "railway-station-transfers",
    title: "Railway Station Transfers",
    shortTitle: "Railway Transfers",
    description:
      "Hassle-free cab service to and from Tirupati Railway Station. Whether you are arriving for a Tirumala pilgrimage or departing after your visit, our drivers will be ready and waiting with a clean, comfortable vehicle.",
    icon: "Train",
    image: "/images/akshaya/services/railway-station-transfer.webp",
    features: [
      "Tirupati Railway Station pickup and drop",
      "Available 24 hours a day, 7 days a week",
      "Luggage handling assistance",
      "Direct routes to hotels and temples",
      "Reliable and punctual drivers",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta"],
    cta: "Book Station Transfer",
  },
  {
    id: "tempo-traveller",
    slug: "tempo-traveller-rental",
    title: "Tempo Traveller Rentals",
    shortTitle: "Tempo Traveller",
    description:
      "Spacious Tempo Traveller hire for group travel in and around Tirupati. Available in 12+1 and 17+1 seating configurations — ideal for pilgrimage groups, family gatherings, corporate outings, and community trips. All vehicles are AC-equipped with push-back seats.",
    icon: "Bus",
    image: "/images/akshaya/services/tempo-traveller-group.webp",
    features: [
      "12+1 and 17+1 seating configurations",
      "Fully AC with push-back reclining seats",
      "Ample luggage storage space",
      "Suitable for group pilgrimages and events",
      "Experienced group-travel drivers",
    ],
    vehicles: ["tempo-traveller-12", "tempo-traveller-17"],
    cta: "Book Tempo Traveller",
  },
  {
    id: "customized-tours",
    slug: "customized-tours",
    title: "Customized Tours",
    shortTitle: "Custom Tours",
    description:
      "Have a unique travel plan? We can arrange a custom itinerary for individuals, families and groups — across any destinations in South India. Share your required places, preferred dates, group size and we will plan a comfortable and well-priced trip for you.",
    icon: "Route",
    image: "/images/akshaya/services/outstation-cab.webp", // customized tours shares outstation visual (no dedicated image)
    features: [
      "Tailor-made itineraries for any route",
      "Any destinations across South India",
      "Flexible duration and travel dates",
      "Multi-day and multi-vehicle support",
      "Competitive and transparent pricing",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta", "tempo-traveller-12", "tempo-traveller-17"],
    cta: "Request Custom Tour",
  },
  {
    id: "south-india-pilgrimage",
    slug: "south-india-pilgrimage-tours",
    title: "South India Pilgrimage Tours",
    shortTitle: "Pilgrimage Tours",
    description:
      "Multi-state spiritual journeys covering the most sacred pilgrimage sites across Andhra Pradesh, Tamil Nadu, Karnataka, Kerala and Telangana. Our South India pilgrimage tours are designed for devoted travellers seeking a complete and well-organised spiritual experience.",
    icon: "Compass",
    image: "/images/akshaya/services/south-india-pilgrimage.webp",
    features: [
      "Multi-state pilgrimage routes",
      "Rameshwaram, Madurai, Kanchipuram and more",
      "Experienced long-distance drivers",
      "Accommodation assistance available on request",
      "Both individual and group packages",
    ],
    vehicles: ["innova", "innova-crysta", "tempo-traveller-12", "tempo-traveller-17"],
    cta: "Plan Pilgrimage Tour",
  },
];

// ── Helpers ───────────────────────────────────────────────────────

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}