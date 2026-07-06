import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-text-low">
          <span className="text-signal">$</span> echo &quot;built by {profile.name}&quot;
        </p>
        <p className="font-mono text-xs text-text-low">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
