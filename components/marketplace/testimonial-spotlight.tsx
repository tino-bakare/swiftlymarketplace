"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Avatar } from "@/components/motion/avatar-group";
import type { Testimonial } from "@/data/proof";
import { EASE_OUT } from "@/lib/ease";
import { cn } from "@/lib/utils";

const ROTATE_MS = 7000;

// One large quote at a time, for product pages, under a round avatar of the
// client's face or business logo. Below it, a row of 2px tab
// lines (one per quote) switches between them. Rotates on its own, pauses on
// hover or keyboard focus, and stays still for reduced motion.
export function TestimonialSpotlight({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || paused || items.length < 2) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % items.length), ROTATE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, reduce, items.length]);

  const t = items[index];

  return (
    <div
      className="mx-auto flex max-w-3xl flex-col items-center text-center"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="grid w-full" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={index}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="flex flex-col items-center [grid-area:1/1]"
          >
            {/* The client's face or their business logo; initials until supplied. */}
            <Avatar name={t.name} src={t.avatar} size="lg" className="mb-8 size-14 text-base sm:mb-10" />
            <blockquote className="font-serif type-title-1-regular text-balance sm:type-display-4-regular">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 sm:mt-10">
              <span className="block type-body-medium text-foreground">{t.name}</span>
              <span className="mt-0.5 block type-body-2-regular text-muted-foreground">{t.role}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {items.length > 1 ? (
        <div className="mt-8 flex items-center gap-2" role="group" aria-label="Choose a testimonial">
          {items.map((item, i) => (
            <button
              key={item.name + i}
              type="button"
              aria-label={`Show testimonial ${i + 1} of ${items.length}, from ${item.name}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => setIndex(i)}
              className="group flex h-6 items-center outline-none"
            >
              <span
                className={cn(
                  "block h-[2px] w-8 rounded-full transition-colors duration-300 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2",
                  i === index ? "bg-foreground" : "bg-border-strong group-hover:bg-muted-foreground",
                )}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
