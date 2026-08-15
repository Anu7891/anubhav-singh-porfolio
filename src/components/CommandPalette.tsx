"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/lib/data";

type Action = { label: string; hint: string; run: () => void };

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const actions: Action[] = [
    ...navLinks.map((l) => ({
      label: `Go to ${l.label}`,
      hint: "Section",
      run: () => document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }),
    })),
    {
      label: "Copy email address",
      hint: site.email,
      run: () => navigator.clipboard.writeText(site.email),
    },
    { label: "Open GitHub", hint: site.githubHandle, run: () => window.open(site.github) },
    { label: "Open LinkedIn", hint: site.linkedinHandle, run: () => window.open(site.linkedin) },
    { label: "Download résumé", hint: "PDF", run: () => window.open(site.resumeUrl) },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    addEventListener("keydown", onKey);
    addEventListener("clipboard:palette", onOpen);
    return () => {
      removeEventListener("keydown", onKey);
      removeEventListener("clipboard:palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-[18vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-bg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a command…"
          className="w-full border-b border-line bg-transparent px-5 py-4 text-[15px] text-ink outline-none placeholder:text-muted"
        />
        <ul className="max-h-72 overflow-y-auto p-2">
          {filtered.map((a) => (
            <li key={a.label}>
              <button
                onClick={() => {
                  a.run();
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm text-ink transition-colors hover:bg-panel-strong"
              >
                {a.label}
                <span className="text-xs text-muted">{a.hint}</span>
              </button>
            </li>
          ))}
          {filtered.length === 0 ? (
            <li className="px-4 py-6 text-center text-sm text-muted">No results.</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
