export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end px-6 pb-16 pt-32 md:px-12 md:pb-24"
    >
      <div className="mx-auto w-full max-w-screen-2xl">
        <h1 className="font-serif font-black leading-[0.85] tracking-tight text-foreground text-balance text-[clamp(5rem,22vw,18rem)]">
          alena<span className="text-muted-foreground">.</span>
        </h1>
        <p className="mt-8 max-w-md text-pretty text-base font-light leading-relaxed text-muted-foreground md:mt-10 md:text-lg">
          Product leader. +16 years. Gaming, fintech, subscriptions.
        </p>
      </div>
    </section>
  )
}
