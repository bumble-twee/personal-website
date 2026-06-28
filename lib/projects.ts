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
  liveUrl?: string
  liveLabel?: string
  liveCta?: string
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
      "A take-home exercise that I treated as a real product problem: design a benefits platform that makes complex, high-stakes financial decisions feel simple for the people using them.",
      "I started where the ambiguity was. Who actually uses this, what are they trying to do, and where does the current experience fail them? That shaped a clear point of view on what to build first and, just as importantly, what to leave out.",
      "The work spanned three artifacts: a written strategy that framed the problem and the bet, an interactive prototype that made the experience tangible, and a slide deck that told the story. The prototype is the part I'd point to first, because it turned a set of assumptions into something you could click through and pressure-test.",
      "The throughline was taking a regulated, complicated domain and making it legible. Clear states, honest defaults, and an interface that surfaces risk before it becomes a problem rather than after.",
    ],
    meta: [
      { label: "Context", value: "Staff PM exercise" },
      { label: "Artifacts", value: "Strategy, prototype, slide deck"},
    ],
    liveUrl: "https://benefits-case-study.vercel.app",
    liveLabel: "Live tool",
    liveCta: "Open Prototype ↗",
    images: [
      {
        src: "/benefits-platform/benefitsplatform.png",
        alt: "Daily Jobs Digest email screenshot",
        scale: 1,
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
      "Most rent-vs-buy calculators answer the wrong question. They compare a mortgage payment to rent and call it a day, which makes buying look obvious. The real question is what your money does over time, and that's the one I wanted to model honestly.",
      "This tool accounts for the things that actually move the answer: the opportunity cost of locking capital into a deposit, appreciation, maintenance, and the slow drag of transaction costs. It surfaces a real breakeven point rather than a feel-good monthly comparison.",
      "I scoped it tight on purpose. A handful of honest inputs, one clear breakeven chart, and nothing else. The discipline was deciding what to leave out, because a calculator that asks for thirty variables is one nobody finishes.",
      "It started as a tool for my own decision about buying in Chamonix. Building it forced me to get precise about the assumptions I was hand-waving past, which is the whole point of modeling a decision instead of just feeling it out.",
    ],
    meta: [
      { label: "Built with", value: "v0, Cursor, Next.js, Recharts" },
      { label: "Scope", value: "Single-purpose decision tool" },
    ],
    liveUrl: "https://wealth-app-rust.vercel.app/",
    liveLabel: "Live tool",
    liveCta: "Open Calculator ↗",
    images: [
      {
        src: "/buy-vs-rent/buyvsrent.png",
        alt: "Daily Jobs Digest email screenshot",
        scale: 1,
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
      "I wanted a portfolio that didn't look like a template, so I treated the build itself as a product exercise: a clear point of view, a tight scope, and a fast path from reference to shipped.",
      "The design direction was editorial restraint. One heavy serif statement, an off-white canvas, generous whitespace. I worked from a photography portfolio reference, broke it into the decisions that actually mattered (type hierarchy, image rhythm, where to spend attention), and discarded everything that didn't serve the read.",
      "The build ran on AI-native tools end to end. Design generated in v0, refined in code, deployed continuously through Vercel. The interesting work was the same as in any product: deciding what to cut, knowing when a layout was good enough to ship, and keeping the whole thing coherent as it grew.",
      "It's a small site by design. The goal was to demonstrate how I move from ambiguity to a shipped artifact, fast, opinionated, and using the tools that are reshaping how products get built.",
    ],
    meta: [
      { label: "Built with", value: "v0, Cursor, Next.js, Tailwind, Vercel" },
      { label: "Approach", value: "AI-native design and development" },
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
