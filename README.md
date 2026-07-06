# Paolo Ignacio — Portfolio

A personal portfolio site for a Backend & AI Engineer, built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Design

Dark, terminal-inspired aesthetic. Section labels read like shell commands (`$ about --me`) instead of numbered markers, and the hero features a typed request/response terminal window as the site's signature element — a nod to the request/response nature of backend API work. Two accent colors carry meaning throughout: teal (`#4FD1C5`) for responses/success, warm orange (`#FF8A4C`) for requests/actions.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy — name, bio, tech stack, projects, experience, certifications, contact links — lives in one place: `lib/data.ts`. Update that file and every section reflects the change automatically.

To point the GitHub stats section (`components/GithubStats.tsx`) at your real GitHub account, change the `GH_USERNAME` constant.

## Project structure

```
app/
  layout.tsx      Root layout, fonts, metadata
  page.tsx        Assembles all sections
  globals.css     Base styles + design tokens (CSS)
components/
  Navbar.tsx, Hero.tsx, About.tsx, TechStack.tsx,
  Projects.tsx, GithubStats.tsx, Experience.tsx,
  Certifications.tsx, Contact.tsx, Footer.tsx
  ui/             Reusable primitives (Badge, Button, Reveal, Particles, TerminalWindow, SectionLabel)
lib/data.ts       All content/data
tailwind.config.ts Design tokens (color, type, animation)
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Deploy.

## Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) load via `next/font/google` — no extra setup needed.
- Respects `prefers-reduced-motion` for the particle background and page transitions.
- Update `profile.email`, `profile.github`, and `profile.linkedin` in `lib/data.ts` with real links before deploying.
