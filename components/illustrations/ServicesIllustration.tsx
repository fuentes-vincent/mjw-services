/*
 * Flat geometric scene: the bookkeeper's toolbox — a calculator, document
 * folders, a report card, and coins.
 */
type ServicesIllustrationProps = {
  className?: string;
  /** Backdrop blob color; use "white" when placed on a tinted band. */
  backdrop?: "tint" | "white";
};

export default function ServicesIllustration({
  className = "",
  backdrop = "tint",
}: ServicesIllustrationProps) {
  return (
    <svg
      viewBox="0 0 480 400"
      role="img"
      aria-label="Illustration of a calculator, folders, reports, and coins"
      className={className}
    >
      <circle cx="240" cy="200" r="170" className={backdrop === "white" ? "fill-white" : "fill-paper"} />
      <circle cx="70" cy="100" r="8" className="fill-red/40" />
      <circle cx="420" cy="130" r="6" className="fill-navy-soft/50" />
      <circle cx="410" cy="320" r="9" className="fill-navy/20" />
      <circle cx="80" cy="300" r="5" className="fill-rule/60" />

      {/* folder stack */}
      <g>
        <path d="M96 176h56l12 14h72a10 10 0 0 1 10 10v88a10 10 0 0 1-10 10H96a10 10 0 0 1-10-10v-102a10 10 0 0 1 10-10Z" className="fill-rule" />
        <rect x="86" y="212" width="160" height="86" rx="10" className="fill-rule/60" />
        <rect x="104" y="234" width="80" height="8" rx="4" className="fill-white/80" />
        <rect x="104" y="252" width="56" height="8" rx="4" className="fill-white/60" />
      </g>

      {/* calculator */}
      <g>
        <rect x="270" y="120" width="120" height="168" rx="16" className="fill-navy" />
        <rect x="284" y="136" width="92" height="40" rx="8" className="fill-white" />
        <rect x="292" y="148" width="52" height="14" rx="4" className="fill-graphite/15" />
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={286 + col * 32}
              y={190 + row * 30}
              width="24"
              height="20"
              rx="6"
              className={row === 2 && col === 2 ? "fill-rule" : "fill-white/30"}
            />
          )),
        )}
      </g>

      {/* report card */}
      <g className="anim-float">
        <rect x="128" y="86" width="110" height="76" rx="12" className="fill-white drop-shadow" />
        <rect x="144" y="102" width="52" height="8" rx="4" className="fill-graphite/10" />
        <rect x="144" y="122" width="20" height="26" rx="4" className="fill-navy-soft" />
        <rect x="172" y="114" width="20" height="34" rx="4" className="fill-red" />
        <rect x="200" y="106" width="20" height="42" rx="4" className="fill-navy" />
      </g>

      {/* check badge */}
      <g className="anim-float anim-delay-1">
        <circle cx="256" cy="86" r="22" className="fill-navy" />
        <path d="M246 86l7 7 13-14" fill="none" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-white" />
      </g>

      {/* coins */}
      <g className="anim-float-slow anim-delay-2">
        <ellipse cx="150" cy="330" rx="30" ry="11" className="fill-rule" />
        <rect x="120" y="310" width="60" height="20" className="fill-rule" />
        <ellipse cx="150" cy="310" rx="30" ry="11" className="fill-rule" />
        <ellipse cx="150" cy="310" rx="19" ry="6" className="fill-white/50" />
        <circle cx="212" cy="330" r="16" className="fill-navy" />
        <text x="212" y="336" textAnchor="middle" fontSize="16" fontWeight="700" className="fill-white">
          ₱
        </text>
      </g>
    </svg>
  );
}
