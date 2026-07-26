export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

/*
 * PLACEHOLDER CONTENT — replace with real client quotes (with permission)
 * before launch.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Café Owner, Austin, TX",
    quote:
      "Before MJW, tax season meant sleepless nights. Now my books are always current and filing deadlines just... happen. I finally understand my own numbers.",
    rating: 5,
  },
  {
    name: "Paolo Reyes",
    role: "Construction Supplier, Cebu",
    quote:
      "Payroll for 18 workers used to eat my whole weekend. MJW took it over completely — every statutory contribution and remittance handled on time, every time.",
    rating: 5,
  },
  {
    name: "Emma Chen",
    role: "E-commerce Founder, Singapore",
    quote:
      "What I appreciate most is talking directly to the person doing my books. Questions get answered the same day, in plain language — no matter the time zone.",
    rating: 5,
  },
];
