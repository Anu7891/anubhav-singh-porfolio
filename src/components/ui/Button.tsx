import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
};

const base = "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold";

type CommonProps = { variant?: Variant; className?: string; children: ReactNode };
type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsAnchor = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * Themeable action button. Renders an <a> when `href` is set, otherwise a
 * <button>. Colours come from the .btn-primary / .btn-outline CSS classes
 * (driven by the BRAND theme tokens), so the whole site restyles from one place.
 */
export function Button({ variant = "primary", className = "", children, ...rest }: ButtonAsButton | ButtonAsAnchor) {
  const cls = `${base} ${variantClass[variant]} ${className}`.trim();

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
