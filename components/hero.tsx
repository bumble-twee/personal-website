import { PreviewVisual } from "@/components/preview-visual"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end px-6 pb-16 pt-32 md:px-12 md:pb-24"
    >
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
          {/* Asymmetric editorial photo pairing: a taller portrait tile
              and a smaller, offset landscape tile. */}
          <div className="flex items-end gap-4">
            <PreviewVisual
              label="portrait"
              className="aspect-[3/4] w-3/5 border border-border"
            />
            <PreviewVisual
              label="candid"
              className="mb-8 aspect-[4/3] w-2/5 border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
