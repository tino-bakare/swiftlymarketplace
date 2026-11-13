# Swiftly Marketplace

The front end for the Swiftly product marketplace: a catalogue of every Swiftly product, filterable by category, and a page for each product. The layout and behaviour follow Bland's integrations pages (bland.ai/integrations and, for product pages, bland.ai/integrations/whatsapp), with a 65vh hero and illustrated product cards.

Built with Next.js 15 (App Router), React 19, Tailwind CSS 4 and the beUI component system (beui.dev). There is no back end; the page is fully static.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, output is static
npm run start
```

Requires Node 18.18 or newer.

## Where things live

| Path | What it is |
| --- | --- |
| `data/products.ts` | The catalogue: every product, its category, description, link, status, card illustration and optional feature list. Add or edit products here only. |
| `data/site.ts` | Contact details used in the header, contact band and footer. |
| `data/proof.ts` | Client proof: the rating, clients (avatars and logos) and testimonials. Empty until the client supplies real ones; see below. |
| `app/globals.css` | The beUI theme tokens, then a separate **Swiftly brand** block (colours, type scale, radius, divider style). |
| `app/products/[slug]/page.tsx` | The product page, generated statically for every product in the catalogue. |
| `components/marketplace/` | The page sections (header, hero, catalogue, product card, card art, contact band, footer) and small brand pieces: `button.tsx` (square-cornered wrapper around beUI's ButtonLink), `tag.tsx` and `contact-icons.tsx` (WhatsApp glyph from Simple Icons, CC0). |
| `components/motion/` | beUI components, copied unmodified from the beUI source (MIT, see `BEUI-LICENSE`): Tabs, Card, Button, AnimatedNumber, AvatarGroup (with its Tooltip) and Marquee. |
| `lib/` | beUI's shared helpers (`ease.ts`, `utils.ts`, `i18n.tsx`, hooks). |

## How the page works

- **Hero** fills 65% of the viewport height, set by `--hero-height: 65svh` in `globals.css`, with a 30rem floor so it never crushes on short screens.
- **Filter** is the beUI pill Tabs. The chosen category is written to the URL hash, so `/#tobacco` opens straight to the Tobacco products and can be shared.
- **Cards** open the product's own page at `/products/<slug>`. That page links on to the product's live site in a new tab; coming-soon products show a badge and offer a chat with the team instead.
- **Product pages** show the product, its feature cards (`features` in `data/products.ts`), numbered steps after Bland's "How it deploys" section (`howItWorks`), related products (same category first) and the contact close. Each section only shows when its data is filled in.
- **Card images** are drawn in SVG from the `art` field of each product: a colour pair, a layout (`frame` or `rings`) and one lucide icon. To use a new icon, add it to `components/marketplace/icons.ts`. To use a photo or illustration file instead, put it in `public/` and swap `<ProductArt>` for an `<Image>` in `product-card.tsx`.

## Client proof (rating, clients, testimonials)

Three sections are driven by `data/proof.ts`:

- **Hero**: one row in the left column: the star rating over "Happy clients", an avatar group, then a short marquee of client logos (hidden on phones for space).
- **Testimonial wall** on the home page, above the contact close: two rows of quote cards drifting in opposite directions (beUI Marquee).
- **Product pages**: one large quote at a time for that product, under a round avatar (the testimonial's `avatar`: the client's photo or business logo, initials until supplied), switched by 2px tab lines. A testimonial shows here when its `product` field names the product.

None of the product sites publish testimonials, client names, logos or ratings, so the lists start empty. While a list is empty, `npm run dev` shows clearly labelled placeholders so the layout can be reviewed; production builds leave the section out entirely. Never fill these lists with invented content.

## Applying the buckstudio brand

The beUI theme block in `globals.css` is left exactly as beUI ships it. Brand values go in the **Swiftly brand** block below it. It currently holds an interim palette modelled on Bland's (light only), and sets:

- beUI's colour tokens (`--primary`, `--background`, `--foreground`, `--border`, and so on)
- `--radius-control`, the corner radius of buttons and tags (square with rounded corners, not pills)
- `--divider-style` (dashed), applied by the `divider` utility on every divider line
- the font families: Geist Serif for headings, Geist Sans for body and UI, Geist Mono for metadata
- the type scale, after BoardUI's typography playbook: one composite class per style and weight, `type-{style}-{weight}` (e.g. `type-body-medium`), setting size, line height, tracking and weight together. Colour and family are separate classes.

The other brand touch points are:

- the logo in the header, the logomark in the footer (`public/brand/`) and the favicon (`app/icon.svg`), all as supplied by the client
- the card colour pairs in the `palette` object in `data/products.ts` (the brand yellow is deliberately left out, so the yellow call to action stands alone)
- the font imports in `app/layout.tsx` (Geist Sans, Serif and Mono)

## Adding more beUI components

`components.json` registers beUI's shadcn registry, so further components install with:

```bash
npx shadcn@latest add @beui/<component-name>
```

## Open items for the client

Search the codebase for `TODO(client)`:

- Descriptions for SwiftlyRetail and SwiftlyHealth (both coming soon, with no public site yet).
- Review the feature lists and steps on the product pages (`features` and `howItWorks` in `data/products.ts`). They were drafted from each product's live site in November 2026. Retail and Health have none yet.
- Confirm the contact channels in `data/site.ts` (taken from the product sites).
- Real clients, logos, testimonials and a rating for `data/proof.ts`, with permission to publish them.
