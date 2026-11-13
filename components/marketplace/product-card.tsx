import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { Card, CARD_TARGET_CLASS } from "@/components/motion/card";
import { type Product, categoryLabel } from "@/data/products";
import { cn } from "@/lib/utils";
import { ProductArt } from "./product-art";
import { Tag } from "./tag";

// Every card opens the product's own page on the marketplace; the page is
// where visitors are sent on to the product's live site.
export function ProductCard({ product }: { product: Product }) {
  const live = product.status === "live";

  return (
    <Card interactive className={cn("h-full gap-0 overflow-hidden rounded-none py-0", !live && "opacity-80")}>
      <ProductArt art={product.art} />

      <div className="flex flex-1 flex-col px-6 pt-6 pb-7 sm:px-8 sm:pt-7">
        <div className="flex flex-wrap items-center gap-2">
          <Tag>{categoryLabel(product.category)}</Tag>
          {!live && <Tag tone="muted">Coming soon</Tag>}
        </div>

        <h3 className="mt-5 font-serif type-title-1-regular text-foreground">
          <Link href={`/products/${product.slug}`} className={cn("outline-none", CARD_TARGET_CLASS)}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 max-w-[46ch] type-body-regular text-muted-foreground">{product.description}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-8">
          <span className="inline-flex min-w-0 items-center gap-1.5 font-mono type-caption-1-regular text-muted-foreground">
            <Globe className="size-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
            <span className="truncate">{product.domain}</span>
          </span>
          <ArrowRight className="size-4 text-foreground" aria-hidden="true" />
        </div>
      </div>
    </Card>
  );
}
