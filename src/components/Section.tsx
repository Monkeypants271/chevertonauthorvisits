import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Background tone */
  tone?: "white" | "cream" | "navy";
  id?: string;
  ariaLabel?: string;
};

const tones = {
  white: "bg-white text-ink",
  cream: "bg-cream text-ink",
  navy: "bg-navy-900 text-white",
};

export default function Section({
  children,
  className = "",
  tone = "white",
  id,
  ariaLabel,
}: Props) {
  return (
    <section id={id} aria-label={ariaLabel} className={tones[tone]}>
      <div className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-wide ${
            light ? "text-cyan-bright" : "text-cyan-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg ${light ? "text-navy-100" : "text-ink-soft"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
