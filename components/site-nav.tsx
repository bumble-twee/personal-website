import Link from "next/link"

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alenadelacruz/",
    external: true,
  },
  { label: "CV", href: "/alena-delacruz-cv.pdf", download: true },
]

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-background/70 backdrop-blur-md transition-colors">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-6 md:px-12 md:py-7">
        <Link
          href="/"
          className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          alena<span className="text-muted-foreground">.</span>
        </Link>
        <ul className="flex items-center gap-5 text-sm md:gap-9">
          {NAV_LINKS.map((link) =>
            link.external || link.download ? (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(link.download ? { download: true } : {})}
                  className="relative font-light text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative font-light text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </header>
  )
}
