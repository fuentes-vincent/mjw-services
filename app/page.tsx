import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import TrialBalance from "@/components/TrialBalance";
import LedgerIllustration from "@/components/illustrations/LedgerIllustration";
import { ChevronRight } from "@/components/icons";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/testimonials";

const STATS = [
  { value: "10+", label: "Years of combined experience" },
  { value: "100%", label: "BIR-compliant filings" },
  { value: "24/7", label: "Access to your financial records" },
];

const WHY_US = [
  {
    title: "Accurate and reconciled",
    description:
      "Every entry is reconciled and double-checked, so your numbers are always something you can trust.",
  },
  {
    title: "Grounded in Cebu",
    description:
      "We work with Philippine tax rules every day — BIR deadlines, SSS, PhilHealth, and Pag-IBIG remittances included.",
  },
  {
    title: "You talk to your bookkeeper",
    description:
      "You work directly with the person handling your books, not a call center. Questions get answered the same day.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero. The thesis is the ledger itself: books that balance. */}
      <section className="bg-white">
        <Container className="grid items-center gap-12 pt-14 pb-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:pt-20 lg:pb-24">
          <div>
            <p className="flex items-center gap-2.5">
              <span aria-hidden className="h-px w-6 bg-red" />
              <span className="label-sm text-red">Bookkeeping in Cebu</span>
            </p>

            <h1 className="mt-5 text-balance font-display text-hero font-medium leading-[1.02] tracking-tight text-navy">
              Your <em className="font-normal">books</em>, handled accurately and
              on time.
            </h1>

            <p className="mt-6 max-w-lg text-lede leading-relaxed text-graphite">
              MJW Bookkeeping and Accounting Services keeps small businesses in
              Cebu organised, compliant, and confident about their finances — so
              you can get back to running the business.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-field bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-soft"
              >
                Get a free quote
                <ChevronRight
                  aria-hidden
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                />
              </Link>
              <Link
                href="/services"
                className="rounded-field border border-rule px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy/30 hover:bg-paper"
              >
                See what we handle
              </Link>
            </div>
          </div>

          <TrialBalance className="w-full lg:justify-self-end" />
        </Container>
      </section>

      {/* Stats, set as a ledger footing rather than three centred blocks. */}
      <section className="border-y border-rule bg-paper">
        <Container className="py-10">
          <Reveal>
            <dl className="grid gap-8 sm:grid-cols-3 sm:gap-0">
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={
                    index > 0 ? "sm:border-l sm:border-rule sm:pl-8" : "sm:pr-8"
                  }
                >
                  <dt className="figures rule-double pt-2.5 text-3xl leading-none text-navy">
                    {stat.value}
                  </dt>
                  <dd className="label-xs mt-3 text-graphite/70">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <section id="services" className="section scroll-mt-16">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Six services, each on its own <em className="font-normal">clock</em>
              </>
            }
            subtitle="Some of this work happens daily, some only at year-end. Here's what runs most often."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <Reveal key={service.slug} delay={index * 120} className="h-full">
                <ServiceCard service={service} variant="compact" />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-red"
            >
              See all six services
              <ChevronRight
                aria-hidden
                size={15}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-rule bg-paper">
        <Container className="section grid items-center gap-12 md:grid-cols-2 md:gap-14">
          <Reveal className="order-last md:order-first">
            <LedgerIllustration className="mx-auto w-full max-w-md" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Why choose us"
              title={
                <>
                  Bookkeeping you can <em className="font-normal">trust</em>
                </>
              }
              align="left"
            />
            <dl className="mt-8 border-t border-rule">
              {WHY_US.map((item, index) => (
                <Reveal key={item.title} delay={index * 120}>
                  <div className="border-b border-rule py-5">
                    <dt className="font-display text-h3 font-medium leading-snug text-navy">
                      {item.title}
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-graphite">
                      {item.description}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title={
              <>
                What clients <em className="font-normal">say</em>
              </>
            }
            subtitle="How MJW has helped local businesses stay on top of their finances."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 120} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
