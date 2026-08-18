"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "../ui/Reveal";
import { stats, achievements } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const t0 = performance.now();
        const duration = 1400;
        const step = (t: number) => {
          const p = Math.min((t - t0) / duration, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-5xl font-bold tracking-tight text-ink md:text-6xl">
      {display.toLocaleString()}
      <span className="text-sky-400">{suffix}</span>
    </span>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} width={13} height={13} aria-hidden="true">
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Stats() {
  return (
    <section id="achievements" aria-label="Achievements & impact" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Counters */}
        <div className="grid grid-cols-2 gap-10 rounded-3xl border border-line bg-panel px-8 py-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Key achievements */}
        <Reveal>
          <div className="mt-4 rounded-3xl border border-line bg-panel p-7 md:p-10">
            <h2 className="text-center text-2xl font-bold tracking-tight text-title md:text-3xl">
              Key achievements
            </h2>
            <ul className="mx-auto mt-8 grid max-w-4xl gap-x-10 gap-y-5 sm:grid-cols-2">
              {achievements.map((a) => (
                <li key={a} className="flex gap-3 leading-relaxed text-ink/90">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-line bg-panel-strong text-cyan">
                    <CheckIcon />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
