// Akshaya Cabs — Root redirect page (TASK-30)
// src/app/page.tsx
//
// When a user lands on https://akshayacabs.com/ (no lang prefix),
// Next.js renders this page. We do a permanent server-side redirect
// to /en so Googlebot and users always see the canonical English version.
// The next.config.ts redirect() handles /, and this is a belt-and-braces
// fallback for any case where the middleware redirect does not apply
// (e.g. static export / Netlify edge).
//
// SEO note: Both robots.ts and this redirect ensure no duplicate / vs /en.

import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en");
}
