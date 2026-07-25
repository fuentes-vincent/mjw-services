import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  /** Set on dark fields such as the CTA band. */
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <p className={`flex items-center gap-2.5 ${centered ? "justify-center" : ""}`}>
          {/* A rule opening the label, the way a ledger heading is ruled off. */}
          <span aria-hidden className={`h-px w-6 ${dark ? "bg-white/40" : "bg-red"}`} />
          <span className={`label-sm ${dark ? "text-white/70" : "text-red"}`}>
            {eyebrow}
          </span>
        </p>
      )}
      <h2
        className={`mt-3 text-balance font-display text-h2 font-medium leading-[1.08] tracking-tight ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lede leading-relaxed ${
            dark ? "text-white/75" : "text-graphite"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
