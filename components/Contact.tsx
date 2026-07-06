import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  {
    label: "linkedin.com/in/paoloignacio",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "github.com/paoloignacio",
    href: profile.github,
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-border-soft px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel command="contact --open" title="Let's Work Together" />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-border bg-surface/60 p-8 sm:p-10">
            <p className="max-w-xl text-lg leading-relaxed text-text-mid">
              Open to backend and AI engineering roles. If you have a system
              worth building — an API, a RAG pipeline, a distributed backend —
              I would like to hear about it.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="focus-ring group flex items-center gap-3 font-mono text-sm text-text-hi transition-colors hover:text-signal"
                >
                  <span className="rounded-lg border border-border p-2.5 transition-colors group-hover:border-signal/40 group-hover:bg-signal/10">
                    <link.icon size={16} />
                  </span>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 border-t border-border-soft pt-6 font-mono text-sm text-text-low">
              <MapPin size={15} />
              {profile.location}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
