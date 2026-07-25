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
    name: "Maria Santos",
    role: "Café Owner, Cebu City",
    quote:
      "Before MJW, tax season meant sleepless nights. Now my books are always current and BIR deadlines just... happen. I finally understand my own numbers.",
    rating: 5,
  },
  {
    name: "Paolo Reyes",
    role: "Construction Supplier, Mandaue",
    quote:
      "Payroll for 18 workers used to eat my whole weekend. MJW took it over completely — SSS, PhilHealth, Pag-IBIG, all handled on time, every time.",
    rating: 5,
  },
  {
    name: "Jenny Uy",
    role: "Online Retailer, Lapu-Lapu",
    quote:
      "What I appreciate most is talking directly to the person doing my books. Questions get answered the same day, in plain language.",
    rating: 5,
  },
];
