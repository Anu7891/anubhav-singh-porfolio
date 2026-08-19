import type { ReactNode } from "react";

/**
 * Standard page section: consistent vertical rhythm + centered container.
 * Keeps every section's spacing and max-width in one place.
 */
export function Section({
  id,
  ariaLabel,
  className = "",
  innerClassName = "mx-auto max-w-6xl px-6",
  children,
}: {
  id?: string;
  ariaLabel?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-label={ariaLabel} className={`py-12 md:py-16 ${className}`}>
      <div className={innerClassName}>{children}</div>
    </section>
  );
}
