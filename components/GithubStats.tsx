import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

const GH_USERNAME = "paoloignacio";

export default function GithubStats() {
  return (
    <section className="relative border-t border-border-soft px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel command="github --stats" title="GitHub Activity" />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-xl border border-border bg-surface/60 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GH_USERNAME}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=4FD1C5&icon_color=FF8A4C&text_color=9BA3B4`}
                alt={`${GH_USERNAME} GitHub stats`}
                className="w-full"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-surface/60 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GH_USERNAME}&layout=compact&theme=dark&hide_border=true&bg_color=00000000&title_color=4FD1C5&text_color=9BA3B4`}
                alt={`${GH_USERNAME} top languages`}
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
