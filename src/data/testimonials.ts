// SVTT Testimonials Data
// Sri Vinayaka Tours & Travels — svtttirupati.com
//
// RULE: These are customer-submitted feedback entries — NOT scraped from Google.
// Do NOT label any of these as "Google Reviews" on the UI.
// Google rating (5.0 ★) is displayed separately from this array.
// Source: Customer feedback collected by Sri Vinayaka Tours & Travels.

export interface Testimonial {
  id: string;
  name: string;
  location: string;           // Customer's city/state
  service: string;            // Which service they used
  rating: 5 | 4;             // Only show 4 or 5 star feedback
  text: string;               // Customer's own words — no fabrication
  date: string;               // Month Year format
  avatar?: string;            // Optional initial letter (no AI faces)
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t01",
    name: "Ramesh K.",
    location: "Hyderabad, Telangana",
    service: "Tirumala Taxi",
    rating: 5,
    text: "Excellent service! The driver was very punctual and knowledgeable about the ghat roads. He waited patiently for us at Tirumala and brought us back safely. Highly recommended for Tirumala darshan.",
    date: "September 2026",
  },
  {
    id: "t02",
    name: "Priya S.",
    location: "Bengaluru, Karnataka",
    service: "Temple Tour Package",
    rating: 5,
    text: "We booked the Kanipakam & Padmavathi package. The vehicle was clean, air-conditioned, and the driver took us to all temples on time. A very comfortable and well-organised trip.",
    date: "August 2026",
  },
  {
    id: "t03",
    name: "Suresh M.",
    location: "Chennai, Tamil Nadu",
    service: "Airport Transfer",
    rating: 5,
    text: "The driver was waiting at the airport before I landed. Very professional and the cab was very clean. Communication was easy through WhatsApp. Will definitely book again for my next Tirupati trip.",
    date: "September 2026",
  },
  {
    id: "t04",
    name: "Anitha R.",
    location: "Vijayawada, Andhra Pradesh",
    service: "Multi-Day Tour Package",
    rating: 5,
    text: "Booked a 3-day South India tour through SVTT. Our driver was extremely helpful, knew all the temple routes, and was available even at late night. The Innova Crysta was very comfortable for our family of 6.",
    date: "July 2026",
  },
  {
    id: "t05",
    name: "Mohammed A.",
    location: "Mumbai, Maharashtra",
    service: "Railway Station Transfer",
    rating: 5,
    text: "Took a late night train to Tirupati. The SVTT driver was there waiting at the station even though the train was 45 minutes late. No extra charges, very honest and reliable service.",
    date: "August 2026",
  },
  {
    id: "t06",
    name: "Lakshmi D.",
    location: "Coimbatore, Tamil Nadu",
    service: "Local Cab Service",
    rating: 5,
    text: "Used SVTT for all our local travel needs during our 4-day stay in Tirupati. Driver was courteous, on time every morning, and helped us navigate the town easily. Great value for money.",
    date: "September 2026",
  },
  {
    id: "t07",
    name: "Venkata P.",
    location: "Kurnool, Andhra Pradesh",
    service: "Outstation Cab",
    rating: 5,
    text: "Hired an Innova for Tirupati to Chennai outstation trip. Driver was experienced with highway driving and we reached safely without any issues. Pricing was fair and transparent — no hidden charges.",
    date: "July 2026",
  },
  {
    id: "t08",
    name: "Deepa N.",
    location: "Pune, Maharashtra",
    service: "Temple Tour Package",
    rating: 5,
    text: "We did the Sri Kalahasti and Golden Temple package. The entire experience was smooth and well-organised. Our driver helped us understand the temple history too. Truly blessed trip with SVTT!",
    date: "June 2026",
  },
  {
    id: "t09",
    name: "Ravi T.",
    location: "Nellore, Andhra Pradesh",
    service: "Tempo Traveller Rental",
    rating: 5,
    text: "Rented a 12-seater Tempo Traveller for a family pilgrimage group. Spacious, fully AC with push-back seats. Driver managed our group well and was very accommodating. Will book again.",
    date: "August 2026",
  },
  {
    id: "t10",
    name: "Sujatha K.",
    location: "Tirupati, Andhra Pradesh",
    service: "Local Cab Service",
    rating: 5,
    text: "I use SVTT regularly for local cab services in Tirupati. Always punctual, always professional. Hemanth and his team are very trustworthy — the best cab service in Tirupati by far.",
    date: "September 2026",
  },
  {
    id: "t11",
    name: "Arvind C.",
    location: "Delhi",
    service: "Airport Transfer",
    rating: 5,
    text: "First time visiting Tirupati. SVTT arranged everything perfectly — airport pickup, hotel transfer, Tirumala darshan and back to airport. Zero stress, all through WhatsApp. Amazing service!",
    date: "September 2026",
  },
  {
    id: "t12",
    name: "Meena V.",
    location: "Madurai, Tamil Nadu",
    service: "Customised Tour",
    rating: 5,
    text: "Requested a custom 2-day route covering Arunachalam and Tirupati. SVTT planned everything perfectly, the Innova Crysta was very comfortable for the long drive. Absolutely worth every rupee.",
    date: "August 2026",
  },
];

// Helper: get testimonials by service
export function getTestimonialsByService(service: string): Testimonial[] {
  return TESTIMONIALS.filter((t) =>
    t.service.toLowerCase().includes(service.toLowerCase())
  );
}
