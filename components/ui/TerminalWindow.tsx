"use client";

import { useEffect, useState } from "react";

const REQUEST_LINES = [
  { text: "curl -X POST https://api.paolo.dev/v1/query \\", color: "text-text-mid" },
  { text: '  -H "Content-Type: application/json" \\', color: "text-text-mid" },
  { text: '  -d \'{"question": "who is available for hire?"}\'', color: "text-text-mid" },
];

const RESPONSE_LINES = [
  { text: "{", color: "text-text-mid" },
  { text: '  "status": 200,', color: "text-signal" },
  { text: '  "engineer": "Paolo Ignacio",', color: "text-text-hi" },
  { text: '  "role": "Backend & AI Engineer",', color: "text-text-hi" },
  { text: '  "stack": ["FastAPI", "RAG", "Docker"],', color: "text-request" },
  { text: '  "available": true', color: "text-signal" },
  { text: "}", color: "text-text-mid" },
];

type Line = { text: string; color: string };

function useTypedLines(lines: Line[], start: boolean, speed = 14) {
  const [rendered, setRendered] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;
    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;
    const output: string[] = lines.map(() => "");
    setRendered([...output]);

    function tick() {
      if (cancelled) return;
      if (lineIndex >= lines.length) {
        setDone(true);
        return;
      }
      const currentLine = lines[lineIndex].text;
      charIndex++;
      output[lineIndex] = currentLine.slice(0, charIndex);
      setRendered([...output]);
      if (charIndex >= currentLine.length) {
        lineIndex++;
        charIndex = 0;
        setTimeout(tick, 90);
      } else {
        setTimeout(tick, speed);
      }
    }
    const initialDelay = setTimeout(tick, 300);
    return () => {
      cancelled = true;
      clearTimeout(initialDelay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  return { rendered, done };
}

export default function TerminalWindow() {
  const [phase, setPhase] = useState<"request" | "response">("request");
  const req = useTypedLines(REQUEST_LINES, true, 12);
  const res = useTypedLines(RESPONSE_LINES, req.done, 10);

  useEffect(() => {
    if (req.done) setPhase("response");
  }, [req.done]);

  return (
    <div className="w-full max-w-md rounded-xl border border-border bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="term-dot bg-[#FF5F56]" />
        <span className="term-dot bg-[#FFBD2E]" />
        <span className="term-dot bg-[#27C93F]" />
        <span className="ml-3 font-mono text-xs text-text-low">
          api-console — zsh
        </span>
      </div>
      <div className="min-h-[260px] px-5 py-4 font-mono text-[13px] leading-relaxed">
        {req.rendered.map((line, i) => (
          <div key={`req-${i}`} className="text-text-mid">
            {line}
          </div>
        ))}
        {phase === "response" && (
          <div className="mt-3">
            {res.rendered.map((line, i) => (
              <div key={`res-${i}`} className={RESPONSE_LINES[i].color}>
                {line}
              </div>
            ))}
          </div>
        )}
        <span className="mt-1 inline-block h-4 w-2 animate-blink bg-signal align-middle" />
      </div>
    </div>
  );
}
