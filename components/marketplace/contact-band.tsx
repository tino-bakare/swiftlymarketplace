import { contact } from "@/data/site";
import { ButtonLink } from "./button";

// Mirrors the two-path close on Bland's integrations page: talk to a person,
// or try a product yourself.
export function ContactBand() {
  return (
    <section id="contact" aria-label="Get started" className="divider border-t">
      <div className="mx-auto grid w-full max-w-7xl sm:grid-cols-2">
        <div className="flex flex-col px-5 py-14 sm:px-8 sm:py-20">
          <p className="font-mono type-caption-1-regular text-muted-foreground uppercase">With our team</p>
          <h2 className="mt-3 max-w-[20ch] font-serif type-display-4-regular text-balance">
            Tell us how your business runs. We&rsquo;ll show you what fits.
          </h2>
          <p className="mt-4 max-w-[46ch] type-body-regular text-muted-foreground">
            A demo takes half an hour on WhatsApp or in person, worked through against how you operate today.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </ButtonLink>
            <ButtonLink href={`mailto:${contact.email}`} variant="outline">
              Email the team
            </ButtonLink>
          </div>
        </div>

        <div className="divider flex flex-col border-t px-5 py-14 sm:border-t-0 sm:border-l sm:px-8 sm:py-20">
          <p className="font-mono type-caption-1-regular text-muted-foreground uppercase">On your own</p>
          <h2 className="mt-3 max-w-[20ch] font-serif type-display-4-regular text-balance">
            Or start with a free trial today.
          </h2>
          <p className="mt-4 max-w-[46ch] type-body-regular text-muted-foreground">
            SwiftlyPeople, SwiftlyBooks and SwiftlyProjects come with 30 days free and no card. SwiftlyCRM and
            Droplist have free plans.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="https://swiftlypeople.com/signup" target="_blank" rel="noopener noreferrer" variant="outline">
              Try SwiftlyPeople
            </ButtonLink>
            <ButtonLink href="https://swiftlybooks.tech/signup" target="_blank" rel="noopener noreferrer" variant="outline">
              Try SwiftlyBooks
            </ButtonLink>
            <ButtonLink href="https://swiftlyprojects.tech/trial" target="_blank" rel="noopener noreferrer" variant="outline">
              Try SwiftlyProjects
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
