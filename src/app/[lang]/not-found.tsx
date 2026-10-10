/**
 * Akshaya Cabs – 404 Not Found Page
 * app/[lang]/not-found.tsx
 * Server Component – reads lang from next/root-params.
 */

import Link from "next/link";
import { lang as getLang } from "next/root-params";
import type { Locale } from "@/i18n/config";
import { LOCALES } from "@/i18n/config";

export default async function NotFound() {
  const locale = (await getLang()) as Locale;
  const validLocale: Locale = LOCALES.includes(locale) ? locale : "en";
  const prefix = `/${validLocale}`;
  const isTelugu = validLocale === "te";

  return (
    <main style={{ textAlign: "center", padding: "4rem 1rem", minHeight: "60vh" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        {isTelugu ? "404 – పేజీ కనుగొనబడలేదు" : "404 – Page Not Found"}
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
        {isTelugu
          ? "క్షమించండి, మీరు వెతుకుతున్న పేజీ లేదు."
          : "Sorry, the page you are looking for does not exist."}
      </p>
      <nav aria-label={isTelugu ? "404 నావిగేషన్" : "404 navigation"}>
        <Link href={`${prefix}/`} style={{ marginRight: "1rem" }}>
          {isTelugu ? "హోమ్" : "Home"}
        </Link>{" "}
        |{" "}
        <Link href={`${prefix}/tour-packages`} style={{ margin: "0 1rem" }}>
          {isTelugu ? "టూర్ ప్యాకేజీలు" : "Tour Packages"}
        </Link>{" "}
        |{" "}
        <Link href={`${prefix}/contact`} style={{ marginLeft: "1rem" }}>
          {isTelugu ? "సంప్రదించండి" : "Contact"}
        </Link>
      </nav>
    </main>
  );
}