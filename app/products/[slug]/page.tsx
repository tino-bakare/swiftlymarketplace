import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/marketplace/button";
import { ContactBand } from "@/components/marketplace/contact-band";
import { DotMark } from "@/components/marketplace/dot-mark";
import { ProductArt } from "@/components/marketplace/product-art";
import { ProductCard } from "@/components/marketplace/product-card";
import { SiteFooter } from "@/components/marketplace/site-footer";
import { SiteHeader } from "@/components/marketplace/site-header";
import { Tag } from "@/components/marketplace/tag";
import { TestimonialSpotlight } from "@/components/marketplace/testimonial-spotlight";
import { categoryLabel, getProduct, products, relatedProducts } from "@/data/products";
import { getTestimonials } from "@/data/proof";
import { contact } from "@/data/site";

// One page per product, modelled on Bland's integration pages
// (bland.ai/integrations/whatsapp). Visitors land here from the catalogue
// and leave for the product's own site from here.

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: `${product.name} | Swiftly Marketplace`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const live = product.status === "live";
  const related = relatedProducts(product);
  const quotes = getTestimonials(product.slug);

  return (
    <>
      <div className="relative">
        <SiteHeader />
        <main>
          <section aria-labelledby="product-heading" className="divider border-b">
            <div className="mx-auto w-full max-w-7xl px-5 pt-28 pb-14 sm:px-8 sm:pt-32 sm:pb-20">
              <Link
                href="/#products"
                className="inline-flex items-center gap-1.5 type-body-regular text-muted-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                All products
              </Link>

              <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag>{categoryLabel(product.category)}</Tag>
                    {!live && <Tag tone="muted">Coming soon</Tag>}
                  </div>
                  <h1
                    id="product-heading"
                    className="mt-5 font-serif type-display-3-regular sm:type-display-2-regular lg:type-display-1-regular"
                  >
                    {product.name}
                  </h1>
                  <p className="mt-5 max-w-[46ch] type-headline-regular text-muted-foreground sm:type-title-3-regular">
                    {product.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {live ? (
                      <>
                        <ButtonLink href={product.url} target="_blank" rel="noopener noreferrer">
                          Visit {product.domain}
                          <ArrowUpRight className="size-4" aria-hidden="true" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </ButtonLink>
                        <ButtonLink href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" variant="outline">
                          Talk to the team
                        </ButtonLink>
                      </>
                    ) : (
                      <ButtonLink href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Talk to the team
                      </ButtonLink>
                    )}
                  </div>
                  <p className="mt-4 font-mono type-caption-1-regular text-muted-foreground">{product.domain}</p>
                </div>

                <div className="overflow-hidden border border-border">
                  <ProductArt art={product.art} />
                </div>
              </div>
            </div>
          </section>

          {product.features?.length ? (
            <section aria-labelledby="features-heading" className="divider border-b">
              <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
                <h2 id="features-heading" className="font-serif type-display-4-regular sm:type-display-3-regular">
                  What {product.name} does.
                </h2>
                {/* Borderless cards; title and body run on as one serif passage,
                    the title in ink and the body in grey. */}
                <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {product.features.map((f, i) => (
                    <li key={f.title} className="flex min-h-56 flex-col rounded-2xl bg-card p-6 sm:min-h-64 sm:p-7">
                      <div className="font-serif type-title-2-regular text-balance sm:type-title-1-regular">
                        <h3 className="inline text-foreground">{f.title}</h3>{" "}
                        <p className="inline text-muted-foreground">{f.body}</p>
                      </div>
                      <div className="mt-auto pt-8">
                        <DotMark index={i} className="size-6 text-muted-foreground" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          {product.howItWorks ? (
            <section aria-labelledby="steps-heading" className="divider border-b">
              <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                  <h2 id="steps-heading" className="font-serif type-display-4-regular sm:type-display-3-regular">
                    {product.howItWorks.heading}
                  </h2>
                  <ol>
                    {product.howItWorks.steps.map((s, i) => (
                      <li
                        key={s.title}
                        className="divider grid grid-cols-[3rem_1fr] gap-4 py-6 first:pt-0 not-first:border-t sm:grid-cols-[4.5rem_1fr] sm:py-8"
                      >
                        <span aria-hidden="true" className="font-serif type-title-1-regular tabular-nums sm:type-display-4-regular">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="type-title-3-medium">{s.title}</h3>
                          <p className="mt-2 type-headline-regular text-muted-foreground">{s.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-12 flex flex-col gap-5 rounded-[var(--radius-control)] bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                  <p className="max-w-[56ch] type-title-3-regular text-foreground">
                    {product.howItWorks.note ??
                      "A demo takes half an hour on WhatsApp or in person, worked through against how you operate today."}
                  </p>
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 type-body-medium underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    Talk to the team
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </section>
          ) : null}

          {quotes.length ? (
            <section aria-label={`What clients say about ${product.name}`} className="divider border-b">
              <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
                <TestimonialSpotlight items={quotes} />
              </div>
            </section>
          ) : null}

          <section aria-labelledby="related-heading">
            <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 id="related-heading" className="font-serif type-display-4-regular sm:type-display-3-regular">
                  Related products.
                </h2>
                <Link
                  href="/#products"
                  className="type-body-medium underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  See all products
                </Link>
              </div>
              <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {related.map((p) => (
                  <li key={p.slug}>
                    <ProductCard product={p} />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <ContactBand />
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
