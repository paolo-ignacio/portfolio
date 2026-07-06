type BadgeProps = {
  label: string;
  variant?: "default" | "signal" | "request" | "rag";
};

const variantClasses: Record<string, string> = {
  default:
    "border-border text-text-mid hover:border-signal/50 hover:text-signal",
  signal: "border-signal/30 text-signal hover:bg-signal/10",
  request: "border-request/30 text-request hover:bg-request/10",
  rag: "border-rag/30 text-rag hover:bg-rag/10",
};

export default function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border bg-surface/60 px-3 py-1.5 font-mono text-xs transition-colors duration-200 ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
