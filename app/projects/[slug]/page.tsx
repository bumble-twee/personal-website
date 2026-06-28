import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PROJECTS, getProject } from "@/lib/projects"

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project not found" }
  return {
    title: `${project.title} — Alena Delacruz`,
    description: project.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <main className="min-h-svh px-6 pb-24 pt-28 md:px-12 md:pt-32">
      <div className="mx-auto w-full max-w-screen-xl">
        <Link
          href="/#projects"
          className="small-caps inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back
        </Link>

        <header className="mt-12 border-b border-border pb-12 md:mt-16 md:pb-16">
          <span className="small-caps text-xs text-muted-foreground">{project.category}</span>
          <h1 className="mt-5 font-serif text-5xl font-bold leading-[0.95] tracking-tight text-balance text-foreground md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg font-light leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </header>

        <div className="mt-12 grid items-start gap-12 md:mt-16 md:grid-cols-12">
          <aside className="md:col-span-3">
            <dl className="flex flex-col gap-6">
              {project.meta.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <dt className="small-caps text-xs text-muted-foreground">{item.label}</dt>
                  <dd className="text-base font-light text-foreground">{item.value}</dd>
                </div>
              ))}

              {project.liveUrl && (
                <div className="flex flex-col gap-1">
                  <dt className="small-caps text-xs text-muted-foreground">
                    {project.liveLabel ?? "Live"}
                  </dt>
                  <dd>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-light text-foreground underline underline-offset-4 hover:opacity-60 transition-opacity"
                    >
                    {project.liveCta ?? "View ↗"}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </aside>
          
          <div className="flex flex-col gap-6 md:col-span-8 md:col-start-5">
            {project.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-pretty text-lg font-light leading-relaxed text-foreground/80 md:text-xl"
              >
                {paragraph}
              </p>
            ))}
            {project.images && project.images.length > 0 && (
              <div className="flex flex-col gap-6 mt-2">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-sm border border-border"
                    style={{ paddingTop: `${img.paddingTop ?? 0}px` }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{
                        transform: `scale(${img.scale ?? 1})`,
                        transformOrigin: img.transformOrigin ?? "top center",
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
