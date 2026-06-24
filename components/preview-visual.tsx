import { cn } from "@/lib/utils"

type PreviewVisualProps = {
  label?: string
  variant?: "lines" | "grid" | "arc"
  className?: string
}

// Abstract, off-white textured placeholder. No stock photography —
// just geometric line work that reads as an editorial preview slot.
export function PreviewVisual({ label = "preview", variant = "lines", className }: PreviewVisualProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-secondary/60",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full text-foreground/[0.07]"
        preserveAspectRatio="none"
        viewBox="0 0 400 300"
      >
        {variant === "lines" &&
          Array.from({ length: 9 }).map((_, i) => (
            <line key={i} x1={i * 50} y1="0" x2={i * 50 - 120} y2="300" stroke="currentColor" strokeWidth="1" />
          ))}
        {variant === "grid" &&
          Array.from({ length: 14 }).map((_, i) => (
            <line key={i} x1="0" y1={i * 24} x2="400" y2={i * 24} stroke="currentColor" strokeWidth="1" />
          ))}
        {variant === "arc" && (
          <>
            <circle cx="200" cy="150" r="150" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="150" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
          </>
        )}
      </svg>
      <span className="small-caps absolute bottom-4 left-4 text-[0.7rem] text-muted-foreground/70">{label}</span>
    </div>
  )
}
