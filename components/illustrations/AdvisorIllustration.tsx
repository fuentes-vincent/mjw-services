/*
 * Flat geometric scene: an advisor presenting growth charts on two boards.
 */
export default function AdvisorIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      role="img"
      aria-label="Illustration of an advisor presenting financial charts"
      className={className}
    >
      <circle cx="250" cy="200" r="170" className="fill-paper" />
      <circle cx="60" cy="140" r="7" className="fill-navy-soft/40" />
      <circle cx="430" cy="90" r="9" className="fill-red/40" />
      <circle cx="420" cy="330" r="6" className="fill-rule/50" />

      {/* chart board: bars */}
      <g className="anim-float">
        <rect x="220" y="80" width="150" height="118" rx="14" className="fill-white drop-shadow" />
        <rect x="242" y="150" width="20" height="32" rx="5" className="fill-navy-soft" />
        <rect x="272" y="130" width="20" height="52" rx="5" className="fill-navy" />
        <rect x="302" y="112" width="20" height="70" rx="5" className="fill-red" />
        <path d="M244 136l26-14 24 8 28-20" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="stroke-rule" />
      </g>

      {/* chart board: pie */}
      <g className="anim-float-slow anim-delay-1">
        <rect x="298" y="216" width="112" height="112" rx="14" className="fill-white drop-shadow" />
        <circle cx="354" cy="272" r="34" className="fill-navy-soft" />
        <path d="M354 272V238a34 34 0 0 1 32 45Z" className="fill-navy" />
        <path d="M354 272l32 11a34 34 0 0 1-20 21Z" className="fill-red" />
      </g>

      {/* advisor */}
      <circle cx="160" cy="152" r="28" fill="#d8b79a" />
      <path d="M132 150a28 28 0 0 1 56-4c-7-18-16-24-28-24s-24 8-28 28Z" className="fill-graphite" />
      <path d="M126 300q-4-88 34-118 38 30 34 118Z" className="fill-navy" />
      {/* pointing arm */}
      <path d="M182 196q34-4 52-28l12 12q-22 30-60 34Z" className="fill-navy-deep" />
      <circle cx="240" cy="174" r="9" fill="#d8b79a" />
      {/* legs */}
      <rect x="138" y="296" width="16" height="62" rx="8" className="fill-graphite" />
      <rect x="166" y="296" width="16" height="62" rx="8" className="fill-graphite" />
      <rect x="132" y="350" width="30" height="12" rx="6" className="fill-navy-deep" />
      <rect x="160" y="350" width="30" height="12" rx="6" className="fill-navy-deep" />
    </svg>
  );
}
