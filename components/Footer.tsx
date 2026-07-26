import Link from "next/link";
import Container from "./Container";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      {/* The ledger's closing rule, run across the full width. */}
      <div aria-hidden className="h-px w-full bg-red" />

      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl leading-tight text-white">
            MJW Bookkeeping
            <br />
            and Accounting Services
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Reliable bookkeeping, tax, payroll, and financial reporting support
            for small businesses worldwide, from our home base in Cebu,
            Philippines.
          </p>
        </div>

        <div>
          <p className="label-xs text-white/50">Quick links</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-xs text-white/50">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>Cebu, Philippines</li>
            <li>
              <a
                href="mailto:info@mjwbookkeeping.com"
                className="transition-colors hover:text-white focus-visible:outline-white"
              >
                info@mjwbookkeeping.com
              </a>
            </li>
            <li className="figures text-white/60">Mon–Fri · 8:00 AM – 5:00 PM</li>
          </ul>
        </div>
      </Container>

      <Container>
        <div className="border-t border-white/15 py-6 text-center text-xs text-white/45 sm:text-left">
          © {year} MJW Bookkeeping and Accounting Services. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
