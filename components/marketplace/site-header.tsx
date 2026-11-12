import { ButtonLink } from "@/components/motion/button";
import { contact } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* TODO(brand): swap the text wordmark for the buckstudio logo. */}
        <a href="/" className="text-[15px] font-semibold tracking-[-0.01em] text-foreground">
          Swiftly
        </a>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          <a href="#products" className="hidden h-10 items-center px-3 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex">
            Products
          </a>
          <a href="#contact" className="hidden h-10 items-center px-3 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex">
            Contact
          </a>
          <ButtonLink href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" size="sm">
            Talk to the team
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
