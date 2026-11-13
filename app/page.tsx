import { Catalogue } from "@/components/marketplace/catalogue";
import { ContactBand } from "@/components/marketplace/contact-band";
import { Hero } from "@/components/marketplace/hero";
import { SiteFooter } from "@/components/marketplace/site-footer";
import { SiteHeader } from "@/components/marketplace/site-header";
import { TestimonialWall } from "@/components/marketplace/testimonial-wall";

export default function Home() {
  return (
    <>
      <a href="#products" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-[var(--radius-control)] focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background">
        Skip to products
      </a>
      <div className="relative">
        <SiteHeader />
        <main>
          <Hero />
          <Catalogue />
          <TestimonialWall />
          <ContactBand />
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
