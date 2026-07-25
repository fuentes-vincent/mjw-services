/*
 * Flat geometric scene: a ledger checklist under a magnifying glass with a
 * stack of coins — accuracy and careful review.
 */
export default function LedgerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      role="img"
      aria-label="Illustration of a ledger checklist being reviewed with a magnifying glass"
      className={className}
    >
      <circle cx="240" cy="200" r="170" className="fill-white" />
      <circle cx="70" cy="90" r="8" className="fill-red/40" />
      <circle cx="420" cy="120" r="6" className="fill-navy-soft/40" />
      <circle cx="410" cy="320" r="9" className="fill-navy/20" />

      {/* clipboard */}
      <rect x="140" y="70" width="200" height="264" rx="18" className="fill-navy" />
      <rect x="154" y="92" width="172" height="228" rx="12" className="fill-white" />
      <rect x="206" y="56" width="68" height="30" rx="10" className="fill-navy-deep" />

      {/* checklist rows */}
      {[0, 1, 2, 3].map((row) => (
        <g key={row} transform={`translate(0 ${row * 48})`}>
          <circle cx="184" cy="128" r="12" className={row < 3 ? "fill-navy-soft" : "fill-graphite/10"} />
          {row < 3 && (
            <path
              d="M178 128l5 5 8-9"
              fill="none"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-white"
            />
          )}
          <rect x="208" y="118" width="96" height="8" rx="4" className="fill-graphite/15" />
          <rect x="208" y="132" width="64" height="6" rx="3" className="fill-graphite/8" />
        </g>
      ))}

      {/* magnifying glass */}
      <g className="anim-sway">
        <circle cx="330" cy="272" r="52" className="fill-navy-soft/15" />
        <circle cx="330" cy="272" r="52" fill="none" strokeWidth="12" className="stroke-red" />
        <rect x="366" y="308" width="64" height="20" rx="10" transform="rotate(45 366 308)" className="fill-red" />
      </g>

      {/* coin stack */}
      <g className="anim-float-slow anim-delay-1">
        <ellipse cx="96" cy="322" rx="34" ry="12" className="fill-rule" />
        <rect x="62" y="298" width="68" height="24" className="fill-rule" />
        <ellipse cx="96" cy="298" rx="34" ry="12" className="fill-rule" />
        <ellipse cx="96" cy="298" rx="22" ry="7" className="fill-white/50" />
      </g>
    </svg>
  );
}
