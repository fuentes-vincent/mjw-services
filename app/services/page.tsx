import type { Metadata } from "next";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import ServicesIllustration from "@/components/illustrations/ServicesIllustration";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bookkeeping, tax preparation, payroll, financial reporting, accounts payable and receivable, and business advisory for small businesses in Cebu.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-rule bg-paper">
        <Container className="section-tight grid items-center gap-10 md:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5">
              <span aria-hidden className="h-px w-6 bg-red" />
              <span className="label-sm text-red">Our services</span>
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-h2 font-medium leading-[1.06] tracking-tight text-navy">
              Everything your business needs,{" "}
              <em className="font-normal">financially</em>
            </h1>
            <p className="mt-4 max-w-xl text-lede leading-relaxed text-graphite">
              Clear, dependable accounting support — tailored to where your
              business is today. Each card shows how often the work runs.
            </p>
          </div>
          <ServicesIllustration
            backdrop="white"
            className="mx-auto w-full max-w-xs md:max-w-sm"
          />
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 120} className="h-full">
                <ServiceCard service={service} variant="full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
