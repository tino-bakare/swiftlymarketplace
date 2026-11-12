// The Swiftly catalogue. Every product, category and card illustration is
// driven from this file, so adding a product means adding one entry here.
//
// Descriptions are paraphrased from each product's own website (checked
// November 2026). Retail and Health have no public site yet, so their
// descriptions are placeholders for the client to supply.

export type CategoryId =
  | "finance"
  | "people"
  | "sales"
  | "projects"
  | "tobacco"
  | "retail"
  | "health";

export const categories: { id: CategoryId; label: string }[] = [
  { id: "finance", label: "Finance" },
  { id: "people", label: "HR & payroll" },
  { id: "sales", label: "Sales" },
  { id: "projects", label: "Projects & tasks" },
  { id: "tobacco", label: "Tobacco" },
  { id: "retail", label: "Retail" },
  { id: "health", label: "Health" },
];

/** Card illustration. Colours are placeholders until the buckstudio palette lands. */
export type ProductArt = {
  /** "frame": grid lines, a sweeping arc and a row of icons. "rings": concentric circles around one icon. */
  layout: "frame" | "rings";
  background: string;
  stroke: string;
  /** lucide-react icon names, rendered as line art. "frame" uses up to three, "rings" uses the first. */
  icons: string[];
};

export type Product = {
  slug: string;
  name: string;
  domain: string;
  url: string;
  category: CategoryId;
  description: string;
  status: "live" | "coming-soon";
  art: ProductArt;
};

const palette = {
  oxblood: { background: "#74222E", stroke: "#F2A98F" },
  sprout: { background: "#DDF5C8", stroke: "#3D5C3A" },
  ink: { background: "#1F2A44", stroke: "#9DB4E8" },
  clay: { background: "#F3D9C4", stroke: "#7A3E22" },
  moss: { background: "#2F4A33", stroke: "#C9E3A8" },
  sky: { background: "#D6E8F5", stroke: "#24476B" },
  ochre: { background: "#E9C46A", stroke: "#4A3410" },
  plum: { background: "#4B2645", stroke: "#E7B8DC" },
  slate: { background: "#34444F", stroke: "#C8D6DE" },
  rose: { background: "#F6D6D3", stroke: "#6B2330" },
  teal: { background: "#12403C", stroke: "#9FD8CC" },
  lilac: { background: "#E6DDF7", stroke: "#4A3A78" },
} as const;

