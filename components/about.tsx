export function About() {
  return (
    <section
      id="about"
      className="border-t border-border px-6 py-16 sm:py-20 md:px-12 md:py-32"
    >
      <div className="mx-auto grid w-full max-w-screen-2xl gap-8 sm:gap-10 md:grid-cols-12">
        <h2 className="small-caps text-sm text-muted-foreground md:col-span-3">
          About
        </h2>
        <div className="md:col-span-9 lg:col-span-7">
          <p className="font-serif text-xl leading-snug text-pretty text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
            I build consumer products that grow, convert, and keep people coming
            back.
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-base font-light leading-relaxed text-muted-foreground sm:mt-8 md:text-lg">
          At Spotify I led conversion, activation, and retention across a 200M+ subscriber base. Previously, I built the customer and payments experience for Glovo's marketplace, ran payments at Verse, and designed game economies at King and Wooga.
          </p>
        </div>
      </div>
    </section>
  )
}
