export function About() {
  return (
    <section
      id="about"
      className="border-t border-border px-6 py-20 md:px-12 md:py-32"
    >
      <div className="mx-auto grid w-full max-w-screen-2xl gap-10 md:grid-cols-12">
        <h2 className="small-caps text-sm text-muted-foreground md:col-span-3">
          About
        </h2>
        <div className="md:col-span-9 lg:col-span-7">
          <p className="font-serif text-2xl leading-snug text-pretty text-foreground md:text-3xl lg:text-4xl">
            I turn subscription monetization, conversion, and payments into
            durable growth, most recently leading subscription growth across
            Spotify&apos;s 200M+ subscriber base.
          </p>
          <p className="mt-8 max-w-2xl text-pretty text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Over 16 years I&apos;ve spanned game design at King and Wooga,
            payments at Glovo and Verse, and product leadership at Spotify and
            Localyze. I care about data-driven experimentation, clean product
            craft, and using new tools to move faster. Today I&apos;m building a
            0 to 1 luxury alpine experience business from Chamonix.
          </p>
        </div>
      </div>
    </section>
  )
}
