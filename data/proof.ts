// Client proof: the rating, clients and testimonials shown in the hero, the
// testimonial wall and each product page.
//
// TODO(client): supply real clients, logos, testimonials and the rating.
// None of the Swiftly product sites publish any yet (checked November 2026),
// so these lists start empty. Never fill them with made-up content.
//
// While a list is empty, `npm run dev` shows clearly labelled placeholders so
// the layout can be reviewed, and production builds leave the section out.

import type { Product } from "./products";

export type Client = {
  name: string;
  /** Logo for the hero marquee, e.g. "/clients/acme.svg" in public/. Falls back to the name. */
  logo?: string;
  /** Photo or mark for the avatar group. Falls back to initials. */
  avatar?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  /** Role and organisation, e.g. "Finance Manager, Example Ltd". */
  role: string;
  /** Square photo of the client, or their business logo, e.g. "/clients/acme.png". Falls back to initials. */
  avatar?: string;
  /** Product the quote is about; it then also shows on that product's page. */
  product?: Product["slug"];
};

/** Average rating out of 5, with what it is based on. Only shown when set. */
export const rating: { stars: number; label: string } | null = null;

export const clients: Client[] = [];

export const testimonials: Testimonial[] = [];

// ---------------------------------------------------------------------------
// Development-only placeholders. Never rendered in production builds.

const showPlaceholders = process.env.NODE_ENV === "development";

const placeholderClients: Client[] = Array.from({ length: 8 }, (_, i) => ({
  name: `Client ${i + 1}`,
}));

const placeholderTestimonials: Testimonial[] = Array.from({ length: 8 }, (_, i) => ({
  quote: "Placeholder. A client's own words about the product go here, two or three lines long.",
  name: `Client name ${i + 1}`,
  role: "Role, Organisation",
}));

export function getRating() {
  return rating ?? (showPlaceholders ? { stars: 5, label: "Placeholder rating" } : null);
}

export function getClients() {
  return clients.length ? clients : showPlaceholders ? placeholderClients : [];
}

export function getTestimonials(product?: Product["slug"]) {
  const real = product ? testimonials.filter((t) => t.product === product) : testimonials;
  if (real.length) return real;
  return showPlaceholders ? placeholderTestimonials.slice(0, product ? 4 : 8) : [];
}
