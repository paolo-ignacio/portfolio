import { about } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel command="about --me" title="About Me" />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-text-mid">
              {about.body}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-xl border border-border bg-surface/60 p-6">
              <p className="cmd-label mb-4">focus_areas.json</p>
              <ul className="flex flex-col gap-3">
                {about.focusAreas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-mono text-sm text-text-hi"
                  >
                    <span className="mt-1 text-signal">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
