"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { Tabs, TabsList, TabsTrigger } from "@/components/motion/tabs";
import { type CategoryId, categories, products } from "@/data/products";
import { ProductCard } from "./product-card";

type Filter = "all" | CategoryId;
const isFilter = (v: string): v is Filter => v === "all" || categories.some((c) => c.id === v);

export function Catalogue() {
  const [filter, setFilter] = useState<Filter>("all");

  // Keep the chosen category in the URL hash (#tobacco) so a filtered view can be shared.
  useEffect(() => {
    const read = () => {
      const hash = window.location.hash.slice(1);
      setFilter(isFilter(hash) ? hash : "all");
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const choose = (value: string) => {
    if (!isFilter(value)) return;
    setFilter(value);
    const url = value === "all" ? window.location.pathname + window.location.search : `#${value}`;
    window.history.replaceState(null, "", url);
  };

  const visible = useMemo(
    () => (filter === "all" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="products" aria-labelledby="products-heading" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <h2 id="products-heading" className="sr-only">Products</h2>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs value={filter} onValueChange={choose} variant="pill" className="min-w-0">
          <TabsList aria-label="Filter by category">
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map((c) => (
              <TabsTrigger key={c.id} value={c.id}>
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <p className="shrink-0 text-sm text-muted-foreground tabular-nums">
          <span aria-hidden="true">
            <AnimatedNumber value={visible.length} duration={0.4} /> of {products.length}
          </span>
          <span className="sr-only" aria-live="polite">
            Showing {visible.length} of {products.length} products
          </span>
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {visible.map((product) => (
          <li key={product.slug}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
