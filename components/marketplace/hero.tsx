import { ClientProof } from "./client-proof";

// At least 65% of the viewport height (--hero-height in globals.css), with a
// floor so the copy never crushes on short or landscape phones; it grows only
// if its content needs more room. Two columns from large screens up, as on
// Bland: the headline and client proof left, the introduction right.
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="divider relative flex min-h-[max(var(--hero-height),30rem)] flex-col border-b"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pt-24 pb-14 sm:px-8 sm:pb-20">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="min-w-0">
            <h1
              id="hero-heading"
              className="max-w-[18ch] font-serif type-display-4-regular text-balance sm:type-display-2-regular lg:type-display-1-regular"
            >
              Software to make all parts of your business sing together.
            </h1>
            <ClientProof />
          </div>
          <p className="max-w-[52ch] type-headline-regular text-muted-foreground sm:type-title-3-regular lg:justify-self-end">
            Lending, accounting, payroll, sales, projects and the tobacco season. Every Swiftly product is
            built for how businesses in Africa work. Start with one and add the rest when you need them.
          </p>
        </div>
      </div>
    </section>
  );
}
