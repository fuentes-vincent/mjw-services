import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import AdvisorIllustration from "@/components/illustrations/AdvisorIllustration";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "MJW Bookkeeping and Accounting Services, founded by Mary Jade B. Velasco — based in Cebu, Philippines and serving clients worldwide.",
};

const VALUES = [
  {
    title: "Accuracy",
    description:
      "Every transaction is recorded and reconciled with care — your numbers are always something you can rely on.",
  },
  {
    title: "Integrity",
    description:
      "We handle your financial information with the confidentiality and honesty it deserves.",
  },
  {
    title: "Partnership",
    description:
      "We see ourselves as part of your team, invested in helping your business succeed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-rule bg-paper">
        <Container className="section-tight">
          <SectionHeading
            eyebrow="About us"
            title={
              <>
                Built on accuracy, trust, and{" "}
                <em className="font-normal">personal service</em>
              </>
            }
            subtitle="MJW Bookkeeping and Accounting Services was founded to give small businesses everywhere the same financial clarity that larger companies enjoy."
          />
        </Container>
      </section>

      <section className="section">
        <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="font-display text-h2 font-medium leading-[1.08] tracking-tight text-navy">
              Our <em className="font-normal">story</em>
            </h2>
            <p className="mt-5 leading-relaxed text-graphite">
              MJW Bookkeeping and Accounting Services was founded by Mary Jade
              B. Velasco with a simple goal: help small business owners spend
              less time worrying about their books and more time growing their
              business.
            </p>
            <p className="mt-4 leading-relaxed text-graphite">
              What started as hands-on bookkeeping support for a handful of
              businesses has grown into an international practice covering
              bookkeeping, tax preparation, payroll, and financial reporting —
              always delivered with the same close attention every client
              started with.
            </p>

            {/* Founder card, ruled like an entry rather than boxed in shadow. */}
            <div className="relative mt-9 overflow-hidden rounded-card border border-rule bg-white p-6 sm:p-7">
              <div aria-hidden className="absolute inset-y-0 left-2.5 w-px bg-red/45" />
              <div className="pl-4">
                <p className="label-xs text-red">Founder</p>
                <p className="mt-3 font-display text-h3 font-medium text-navy">
                  Mary Jade B. Velasco
                </p>
                <p className="label-xs mt-1.5 text-graphite/60">
                  Founder &amp; lead bookkeeper
                </p>
                <p className="mt-4 leading-relaxed text-graphite">
                  Mary Jade leads every engagement personally, bringing hands-on
                  attention to each client&apos;s books rather than handing
                  clients off to a call center.
                </p>
                <p className="figures mt-5 border-t border-rule pt-4 text-xs text-graphite/60">
                  Cebu, Philippines
                </p>
              </div>
            </div>
          </div>

          <Reveal>
            <AdvisorIllustration className="mx-auto w-full max-w-md" />
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-rule bg-paper">
        <Container className="section">
          <SectionHeading
            eyebrow="What we stand for"
            title={
              <>
                Our <em className="font-normal">values</em>
              </>
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 120} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-rule bg-white p-6">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 items-center justify-center rounded-field bg-navy/8 text-navy"
                  >
                    <Check size={18} strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-h3 font-medium text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-graphite">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
