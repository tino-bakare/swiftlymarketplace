import { cn } from "@/lib/utils";

// Small metadata label (category, status). Mono, square with rounded corners.
export function Tag({ tone = "outline", children }: { tone?: "outline" | "muted"; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-[var(--radius-control)] px-2 font-mono type-caption-2-regular text-muted-foreground",
        tone === "outline" ? "border border-border-strong" : "bg-card",
      )}
    >
      {children}
    </span>
  );
}
