import type { Testimonial } from "@/lib/testimonials";
import { Star } from "./icons";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-card border border-rule bg-white p-6">
      <div
        className="flex gap-1"
        role="img"
        aria-label={`Rated ${testimonial.rating} out of 5`}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            aria-hidden
            size={15}
            strokeWidth={1.5}
            className={
              i < testimonial.rating
                ? "fill-navy stroke-navy"
                : "fill-rule stroke-rule"
            }
          />
        ))}
      </div>

      <blockquote className="mt-4 flex-1 font-display text-[17px] leading-[1.55] text-navy">
        “{testimonial.quote}”
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-rule pt-4">
        <span
          aria-hidden
          className="figures flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy text-[11px] font-semibold text-white"
        >
          {initials(testimonial.name)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-navy">
            {testimonial.name}
          </span>
          <span className="label-xs block pt-0.5 text-graphite/60">
            {testimonial.role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
