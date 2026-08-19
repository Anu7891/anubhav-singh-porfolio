"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Visitor-facing theme customizer. Anyone can pick an accent colour and the
 * whole site restyles live — because every accent (links, icons, gradients,
 * focus rings, the name gradient) reads the --accent / --accent-2 CSS tokens.
 * The choice is saved to localStorage so it survives reloads.
 */

type Preset = { name: string; a: string; b: string };

const presets: Preset[] = [
  { name: "Indigo", a: "#6366f1", b: "#22d3ee" },
  { name: "Violet", a: "#8b5cf6", b: "#ec4899" },
  { name: "Emerald", a: "#10b981", b: "#22d3ee" },
  { name: "Rose", a: "#f43f5e", b: "#fb923c" },
  { name: "Ocean", a: "#3b82f6", b: "#38bdf8" },
  { name: "Sunset", a: "#f59e0b", b: "#f43f5e" },
];

const KEY_A = "accent";
const KEY_B = "accent2";
const KEY_HINT = "theme-hint-seen";

function lighten(hex: string, amt: number) {
  const n = parseInt(hex.replace("#", ""), 16);
  if (Number.isNaN(n)) return hex;
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const mix = (c: number) => Math.round(c + (255 - c) * amt);
  return "#" + [mix(r), mix(g), mix(b)].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function apply(a: string, b: string) {
  const root = document.documentElement;
  root.style.setProperty("--accent", a);
  root.style.setProperty("--accent-2", b);
}

export function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const [accent, setAccent] = useState(presets[0].a);
  const [hint, setHint] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const isCustom = !presets.some((p) => p.a.toLowerCase() === accent.toLowerCase());

  // Restore saved colours on mount.
  useEffect(() => {
    const a = localStorage.getItem(KEY_A);
    const b = localStorage.getItem(KEY_B);
    if (a && b) {
      apply(a, b);
      setAccent(a);
    }
  }, []);

  // First-visit nudge so visitors discover they can recolour the site.
  useEffect(() => {
    if (localStorage.getItem(KEY_HINT)) return;
    const t = setTimeout(() => setHint(true), 1600);
    return () => clearTimeout(t);
  }, []);

  const dismissHint = () => {
    setHint(false);
    localStorage.setItem(KEY_HINT, "1");
  };

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || btnRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = () => {
    dismissHint();
    setOpen((o) => !o);
  };

  const pick = (a: string, b: string) => {
    apply(a, b);
    setAccent(a);
    localStorage.setItem(KEY_A, a);
    localStorage.setItem(KEY_B, b);
  };

  const pickCustom = (a: string) => pick(a, lighten(a, 0.35));

  const reset = () => {
    localStorage.removeItem(KEY_A);
    localStorage.removeItem(KEY_B);
    apply(presets[0].a, presets[0].b);
    setAccent(presets[0].a);
  };

  return (
    <>
      <div className="fixed bottom-7 left-7 z-40">
        <button
          ref={btnRef}
          onClick={toggle}
          aria-label="Customize theme colour"
          aria-expanded={open}
          className="group relative flex size-13 items-center justify-center rounded-full border border-line bg-panel text-ink shadow-lg backdrop-blur-md transition-transform hover:scale-105"
        >
          {/* Pulsing ring draws the eye on first visit. */}
          {hint ? (
            <span
              className="absolute inset-0 animate-ping rounded-full opacity-70"
              style={{ background: `linear-gradient(135deg, var(--accent), var(--accent-2))` }}
              aria-hidden="true"
            />
          ) : null}
          <span
            className="relative size-5 rounded-full transition-transform group-hover:rotate-45"
            style={{ background: `linear-gradient(135deg, var(--accent), var(--accent-2))` }}
            aria-hidden="true"
          />
        </button>

        {/* First-visit guidance bubble. */}
        {hint && !open ? (
          <div
            role="status"
            className="absolute bottom-1.5 left-16 w-max max-w-[220px] animate-fade-in rounded-2xl border border-line bg-bg px-3.5 py-2.5 shadow-xl"
          >
            <p className="text-[13px] font-medium text-ink">🎨 Make it yours</p>
            <p className="mt-0.5 text-xs text-muted">Pick an accent — the whole site recolours live.</p>
            <button
              onClick={dismissHint}
              className="mt-2 text-[11px] font-semibold text-muted transition-colors hover:text-ink"
            >
              Got it
            </button>
            <span
              className="absolute top-1/2 -left-1.5 size-3 -translate-y-1/2 rotate-45 border-b border-l border-line bg-bg"
              aria-hidden="true"
            />
          </div>
        ) : null}
      </div>

      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Theme customizer"
          className="fixed bottom-24 left-7 z-40 w-[min(300px,calc(100vw-3.5rem))] animate-fade-in rounded-3xl border border-line bg-bg/95 p-5 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span
                className="size-6 rounded-full ring-2 ring-line"
                style={{ background: `linear-gradient(135deg, var(--accent), var(--accent-2))` }}
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-ink">Theme colour</p>
            </div>
            <button
              onClick={reset}
              className="rounded-full px-2.5 py-1 text-xs text-muted transition-colors hover:bg-panel-strong hover:text-ink"
            >
              Reset
            </button>
          </div>
          <p className="mt-1.5 text-xs text-muted">Pick an accent — the whole site updates live.</p>

          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {presets.map((p) => {
              const active = accent.toLowerCase() === p.a.toLowerCase();
              return (
                <button
                  key={p.name}
                  onClick={() => pick(p.a, p.b)}
                  aria-label={p.name}
                  aria-pressed={active}
                  className={`group flex flex-col items-center gap-2 rounded-2xl border p-2.5 transition-all ${
                    active
                      ? "border-transparent bg-panel-strong shadow-sm ring-2 ring-[var(--accent)]"
                      : "border-line hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:bg-panel"
                  }`}
                >
                  <span
                    className="relative flex size-9 items-center justify-center rounded-full shadow-inner transition-transform group-hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${p.a}, ${p.b})` }}
                    aria-hidden="true"
                  >
                    {active ? (
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path
                          d="m3.5 8.5 3 3 6-7"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                  </span>
                  <span
                    className={`text-[11px] font-medium transition-colors ${
                      active ? "text-ink" : "text-muted"
                    }`}
                  >
                    {p.name}
                  </span>
                </button>
              );
            })}
          </div>

          <label
            className={`mt-4 flex cursor-pointer items-center justify-between rounded-2xl border px-3.5 py-3 transition-colors ${
              isCustom ? "border-transparent bg-panel-strong ring-2 ring-[var(--accent)]" : "border-line hover:bg-panel"
            }`}
          >
            <span className="flex flex-col">
              <span className="text-sm font-medium text-ink">Custom colour</span>
              <span className="text-[11px] text-muted">Tap the swatch to fine-tune</span>
            </span>
            <span className="relative size-8 overflow-hidden rounded-lg ring-2 ring-line">
              <input
                type="color"
                value={accent}
                onChange={(e) => pickCustom(e.target.value)}
                aria-label="Custom accent colour"
                className="absolute -inset-2 size-[calc(100%+1rem)] cursor-pointer border-0 bg-transparent p-0"
              />
            </span>
          </label>
        </div>
      ) : null}
    </>
  );
}
