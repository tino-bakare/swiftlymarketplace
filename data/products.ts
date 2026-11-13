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
  | "carwash"
  | "education"
  | "retail"
  | "health";

export const categories: { id: CategoryId; label: string }[] = [
  { id: "finance", label: "Finance" },
  { id: "people", label: "HR & payroll" },
  { id: "sales", label: "Sales" },
  { id: "projects", label: "Projects & tasks" },
  { id: "tobacco", label: "Tobacco" },
  { id: "carwash", label: "Car wash" },
  { id: "education", label: "Education" },
  { id: "retail", label: "Retail" },
  { id: "health", label: "Health" },
];

/** Card illustration. Colours are placeholders until the buckstudio palette lands. */
export type ProductArt = {
  /** "frame": grid lines, a sweeping arc and a row of icons. "rings": concentric circles around one icon. */
  layout: "frame" | "rings";
  background: string;
  stroke: string;
  /** lucide-react icon name, rendered as line art. One icon per card. */
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
  /**
   * Optional feature list for the product's page ("What X does"). The
   * section only shows when this is filled in.
   * Drafted November 2026, paraphrased from each product's live site.
   * TODO(client): review and approve; supply features for Retail and Health.
   */
  features?: { title: string; body: string }[];
  /**
   * Optional numbered steps for the product's page, after Bland's "How it
   * deploys" section. `note` fills the band under the steps; without it the
   * band shows the standard demo line. Drafted November 2026 from each
   * product's live site.
   * TODO(client): review and approve.
   */
  howItWorks?: { heading: string; note?: string; steps: { title: string; body: string }[] };
};

