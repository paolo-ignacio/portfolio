import { experience } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-border-soft px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel command="experience --timeline" title="Experience" />
        </Reveal>

        <div className="relative mt-10 pl-8">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-signal via-border to-transparent" />

          {experience.map((entry, i) => (
            <Reveal key={i} delay={i * 0.08} className="relative pb-10 last:pb-0">
              <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-signal bg-ink" />

              <div className="rounded-xl border border-border bg-surface/60 p-6 transition-colors duration-300 hover:border-signal/40">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-text-hi">
                    {entry.role}
                  </h3>
                  <span className="cmd-label">{entry.duration}</span>
                </div>
                <p className="mt-1 font-mono text-sm text-request">{entry.org}</p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {entry.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-sm leading-relaxed text-text-mid"
                    >
                      <span className="mt-1.5 text-signal">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
