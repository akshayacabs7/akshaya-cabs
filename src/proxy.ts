/**
 * Akshaya Cabs – Locale Proxy
 * Next.js 16 replaces middleware.ts with proxy.ts.
 * This proxy intercepts requests without a locale prefix and redirects them.
 *
 * Strategy:
 *   1. If the request already has a valid /en/ or /te/ prefix → pass through.
 *   2. If the Accept-Language header suggests Telugu → redirect to /te/...
 *   3. Otherwise → redirect to /en/... (default locale).
 *
 * This keeps locale in the URL for:
 *   - Correct HTML lang attribute per page
 *   - Google hreflang alternate recognition
 *   - Stable shareable locale-specific URLs
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALES, DEFAULT_LOCALE, detectLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ----------------------------------------------------------------
  // 1. Skip static files, Next.js internals, and API routes
  // ----------------------------------------------------------------
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".webp") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".xml") ||
    pathname.endsWith(".txt")
  ) {
    return NextResponse.next();
  }

  // ----------------------------------------------------------------
  // 2. If pathname already starts with a valid locale prefix → pass through
  // ----------------------------------------------------------------
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0] as Locale;
  if (firstSegment && LOCALES.includes(firstSegment)) {
    return NextResponse.next();
  }

  // ----------------------------------------------------------------
  // 3. Detect preferred locale from Accept-Language header
  // ----------------------------------------------------------------
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const cookieLocale = request.cookies.get("akc-locale")?.value;
  const detectedLocale: Locale =
    cookieLocale && LOCALES.includes(cookieLocale as Locale)
      ? (cookieLocale as Locale)
      : detectLocale(acceptLanguage);

  const locale: Locale = LOCALES.includes(detectedLocale)
    ? detectedLocale
    : DEFAULT_LOCALE;

  // ----------------------------------------------------------------
  // 4. Redirect: prepend locale to pathname
  // ----------------------------------------------------------------
  const localisedPath = `/${locale}${pathname === "/" ? "" : pathname}`;
  const redirectUrl = new URL(localisedPath, request.url);
  // Preserve query string
  redirectUrl.search = request.nextUrl.search;

  return NextResponse.redirect(redirectUrl, { status: 307 });
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except:
     * - _next (Next.js internals)
     * - Static file extensions
     * - API routes
     */
    "/((?!_next/static|_next/image|favicon.ico|images|api).*)",
  ],
};
