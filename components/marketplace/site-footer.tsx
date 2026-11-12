import { categories, products } from "@/data/products";
import { contact } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:grid-cols-[1.2fr_2fr] sm:px-8">
        <div>
          <a href="/" className="text-[15px] font-semibold tracking-[-0.01em]">Swiftly</a>
          <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
            Business software built for African businesses, by {contact.company}.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {categories
            .filter((c) => products.some((p) => p.category === c.id && p.status === "live"))
            .map((c) => (
              <div key={c.id}>
                <h3 className="text-sm font-medium">{c.label}</h3>
                <ul className="mt-3 space-y-2">
                  {products
                    .filter((p) => p.category === c.id && p.status === "live")
                    .map((p) => (
                      <li key={p.slug}>
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                          {p.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          <div>
            <h3 className="text-sm font-medium">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">WhatsApp {contact.whatsappNumber}</a></li>
              <li><a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-foreground">{contact.email}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl border-t border-border px-5 py-6 text-xs text-muted-foreground sm:px-8">
        &copy; {year} <a href={contact.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">{contact.company}</a>. All rights reserved.
      </div>
    </footer>
  );
}
