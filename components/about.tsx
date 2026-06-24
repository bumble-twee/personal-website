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
            I build consumer products that grow, convert, and keep people coming
            back.
          </p>
          <p className="mt-8 max-w-2xl text-pretty text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Over 16 years I&apos;ve spanned game design at King and Wooga,
            payments at Glovo and Verse, and growth leadership at Spotify, where
            I led conversion, activation, and retention across a 200M+
            subscriber base. I care about data-driven experimentation, clean
            product craft, and building things that feel effortless to use.
          </p>
        </div>
      </div>
    </section>
  )
}
