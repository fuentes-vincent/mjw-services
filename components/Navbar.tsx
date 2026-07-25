"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Logo from "./Logo";
import { Menu, X } from "./icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* The menu records which route it was opened on, so navigating away closes
     it as a derived value rather than through a route-change effect. */
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const isOpen = openedOn === pathname;
  const setIsOpen = (open: boolean) => setOpenedOn(open ? pathname : null);

  /* Escape closes and returns focus to the control that opened the menu.
     Scrolling behind the panel is locked while it is open. */
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenedOn(null);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-white/92 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative text-sm transition-colors hover:text-navy ${
                  isActive
                    ? "font-semibold text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:bg-red"
                    : "text-graphite"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-field bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-soft"
          >
            Get a free quote
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex items-center justify-center rounded-field p-2 text-navy md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </Container>

      {/* Grid-rows transition so the panel animates both open and closed.
          `inert` keeps the links out of the tab order while collapsed. */}
      <div
        id="mobile-nav"
        inert={!isOpen}
        className={`grid overflow-hidden border-t border-rule bg-white transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-t-0 opacity-0"
        }`}
      >
        <nav className="min-h-0 overflow-hidden">
          <Container className="flex flex-col py-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`border-b border-rule/70 py-3 text-base transition-colors ${
                    isActive ? "font-semibold text-navy" : "text-graphite hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-4 rounded-field bg-navy px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get a free quote
            </Link>
          </Container>
        </nav>
      </div>
    </header>
  );
}
