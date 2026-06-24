import { PreviewVisual } from "@/components/preview-visual"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end px-6 pb-16 pt-32 md:px-12 md:pb-24"
    >
      {/* Vertical editorial sidebar label */}
      <a
        href="#projects"
        className="group absolute left-6 top-1/2 hidden -translate-y-1/2 md:block"
      >
        <span className="small-caps flex items-center gap-3 text-xs text-muted-foreground transition-colors group-hover:text-foreground [writing-mode:vertical-rl] rotate-180">
          Projects <span className="text-base">+</span>
        </span>
      </a>

      <div className="mx-auto grid w-full max-w-screen-2xl items-end gap-12 md:grid-cols-12">
        <div className="md:col-span-8">
          <h1 className="font-serif font-black leading-[0.82] tracking-tight text-foreground text-balance text-[clamp(5rem,20vw,17rem)]">
            build<span className="text-muted-foreground">.</span>
          </h1>
          <p className="mt-8 max-w-md text-pretty text-base font-light leading-relaxed text-muted-foreground md:mt-10 md:text-lg">
            Product leader. +16 years. Gaming, fintech, subscriptions.
          </p>
        </div>
        <div className="md:col-span-4">
          <PreviewVisual variant="arc" label="portrait" className="aspect-[3/4] w-full border border-border" />
        </div>
      </div>
    </section>
  )
}
