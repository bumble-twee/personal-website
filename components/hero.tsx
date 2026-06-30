import { PortraitParallax } from "@/components/portrait-parallax"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end px-6 pb-16 pt-28 sm:pt-32 md:px-12 md:pb-24"
    >
      <div className="mx-auto grid w-full max-w-screen-2xl items-end gap-10 sm:gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <h1 className="font-serif font-black leading-[0.82] tracking-tight text-foreground text-balance text-[clamp(3.5rem,20vw,17rem)]">
            build.
          </h1>
          <p className="mt-6 translate-x-[3%] -translate-y-[10%] whitespace-normal text-base font-light leading-relaxed text-muted-foreground sm:mt-8 md:mt-10 md:whitespace-nowrap md:text-lg">
            I build products people love to use. <br /> Product leader. +16 years. Gaming, fintech, subscriptions.
          </p>
        </div>
        <div className="md:col-span-6">
          {/* Asymmetric editorial photo pairing: a large portrait tile sits
              behind, with a smaller square candid overlapping its
              bottom-left corner. */}
          <div className="relative mx-auto w-3/4 pb-16 sm:w-3/5 sm:pb-20 md:block md:w-3/4 md:pb-14 md:pl-12 md:ml-auto md:mr-0">
            <PortraitParallax src="/portrait.jpg" alt="Alena De La Cruz" />
            <img
              src="/candid.png"
              alt="Alena De La Cruz"
              className="absolute bottom-0 left-0 aspect-[10/13] w-2/5 translate-y-[-70%] border border-border object-cover md:left-auto md:right-95 md:w-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
