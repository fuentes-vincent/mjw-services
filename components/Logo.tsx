import Image from "next/image";
import Link from "next/link";

/*
 * The mark is a non-transparent PNG, so it only sits on light surfaces.
 * Dark fields (the footer) use the typographic lockup in Footer.tsx instead.
 */
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="MJW Bookkeeping and Accounting Services — home">
      <Image
        src="/logo-mark.png"
        alt=""
        width={915}
        height={416}
        preload
        className="h-8 w-auto object-contain sm:h-9"
      />
      <span className="hidden text-sm font-semibold leading-tight text-navy [font-stretch:88%] sm:block">
        Bookkeeping
        <br />
        &amp; Accounting
      </span>
    </Link>
  );
}
