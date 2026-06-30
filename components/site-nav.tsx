"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

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

const LINK_CLASS =
  "relative font-light text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-background/70 backdrop-blur-md transition-colors">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-6 md:px-12 md:py-7">
        <Link
          href="/"
          className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          alena delacruz
        </Link>
        <ul className="hidden items-center gap-5 text-sm md:flex md:gap-9">
          {NAV_LINKS.map((link) =>
            link.external || link.download ? (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(link.download ? { download: true } : {})}
                  className={LINK_CLASS}
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <Link href={link.href} className={LINK_CLASS}>
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="text-foreground md:hidden"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
      {isOpen && (
        <ul className="flex flex-col gap-5 border-t border-border bg-background/95 px-6 py-6 text-sm backdrop-blur-md md:hidden">
          {NAV_LINKS.map((link) =>
            link.external || link.download ? (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(link.download ? { download: true } : {})}
                  onClick={() => setIsOpen(false)}
                  className={LINK_CLASS}
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <Link href={link.href} onClick={() => setIsOpen(false)} className={LINK_CLASS}>
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      )}
    </header>
  )
}
