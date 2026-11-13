import { ButtonLink as BeuiButtonLink, type ButtonLinkProps as BeuiButtonLinkProps } from "@/components/motion/button";
import { cn } from "@/lib/utils";

// Brand wrapper around beUI's ButtonLink (left unmodified). beUI ships pill
// buttons; the brand uses square controls with rounded corners, set by
// --radius-control in globals.css. "accent" is the yellow call to action.
type Props = Omit<BeuiButtonLinkProps, "variant"> & {
  variant?: BeuiButtonLinkProps["variant"] | "accent";
};

export function ButtonLink({ variant = "primary", className, ...rest }: Props) {
  return (
    <BeuiButtonLink
      variant={variant === "accent" ? "primary" : variant}
      className={cn(
        "rounded-[var(--radius-control)]",
        variant === "accent" && "bg-sun text-foreground hover:bg-sun/90",
        variant === "outline" && "border-border-strong",
        className,
      )}
      {...rest}
    />
  );
}
