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
      "Job hunting at a senior level means tracking around a hundred companies across four different applicant tracking systems, plus a handful of job boards. Doing that by hand is either a part-time job or something you quit after a week. I wanted the opposite. Nothing to check, no dashboard to open, no feed to scroll. Just the relevant roles, once a day, in my inbox.",
      "Every weekday at 7am, a Python script runs on GitHub Actions. It hits the APIs behind Greenhouse, Lever, and Ashby for my target companies, then pulls from Remotive, Wellfound, and LinkedIn. It filters by title, from senior IC through director, screens hard for France and EMEA remote eligibility, dedupes against everything it has already seen, and emails a clean digest. If there's nothing new it still sends, so silence always means something broke, not that the market went quiet.",
      "The build was less about the code than the judgment calls. Which ATS does each company actually use? Most of my first guesses were wrong. What counts as remote from France? Harder than it sounds. 'Remote, London' and 'Hybrid, Barcelona' both have to fail. How do you tell a genuinely new posting from one you saw yesterday? Each of those was a small product decision, and I tuned every one against real output instead of in the abstract.",
      "This is how I work. Define a sharp problem, scope it to what matters, build the smallest thing that solves it, then iterate against reality. I used Claude, Cursor, and v0 to move quickly, but the speed wasn't the point. The point was testing an idea the same day I had it.",
    ],
    meta: [
      { label: "Built with", value: "Python, GitHub Actions, Gmail SMTP, Greenhouse/Lever/Ashby APIs" },
      { label: "Scope", value: "Personal tool, fully automated" },
    ],
    images: [
      {
        src: "/daily-jobs-digest/dailydigest.png",
        alt: "Daily Jobs Digest email screenshot",
        scale: 1,
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
