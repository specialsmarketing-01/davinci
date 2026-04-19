"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  durationMs?: number;
  /** 'end' aligns number + label to the right (e.g. flush strip edge) */
  align?: "center" | "end";
};

export function StatCounter({
  target,
  prefix = "",
  suffix = "",
  label,
  durationMs = 1600,
  align = "center",
}: Props) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const id = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(id);
    }

    let cancelled = false;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (cancelled) return;
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    const id = requestAnimationFrame(step);
    return () => {
      cancelled = true;
      cancelAnimationFrame(id);
    };
  }, [target, durationMs]);

  return (
    <div
      className={cn(
        "flex flex-col justify-center gap-1.5",
        align === "end" ? "items-end text-right" : "items-center text-center",
      )}
      aria-live="polite"
    >
      <p className="text-5xl font-extralight tabular-nums leading-none tracking-tight text-white md:text-6xl">
        {prefix}
        {value}
        {suffix}
      </p>
      <p className="text-xs uppercase tracking-[0.35em] text-accent-on-dark">{label}</p>
    </div>
  );
}
