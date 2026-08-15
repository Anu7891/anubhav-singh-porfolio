"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

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

export function Stats() {
  return (
    <section className="py-8" aria-label="Career statistics">
      <div className="mx-auto max-w-6xl px-6">
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
      </div>
    </section>
  );
}
