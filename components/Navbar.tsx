"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-text-hi">
          <span className="text-signal">~/</span>paolo-ignacio
          <span className="animate-blink text-signal">_</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring group font-mono text-sm text-text-mid transition-colors hover:text-signal"
              >
                <span className="text-text-low group-hover:text-request">
                  ./
                </span>
                {link.command}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="focus-ring hidden rounded-lg border border-signal/40 px-4 py-2 font-mono text-sm text-signal transition-all hover:bg-signal/10 md:inline-flex"
        >
          Contact Me
        </a>

        <button
          className="focus-ring text-text-hi md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-ink/95 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring block font-mono text-sm text-text-mid hover:text-signal"
                >
                  <span className="text-text-low">./</span>
                  {link.command}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
