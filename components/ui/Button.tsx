import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
};

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-mono text-sm font-medium transition-all duration-200";

const variants: Record<string, string> = {
  primary:
    "bg-signal text-ink hover:bg-signal-dim hover:shadow-lg hover:shadow-signal/20 hover:-translate-y-0.5",
  secondary:
    "border border-request/40 text-request hover:bg-request/10 hover:-translate-y-0.5",
  ghost:
    "border border-border text-text-hi hover:border-text-mid hover:-translate-y-0.5",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]}`}
    >
      {icon}
      {children}
    </a>
  );
}