export const products: Product[] = [
  {
    slug: "swiftlymfs",
    name: "SwiftlyMFS",
    domain: "swiftlymfs.com",
    url: "https://swiftlymfs.com",
    category: "finance",
    description:
      "Core banking for microfinance institutions: lending, accounting, cash and compliance in one system, with a field app that works offline.",
    status: "live",
    art: { layout: "frame", ...palette.oxblood, icons: ["Landmark", "HandCoins", "Smartphone"] },
  },
  {
    slug: "swiftlypeople",
    name: "SwiftlyPeople",
    domain: "swiftlypeople.com",
    url: "https://swiftlypeople.com",
    category: "people",
    description:
      "Payroll and HR for Zimbabwe and Zambia. PAYE and contributions worked out by law, leave kept to the rules, payslips sent by email or WhatsApp.",
    status: "live",
    art: { layout: "rings", ...palette.sprout, icons: ["Users"] },
  },
  {
    slug: "swiftlyprojects",
    name: "SwiftlyProjects",
    domain: "swiftlyprojects.tech",
    url: "https://swiftlyprojects.tech",
    category: "projects",
    description:
      "Project management you run from the site. The plan, the people and the money on one phone, and it keeps working with no signal.",
    status: "live",
    art: { layout: "frame", ...palette.clay, icons: ["HardHat", "CalendarRange", "Camera"] },
  },
  {
    slug: "swiftlybooks",
    name: "SwiftlyBooks",
    domain: "swiftlybooks.tech",
    url: "https://swiftlybooks.tech",
    category: "finance",
    description:
      "Cloud accounting in every currency you trade in: invoices, bills, banks and mobile money, VAT and e-invoicing with the tax authority.",
    status: "live",
    art: { layout: "rings", ...palette.ink, icons: ["BookOpen"] },
  },
  {
    slug: "swiftlycrm",
    name: "SwiftlyCRM",
    domain: "swiftlycrm.com",
    url: "https://swiftlycrm.com",
    category: "sales",
    description:
      "Pipeline, proposals, contracts, invoicing and commissions in one CRM, with every module on every plan and a free plan to start.",
    status: "live",
    art: { layout: "frame", ...palette.sky, icons: ["Handshake", "FileSignature", "Receipt"] },
  },
  {
    slug: "droplist",
    name: "Droplist",
    domain: "droplist.tech",
    url: "https://droplist.tech",
    category: "projects",
    description:
      "Shareable checklists. Make a list, send one link, and your team ticks items off in real time, with no account or app needed.",
    status: "live",
    art: { layout: "rings", ...palette.ochre, icons: ["ListChecks"] },
  },
  {
    slug: "swiftlygms",
    name: "SwiftlyGMS",
    domain: "swiftlygms.com",
    url: "https://swiftlygms.com",
    category: "tobacco",
    description:
      "Grower management for contract-farming merchants: register growers, contract and fund them, verify in the field and recover what is owed.",
    status: "live",
    art: { layout: "frame", ...palette.moss, icons: ["Sprout", "MapPin", "Wallet"] },
  },
  {
    slug: "swiftlywarehouse",
    name: "SwiftlyWarehouse",
    domain: "swiftlywarehouse.com",
    url: "https://swiftlywarehouse.com",
    category: "tobacco",
    description:
      "Every tobacco bale tracked from the truck at the door to the factory: receiving, row and rack, blending, dispatch and each merchant's leaf accounts.",
    status: "live",
    art: { layout: "rings", ...palette.slate, icons: ["Warehouse"] },
  },
  {
    slug: "swiftlytlss",
    name: "SwiftlyTLSS",
    domain: "goswiftly.tech",
    url: "https://goswiftly.tech",
    category: "tobacco",
    description:
      "Runs the tobacco sale day on the floor, from bales on the scale to each grower's sales sheet and the TIMB files at close of day.",
    status: "live",
    art: { layout: "frame", ...palette.rose, icons: ["Scale", "Tag", "Banknote"] },
  },
  {
    slug: "swiftlyerp",
    name: "SwiftlyERP",
    domain: "swiftlyerp.com",
    url: "https://swiftlyerp.com",
    category: "tobacco",
    description:
      "The books for tobacco merchants: ledger, payroll and consolidation, linked to the growers, the floors and the warehouse so nothing is keyed twice.",
    status: "live",
    art: { layout: "rings", ...palette.teal, icons: ["Network"] },
  },
  {
    slug: "swiftlyretail",
    name: "SwiftlyRetail",
    domain: "swiftlyretail.com",
    url: "https://swiftlyretail.com",
    category: "retail",
    // TODO(client): replace with the product description.
    description: "Software for retailers, coming soon.",
    status: "coming-soon",
    art: { layout: "frame", ...palette.plum, icons: ["Store", "ShoppingBag", "ScanBarcode"] },
  },
  {
    slug: "swiftlyhealth",
    name: "SwiftlyHealth",
    domain: "swiftlyhealth.tech",
    url: "https://swiftlyhealth.tech",
    category: "health",
    // TODO(client): replace with the product description.
    description: "Software for healthcare providers, coming soon.",
    status: "coming-soon",
    art: { layout: "rings", ...palette.lilac, icons: ["HeartPulse"] },
  },
];

export function categoryLabel(id: CategoryId) {
  return categories.find((c) => c.id === id)?.label ?? id;
}
