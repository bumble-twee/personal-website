import { PortraitParallax } from "@/components/portrait-parallax"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end px-6 pb-16 pt-32 md:px-12 md:pb-24"
    >
      <div className="mx-auto grid w-full max-w-screen-2xl items-end gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <h1 className="font-serif font-black leading-[0.82] tracking-tight text-foreground text-balance text-[clamp(5rem,20vw,17rem)]">
            build.
          </h1>
          <p className="mt-8 translate-x-[3%] -translate-y-[10%] whitespace-nowrap text-base font-light leading-relaxed text-muted-foreground md:mt-10 md:text-lg">
            I build products people love to use. <br /> Product leader. +16 years. Gaming, fintech, subscriptions.
          </p>
        </div>
        <div className="md:col-span-6">
          {/* Asymmetric editorial photo pairing: a large portrait tile sits
              behind, with a smaller square candid overlapping its
              bottom-left corner. */}
          <div className="relative mx-auto flex w-3/4 flex-col items-center gap-6 pb-0 pl-0 md:block md:pb-14 md:pl-12 md:ml-auto md:mr-0">
            <PortraitParallax src="/portrait.jpg" alt="Alena De La Cruz" />
            <img
              src="/candid.png"
              alt="Alena De La Cruz"
              className="relative aspect-[10/13] w-3/5 border border-border object-cover md:absolute md:bottom-0 md:right-95 md:w-1/2 md:translate-y-[-70%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
