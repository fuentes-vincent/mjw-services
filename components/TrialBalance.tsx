import { Check } from "@/components/icons";

/*
 * The signature element: a columnar trial balance that posts its entries and
 * balances. It is a real <table> rather than a picture of one, so it reads
 * correctly to screen readers and to anyone who knows the form.
 *
 * All motion is CSS via .anim-post, which is defined only inside a
 * `prefers-reduced-motion: no-preference` block. That keeps this a server
 * component with no JavaScript: reduced-motion visitors simply get the
 * finished sheet, and there is no hydration gap where a half-built ledger
 * could be on screen.
 */

type Entry = {
  account: string;
  /** Shorter form for narrow screens, where the money columns take priority. */
  short?: string;
  debit?: number;
  credit?: number;
};

const ENTRIES: Entry[] = [
  { account: "Cash in Bank", debit: 428150 },
  { account: "Accounts Receivable", short: "Receivables", debit: 196400 },
  { account: "Sales", credit: 742600 },
  { account: "Rent Expense", debit: 96000 },
  { account: "Salaries & Wages", short: "Salaries", debit: 182885 },
  {
    account: "SSS / PhilHealth / Pag-IBIG",
    short: "SSS / PhilHealth",
    credit: 48265,
  },
  { account: "Accounts Payable", short: "Payables", credit: 112570 },
];

const peso = new Intl.NumberFormat("en-PH", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const sum = (pick: (entry: Entry) => number | undefined) =>
  ENTRIES.reduce((running, entry) => running + (pick(entry) ?? 0), 0);

/* Derived, never hardcoded — if an entry changes, the footing follows and the
   sheet stays honest. */
const TOTAL_DEBIT = sum((entry) => entry.debit);
const TOTAL_CREDIT = sum((entry) => entry.credit);

const ROW_STAGGER = 90;
const FIRST_ROW_DELAY = 160;
const FOOTING_DELAY = FIRST_ROW_DELAY + ENTRIES.length * ROW_STAGGER;

export default function TrialBalance({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-card border border-rule bg-paper shadow-[0_18px_40px_-24px_rgba(11,33,64,0.45)]">
        {/* The red margin rule of a columnar book. */}
        <div aria-hidden className="absolute inset-y-0 left-7 w-px bg-red/45 sm:left-9" />

        <div className="relative py-5 pl-10 pr-4 sm:py-7 sm:pl-14 sm:pr-7">
          <div className="anim-post">
            <p className="label-xs text-red">Trial Balance</p>
            <p className="mt-1.5 font-display text-lg leading-snug text-navy sm:text-xl">
              Dalisay Trading
            </p>
            <p className="figures mt-0.5 text-[11px] text-graphite/70">
              For the month ended 30 June 2026
            </p>
          </div>

          <table className="mt-5 w-full border-collapse text-left">
            <caption className="sr-only">
              Trial balance for the month ended 30 June 2026. Total debits equal
              total credits at ₱{peso.format(TOTAL_DEBIT)}.
            </caption>
            <thead>
              <tr className="anim-post" style={{ animationDelay: `${FIRST_ROW_DELAY - 60}ms` }}>
                <th scope="col" className="label-xs pb-2 text-graphite/60">
                  Particulars
                </th>
                <th scope="col" className="label-xs pb-2 pl-2 text-right text-graphite/60">
                  Debit
                </th>
                <th scope="col" className="label-xs pb-2 pl-2 text-right text-graphite/60">
                  Credit
                </th>
              </tr>
            </thead>
            <tbody>
              {ENTRIES.map((entry, i) => (
                <tr
                  key={entry.account}
                  className="anim-post border-t border-rule/70"
                  style={{ animationDelay: `${FIRST_ROW_DELAY + i * ROW_STAGGER}ms` }}
                >
                  <th
                    scope="row"
                    className="py-[7px] pr-2 text-[12px] font-normal text-graphite sm:text-[13px]"
                  >
                    {entry.short ? (
                      <>
                        <span className="sm:hidden">{entry.short}</span>
                        <span className="hidden sm:inline">{entry.account}</span>
                      </>
                    ) : (
                      entry.account
                    )}
                  </th>
                  <td className="figures py-[7px] pl-2 text-right text-[11px] text-navy sm:text-[12.5px]">
                    {entry.debit ? peso.format(entry.debit) : ""}
                  </td>
                  <td className="figures py-[7px] pl-2 text-right text-[11px] text-navy sm:text-[12.5px]">
                    {entry.credit ? peso.format(entry.credit) : ""}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              {/* Two hairlines above a total — the accounting convention. */}
              <tr
                className="anim-post rule-double"
                style={{ animationDelay: `${FOOTING_DELAY}ms` }}
              >
                <th scope="row" className="label-xs pr-2 pt-2.5 text-navy">
                  Total
                </th>
                <td className="figures pl-2 pt-2.5 text-right text-[11.5px] font-semibold text-navy sm:text-[13.5px]">
                  ₱{peso.format(TOTAL_DEBIT)}
                </td>
                <td className="figures pl-2 pt-2.5 text-right text-[11.5px] font-semibold text-navy sm:text-[13.5px]">
                  ₱{peso.format(TOTAL_CREDIT)}
                </td>
              </tr>
            </tfoot>
          </table>

          <div
            className="anim-post mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5"
            style={{ animationDelay: `${FOOTING_DELAY + 220}ms` }}
          >
            <span className="label-xs inline-flex items-center gap-1.5 rounded-full bg-navy px-2.5 py-1 text-white">
              <Check aria-hidden size={12} strokeWidth={2.5} />
              Balanced
            </span>
            <span className="text-[11px] text-graphite/70">
              Debits equal credits. Every month.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
