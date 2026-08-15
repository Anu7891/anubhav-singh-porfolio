"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { projects, type Project } from "@/lib/data";

const tintA: Record<Project["tint"], string> = {
  indigo: "rgba(99,102,241,.2)",
  cyan: "rgba(34,211,238,.22)",
  violet: "rgba(168,85,247,.22)",
};
const tintB: Record<Project["tint"], string> = {
  indigo: "linear-gradient(160deg,#101a33,#0b0b18)",
  cyan: "linear-gradient(160deg,#0a2530,#0a0f18)",
  violet: "linear-gradient(160deg,#23103a,#0d0a18)",
};

const host = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

function ImgIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} width={24} height={24} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 15l5-5 4 4 3-3 6 6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="8.5" cy="8.5" r="1.5" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={16} height={16} aria-hidden="true">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

function Visual({ p, onOpen }: { p: Project; onOpen: (src: string) => void }) {
  return (
    <div className="proj-visual" style={{ "--tint-a": tintA[p.tint], "--tint-b": tintB[p.tint] } as CSSProperties}>
      <div className="browser-frame">
        <div className="browser-bar">
          <span className="browser-dot" style={{ background: "#ff5f57" }} />
          <span className="browser-dot" style={{ background: "#febc2e" }} />
          <span className="browser-dot" style={{ background: "#28c840" }} />
          <span className="browser-url">{host(p.url)}</span>
        </div>
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="shot-img" src={p.image} alt={`${p.name} screenshot`} loading="lazy" onClick={() => onOpen(p.image!)} />
        ) : (
          <div className="shot-ph">
            <span className="grid size-11 place-items-center rounded-xl border border-line bg-white/5">
              <ImgIcon />
            </span>
            <span className="text-[12.5px] text-muted">Add homepage screenshot</span>
            <span className="font-mono text-[10.5px] text-muted/70">{host(p.url)}</span>
          </div>
        )}
      </div>
      <div className="thumb-strip">
        {p.shots.map((s, i) =>
          s.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} className="thumb-img" src={s.src} alt={`${p.name} — ${s.label}`} loading="lazy" onClick={() => onOpen(s.src!)} />
          ) : (
            <div key={i} className="thumb-slot" title={`Add ${s.label} screenshot`}>
              <PlusIcon />
              <span className="t">{s.label}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function Body({ p, index }: { p: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="flex flex-col justify-center p-7 md:p-10">
      <p className="mb-3.5 flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.12em] text-indigo uppercase">
        <span className="rounded-md border border-line px-2 py-0.5 text-muted">{num}</span>
        {p.category} <span className="text-muted">/ {p.kind}</span>
      </p>
      <h3 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{p.name}</h3>
      <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <li key={t} className="rounded-md border border-line bg-panel-strong px-3 py-1 font-mono text-xs text-muted">
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <a
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90"
        >
          Visit live site
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={15} height={15} aria-hidden="true">
            <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSrc(null);
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Selected work"
          title="Production e-commerce, in the wild."
          subtitle="Real storefronts I've built and maintained at 3Embed. Click any screenshot to enlarge — dashed slots are where more gallery shots will go."
        />
        <div className="mt-12 flex flex-col gap-7">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={p.name}>
                <article className="group grid overflow-hidden rounded-3xl border border-line bg-panel transition-colors hover:border-indigo/40 md:grid-cols-2">
                  <div className={reversed ? "md:order-2" : ""}>
                    <Visual p={p} onOpen={setSrc} />
                  </div>
                  <Body p={p} index={i} />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {src ? (
        <div className="lightbox" onClick={() => setSrc(null)} role="dialog" aria-modal="true" aria-label="Enlarged screenshot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="Enlarged screenshot" className="max-h-full max-w-full rounded-xl border border-line" />
        </div>
      ) : null}
    </section>
  );
}
