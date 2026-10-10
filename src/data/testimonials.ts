// Akshaya Cabs — Customer Testimonials Data
// akshayacabs.com | Tirupati, Andhra Pradesh
//
// IMPORTANT: The previous SVTT testimonials have been REMOVED.
// They referenced SVTT (Sri Vinayaka Tours & Travels) and its owner by name —
// they cannot legally or ethically appear on an Akshaya Cabs page.
//
// RULE: Do NOT display ANY reviews, star ratings or Google ratings until
//       genuine, verified Akshaya Cabs customer reviews are collected.
//
// RULE: The /reviews page must be rebuilt as a "Why Travel With Us / What to Expect"
//       section (TASK-23), not a fake reviews or repurposed rating page.
//
// RULE: Do NOT import or display ANY star-rating count, rating score or
//       "rated X.X stars on Google" claim until Akshaya has its own verified reviews.
//
// What to do in TASK-23:
//   Replace the reviews page with:
//   - "What to expect" / "How we work" content (factual, no fake social proof)
//   - Clear booking process explanation
//   - FAQ about Tirupati cab travel
//   - Optional: link to Google Maps listing for customers to leave future reviews
//
// When genuine Akshaya reviews are available, the owner must supply them
// and this file can be updated with verified content.

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: 5 | 4;
  text: string;
  date: string;
  verified?: boolean;   // true only if owner has confirmed this is a real Akshaya customer
}

/**
 * Akshaya Cabs testimonials — currently empty.
 * Populate only with genuine Akshaya Cabs customer reviews.
 * Do NOT copy SVTT reviews here.
 */
export const TESTIMONIALS: Testimonial[] = [
  // No testimonials yet — Akshaya Cabs is a new brand.
  // Owner to supply genuine customer feedback after launch.
];

// ── Helpers ───────────────────────────────────────────────────────

export function getTestimonialsByService(service: string): Testimonial[] {
  return TESTIMONIALS.filter((t) =>
    t.service.toLowerCase().includes(service.toLowerCase())
  );
}

export function hasTestimonials(): boolean {
  return TESTIMONIALS.length > 0;
}
