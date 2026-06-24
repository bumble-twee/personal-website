const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alenadelacruz/',
    external: true,
  },
  { label: 'CV', href: '/alena-delacruz-cv.pdf', download: true },
]

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <a
          href="#top"
          className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          alena<span className="text-muted-foreground">.</span>
        </a>
        <ul className="flex items-center gap-5 text-sm md:gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                {...(link.download ? { download: true } : {})}
                className="relative font-light text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
