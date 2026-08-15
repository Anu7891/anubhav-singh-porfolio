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
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={15} height={15} aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={15} height={15} aria-hidden="true">
      <path d="M9 3H5a2 2 0 0 0-2 2v4M15 3h4a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4M15 21h4a2 2 0 0 0 2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
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

function Body({ p, index, onOpenOverview }: { p: Project; index: number; onOpenOverview: (p: Project) => void }) {
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
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {p.overview ? (
          <button
            type="button"
            onClick={() => onOpenOverview(p)}
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90"
          >
            View overview
            <ExpandIcon />
          </button>
        ) : null}
        <a
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className={
            p.overview
              ? "inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-indigo/50"
              : "inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90"
          }
        >
          Visit live site
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}

function ProjectModal({ p, onClose, onOpenImage }: { p: Project; onClose: () => void; onOpenImage: (src: string) => void }) {
  const o = p.overview!;
  return (
    <div className="macwin-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${p.name} — project overview`}>
      <div className="macwin" onClick={(e) => e.stopPropagation()}>
        {/* Title bar with macOS traffic lights */}
        <div className="macwin-bar">
          <div className="macwin-lights">
            <button type="button" className="macwin-light red" aria-label="Close overview" onClick={onClose}>
              <svg viewBox="0 0 12 12" width={8} height={8} aria-hidden="true"><path d="M3 3l6 6M9 3l-6 6" stroke="rgba(0,0,0,.55)" strokeWidth={1.4} strokeLinecap="round" /></svg>
            </button>
            <span className="macwin-light yellow" aria-hidden="true" />
            <span className="macwin-light green" aria-hidden="true" />
          </div>
          <div className="macwin-title">{host(p.url)}</div>
          <a href={p.url} target="_blank" rel="noreferrer" className="macwin-open" aria-label="Open live site in new tab">
            Open <ArrowIcon />
          </a>
        </div>

        {/* Scrollable window body */}
        <div className="macwin-body">
          {p.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="macwin-hero"
              src={p.image}
              alt={`${p.name} homepage`}
              onClick={() => onOpenImage(p.image!)}
            />
          ) : null}

          <div className="macwin-content">
            <p className="font-mono text-[11.5px] tracking-[0.12em] text-indigo uppercase">
              {p.category} <span className="text-muted">/ {p.kind}</span>
            </p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">{p.name}</h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">{o.summary}</p>

            {/* Meta row */}
            <dl className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                { k: "Role", v: o.role },
                { k: "Timeline", v: o.timeline },
                { k: "Platform", v: o.platform },
              ].map((m) => (
                <div key={m.k} className="rounded-2xl border border-line bg-panel-strong p-4">
                  <dt className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">{m.k}</dt>
                  <dd className="mt-1.5 text-sm text-ink">{m.v}</dd>
                </div>
              ))}
            </dl>

            {/* Highlights */}
            <h4 className="mt-9 text-sm font-semibold tracking-[0.16em] text-muted uppercase">Highlights</h4>
            <ul className="mt-4 grid gap-3">
              {o.highlights.map((h) => (
                <li key={h} className="flex gap-3 leading-relaxed text-ink/90">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Features */}
            <h4 className="mt-9 text-sm font-semibold tracking-[0.16em] text-muted uppercase">Key features</h4>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {o.features.map((f) => (
                <div key={f.title} className="rounded-2xl border border-line bg-panel p-5">
                  <p className="font-semibold text-ink">{f.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.body}</p>
                </div>
              ))}
            </div>

            {/* Stack */}
            <h4 className="mt-9 text-sm font-semibold tracking-[0.16em] text-muted uppercase">Stack</h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {o.stack.map((t) => (
                <li key={t} className="rounded-md border border-line bg-panel-strong px-3 py-1 font-mono text-xs text-muted">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-line pt-7">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90"
              >
                Visit live site
                <ArrowIcon />
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-indigo/50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [src, setSrc] = useState<string | null>(null);
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      // Close the topmost layer first: lightbox, then the modal.
      if (src) setSrc(null);
      else if (active) setActive(null);
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [src, active]);

  // Lock body scroll while the overview window is open.
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Selected work"
          title="Projects I've worked on."
          subtitle="Commerce storefronts I've worked on at 3Embed — e-commerce, B2B and food-ordering — as part of a small team."
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
                  <Body p={p} index={i} onOpenOverview={setActive} />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {active ? <ProjectModal p={active} onClose={() => setActive(null)} onOpenImage={setSrc} /> : null}

      {src ? (
        <div className="lightbox" onClick={() => setSrc(null)} role="dialog" aria-modal="true" aria-label="Enlarged screenshot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="Enlarged screenshot" className="max-h-full max-w-full rounded-xl border border-line" />
        </div>
      ) : null}
    </section>
  );
}
