import type { ReactNode } from "react";

/**
 * Monospaced tech tag pill (used for tech stacks / keyword lists).
 * Renders an <li> so it drops straight into a <ul>.
 */
export function Tag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <li className={`rounded-md border border-line bg-panel-strong px-3 py-1 font-mono text-xs text-muted ${className}`}>
      {children}
    </li>
  );
}
