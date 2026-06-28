export type ProjectImage = {
  src: string
  alt: string
  scale?: number
  paddingTop?: number
  transformOrigin?: string
}

export type ProjectCategory = "Project" | "Case Study" | "Tool"

export type Project = {
  slug: string
  category: ProjectCategory
  title: string
  description: string
  body: string[]
  meta: { label: string; value: string }[]
  images?: ProjectImage[]
}

export const PROJECTS: Project[] = [
  {
    slug: "daily-jobs-digest",
    category: "Tool",
    title: "Daily Jobs Digest",
    description: "An automated digest that surfaces the most relevant roles each morning.",
    body: [
      "A lightweight automation that aggregates, filters, and ranks job postings against a personal profile, delivering a focused daily shortlist instead of endless scrolling.",
      "The premise is simple: the right few roles, once a day, ranked by fit. No dashboards, no notifications, no infinite feed.",
      "Under the hood it pulls from multiple sources, dedupes, scores against a stored profile, and emails a clean digest every morning.",
    ],
    meta: [
      { label: "Built with", value: "Python, GitHub Actions, Gmail SMTP, Greenhouse/Lever/Ashby APIs" },
      { label: "Scope", value: "Personal tool, fully automated" },
    ],
    images: [
      {
        src: "/daily-jobs-digest/dailydigest.png",
        alt: "Daily Jobs Digest email screenshot",
        scale: 0.9,
        paddingTop: 0,
        transformOrigin: "top center",
      },
    ],
  },
  {
    slug: "benefits-platform",
    category: "Case Study",
    title: "Benefits Platform Case Study",
    description: "Designing a B2B2C benefits dashboard from discovery through launch.",
    body: [
      "A 0 to 1 product story covering discovery research, agile process design, and the architecture of a new B2B2C dashboard, built alongside a freshly assembled product organization.",
      "The work started with the messy middle: aligning stakeholders, mapping the real jobs of HR admins and their employees, and deciding what not to build for launch.",
      "The outcome was a dashboard that gave administrators a single view of enrollment and usage, while keeping the employee experience calm and legible.",
    ],
    meta: [
      { label: "Context", value: "Staff PM take-home exercise" },
      { label: "Methods", value: "User research, prototype, roadmap"},
    ],
    images: [
      {
        src: "/benefits-platform/benefitsplatform.png",
        alt: "Daily Jobs Digest email screenshot",
        scale: 0.9,
        paddingTop: 0,
        transformOrigin: "top center",
      },
    ],
  },
  {
    slug: "buy-vs-rent",
    category: "Tool",
    title: "Buy vs Rent Calculator",
    description: "An interactive model that weighs the true long-term cost of buying against renting.",
    body: [
      "A financial decision tool that accounts for down payments, appreciation, opportunity cost, and maintenance to surface the real breakeven point between buying and renting over time.",
      "Most calculators reduce the question to a monthly payment. This one models the full picture, including the return you forgo by tying up capital in a deposit, so the answer reflects the trade-off people actually face.",
      "Built as a focused single-purpose tool: a handful of honest inputs, a clear breakeven chart, and no noise.",
    ],
    meta: [
      { label: "Role", value: "Design & Build" },
      { label: "Type", value: "Interactive Tool" },
      { label: "Year", value: "2025" },
    ],
    images: [
      {
        src: "/buy-vs-rent/buyvsrent.png",
        alt: "Daily Jobs Digest email screenshot",
        scale: 0.9,
        paddingTop: 0,
        transformOrigin: "top center",
      },
    ],
  },
  {
    slug: "portfolio-website",
    category: "Project",
    title: "Portfolio Website Build",
    description: "This site, an editorial, typographically-led portfolio built with v0.",
    body: [
      "A study in restraint: heavy serif display type, an off-white textured canvas, and generous whitespace, designed and shipped using AI-assisted development tools.",
      "The goal was to make the typography do the work. One bold serif statement, sparse navigation, and room for the content to breathe.",
      "Built with Next.js and Tailwind, deployed on Vercel, and intentionally kept small.",
    ],
    meta: [
      { label: "Role", value: "Design & Build" },
      { label: "Type", value: "Website" },
      { label: "Year", value: "2026" },
    ],
    images: [
      {
        src: "/website-project/website.png",
        alt: "Daily Jobs Digest email screenshot",
        scale: 0.9,
        paddingTop: 0,
        transformOrigin: "top center",
      },
    ],
  },
]

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}
