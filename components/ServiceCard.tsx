import Link from "next/link";
import type { Service } from "@/lib/services";
import { Check, ChevronRight, ICON_STROKE, SERVICE_ICONS } from "./icons";

type ServiceCardProps = {
  service: Service;
  variant?: "compact" | "full";
};

export default function ServiceCard({ service, variant = "full" }: ServiceCardProps) {
  const Icon = SERVICE_ICONS[service.icon];

  return (
    <div className="group relative flex h-full flex-col rounded-card border border-rule bg-white p-6 transition-colors duration-200 hover:border-navy/25">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-field bg-navy/8 text-navy transition-colors duration-200 group-hover:bg-navy group-hover:text-white">
          <Icon aria-hidden size={21} strokeWidth={ICON_STROKE} />
        </span>
        {/* Cadence is the one thing that genuinely differs between these
            services, so it takes the label slot rather than a counter. */}
        <span className="label-xs mt-1 text-right text-graphite/55">
          {service.cadence}
        </span>
      </div>

      <h3 className="mt-5 font-display text-h3 font-medium leading-snug text-navy">
        {service.title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-graphite">
        {variant === "full" ? service.longDescription : service.shortDescription}
      </p>

      {variant === "full" && (
        <ul className="mt-5 border-t border-rule">
          {service.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-center justify-between gap-3 border-b border-rule py-2.5 text-[13px] text-graphite"
            >
              <span>{bullet}</span>
              <Check
                aria-hidden
                size={14}
                strokeWidth={2.25}
                className="flex-shrink-0 text-navy/45"
              />
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/contact"
        className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-navy transition-colors hover:text-red"
      >
        <span>
          Ask about {service.title.toLowerCase()}
          <span className="sr-only"> — go to the contact page</span>
        </span>
        <ChevronRight
          aria-hidden
          size={15}
          strokeWidth={2}
          className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
        />
      </Link>
    </div>
  );
}
