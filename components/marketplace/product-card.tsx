import { ArrowUpRight } from "lucide-react";
import { Card, CARD_TARGET_CLASS } from "@/components/motion/card";
import { type Product, categoryLabel } from "@/data/products";
import { cn } from "@/lib/utils";
import { ProductArt } from "./product-art";

export function ProductCard({ product }: { product: Product }) {
  const live = product.status === "live";

  return (
    <Card
      interactive={live}
      className={cn(
        "h-full gap-0 overflow-hidden rounded-none py-0",
        !live && "opacity-80",
      )}
    >
      <ProductArt art={product.art} />

      <div className="flex flex-1 flex-col px-6 pt-6 pb-7 sm:px-8 sm:pt-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex h-6 items-center rounded-full border border-border-strong px-2.5 text-xs text-muted-foreground">
            {categoryLabel(product.category)}
          </span>
          {!live && (
            <span className="inline-flex h-6 items-center rounded-full bg-muted px-2.5 text-xs text-muted-foreground">
              Coming soon
            </span>
          )}
        </div>

        <h3 className="mt-5 text-2xl leading-tight font-medium tracking-[-0.02em] text-foreground sm:text-[1.75rem]">
          {product.name}
        </h3>
        <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-auto pt-8">
          {live ? (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium text-foreground outline-none",
                CARD_TARGET_CLASS,
              )}
            >
              {product.domain}
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens {product.name} in a new tab)</span>
            </a>
          ) : (
            <span className="text-sm text-muted-foreground">{product.domain}</span>
          )}
        </div>
      </div>
    </Card>
  );
}
