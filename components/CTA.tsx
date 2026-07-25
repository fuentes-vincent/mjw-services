import Link from "next/link";
import Container from "./Container";
import { ChevronRight } from "./icons";

type CTAProps = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function CTA({
  title = "Ready to get your books in order?",
  subtitle = "Tell us where your books stand today. We'll show you what it takes to bring them current and keep them there.",
  buttonLabel = "Start a conversation",
  buttonHref = "/contact",
}: CTAProps) {
  return (
    <section className="section-tight">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-navy px-7 py-11 text-white sm:px-12 sm:py-14">
          {/* Margin rule, as on every other ledger surface in the site. */}
          <div aria-hidden className="absolute inset-y-0 left-3 w-px bg-red/60 sm:left-6" />

          <div className="flex flex-col items-start gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="max-w-2xl text-balance font-display text-h3 font-medium leading-tight text-white sm:text-h2">
                {title}
              </h2>
              <p className="mt-3 max-w-lg text-white/70">{subtitle}</p>
            </div>
            <Link
              href={buttonHref}
              className="group inline-flex flex-shrink-0 items-center gap-1.5 rounded-field bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-paper focus-visible:outline-white"
            >
              {buttonLabel}
              <ChevronRight
                aria-hidden
                size={16}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
