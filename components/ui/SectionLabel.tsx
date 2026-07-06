type SectionLabelProps = {
  command: string;
  title: string;
};

export default function SectionLabel({ command, title }: SectionLabelProps) {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <span className="cmd-label">
        <span className="text-text-low">$</span> {command}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-text-hi sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
