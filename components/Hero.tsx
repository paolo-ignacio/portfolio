"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, ArrowRight, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import Button from "@/components/ui/Button";
import Particles from "@/components/ui/Particles";
import TerminalWindow from "@/components/ui/TerminalWindow";

const ROLES = ["Backend Engineer", "AI Systems Builder", "RAG Pipeline Architect"];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-dot-grid px-6 pt-24"
    >
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="cmd-label mb-4">
            <span className="text-text-low">$</span> whoami
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-text-hi sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <div className="mt-3 h-8 font-mono text-lg text-signal sm:text-xl">
            {typed}
            <span className="animate-blink">|</span>
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-mid sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#projects" variant="primary" icon={<ArrowRight size={16} />}>
              View Projects
            </Button>
            <Button href="#contact" variant="secondary" icon={<Mail size={16} />}>
              Contact Me
            </Button>
            <Button href={profile.github} variant="ghost" icon={<Github size={16} />} external>
              GitHub
            </Button>
            <Button href={profile.linkedin} variant="ghost" icon={<Linkedin size={16} />} external>
              LinkedIn
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="animate-float">
            <TerminalWindow />
          </div>
        </div>
      </div>
    </section>
  );
}
