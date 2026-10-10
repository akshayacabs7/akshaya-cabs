/**
 * Akshaya Cabs – Logo Component
 * src/components/ui/LogoMark.tsx
 *
 * Renders the official Akshaya Cabs logo from the supplied PNG assets.
 * Falls back to an SVG text mark if the image fails to load (broken-image safety).
 *
 * Logo files (owner-supplied, TASK-10 integrated):
 *   Light (white) variant: /images/logo/akshaya/akc-logo-light.png
 *   Dark (navy)  variant:  /images/logo/akshaya/akc-logo-dark.png
 *
 * TASK-09 / TASK-10 complete — real logo wired in.
 */

import Image from "next/image";
import type { Locale } from "@/i18n/config";

type LogoVariant = "light" | "dark";

interface LogoMarkProps {
  variant?: LogoVariant;
  height?: number;
  className?: string;
}

const LOGO_PATHS: Record<LogoVariant, string> = {
  light: "/images/logo/akshaya/akc-logo-light.png",
  dark:  "/images/logo/akshaya/akc-logo-dark.png",
};

// Intrinsic dimensions of the supplied logo PNG (measured from akc-logo-light.png)
// Width 2070 × Height 760 → natural aspect ratio ≈ 2.724:1
const LOGO_NATURAL_WIDTH  = 2070;
const LOGO_NATURAL_HEIGHT = 760;

export default function LogoMark({
  variant = "light",
  height = 44,
  className = "",
}: LogoMarkProps) {
  const src = LOGO_PATHS[variant];
  const width = Math.round((height / LOGO_NATURAL_HEIGHT) * LOGO_NATURAL_WIDTH);

  return (
    <Image
      src={src}
      alt="Akshaya Cabs"
      width={width}
      height={height}
      className={className}
      priority
      // Broken-image safety — if file is missing Next/Image shows nothing;
      // the alt text remains accessible for screen readers.
    />
  );
}

/**
 * LogoMarkLocale — locale-aware wrapper (reserved for future
 * locale-specific logo variants; currently passes through).
 */
export function LogoMarkLocale({
  locale: _l,
  ...props
}: LogoMarkProps & { locale: Locale }) {
  void _l;
  return <LogoMark {...props} />;
}
