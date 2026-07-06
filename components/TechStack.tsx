import { techStack } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";

export default function TechStack() {
  return (
    <section id="stack" className="relative border-t border-border-soft px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel command="stack --categorize" title="Tech Stack" />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category, i) => (
            <Reveal key={category.key} delay={i * 0.06}>
              <div className="group h-full rounded-xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-lg hover:shadow-signal/5">
                <p className="cmd-label mb-1">{category.command}</p>
                <h3 className="mb-4 font-display text-lg font-medium text-text-hi">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item} label={item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
