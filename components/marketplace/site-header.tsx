import Link from "next/link";
import { contact } from "@/data/site";
import { ButtonLink } from "./button";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="inline-flex items-center">
          {/* Brand logo from public/brand, used as supplied. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/swiftly-logo.svg" alt="Swiftly" width={631} height={184} className="h-6 w-auto" />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          <Link href="/#products" className="hidden h-10 items-center px-3 type-body-regular text-muted-foreground transition-colors hover:text-foreground sm:inline-flex">
            Products
          </Link>
          <ButtonLink href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" variant="accent" className="h-10 px-4 text-sm">
            Talk to the team
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
