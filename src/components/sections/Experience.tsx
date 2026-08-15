import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label="Experience" title="Work experience." />
        <div className="relative mt-12">
          {/* center line */}
          <div
            className="absolute left-4 top-0 h-full w-px bg-line md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          <ol className="space-y-10">
            {experience.map((job, i) => {
              const left = i % 2 === 0;
              return (
                <li key={job.company} className="relative">
                  <span
                    className="absolute left-4 top-2 z-10 flex size-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-indigo bg-bg md:left-1/2"
                    aria-hidden="true"
                  >
                    <span className="size-1.5 rounded-full bg-indigo" />
                  </span>
                  <div
                    className={`grid gap-6 pl-12 md:grid-cols-2 md:gap-16 md:pl-0 ${left ? "" : "md:[direction:rtl]"}`}
                  >
                    <Reveal className="md:[direction:ltr]">
                      <div className={left ? "md:text-right" : ""}>
                        <p className="flex items-center gap-2 text-sm text-muted md:justify-end">
                          <span>{job.period}</span>
                          <span aria-hidden="true">·</span>
                          <span>{job.location}</span>
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-ink">{job.role}</h3>
                        <p className="mt-1 text-lg font-medium text-indigo">{job.company}</p>
                      </div>
                    </Reveal>
                    <Reveal delay={100} className="md:[direction:ltr]">
                      <div className="rounded-2xl border border-line bg-panel p-6">
                        <ul className="space-y-2.5">
                          {job.points.map((point) => (
                            <li key={point} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo/70" aria-hidden="true" />
                              {point}
                            </li>
                          ))}
                        </ul>
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {job.tech.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-full border border-line bg-panel-strong px-3 py-1 text-xs font-medium text-muted"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
