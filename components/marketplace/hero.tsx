// Fills 65% of the viewport height (--hero-height in globals.css), with a floor
// so the copy never crushes on short or landscape phones.
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex h-[var(--hero-height)] min-h-[30rem] flex-col border-b border-border"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pt-24 pb-14 sm:px-8 sm:pb-20">
        <h1
          id="hero-heading"
          className="max-w-[16ch] text-[clamp(2.5rem,6.2vw,5.25rem)] leading-[0.98] font-medium tracking-[-0.035em] text-balance"
        >
          Software for every part of your business.
        </h1>
        <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[52ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            Lending, accounting, payroll, sales, projects and the tobacco season. Every Swiftly product is
            built for how businesses in Africa work. Start with one and add the rest when you need them.
          </p>
          <a
            href="#products"
            className="shrink-0 text-sm font-medium text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Browse the products
          </a>
        </div>
      </div>
    </section>
  );
}
