"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Tag } from "../ui/Tag";
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

function Visual({ p, onOpen }: { p: Project; onOpen: (src: string, label: string) => void }) {
  return (
    <div className="proj-visual" style={{ "--tint-a": tintA[p.tint], "--tint-b": tintB[p.tint] } as CSSProperties}>
      {p.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="proj-shot" src={p.image} alt={`${p.name} — preview`} loading="lazy" onClick={() => onOpen(p.image!, p.name)} />
      ) : (
        <div className="shot-ph">
          <span className="grid size-11 place-items-center rounded-xl border border-line bg-white/5">
            <ImgIcon />
          </span>
          <span className="text-[12.5px] text-muted">Add project image</span>
          <span className="font-mono text-[10.5px] text-muted/70">{host(p.url)}</span>
        </div>
      )}
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
          <Tag key={t}>{t}</Tag>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {p.overview ? (
          <Button type="button" onClick={() => onOpenOverview(p)}>
            View overview
            <ExpandIcon />
          </Button>
        ) : null}
        <Button href={p.url} target="_blank" rel="noreferrer" variant={p.overview ? "outline" : "primary"}>
          Visit live site
          <ArrowIcon />
        </Button>
      </div>
    </div>
  );
}

type Slide = { src: string; label: string };

const labelNames: Record<string, string> = {
  menu: "Menu", listing: "Product listing", plp: "Product listing", product: "Product page",
  pdp: "Product page", cart: "Cart", checkout: "Checkout", builder: "Hamper builder",
  shop: "Shop", live: "Live shopping", social: "Social feed", profile: "Profile",
  orders: "My orders", referrals: "Referrals", chat: "Messages", combo: "Combos", catalog: "Catalog",
  wallet: "Wallet",
};
const prettyLabel = (l: string) => labelNames[l] ?? l.charAt(0).toUpperCase() + l.slice(1);

function Slider({ slides, alt, onOpen }: { slides: Slide[]; alt: string; onOpen: (src: string, label: string) => void }) {
  const [i, setI] = useState(0);
  const n = slides.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);
  if (n === 0) return null;
  return (
    <div className="macwin-slider">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="macwin-slide" src={slides[i].src} alt={`${alt} — ${slides[i].label}`} onClick={() => onOpen(slides[i].src, slides[i].label)} />
      <span className="macwin-label">{slides[i].label}</span>
      {n > 1 ? (
        <>
          <span className="macwin-count">{i + 1} / {n}</span>
          <button type="button" className="macwin-nav prev" aria-label="Previous image" onClick={() => go(-1)}>
            <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button type="button" className="macwin-nav next" aria-label="Next image" onClick={() => go(1)}>
            <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <div className="macwin-dots">
            {slides.map((s, d) => (
              <button key={d} type="button" className={`macwin-dot${d === i ? " active" : ""}`} aria-label={`Go to ${s.label}`} onClick={() => setI(d)} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function ProjectModal({ p, onClose, onOpenImage }: { p: Project; onClose: () => void; onOpenImage: (src: string, label: string) => void }) {
  const o = p.overview!;
  const gallery: Slide[] = [
    ...(p.image ? [{ src: p.image, label: "Homepage" }] : []),
    ...p.shots.flatMap((s) => (s.src ? [{ src: s.src, label: prettyLabel(s.label) }] : [])),
  ];
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
          <Slider key={p.name} slides={gallery} alt={p.name} onOpen={onOpenImage} />

          <div className="macwin-content">
            <p className="font-mono text-[11.5px] tracking-[0.12em] text-indigo uppercase">
              {p.category} <span className="text-muted">/ {p.kind}</span>
            </p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-title md:text-4xl">{p.name}</h3>
            <p className="mt-4 leading-relaxed text-muted">{o.summary}</p>

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
                <Tag key={t}>{t}</Tag>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-line pt-7">
              <Button href={p.url} target="_blank" rel="noreferrer">
                Visit live site
                <ArrowIcon />
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [zoom, setZoom] = useState<Slide | null>(null);
  const [active, setActive] = useState<Project | null>(null);
  const openZoom = (src: string, label: string) => setZoom({ src, label });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      // Close the topmost layer first: lightbox, then the modal.
      if (zoom) setZoom(null);
      else if (active) setActive(null);
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [zoom, active]);

  // Lock body scroll while the overview window or the lightbox is open.
  useEffect(() => {
    if (!active && !zoom) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active, zoom]);

  return (
    <Section id="projects">
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
                    <Visual p={p} onOpen={openZoom} />
                  </div>
                  <Body p={p} index={i} onOpenOverview={setActive} />
                </article>
              </Reveal>
            );
          })}
        </div>

      {active ? <ProjectModal p={active} onClose={() => setActive(null)} onOpenImage={openZoom} /> : null}

      {zoom ? (
        <div className="lightbox" onClick={() => setZoom(null)} role="dialog" aria-modal="true" aria-label={`Enlarged — ${zoom.label}`}>
          <button type="button" className="lightbox-close" aria-label="Close preview" onClick={() => setZoom(null)}>
            <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={zoom.src} alt={zoom.label} className="lightbox-img" />
            <figcaption className="lightbox-cap">{zoom.label}</figcaption>
          </figure>
        </div>
      ) : null}
    </Section>
  );
}
