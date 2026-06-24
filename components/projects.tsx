'use client'

import { useState } from 'react'
import { Plus, ArrowUpRight } from 'lucide-react'

type Project = {
  category: 'Project' | 'Case Study' | 'Tool'
  title: string
  description: string
  detail: string
  href?: string
}

const PROJECTS: Project[] = [
  {
    category: 'Tool',
    title: 'Buy vs Rent Calculator',
    description:
      'An interactive model that weighs the true long-term cost of buying against renting.',
    detail:
      'A financial decision tool that accounts for down payments, appreciation, opportunity cost, and maintenance to show the real breakeven point between buying and renting over time.',
  },
  {
    category: 'Case Study',
    title: 'Benefits Platform Case Study',
    description:
      'Designing a B2B2C benefits dashboard from discovery through launch.',
    detail:
      'A 0→1 product story covering discovery research, agile process design, and the architecture of a new B2B2C dashboard built with a freshly assembled product organization.',
  },
  {
    category: 'Tool',
    title: 'Daily Jobs Digest',
    description:
      'An automated digest that surfaces the most relevant roles each morning.',
    detail:
      'A lightweight automation that aggregates, filters, and ranks job postings against a personal profile, delivering a focused daily shortlist instead of endless scrolling.',
  },
  {
    category: 'Project',
    title: 'Portfolio Website Build',
    description:
      'This site — an editorial, typographically-led portfolio built with v0.',
    detail:
      'A study in restraint: heavy serif display type, an off-white textured canvas, and generous whitespace, designed and shipped using AI-assisted development tools.',
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="group border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.3)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full flex-col items-start gap-6 p-8 text-left md:p-10"
      >
        <span className="small-caps text-xs text-muted-foreground">
          {project.category}
        </span>
        <h3 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl">
          {project.title}
        </h3>
        <p className="text-pretty text-base font-light leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <span className="mt-2 flex items-center gap-2 text-sm font-light text-foreground/70">
          <Plus
            className={`size-4 transition-transform duration-300 ${
              open ? 'rotate-45' : ''
            }`}
            aria-hidden="true"
          />
          {open ? 'Close' : 'Read more'}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-8 py-8 md:px-10">
            <p className="max-w-xl text-pretty text-base font-light leading-relaxed text-foreground/80">
              {project.detail}
            </p>
            {project.href && (
              <a
                href={project.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-light text-foreground underline-offset-4 hover:underline"
              >
                View project
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-6 py-20 md:px-12 md:py-32"
    >
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="small-caps text-sm text-muted-foreground md:col-span-3">
            Projects
          </h2>
          <p className="font-serif text-2xl leading-snug text-pretty text-foreground md:col-span-9 md:text-3xl lg:col-span-7">
            Selected work across tools, case studies, and experiments.
          </p>
        </div>
        <div className="mt-12 grid gap-px md:mt-16 md:grid-cols-2 md:gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
