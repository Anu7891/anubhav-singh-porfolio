import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * shadcn/ui-style button. Variants are described with `cva` and merged with
 * `cn` (clsx + tailwind-merge). Colours come from the .btn-primary /
 * .btn-outline CSS classes (driven by the BRAND theme tokens), so the whole
 * site restyles from one place. Renders an <a> when `href` is set.
 */
export const buttonVariants = cva(
  "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo/60 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "btn-primary",
        outline: "btn-outline",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type CommonProps = VariantProps<typeof buttonVariants> & { className?: string; children: ReactNode };
type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsAnchor = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({ variant, className, children, ...rest }: ButtonAsButton | ButtonAsAnchor) {
  const cls = cn(buttonVariants({ variant }), className);

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
