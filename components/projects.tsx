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

function CategoryLabel({ category }: { category: ProjectCategory }) {
  return (
    <span className={cn("small-caps flex items-center gap-2 text-xs", CATEGORY_STYLES[category])}>
      <span className="h-px w-5 bg-current" aria-hidden="true" />
      {category}
    </span>
  )
}

function CardBody({ project }: { project: Project }) {
  return (
    <div className="flex flex-1 flex-col items-start gap-3 p-6 md:p-7">
      <CategoryLabel category={project.category} />
      <h3 className="font-serif text-2xl leading-tight text-balance text-foreground md:text-3xl">
        {project.title}
      </h3>
      <p className="max-w-md text-pretty text-sm font-light leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <span className="mt-auto flex items-center gap-1.5 pt-1 text-sm font-light text-foreground/70 transition-colors group-hover:text-foreground">
        View project
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </div>
  )
}

const CARD_CLASS =
  "group flex overflow-hidden rounded-sm border border-border bg-card/40 transition-all duration-300 hover:border-foreground/40 hover:bg-card"

// First project: full-width, image left (60%) / text right (40%), capped height.
function FeatureCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={cn(CARD_CLASS, "max-h-[420px] flex-col md:flex-row")}>
      <PreviewVisual
        label="preview"
        variant="lines"
        className="aspect-[16/9] w-full transition-opacity duration-300 group-hover:opacity-80 md:aspect-auto md:w-3/5"
      />
      <div className="md:w-2/5">
        <CardBody project={project} />
      </div>
    </Link>
  )
}

// Remaining projects: equal-height cards in a 2-column grid, fixed 16:9 preview.
function GridCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={cn(CARD_CLASS, "h-full flex-col")}>
      <PreviewVisual
        label="preview"
        variant="lines"
        className="aspect-[16/9] w-full transition-opacity duration-300 group-hover:opacity-80"
      />
      <CardBody project={project} />
    </Link>
  )
}

export function Projects() {
  const [feature, ...rest] = PROJECTS
  return (
    <section id="projects" className="border-t border-border px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="small-caps text-sm text-muted-foreground md:col-span-3">Projects</h2>
          <p className="font-serif text-2xl leading-snug text-pretty text-foreground md:col-span-9 md:text-3xl lg:col-span-7">
            Things I&apos;ve built, shipped, and figured out.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-6 md:mt-16">
          {feature && <FeatureCard project={feature} />}
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            {rest.map((project) => (
              <GridCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
