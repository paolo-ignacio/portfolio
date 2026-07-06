"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects, Project } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";

const FILTERS: Array<Project["category"] | "All"> = ["All", "AI/RAG", "Backend/Infra"];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative border-t border-border-soft px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionLabel command="projects --ls" title="Projects" />

            <div className="flex gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`focus-ring rounded-md border px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
                    filter === f
                      ? "border-signal/50 bg-signal/10 text-signal"
                      : "border-border text-text-mid hover:border-text-mid"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-request/40 hover:shadow-lg hover:shadow-request/5"
              >
                <div className="mb-1 flex items-center justify-between">
                  <span className="cmd-label text-request">{project.category}</span>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="focus-ring text-text-mid transition-colors hover:text-signal"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="focus-ring text-text-mid transition-colors hover:text-signal"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-text-hi">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-text-mid">{project.tagline}</p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {project.description.map((line, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm leading-relaxed text-text-mid"
                    >
                      <span className="mt-1.5 text-signal">▸</span>
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border-soft pt-5">
                  {project.stack.map((tech) => (
                    <Badge key={tech} label={tech} variant="signal" />
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
