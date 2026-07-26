import type { Metadata } from "next";
import { Archivo, Newsreader, Spline_Sans_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

/* Display: a low-contrast transitional serif. Institutional and readable
   rather than editorial — the register of a well-set annual report. */
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  axes: ["opsz"],
});

/* Body and UI. The width axis carries the condensed uppercase labels that
   give the site its form-field voice. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

/* Every dollar amount, stat, and ledger column. */
const splineSansMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://mjwbookkeeping.com";
const DESCRIPTION =
  "Bookkeeping, tax preparation, payroll, and financial reporting for small businesses worldwide. Tax filings, payroll compliance, and statutory remittances handled accurately and on time — from our home base in Cebu, Philippines.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MJW Bookkeeping and Accounting Services",
    template: "%s · MJW Bookkeeping and Accounting Services",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "MJW Bookkeeping and Accounting Services",
    title: "MJW Bookkeeping and Accounting Services",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "MJW Bookkeeping and Accounting Services",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${archivo.variable} ${splineSansMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-field focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
