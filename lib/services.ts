export type ServiceIcon =
  | "book"
  | "receipt"
  | "users"
  | "chart"
  | "exchange"
  | "lightbulb";

export type Service = {
  slug: string;
  title: string;
  icon: ServiceIcon;
  /**
   * How often the work actually happens. Owners ask this before they ask
   * anything else, and it is the one thing that genuinely differs between
   * these six services — so it earns its place as the card's label.
   */
  cadence: string;
  shortDescription: string;
  longDescription: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    icon: "book",
    cadence: "Daily",
    shortDescription:
      "Accurate, up-to-date books so you always know where your business stands.",
    longDescription:
      "We handle the day-to-day recording of your business transactions so your books stay accurate and current. From bank reconciliations to general ledger maintenance, we make sure your numbers are always ready when you need them — for decisions, for lenders, or for tax season.",
    bullets: [
      "Daily transaction recording",
      "Bank & credit card reconciliation",
      "General ledger maintenance",
      "Monthly financial statements",
    ],
  },
  {
    slug: "tax-preparation",
    title: "Tax Preparation",
    icon: "receipt",
    cadence: "Quarterly & annual",
    shortDescription:
      "Accurate, on-time tax filing that keeps you compliant and stress-free.",
    longDescription:
      "We prepare and file your business and personal taxes accurately and on time, so you avoid penalties and stay fully compliant with BIR requirements. We also provide year-round guidance so tax season never catches you off guard.",
    bullets: [
      "Income tax return preparation",
      "BIR compliance & filing",
      "Tax planning & advice",
      "Year-round tax support",
    ],
  },
  {
    slug: "payroll",
    title: "Payroll Management",
    icon: "users",
    cadence: "Semi-monthly",
    shortDescription:
      "Accurate, on-time payroll so your team gets paid right, every time.",
    longDescription:
      "We manage payroll computation, statutory deductions, and government remittances so your employees are paid correctly and on time, every pay period — and your business stays compliant with SSS, PhilHealth, and Pag-IBIG requirements.",
    bullets: [
      "Payroll computation & processing",
      "SSS, PhilHealth & Pag-IBIG remittances",
      "13th month pay & government reporting",
      "Payslip generation",
    ],
  },
  {
    slug: "financial-reporting",
    title: "Financial Reporting",
    icon: "chart",
    cadence: "Monthly",
    shortDescription:
      "Clear financial reports that help you make confident business decisions.",
    longDescription:
      "We turn your raw financial data into clear, decision-ready reports — income statements, balance sheets, and cash flow reports — so you understand the financial health of your business at a glance.",
    bullets: [
      "Income statements & balance sheets",
      "Cash flow reports",
      "Custom management reports",
      "Year-end financial statements",
    ],
  },
  {
    slug: "accounts-payable-receivable",
    title: "Accounts Payable & Receivable",
    icon: "exchange",
    cadence: "Weekly",
    shortDescription: "Stay on top of what you owe and what's owed to you.",
    longDescription:
      "We track and manage your incoming and outgoing payments so nothing slips through the cracks — from vendor bills to customer invoices and collections follow-up — keeping your cash flow predictable.",
    bullets: [
      "Invoice tracking & processing",
      "Vendor payment management",
      "Collections follow-up",
      "Aging reports",
    ],
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    icon: "lightbulb",
    cadence: "As needed",
    shortDescription:
      "Practical financial guidance to help your business grow sustainably.",
    longDescription:
      "Beyond the numbers, we work with you as a financial partner — helping with budgeting, forecasting, and business registration support so you can make confident, informed decisions as your business grows.",
    bullets: [
      "Budgeting & forecasting",
      "Cash flow planning",
      "Business registration support",
      "One-on-one financial consultation",
    ],
  },
];
