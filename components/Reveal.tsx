"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in milliseconds, applied once the element scrolls into view. */
  delay?: number;
  className?: string;
};

/*
 * Fades and slides children up when they first scroll into view.
 * Hidden state only applies under motion-safe, so reduced-motion users
 * (and non-JS visitors) always see the content.
 */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
        visible ? "" : "motion-safe:translate-y-8 motion-safe:opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
