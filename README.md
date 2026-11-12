# Swiftly Marketplace

The front end for the Swiftly product marketplace: one page listing every Swiftly product, filterable by category. The layout and behaviour follow Bland's integrations page (bland.ai/integrations), with a 65vh hero and illustrated product cards.

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
| `data/products.ts` | The catalogue: every product, its category, description, link, status and card illustration. Add or edit products here only. |
| `data/site.ts` | Contact details used in the header, contact band and footer. |
| `app/globals.css` | The beUI theme tokens, then a separate **Swiftly brand** block. |
| `components/marketplace/` | The page sections: header, hero, catalogue (filter + grid), product card, card art, contact band, footer. |
| `components/motion/` | beUI components, copied unmodified from the beUI source (MIT, see `BEUI-LICENSE`): Tabs, Card, Button, AnimatedNumber. |
| `lib/` | beUI's shared helpers (`ease.ts`, `utils.ts`, `i18n.tsx`, hooks). |

## How the page works

- **Hero** fills 65% of the viewport height, set by `--hero-height: 65svh` in `globals.css`, with a 30rem floor so it never crushes on short screens.
- **Filter** is the beUI pill Tabs. The chosen category is written to the URL hash, so `/#tobacco` opens straight to the Tobacco products and can be shared.
- **Cards** link out to each product's live site in a new tab. Coming-soon products show a badge and no link.
- **Card images** are drawn in SVG from the `art` field of each product: a colour pair, a layout (`frame` or `rings`) and lucide icon names. To use a new icon, add it to `components/marketplace/icons.ts`. To use a photo or illustration file instead, put it in `public/` and swap `<ProductArt>` for an `<Image>` in `product-card.tsx`.

## Applying the buckstudio brand

The beUI theme block in `globals.css` is left exactly as beUI ships it. Brand values go in the **Swiftly brand** block below it, which overrides beUI's tokens (`--primary`, `--background`, `--foreground`, `--border`, and so on) and sets the font. The other brand touch points are:

- the text wordmark in `site-header.tsx` and `site-footer.tsx` (marked `TODO(brand)`)
- the card colour pairs in the `palette` object in `data/products.ts`
- the font import in `app/layout.tsx` (currently Geist, beUI's default)

## Adding more beUI components

`components.json` registers beUI's shadcn registry, so further components install with:

```bash
npx shadcn@latest add @beui/<component-name>
```

## Open items for the client

Search the codebase for `TODO(client)`:

- Descriptions for SwiftlyRetail and SwiftlyHealth (both coming soon, with no public site yet).
- Confirm the contact channels in `data/site.ts` (taken from the product sites).
