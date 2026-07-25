/*
 * Flat geometric scene: an envelope with a chat bubble and paper plane.
 */
export default function ContactIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      role="img"
      aria-label="Illustration of an envelope, chat bubble, and paper plane"
      className={className}
    >
      <circle cx="240" cy="185" r="150" className="fill-white" />
      <circle cx="80" cy="80" r="8" className="fill-red/40" />
      <circle cx="410" cy="110" r="6" className="fill-navy-soft/50" />
      <circle cx="400" cy="300" r="9" className="fill-navy/20" />
      <circle cx="80" cy="290" r="5" className="fill-rule/50" />

      {/* envelope */}
      <rect x="140" y="140" width="200" height="136" rx="16" className="fill-navy" />
      <path d="M148 152l92 74 92-74" fill="none" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" className="stroke-navy-deep" />
      <path d="M156 148h168l-84 68Z" className="fill-navy-deep" />

      {/* chat bubble */}
      <g className="anim-float anim-delay-1">
        <rect x="286" y="66" width="128" height="72" rx="20" className="fill-navy-soft" />
        <path d="M312 134l-6 26 30-26Z" className="fill-navy-soft" />
        <circle cx="326" cy="102" r="7" className="fill-white anim-blink" />
        <circle cx="350" cy="102" r="7" className="fill-white anim-blink anim-delay-1" />
        <circle cx="374" cy="102" r="7" className="fill-white anim-blink anim-delay-2" />
      </g>

      {/* paper plane */}
      <g className="anim-float-slow">
        <path d="M66 176l108-38-52 74Z" className="fill-red" />
        <path d="M122 212l52-74-30 84Z" className="fill-red/60" />
        <path d="M96 230q28 14 58 8" fill="none" strokeWidth="4" strokeDasharray="2 10" strokeLinecap="round" className="stroke-graphite/30" />
      </g>
    </svg>
  );
}
