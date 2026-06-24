import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PROJECTS, type Project, type ProjectCategory } from "@/lib/projects"
import { PreviewVisual } from "@/components/preview-visual"
import { cn } from "@/lib/utils"

// Subtle visual differentiation per category label.
const CATEGORY_STYLES: Record<ProjectCategory, string> = {
  Tool: "text-foreground",
  "Case Study": "text-muted-foreground",
  Project: "text-muted-foreground/70",
}

// Layout rhythm: full-width, then a 60/40 split, then full-width again.
const LAYOUT = ["md:col-span-12", "md:col-span-7", "md:col-span-5", "md:col-span-12"]
const PREVIEW_VARIANTS = ["grid", "lines", "arc", "lines"] as const

function CategoryLabel({ category }: { category: ProjectCategory }) {
  return (
    <span className={cn("small-caps flex items-center gap-2 text-xs", CATEGORY_STYLES[category])}>
      <span className="h-px w-5 bg-current" aria-hidden="true" />
      {category}
    </span>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isWide = LAYOUT[index] === "md:col-span-12"
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-sm border border-border bg-card/40 transition-all duration-300 hover:border-foreground/40 hover:bg-card",
        LAYOUT[index],
        isWide && "md:flex-row",
      )}
    >
      <PreviewVisual
        variant={PREVIEW_VARIANTS[index]}
        className={cn(
          "w-full transition-opacity duration-300 group-hover:opacity-80",
          isWide ? "aspect-[16/10] md:aspect-auto md:w-1/2" : "aspect-[16/10]",
        )}
      />
      <div className="flex flex-1 flex-col items-start gap-5 p-8 md:p-10">
        <CategoryLabel category={project.category} />
        <h3 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl">
          {project.title}
        </h3>
        <p className="max-w-md text-pretty text-base font-light leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <span className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-light text-foreground/70 transition-colors group-hover:text-foreground">
          View project
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="small-caps text-sm text-muted-foreground md:col-span-3">Projects</h2>
          <p className="font-serif text-2xl leading-snug text-pretty text-foreground md:col-span-9 md:text-3xl lg:col-span-7">
            Things I&apos;ve built, shipped, and figured out.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
