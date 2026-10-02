// SVTT Service Category Data
// Sri Vinayaka Tours & Travels — svtttirupati.com
// 9 core service categories (from blueprint spec)

import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "local-cab",
    slug: "local-cab-services",
    title: "Local Cab Services",
    shortTitle: "Local Cabs",
    description:
      "Reliable and affordable cab services for all your local travel needs in Tirupati. Whether it is a temple visit, city sightseeing, hospital transfer, or a local errand, our well-maintained AC cabs and professional drivers are at your service.",
    icon: "MapPin",
    image: "/images/vehicles/innova-crysta.webp",
    features: [
      "All major Tirupati landmarks covered",
      "Temple sightseeing routes",
      "Flexible hourly and day packages",
      "Professional, courteous drivers",
      "24/7 availability",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta"],
    cta: "Book Local Cab",
  },
  {
    id: "tirumala-taxi",
    slug: "tirumala-taxi-services",
    title: "Tirumala Taxi Services",
    shortTitle: "Tirumala Taxi",
    description:
      "Dedicated Tirupati to Tirumala taxi service by experienced local drivers who know the ghat roads perfectly. We ensure a safe, comfortable, and timely journey for your Tirumala darshan, available at any hour of the day.",
    icon: "Mountain",
    image: "/images/destinations/tirumala-venkateswara.webp",
    features: [
      "Tirupati to Tirumala and back",
      "Experienced ghat road drivers",
      "Round-the-clock availability",
      "AC vehicles for all capacities",
      "Safe & punctual service",
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
      "Curated pilgrimage tour packages covering the most sacred temples in and around Tirupati and across South India. From local Tirupati temple darshans to multi-day South India pilgrimage tours — we have a package for every devotee.",
    icon: "Landmark",
    image: "/images/packages/svtt0003-tirumala-kanipakam-padmavathi.webp",
    features: [
      "10 curated pilgrimage packages",
      "Local, nearby, and outstation options",
      "Multi-day South India tours",
      "Experienced local guides available",
      "Customizable itineraries",
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
      "Intercity travel from Tirupati to Chennai, Bangalore, Hyderabad, Vijayawada, and all major cities across Andhra Pradesh, Tamil Nadu, Karnataka, Telangana, and Kerala. Comfortable AC vehicles with experienced long-distance drivers.",
    icon: "Navigation",
    image: "/images/vehicles/innova.webp",
    features: [
      "All major cities from Tirupati",
      "One-way and round-trip options",
      "300 km/day limit (extra km charged)",
      "Tollways, parking by customer",
      "Real-time driver tracking (on request)",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta", "tempo-traveller-12", "tempo-traveller-17"],
    cta: "Book Outstation Cab",
  },
  {
    id: "airport-transfers",
    slug: "airport-pickup-drop",
    title: "Airport Pickup & Drop",
    shortTitle: "Airport Transfers",
    description:
      "Punctual and professional airport transfer service for Tirupati Airport. We track your flight, ensure on-time pickup, and handle your luggage with care. Available for early morning, late night, and all scheduled flights.",
    icon: "Plane",
    image: "/images/about/tirupati-airport-transfer.webp",
    features: [
      "Tirupati Airport transfers",
      "Flight tracking & on-time pickup",
      "All hours including late night",
      "Luggage assistance",
      "Professional chauffeurs",
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
      "Hassle-free cab service to and from Tirupati Railway Station. Whether you are arriving for a Tirumala pilgrimage or departing after your visit, our drivers will be waiting for you at the station with a clean, comfortable vehicle.",
    icon: "Train",
    image: "/images/vehicles/dzire.webp",
    features: [
      "Tirupati Railway Station pickup & drop",
      "Train tracking for on-time arrival",
      "24/7 availability",
      "Luggage handling",
      "Direct routes to hotels & temples",
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
      "Spacious and comfortable Tempo Traveller rental for group travel in and around Tirupati. Available in 12+1 and 17+1 seating configurations, our Tempo Travellers are ideal for pilgrimage groups, family gatherings, corporate outings, and school trips.",
    icon: "Bus",
    image: "/images/vehicles/tempo-traveller-12.webp",
    features: [
      "12+1 and 17+1 seating options",
      "Fully AC with push-back seats",
      "Ample luggage space",
      "Suitable for group pilgrimages",
      "Experienced group travel drivers",
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
      "Have a unique travel requirement? We offer fully customized tour itineraries for individuals, families, and groups. Tell us your destinations, duration, and budget, and we will plan the perfect trip for you across South India.",
    icon: "Route",
    image: "/images/packages/svtt0007-kanipakam-golden-temple-arunachalam.webp",
    features: [
      "Tailor-made itineraries",
      "Any destinations across South India",
      "Flexible duration and timing",
      "Multi-day and multi-vehicle support",
      "Competitive custom pricing",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta", "tempo-traveller-12", "tempo-traveller-17"],
    cta: "Request Custom Tour",
  },
  {
    id: "south-india-pilgrimage",
    slug: "south-india-pilgrimage-tours",
    title: "South India Pilgrimage Tours",
    shortTitle: "South India Pilgrimage",
    description:
      "Multi-state spiritual journeys covering the most sacred pilgrimage sites across Andhra Pradesh, Tamil Nadu, Karnataka, Kerala, and Telangana. Our South India pilgrimage tours are designed for devoted pilgrims seeking a complete spiritual experience.",
    icon: "Compass",
    image: "/images/destinations/arunachalam-temple.webp",
    features: [
      "Multi-state pilgrimage routes",
      "Rameshwaram, Madurai, Kanchipuram & more",
      "Experienced spiritual travel drivers",
      "Accommodation assistance (on request)",
      "Group & individual packages",
    ],
    vehicles: ["innova", "innova-crysta", "tempo-traveller-12", "tempo-traveller-17"],
    cta: "Plan Pilgrimage Tour",
  },
];

// Helpers
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}