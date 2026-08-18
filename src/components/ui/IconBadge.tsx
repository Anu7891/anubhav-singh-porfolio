import type { ReactNode } from "react";

/**
 * Brand-gradient icon chip. The gradient + white icon are defined once here;
 * pass `className` for size / rounding / hover per usage. Colours follow the
 * --accent / --accent-2 theme tokens (via from-indigo / to-cyan).
 */
export function IconBadge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`grid place-items-center bg-gradient-to-br from-indigo to-cyan text-white ${className}`}>
      {children}
    </span>
  );
}
