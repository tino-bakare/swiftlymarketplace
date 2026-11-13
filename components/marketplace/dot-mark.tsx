// Small dotted mark for the bottom corner of feature cards: eight dots laid
// out as a ring, a diamond or a square. Decorative only.

const R = 9;
const C = 12;

const shapes: Record<"ring" | "diamond" | "square", [number, number][]> = {
  ring: Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    return [C + R * Math.cos(a), C + R * Math.sin(a)];
  }),
  diamond: [
    [C, C - R], [C + R / 2, C - R / 2], [C + R, C], [C + R / 2, C + R / 2],
    [C, C + R], [C - R / 2, C + R / 2], [C - R, C], [C - R / 2, C - R / 2],
  ],
  square: [
    [C - R, C - R], [C, C - R], [C + R, C - R], [C + R, C],
    [C + R, C + R], [C, C + R], [C - R, C + R], [C - R, C],
  ],
};

const order = ["ring", "diamond", "square"] as const;

export function DotMark({ index, className }: { index: number; className?: string }) {
  const points = shapes[order[index % order.length]];
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {points.map(([x, y], i) => (
        <circle key={i} cx={x.toFixed(2)} cy={y.toFixed(2)} r="1.6" fill="currentColor" />
      ))}
    </svg>
  );
}
