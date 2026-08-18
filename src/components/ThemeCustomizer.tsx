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
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Restore saved colours on mount.
  useEffect(() => {
    const a = localStorage.getItem(KEY_A);
    const b = localStorage.getItem(KEY_B);
    if (a && b) {
      apply(a, b);
      setAccent(a);
    }
  }, []);

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
      <button
        ref={btnRef}
        onClick={() => setOpen((o) => !o)}
        aria-label="Customize theme colour"
        aria-expanded={open}
        className="fixed bottom-7 left-7 z-40 flex size-13 items-center justify-center rounded-full border border-line bg-panel text-ink shadow-lg backdrop-blur-md transition-transform hover:scale-105"
      >
        <span className="size-5 rounded-full bg-gradient-to-br from-indigo to-cyan" aria-hidden="true" />
      </button>

      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Theme customizer"
          className="fixed bottom-24 left-7 z-40 w-[min(300px,calc(100vw-3.5rem))] rounded-3xl border border-line bg-bg p-5 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">Theme colour</p>
            <button onClick={reset} className="text-xs text-muted transition-colors hover:text-ink">
              Reset
            </button>
          </div>
          <p className="mt-1 text-xs text-muted">Pick an accent — the whole site updates live.</p>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {presets.map((p) => {
              const active = accent.toLowerCase() === p.a.toLowerCase();
              return (
                <button
                  key={p.name}
                  onClick={() => pick(p.a, p.b)}
                  aria-label={p.name}
                  aria-pressed={active}
                  className={`flex flex-col items-center gap-1.5 rounded-xl border p-2 transition-colors ${
                    active ? "border-indigo/60 bg-panel-strong" : "border-line hover:border-indigo/40"
                  }`}
                >
                  <span
                    className="size-8 rounded-full"
                    style={{ background: `linear-gradient(135deg, ${p.a}, ${p.b})` }}
                    aria-hidden="true"
                  />
                  <span className="text-[11px] text-muted">{p.name}</span>
                </button>
              );
            })}
          </div>

          <label className="mt-4 flex items-center justify-between rounded-xl border border-line px-3 py-2.5">
            <span className="text-sm text-ink">Custom colour</span>
            <input
              type="color"
              value={accent}
              onChange={(e) => pickCustom(e.target.value)}
              aria-label="Custom accent colour"
              className="size-8 cursor-pointer rounded-md border border-line bg-transparent"
            />
          </label>
        </div>
      ) : null}
    </>
  );
}
