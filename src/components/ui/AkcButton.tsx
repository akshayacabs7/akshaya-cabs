/**
 * AkcButton — Akshaya Cabs reusable button component
 *
 * Variants: primary | secondary | ghost | dark | gold | wa
 * Sizes:    sm | md (default) | lg | xl
 * Props:    href (renders <a>), onClick, disabled, fullWidth, iconOnly
 *
 * All variants respect WCAG 2.1 AA contrast and 44px min touch target.
 */

import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "gold" | "wa";
type Size    = "sm" | "md" | "lg" | "xl";

interface BaseProps {
  variant?:   Variant;
  size?:      Size;
  fullWidth?: boolean;
  iconOnly?:  boolean;
  className?: string;
  children?:  ReactNode;
}

interface ButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
  external?: undefined;
}

interface AnchorProps
  extends BaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> {
  href: string;
  external?: boolean;
}

type AkcButtonProps = ButtonProps | AnchorProps;

function buildClass(
  variant: Variant,
  size: Size,
  fullWidth: boolean,
  iconOnly: boolean,
  extra?: string
): string {
  const parts = [
    "akc-btn",
    `akc-btn--${variant}`,
    size !== "md" ? `akc-btn--${size}` : "",
    fullWidth ? "akc-btn--full" : "",
    iconOnly ? "akc-btn--icon" : "",
    extra ?? "",
  ];
  return parts.filter(Boolean).join(" ");
}

export function AkcButton(props: AkcButtonProps) {
  const {
    variant   = "primary",
    size      = "md",
    fullWidth = false,
    iconOnly  = false,
    className,
    children,
    ...rest
  } = props;

  const cls = buildClass(variant, size, fullWidth, iconOnly, className);

  if ("href" in rest && rest.href !== undefined) {
    const { href, external, ...anchorRest } = rest as AnchorProps;
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          {...(anchorRest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...(anchorRest as object)}>
        {children}
      </Link>
    );
  }

  const { ...buttonRest } = rest as ButtonProps;
  return (
    <button className={cls} {...buttonRest}>
      {children}
    </button>
  );
}

export default AkcButton;