// Card colour pairs, drawn from Bland's palette: warm paper and stone,
// ink, and Bland's orange and green. The brand yellow is kept out of card
// art so the yellow call to action stands alone.
const palette = {
  paper: { background: "#F6F6F1", stroke: "#151515" },
  stone: { background: "#E5E4DC", stroke: "#151515" },
  ink: { background: "#151515", stroke: "#F6F6F1" },
  ember: { background: "#BB5B02", stroke: "#F6F6F1" },
  forest: { background: "#0F6435", stroke: "#F6F6F1" },
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
    art: { layout: "frame", ...palette.ink, icons: ["Landmark"] },
    features: [
      { title: "Record the loan once.", body: "Disbursements and repayments post their own journals, accrue interest, settle instalments and update arrears, with nothing keyed twice." },
      { title: "The routine, automated.", body: "Overnight processing accrues interest, ages arrears, calculates provisions and prepares statements." },
      { title: "Your position, live.", body: "Portfolio at risk, book size, cash and officer productivity stay current all day, and every report line opens its transactions." },
      { title: "Cash control in the field.", body: "Receipt books are issued to named officers, numbers are never reused, and cash is held against the officer until it is handed in." },
      { title: "A phone app that works offline.", body: "Loan officers run their daily round, collections and new applications without signal. It installs from the browser, with no app store." },
      { title: "Compliance built in.", body: "Sanctions and PEP screening, rate ceilings, regulatory returns and a tamper-evident audit log, with two-person approval on key decisions." },
    ],
    howItWorks: {
      heading: "Moving in.",
      note: "Our team helps you prepare and map your data, checks it with you and stays with you through go-live.",
      steps: [
        { title: "Upload.", body: "Bring in clients, loans, balances and repayment history from your old system or from spreadsheets." },
        { title: "Match.", body: "The wizard suggests how your columns map, and you confirm them." },
        { title: "Preview.", body: "A dry run shows what will be created and flags problem rows. Nothing posts until you approve it." },
        { title: "Import.", body: "If a batch is wrong, undo it in one step and try again." },
      ],
    },
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
    art: { layout: "rings", ...palette.paper, icons: ["Users"] },
    features: [
      { title: "Checked before anyone is paid.", body: "Each run moves from draft to reviewed to approved, and anything that looks wrong is flagged on the payslip, not found afterwards." },
      { title: "Payslips on every phone.", body: "Payslips go out by email or WhatsApp, locked with the employee's ID number. Employees can also check leave and claim overtime." },
      { title: "Leave by the rules.", body: "Leave accrues monthly, carries over to the legal limit, skips public holidays and goes to the right manager." },
      { title: "Returns ready to file.", body: "Each month's statutory returns come from the approved payroll, including the TaRMS files for ZIMRA." },
      { title: "A journal for your accountant.", body: "Export each approved payroll in your own account codes, as Excel, CSV, Xero or QuickBooks." },
      { title: "Each person sees only their part.", body: "Roles for HR, payroll, finance, managers and employees. A payroll is approved by someone other than its preparer, and every change is logged." },
    ],
    howItWorks: {
      heading: "Your first payroll.",
      steps: [
        { title: "Sign up.", body: "Your company is set up for your country's tax, contributions, leave and public holidays, with 30 days free." },
        { title: "Bring your people.", body: "Import a spreadsheet of employees and salaries, add them one by one, or send us the spreadsheet to load." },
        { title: "Run payroll.", body: "Check every payslip and approve the run. Payslips go out, and the returns and the journal are ready." },
      ],
    },
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
    art: { layout: "frame", ...palette.stone, icons: ["HardHat"] },
    features: [
      { title: "Plan the job.", body: "Start from an industry template, or have Swiftly draft a plan from a few lines. When one task slips, the dates move together." },
      { title: "Run the site offline.", body: "Check-ins, photos stamped with place and time, forms and the site diary all work without signal and send when it returns." },
      { title: "Budgets in two currencies.", body: "Budgets in US dollars and local currency, so a move in the exchange rate doesn't look like overspending." },
      { title: "Approvals with a swipe.", body: "Requests over your limit come to you, and receipts become expenses from a photo." },
      { title: "Get paid and report.", body: "Valuations become payment certificates, tracked until paid with retention held back. Clients approve changes in their own portal." },
      { title: "Packs for your sector.", body: "Templates for construction, NGO and donor work, tenders, agencies, farming, events and IT, 26 in all." },
    ],
    howItWorks: {
      heading: "Getting started.",
      steps: [
        { title: "Start the free trial.", body: "30 days with no payment details. Switch on a sector pack at sign-up if you want one." },
        { title: "Install the app.", body: "Open it in your phone's browser and add it to your home screen. No app store is needed." },
        { title: "Plan the job.", body: "Pick a template for your industry, or have Swiftly draft the plan from a few lines." },
        { title: "Run the site.", body: "Check in, take photos, fill in forms and the site diary, and approve requests. It keeps working offline and syncs later." },
        { title: "Get paid.", body: "Turn valuations into payment certificates and track them until they are paid." },
      ],
    },
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
    art: { layout: "rings", ...palette.ember, icons: ["BookOpen"] },
    features: [
      { title: "Every currency you trade in.", body: "US dollars, ZiG and kwacha side by side, at your own rate or the official one, with each rate kept on its document." },
      { title: "Tax and e-invoicing.", body: "VAT returns and withholding tax, with ZIMRA fiscalisation in Zimbabwe and ZRA Smart Invoice in Zambia." },
      { title: "Banks, mobile money and cash.", body: "Each account has its own wallet. Import and match statements and reconcile to the cent, including EcoCash, Airtel Money and MTN MoMo." },
      { title: "Branches, together or apart.", body: "Each branch keeps its own numbering, stock and figures, and every branch can be seen together in one click." },
      { title: "Reports and the close.", body: "Profit and loss, balance sheet, trial balance and receivables. Each month is locked once it is closed." },
      { title: "Move in from your old package.", body: "Import your chart, customers, suppliers, balances and unpaid invoices from Zoho Books, QuickBooks or Sage Pastel, checked to the cent." },
    ],
    howItWorks: {
      heading: "Getting started.",
      steps: [
        { title: "Start the trial.", body: "Your company's books are ready in about a minute, with your country's chart of accounts." },
        { title: "Bring your books.", body: "Import from your old package's files, or start fresh from today." },
        { title: "Invoice the same day.", body: "Invoices are fiscalised where required and issued in the currency your customer pays in." },
      ],
    },
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
    art: { layout: "frame", ...palette.forest, icons: ["Handshake"] },
    features: [
      { title: "Every deal, lead to close.", body: "Drag deals through your own stages, with win probability and an analysis of why deals are lost." },
      { title: "Proposals to signed contracts.", body: "Build proposals from your catalogue, turn them into contracts and send them for e-signature, all on one timeline." },
      { title: "From closed deal to paid invoice.", body: "Line-item invoices, a client portal, partial-payment tracking and PDF export." },
      { title: "Commissions worked out for you.", body: "Tiered and split commissions are calculated automatically when a deal is marked won." },
      { title: "Meeting notes that find the signal.", body: "Log a meeting and AI picks out pain points, sentiment and buying signals, tied to the deal." },
      { title: "Many branches, one dashboard.", body: "Each branch has its own data, users and settings, with role-based access across them all." },
    ],
    howItWorks: {
      heading: "Getting started.",
      steps: [
        { title: "Create your account.", body: "Sign up free, and a setup wizard takes you through your organisation, branches and team invites." },
        { title: "Set up your pipeline.", body: "Choose your deal stages and commission tiers, add your branding and import your contacts." },
        { title: "Close more deals.", body: "Track opportunities, send proposals, log meeting notes with AI and send invoices." },
      ],
    },
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
    art: { layout: "rings", ...palette.ink, icons: ["ListChecks"] },
    features: [
      { title: "Make a list, share a link.", body: "Create a checklist, send the link, and watch it get done." },
      { title: "No account needed.", body: "Nobody has to sign up or log in to open the list and tick items off, and every list is private by default." },
      { title: "Free for casual use.", body: "Upgrade when you need history, files and teams." },
    ],
    howItWorks: {
      heading: "How it works.",
      steps: [
        { title: "Make a list.", body: "Create a to-do list." },
        { title: "Share the link.", body: "Send it to your team. Nobody needs an account." },
        { title: "Watch it get done.", body: "Items are ticked off in real time." },
      ],
    },
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
    art: { layout: "frame", ...palette.paper, icons: ["Sprout"] },
    features: [
      { title: "One record per grower.", body: "Recruit, register and manage every grower from first contact to season close, with no ghost growers or duplicates." },
      { title: "Contracts on your own templates.", body: "Season contracts are drafted, approved and signed in the system that enforces them, so the document and the ledger match." },
      { title: "Inputs on credit.", body: "Issue seed, fertiliser and other inputs against secure vouchers, on a live loan ledger in more than one currency." },
      { title: "Field work, with or without signal.", body: "Register, inspect and verify growers with GPS offline. Work syncs in order when officers are back in range." },
      { title: "Recovery reconciled.", body: "Deductions from the floors are credited to the right grower's loan, with reversals and withdrawals handled." },
      { title: "Controls you can show.", body: "Aligned with TIMB and data-protection rules, with a tamper-evident ledger and segregation of duties." },
    ],
    howItWorks: {
      heading: "How a season runs.",
      note: "A demo takes half an hour and walks through these same five steps.",
      steps: [
        { title: "Register.", body: "One record per grower, with no duplicates." },
        { title: "Contract.", body: "Season contracts on your own templates, approved and signed in the system." },
        { title: "Fund.", body: "Inputs issued on credit against vouchers, on a ledger in more than one currency." },
        { title: "Verify.", body: "Visits and inspections pinned by GPS, online or offline." },
        { title: "Recover.", body: "Deductions from the floors reconciled against each grower's loan." },
      ],
    },
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
    art: { layout: "rings", ...palette.ember, icons: ["Warehouse"] },
    features: [
      { title: "Follow a bale.", body: "Bales are scanned against the floor's shipment file, re-weighed, placed by row and rack, then blended to order or dispatched, on one record per bale." },
      { title: "Paid for, and not here.", body: "Tickets on a shipment file that were never scanned stay on a pending list until they are." },
      { title: "Each ticket, one bale.", body: "Unknown bales and tickets already captured or dispatched are refused at the scanner." },
      { title: "Every change has a name.", body: "Changes to grade, price, mass, ticket or location record who made them, when and what they were before." },
      { title: "Blends that hit target.", body: "Scans past a blend's target are refused, and a blend can't close short of it." },
      { title: "Many merchants, one warehouse.", body: "Each merchant sees only the bales bought under its buyer codes, even on a mixed truck." },
    ],
    howItWorks: {
      heading: "Follow a bale.",
      note: "We set up your warehouse at your own address.",
      steps: [
        { title: "Receive.", body: "Each bale is scanned against the floor's shipment file and weighed again." },
        { title: "Store.", body: "It is placed by row and rack." },
        { title: "Send.", body: "It is blended to order or dispatched to the factory. Each step adds to the same record, so a bale's whole story is one line of the stock report." },
      ],
    },
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
    art: { layout: "frame", ...palette.stone, icons: ["Scale"] },
    features: [
      { title: "The whole sale day.", body: "Growers booked in, bales weighed, grades and prices captured, deductions applied in order and a sales sheet for each grower." },
      { title: "Wrong bales stopped at the scale.", body: "Unbooked growers and bales outside the mass limits you set are refused, after tare." },
      { title: "Mistakes raised for review.", body: "Mismatches in mass, price, buyer or grade are flagged, and the resolver's name and note are kept." },
      { title: "Nothing undone quietly.", body: "Reversals and changes to payment details are audit-trailed, with who made them and why." },
      { title: "A clean close of day.", body: "End of day won't run while a batch lacks a sales sheet or a ticket is open, and nothing can be changed after it." },
      { title: "Files for TIMB, buyers and finance.", body: "Daily TIMB files, buyer invoices, payment schedules, EcoCash and bank reconciliation files and Pastel files, written out at close." },
    ],
    howItWorks: {
      heading: "The sale day.",
      note: "We set up your floor's system at your own address.",
      steps: [
        { title: "Gate.", body: "Growers are booked in, and a grower not booked for today is refused." },
        { title: "Scale.", body: "Bales are weighed less tare, tickets are printed and barcodes allocated." },
        { title: "Floor.", body: "Grades and prices are captured from the buyers, and mismatches are raised for review." },
        { title: "Data room.", body: "Tickets are batched and captured, deductions applied and a sales sheet made for every grower." },
        { title: "Close of day.", body: "Files go to TIMB, to each buyer, to your finance team and to head office." },
      ],
    },
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
    art: { layout: "rings", ...palette.forest, icons: ["Network"] },
    features: [
      { title: "Keyed once.", body: "A sale recorded on the floor reaches the ledger, the grower's loan and the bale's record, and nobody retypes it." },
      { title: "Every bale traced.", body: "Bales are followed from the floor through the warehouse to the factory, and any bale that fails to arrive is flagged." },
      { title: "Current grower balances.", body: "Recoveries credit growers' loans as each day is uploaded, and balances refresh every half hour." },
      { title: "Payroll included.", body: "PAYE, NSSA and ZIMRA's TaRMS file, in US dollars and ZiG." },
      { title: "Your own deployment.", body: "Each merchant runs its own ERP at its own address with its own database, and each link reads only what it needs." },
      { title: "Add systems when you're ready.", body: "Each system works alone, and each link can be switched on later without changing what is already running." },
    ],
    howItWorks: {
      heading: "How a season runs.",
      note: "We set up your ERP at your own address and link it to the systems you already run.",
      steps: [
        { title: "Growers contracted.", body: "In SwiftlyGMS, growers are registered, contracted and issued inputs on credit." },
        { title: "Floors open.", body: "In SwiftlyTLSS, bales are bought and priced, stop orders deducted and growers given payment advices." },
        { title: "Day booked.", body: "Each branch uploads its daily reports, which post to the ledger." },
        { title: "Loans credited.", body: "Daily recoveries credit growers' loans in SwiftlyGMS, and the balances come back to the ERP." },
        { title: "Every bale traced.", body: "The warehouse receives, blends and sends bales to the factory, and the ERP checks that every one arrived." },
      ],
    },
  },
  {
    slug: "washdeck",
    name: "WashDeck",
    domain: "washdeck.net",
    url: "https://washdeck.net",
    category: "carwash",
    description:
      "Car wash operations in one app: intake with photos, a live job board, the till, loyalty, stock and daily reports, in the browser on any tablet.",
    status: "live",
    art: { layout: "frame", ...palette.paper, icons: ["Car"] },
    features: [
      { title: "Fast intake.", body: "Capture a car in seconds: plate, package, bay, photos and customer details. Duplicate washes are flagged automatically." },
      { title: "A live job board.", body: "Every car in the bay in real time, from waiting to washing, drying and ready." },
      { title: "Point of sale.", body: "Cash, card or mobile money at the till. Prices come from your packages, and promotions and earned free washes apply themselves." },
      { title: "Loyalty and promotions.", body: "Reward every Nth wash and run promotions that apply at the till." },
      { title: "Stock that keeps count.", body: "Chemicals and supplies are tracked, with alerts when stock runs low." },
      { title: "Daily reports.", body: "Revenue, busiest hours, top packages and repeat customers, with a searchable history of washes and photos." },
    ],
    howItWorks: {
      heading: "Getting started.",
      steps: [
        { title: "Create your account.", body: "Sign up in under a minute and start a 14-day free trial, with no card needed." },
        { title: "Set up your wash.", body: "Add your packages, bays and staff. The default settings let you start straight away." },
        { title: "Start capturing washes.", body: "Attendants use a tablet at the bay, and owners follow revenue and reports from anywhere." },
      ],
    },
  },
  {
    slug: "schoolgate",
    name: "SchoolGate",
    domain: "schoolgate.net",
    url: "https://schoolgate.net",
    category: "education",
    description:
      "One platform for Zimbabwe's schools: attendance, homework, grades, fees, timetables and reports, with a tier for government oversight built in.",
    status: "live",
    art: { layout: "rings", ...palette.ember, icons: ["School"] },
    features: [
      { title: "The whole school on one dashboard.", body: "Live enrolment, attendance and fee collection, with timetables and notices published from the same place." },
      { title: "Less admin for teachers.", body: "Take a full class register in under a minute, post homework with attachments and mark submissions online." },
      { title: "Fees, down to the learner.", body: "Billing, receipts and arrears tracking in US dollars, with invoices followed up for each learner." },
      { title: "ZIMSEC-ready marks.", body: "Grades, exams and reports, with performance indicators that flag struggling learners early." },
      { title: "In parents' pockets.", body: "Parents and students see homework, marks, attendance and fee statements as soon as they are posted." },
      { title: "Built for oversight.", body: "From the Ministry to the district: real-time enrolment and attendance, fees billed against fees collected, and exam anomaly flags." },
    ],
    howItWorks: {
      heading: "Live from day one.",
      note: "A guided walkthrough on demo data, with nothing to set up on the school's side.",
      steps: [
        { title: "Register your school.", body: "Your school gets its own secure space on schoolgate.net." },
        { title: "Set up classes and learners.", body: "Import registers, assign teachers and build timetables." },
        { title: "Run everything in one place.", body: "Attendance, homework, fees and reports from day one." },
      ],
    },
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
    art: { layout: "frame", ...palette.ink, icons: ["Store"] },
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
    art: { layout: "rings", ...palette.stone, icons: ["HeartPulse"] },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

/** Up to `count` other products: same category first, then the rest in catalogue order. */
export function relatedProducts(product: Product, count = 3) {
  const others = products.filter((p) => p.slug !== product.slug);
  const same = others.filter((p) => p.category === product.category);
  const rest = others.filter((p) => p.category !== product.category);
  return [...same, ...rest].slice(0, count);
}

export function categoryLabel(id: CategoryId) {
  return categories.find((c) => c.id === id)?.label ?? id;
}
