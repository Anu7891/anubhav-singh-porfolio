"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/data";

export function Nav() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  const openPalette = () => dispatchEvent(new CustomEvent("clipboard:palette"));

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-1 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-line bg-bg/70 px-3 backdrop-blur-md"
      >
        <a href="#main" className="flex items-center gap-2.5 pl-1">
          <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo to-cyan text-xs font-bold text-white">
            {site.initials}
          </span>
          <span className="text-[15px] font-semibold text-ink">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-panel-strong hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={openPalette}
            className="hidden items-center gap-2 rounded-full border border-line bg-panel px-4 py-2 text-sm text-muted transition-colors hover:text-ink md:flex"
          >
            Search
            <kbd className="rounded bg-panel-strong px-1.5 py-0.5 text-[11px] font-medium">⌘K</kbd>
          </button>
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="flex size-10 items-center justify-center rounded-full border border-line bg-panel text-ink transition-colors hover:border-indigo/50"
          >
            {theme === "dark" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
