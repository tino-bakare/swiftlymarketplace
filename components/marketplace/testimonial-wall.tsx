import { Avatar } from "@/components/motion/avatar-group";
import { Marquee } from "@/components/motion/marquee";
import { getTestimonials, type Testimonial } from "@/data/proof";
import { Tag } from "./tag";

// Testimonial wall above the contact close: two rows of quote cards drifting
// in opposite directions, built from beUI's Marquee. Renders nothing until
// there are testimonials in data/proof.ts (placeholders show in development).
export function TestimonialWall() {
  const items = getTestimonials();
  if (!items.length) return null;

  const half = Math.ceil(items.length / 2);
  const rows = items.length > 3 ? [items.slice(0, half), items.slice(half)] : [items];

  return (
    <section aria-labelledby="testimonials-heading" className="divider overflow-hidden border-t">
      <div className="mx-auto w-full max-w-7xl px-5 pt-16 text-center sm:px-8 sm:pt-20">
        <Tag>Testimonials</Tag>
        <h2 id="testimonials-heading" className="mt-5 font-serif type-display-4-regular sm:type-display-3-regular">
          What our clients say.
        </h2>
      </div>

      <div className="mt-10 flex flex-col gap-4 pb-16 sm:mt-12 sm:pb-20">
        {rows.map((row, i) => (
          <Marquee key={i} direction={i === 0 ? "left" : "right"} speed={60} gap="1rem">
            {row.map((t) => (
              <Quote key={t.name + t.quote} t={t} />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}

function Quote({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full w-[min(22rem,80vw)] flex-col rounded-2xl bg-card p-6">
      <blockquote className="type-headline-regular text-foreground">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-6">
        <Avatar name={t.name} src={t.avatar} size="md" />
        <span className="min-w-0">
          <span className="block type-body-medium text-foreground">{t.name}</span>
          <span className="block type-body-2-regular text-muted-foreground">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
