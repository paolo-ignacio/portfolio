import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative border-t border-border-soft px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel command="certs --verify" title="Certifications" />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rag/40">
                <div className="rounded-lg border border-rag/30 bg-rag/10 p-2.5 text-rag">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-text-hi">
                    {cert.name}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-text-mid">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
