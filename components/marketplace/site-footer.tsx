import Link from "next/link";
import { categories, products } from "@/data/products";
import { contact } from "@/data/site";
import { EmailIcon, WhatsAppIcon } from "./contact-icons";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="divider border-t">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:grid-cols-[1.2fr_2fr] sm:px-8">
        <div>
          <Link href="/" className="inline-flex">
            {/* Brand logomark from public/brand, used as supplied. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/swiftly-logomark.svg" alt="Swiftly" width={998} height={998} className="size-8" />
          </Link>
          <p className="mt-3 max-w-[32ch] type-body-regular text-muted-foreground">
            Business software built for African businesses, by {contact.company}.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {categories
            .filter((c) => products.some((p) => p.category === c.id && p.status === "live"))
            .map((c) => (
              <div key={c.id}>
                <h3 className="font-mono type-caption-1-regular text-muted-foreground uppercase">{c.label}</h3>
                <ul className="mt-3 space-y-2">
                  {products
                    .filter((p) => p.category === c.id && p.status === "live")
                    .map((p) => (
                      <li key={p.slug}>
                        <Link href={`/products/${p.slug}`} className="type-body-regular text-foreground transition-colors hover:text-muted-foreground">
                          {p.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          <div>
            <h3 className="font-mono type-caption-1-regular text-muted-foreground uppercase">Contact</h3>
            <ul className="mt-3 space-y-2 type-body-regular">
              <li>
                <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-muted-foreground">
                  <WhatsAppIcon />
                  <span><span className="sr-only">WhatsApp </span>{contact.whatsappNumber}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="inline-flex items-start gap-2 break-all transition-colors hover:text-muted-foreground">
                  <EmailIcon className="mt-0.5" />
                  <span><span className="sr-only">Email </span>{contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="divider mx-auto w-full max-w-7xl border-t px-5 py-6 font-mono type-caption-1-regular text-muted-foreground sm:px-8">
        &copy; {year} <a href={contact.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">{contact.company}</a>. All rights reserved.
      </div>
    </footer>
  );
}
