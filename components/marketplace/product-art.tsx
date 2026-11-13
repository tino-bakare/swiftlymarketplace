import type { ProductArt as Art } from "@/data/products";
import { cn } from "@/lib/utils";
import { artIcons } from "./icons";

// The image panel at the top of each product card: flat colour, hairline
// geometry and line icons. Pure SVG + inline icons, so it scales cleanly,
// costs nothing to load and recolours from data.

export function ProductArt({ art, className }: { art: Art; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative aspect-[448/248] w-full overflow-hidden", className)}
      style={{ backgroundColor: art.background, color: art.stroke }}
    >
      {art.layout === "frame" ? <Frame icons={art.icons} /> : <Rings icon={art.icons[0]} />}
    </div>
  );
}

function Frame({ icons }: { icons: string[] }) {
  return (
    <>
      <svg viewBox="0 0 448 248" className="absolute inset-0 size-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <g stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
          <line x1="52" y1="0" x2="52" y2="248" />
          <line x1="0" y1="50" x2="448" y2="50" />
          <path d="M330 0 C 350 120, 400 190, 448 228" />
        </g>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center gap-[8%]">
        {icons.slice(0, 3).map((name) => {
          const Icon = artIcons[name];
          return Icon ? <Icon key={name} className="h-auto w-[8.25%] min-w-[21px]" strokeWidth={1.25} absoluteStrokeWidth /> : null;
        })}
      </div>
    </>
  );
}

function Rings({ icon }: { icon?: string }) {
  const Icon = icon ? artIcons[icon] : undefined;
  return (
    <>
      <svg viewBox="0 0 448 248" className="absolute inset-0 size-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <g stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
          <circle cx="224" cy="124" r="44" />
          <circle cx="224" cy="124" r="108" />
          <circle cx="224" cy="124" r="178" />
        </g>
      </svg>
      {Icon ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-auto w-[7.5%] min-w-[21px]" strokeWidth={1.25} absoluteStrokeWidth />
        </div>
      ) : null}
    </>
  );
}
