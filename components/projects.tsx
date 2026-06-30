import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PROJECTS, type Project, type ProjectCategory } from "@/lib/projects"
import { cn } from "@/lib/utils"

const PROJECT_PREVIEW_IMAGES: Record<string, string> = {
  "buy-vs-rent": "/buy-vs-rent/buyvsrent.png",
  "benefits-platform": "/benefits-platform/benefitsplatform.png",
  "daily-jobs-digest": "/daily-jobs-digest/dailydigest.png",
  "portfolio-website": "/website-project/website.png",
}

// Subtle visual differentiation per category label.
const CATEGORY_STYLES: Record<ProjectCategory, string> = {
  Tool: "text-foreground",
  "Case Study": "text-muted-foreground",
  Project: "text-muted-foreground/70",
}

function CategoryLabel({ category }: { category: ProjectCategory }) {
  return (
    <span className={cn("small-caps flex items-center gap-2 text-xs sm:text-sm md:text-xs", CATEGORY_STYLES[category])}>
      <span className="h-px w-5 bg-current" aria-hidden="true" />
      {category}
    </span>
  )
}

function CardBody({ project }: { project: Project }) {
  return (
    <div className="flex flex-1 flex-col items-start gap-3 p-5 sm:p-6 md:p-7">
      <CategoryLabel category={project.category} />
      <h3 className="font-serif text-2xl leading-tight text-balance text-foreground md:text-3xl">
        {project.title}
      </h3>
      <p className="line-clamp-2 min-h-[2.85rem] max-w-md text-pretty text-sm font-light leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <span className="mt-auto flex items-center gap-1.5 pt-1 text-sm font-light text-foreground/70 transition-colors group-hover:text-foreground">
        View project
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </div>
  )
}

const CARD_CLASS =
  "group flex overflow-hidden rounded-sm border border-border bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"

const ROW_LAYOUTS = [
  "md:grid-cols-[35fr_65fr]",
  "md:grid-cols-2",
  "md:grid-cols-[65fr_35fr]",
] as const

/* Claude generated code to change scale of project preview images */

const PROJECT_IMAGE_STYLES: Record<string, {
  scale: number
  mobileScale?: number
  paddingTop: number
  transformOrigin: string
  mobileTransformOrigin?: string
}> = {
  "daily-jobs-digest": {
    scale: 1,
    paddingTop: 0,
    transformOrigin: "top center",
  },
  "benefits-platform": {
    scale: 1.2,
    mobileScale: 1,
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
  const mobileScale = imgStyle.mobileScale ?? imgStyle.scale
  const mobileTransformOrigin = imgStyle.mobileTransformOrigin ?? imgStyle.transformOrigin

  return (
    <Link href={`/projects/${project.slug}`} className={cn(CARD_CLASS, "h-[380px] flex-col sm:h-[420px]")}>
      <div
        className="box-border h-[190px] shrink-0 overflow-hidden relative transition-transform duration-500 group-hover:scale-[1.03] sm:h-[220px]"
        style={{
          paddingTop: `${imgStyle.paddingTop}px`,
          minHeight: "190px"
        }}
      >
       <img
        src={PROJECT_PREVIEW_IMAGES[project.slug]}
        alt=""
        className="[transform:scale(var(--img-scale))] [transform-origin:var(--img-origin)] sm:[transform:scale(var(--img-scale-sm))] sm:[transform-origin:var(--img-origin-sm)]"
        style={{
          "--img-scale": mobileScale,
          "--img-origin": mobileTransformOrigin,
          "--img-scale-sm": imgStyle.scale,
          "--img-origin-sm": imgStyle.transformOrigin,
          width: "100%",
          height: "auto",
          display: "block",
        } as React.CSSProperties}
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
    <section id="projects" className="border-t border-border px-6 py-16 sm:py-20 md:px-12 md:py-32">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-12">
          <h2 className="small-caps text-sm text-muted-foreground md:col-span-3">Projects</h2>
          <p className="font-serif text-xl leading-snug text-pretty text-foreground sm:text-2xl md:col-span-9 md:text-3xl lg:col-span-7 lg:text-4xl">
            Things I&apos;ve built, shipped, and figured out.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-6 sm:mt-12 md:mt-16">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className={cn("grid grid-cols-1 gap-4 sm:gap-6", ROW_LAYOUTS[rowIndex % ROW_LAYOUTS.length])}>
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
