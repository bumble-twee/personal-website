export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <p className="font-serif text-5xl leading-none tracking-tight text-foreground md:text-7xl">
          alena<span className="text-muted-foreground">.</span>
        </p>
        <a
          href="https://www.linkedin.com/in/alenadelacruz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-light text-foreground underline-offset-4 transition-colors hover:underline md:self-end"
        >
          linkedin.com/in/alenadelacruz
        </a>
      </div>
    </footer>
  )
}
