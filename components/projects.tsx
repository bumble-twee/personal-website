import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PROJECTS, type Project, type ProjectCategory } from "@/lib/projects"
import { cn } from "@/lib/utils"

const PROJECT_PREVIEW_IMAGES: Record<string, string> = {
  "buy-vs-rent": "/buyvsrent.png",
  "benefits-platform": "/benefitscasestudy.png",
  "daily-jobs-digest": "/dailydigest.png",
  "portfolio-website": "/website.png",
}

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

const ROW_LAYOUTS = [
  "grid-cols-[35fr_65fr]",
  "grid-cols-2",
  "grid-cols-[65fr_35fr]",
] as const

/* Claude generated code to change scale of project preview images */

const PROJECT_IMAGE_STYLES: Record<string, {
  scale: number
  paddingTop: number
  transformOrigin: string
}> = {
  "daily-jobs-digest": {
    scale: .9,
    paddingTop: 0,
    transformOrigin: "top center",
  },
  "benefits-platform": {
    scale: 1.2,
    paddingTop: 0,
    transformOrigin: "top left",
  },
  "buy-vs-rent": {
    scale: 1,
    paddingTop: 0,
    transformOrigin: "top left",
  },
  "portfolio-website": {
    scale: .8,
    paddingTop: 10,
    transformOrigin: "top center",
  },
}

function ProjectCard({ project }: { project: Project }) {
  const imgStyle = PROJECT_IMAGE_STYLES[project.slug] ?? {
    scale: 0.5,
    paddingTop: 0,
    transformOrigin: "top left",
  }

  return (
    <Link href={`/projects/${project.slug}`} className={cn(CARD_CLASS, "h-[420px] flex-col")}>
      <div
        className="h-[220px] shrink-0 overflow-hidden relative"
        style={{ 
          paddingTop: `${imgStyle.paddingTop}px`,
          minHeight: "220px"
        }}
      >
       <img
        src={PROJECT_PREVIEW_IMAGES[project.slug]}
        alt=""
        style={{
          transform: `scale(${imgStyle.scale})`,
          transformOrigin: imgStyle.transformOrigin,
          width: "100%",
          height: "auto",
          display: "block",
        }}
        className="transition-opacity duration-300 group-hover:opacity-80"
      />
      </div>
      <CardBody project={project} />
    </Link>
  )
}

/* End of Claude generated code */

function chunkIntoRows<T>(items: T[]): T[][] {
  const rows: T[][] = []
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2))
  }
  return rows
}

export function Projects() {
  const rows = chunkIntoRows(PROJECTS)

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
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className={cn("grid gap-6", ROW_LAYOUTS[rowIndex % ROW_LAYOUTS.length])}>
              {row.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
