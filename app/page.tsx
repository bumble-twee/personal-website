import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-svh">
      <SiteNav />
      <Hero />
      <About />
      <Projects />
      <SiteFooter />
    </main>
  )
}
