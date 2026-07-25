import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import ContactIllustration from "@/components/illustrations/ContactIllustration";
import { Clock, Mail, MapPin } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MJW Bookkeeping and Accounting Services in Cebu, Philippines.",
};

const CONTACT_DETAILS = [
  { label: "Location", value: "Cebu, Philippines", icon: MapPin, href: undefined },
  {
    label: "Email",
    value: "info@mjwbookkeeping.com",
    icon: Mail,
    href: "mailto:info@mjwbookkeeping.com",
  },
  {
    label: "Business hours",
    value: "Monday – Friday, 8:00 AM – 5:00 PM",
    icon: Clock,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Get in touch"
          title={
            <>
              Let&apos;s talk about your <em className="font-normal">books</em>
            </>
          }
          subtitle="Send a message and we'll get back to you to discuss how we can help your business."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <div className="rounded-card border border-rule bg-paper p-6">
              <ContactIllustration className="mx-auto w-full max-w-sm" />
            </div>

            <dl className="mt-8 border-t border-rule">
              {CONTACT_DETAILS.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div
                    key={detail.label}
                    className="flex items-start gap-3.5 border-b border-rule py-4"
                  >
                    <Icon
                      aria-hidden
                      size={17}
                      strokeWidth={1.5}
                      className="mt-1 flex-shrink-0 text-navy/55"
                    />
                    <div>
                      <dt className="label-xs text-graphite/60">{detail.label}</dt>
                      <dd className="mt-1 text-[15px] text-navy">
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="transition-colors hover:text-red"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          <Reveal>
            <div className="rounded-card border border-rule bg-white p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
