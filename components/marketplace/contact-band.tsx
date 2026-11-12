import { ButtonLink } from "@/components/motion/button";
import { contact } from "@/data/site";

// Mirrors the two-path close on Bland's integrations page: talk to a person,
// or try a product yourself.
export function ContactBand() {
  return (
    <section id="contact" aria-label="Get started" className="border-t border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-px bg-border sm:grid-cols-2">
        <div className="flex flex-col bg-background px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm text-muted-foreground">With our team</p>
          <h2 className="mt-3 max-w-[20ch] text-3xl leading-tight font-medium tracking-[-0.025em] text-balance">
            Tell us how your business runs. We&rsquo;ll show you what fits.
          </h2>
          <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
            A demo takes half an hour on WhatsApp or in person, worked through against how you operate today.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </ButtonLink>
            <ButtonLink href={`mailto:${contact.email}`} variant="secondary">
              Email the team
            </ButtonLink>
          </div>
        </div>

        <div className="flex flex-col bg-background px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm text-muted-foreground">On your own</p>
          <h2 className="mt-3 max-w-[20ch] text-3xl leading-tight font-medium tracking-[-0.025em] text-balance">
            Or start with a free trial today.
          </h2>
          <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
            SwiftlyPeople, SwiftlyBooks and SwiftlyProjects come with 30 days free and no card. SwiftlyCRM and
            Droplist have free plans.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="https://swiftlypeople.com/signup" target="_blank" rel="noopener noreferrer" variant="secondary">
              Try SwiftlyPeople
            </ButtonLink>
            <ButtonLink href="https://swiftlybooks.tech/signup" target="_blank" rel="noopener noreferrer" variant="secondary">
              Try SwiftlyBooks
            </ButtonLink>
            <ButtonLink href="https://swiftlyprojects.tech/trial" target="_blank" rel="noopener noreferrer" variant="secondary">
              Try SwiftlyProjects
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
