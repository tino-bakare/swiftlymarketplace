import { Star } from "lucide-react";
import { AvatarGroup } from "@/components/motion/avatar-group";
import { Marquee } from "@/components/motion/marquee";
import { getClients, getRating } from "@/data/proof";

// Hero social proof: the star rating and "Happy clients" label in line with
// an avatar group and a marquee of client logos. Renders nothing until there
// are clients in data/proof.ts (placeholders show in development only).
export function ClientProof() {
  const clients = getClients();
  const rating = getRating();
  if (!clients.length) return null;

  return (
    // One row: stars over the "Happy clients" label, then the avatar group,
    // then a short marquee of client logos (about two in view at a time).
    <div className="mt-8 flex items-center gap-5 sm:mt-10">
      <div className="shrink-0">
        {rating ? (
          <div className="flex items-center gap-0.5" role="img" aria-label={`Rated ${rating.stars} out of 5: ${rating.label}`}>
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                aria-hidden="true"
                strokeWidth={1.5}
                className={i < Math.round(rating.stars) ? "size-3.5 fill-sun text-sun" : "size-3.5 text-border-strong"}
              />
            ))}
          </div>
        ) : null}
        <p className="mt-1.5 font-mono type-caption-1-regular whitespace-nowrap text-muted-foreground uppercase">
          Happy clients
        </p>
      </div>

      <AvatarGroup
        members={clients.map((c) => ({ id: c.name, name: c.name, src: c.avatar }))}
        max={3}
        size="md"
        label="Clients"
        className="shrink-0"
      />

      <Marquee speed={28} gap="2rem" className="hidden min-w-0 max-w-56 flex-1 sm:flex">
        {clients.map((c) =>
          c.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={c.name} src={c.logo} alt={c.name} className="h-6 w-auto opacity-70 grayscale" />
          ) : (
            <span key={c.name} className="type-body-medium whitespace-nowrap text-muted-foreground">
              {c.name}
            </span>
          ),
        )}
      </Marquee>
    </div>
  );
}
