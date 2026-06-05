import type { Content } from "@/content/types";

export const enUS: Content = {
  locale: "en-US",
  theme: {
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    resume: "Download Resume",
  },
  hero: {
    role: "Senior Software Engineer",
    title: "I build software that",
    titleAccent: "solves real problems.",
    copy: "Backend-focused engineer with 5+ years of experience building SaaS products, enterprise integrations, and systems used in fintech and cybersecurity.",
    location: "Based in Atibaia, São Paulo, Brazil.",
    availability: "Available for remote opportunities worldwide.",
    primaryCta: "View my work",
    resumeCta: "Download Resume",
    noteTitle: "Backend-first. Product-minded.",
    noteBody: "From database design to deployment.",
    technologies: [
      "PHP",
      "Laravel",
      "Symfony",
      "React",
      "MySQL",
      "Integrations",
      "SaaS",
    ],
    portraitAlt: "Gabriel Bomfim wearing a black suit in a professional portrait",
  },
  metrics: [
    {
      value: "5+",
      label: "Years building production software",
    },
    {
      value: "01",
      label: "SaaS product built end to end",
    },
    {
      value: "360°",
      label: "Full product lifecycle ownership",
    },
    {
      value: "B2B",
      label: "Enterprise integrations in regulated environments",
    },
  ],
  featuredProduct: {
    eyebrow: "Featured product",
    title: "Built from scratch.",
    sectionCopy:
      "A real product is more than a codebase. It is a set of decisions that need to work together in production.",
    name: "OrçaFast",
    description:
      "A SaaS platform that helps service businesses create, send, and track professional quotes. I built the product end to end: database, backend, frontend, integrations, infrastructure, and deployment.",
    designCredit: "Product design by Gabriela.",
    technologies: [
      "Laravel 12",
      "React",
      "MySQL",
      "Redis",
      "Docker",
      "CI/CD",
      "Stripe",
      "Resend",
      "Hetzner",
      "Claude-powered price suggestions",
      "Multi-tenant architecture",
      "Quote view tracking",
    ],
    primaryCta: "View live product",
    secondaryCta: "Create a free account",
    logoAlt: "OrçaFast logo",
    desktopAlt: "OrçaFast dashboard desktop screen",
  },
  gallery: {
    ariaLabel: "OrçaFast product screenshots",
    openLabel: "Open screenshot",
    closeLabel: "Close gallery image",
    items: [
      {
        title: "Dashboard desktop",
        alt: "Dashboard desktop screen from OrçaFast",
        src: "/images/orcafast/dashboard-desktop.png",
        kind: "desktop",
        width: 1917,
        height: 947,
      },
      {
        title: "Dashboard mobile",
        alt: "Mobile dashboard screen from OrçaFast",
        src: "/images/orcafast/dashboard-mobile.png",
        kind: "mobile",
        width: 323,
        height: 700,
      },
      {
        title: "Clients",
        alt: "Clients overview screen from OrçaFast",
        src: "/images/orcafast/clients-mobile.png",
        kind: "mobile",
        width: 322,
        height: 696,
      },
      {
        title: "Financial goals",
        alt: "Financial goals screen from OrçaFast",
        src: "/images/orcafast/financial-goals-mobile.png",
        kind: "mobile",
        width: 323,
        height: 697,
      },
      {
        title: "Team ranking",
        alt: "Team ranking screen from OrçaFast",
        src: "/images/orcafast/team-ranking-mobile.png",
        kind: "mobile",
        width: 322,
        height: 700,
      },
      {
        title: "Create quote",
        alt: "Quote creation screen from OrçaFast",
        src: "/images/orcafast/create-quote-mobile.png",
        kind: "mobile",
        width: 322,
        height: 694,
      },
      {
        title: "Shared quote",
        alt: "Shared quote screen from OrçaFast",
        src: "/images/orcafast/shared-quote-mobile.png",
        kind: "mobile",
        width: 323,
        height: 697,
      },
      {
        title: "Downloadable quote",
        alt: "Downloadable quote screen from OrçaFast",
        src: "/images/orcafast/downloadable-quote-mobile.png",
        kind: "mobile",
        width: 322,
        height: 699,
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Software for real operating environments.",
    copy: "Most of my work has lived inside products where reliability, integrations, and clear ownership matter.",
    items: [
      {
        period: "2022 — Present",
        company: "Redbelt Security",
        description:
          "Built and led enterprise integrations for a cybersecurity SaaS used in regulated environments.",
        details:
          "Worked across backend, frontend, database, mobile, dashboards, and GRC modules.",
        stack:
          "ServiceNow · TOPdesk · Jira · QRadar · Google SecOps · Microsoft 365 · Symfony",
      },
      {
        period: "2021 — 2022",
        company: "THR Softwares",
        description:
          "Built financial systems, CRM tools, and integrations that helped clients automate sales and finance workflows.",
        details: "",
        stack: "PHP · Laravel · Vue.js · MySQL · Hotmart · Facebook",
      },
      {
        period: "2019 — 2021",
        company: "Holding RPX",
        description:
          "Built systems for white-label banking operations, including a ticket workflow that replaced email-based customer requests with a faster and more organized support process.",
        details: "",
        stack: "PHP · Laravel · CodeIgniter",
      },
    ],
  },
  selectedWork: {
    eyebrow: "Selected work",
    title: "Corporate projects, described without exposing private systems.",
    copy: "Some work cannot be shown publicly. The shape of the problems still says a lot.",
    items: [
      {
        title: "Enterprise integration ecosystem",
        description:
          "Connected business-critical platforms to reduce repetitive work and improve customer experience.",
      },
      {
        title: "Security risk management modules",
        description:
          "Built product features for compliance-heavy environments where traceability and reliability are essential.",
      },
      {
        title: "Customer support workflow",
        description:
          "Replaced an email-based support process with a structured ticket system that made daily operations faster and easier to track.",
      },
      {
        title: "Sales and finance automation",
        description:
          "Built tools and integrations for CRM, sales, and finance workflows used by real businesses.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Backend depth with full product ownership.",
    paragraphs: [
      "I am a software engineer based in Atibaia, São Paulo, Brazil.",
      "My strongest background is in backend development with PHP and Laravel, but I am comfortable working across the full product lifecycle.",
      "I enjoy understanding the problem, designing the database, building the interface, integrating external services, and deploying the final product.",
      "I value clear communication, practical decisions, and code that remains easy to maintain.",
    ],
    skills: [
      {
        title: "Backend",
        items: "PHP · Laravel · Symfony · APIs",
      },
      {
        title: "Frontend",
        items: "React · TypeScript · Vue.js",
      },
      {
        title: "Data",
        items: "MySQL · PostgreSQL · Redis",
      },
      {
        title: "Delivery",
        items: "Docker · CI/CD · GitHub Actions",
      },
      {
        title: "Quality",
        items: "TDD · PHPUnit · Pest · SOLID",
      },
      {
        title: "Applied AI",
        items: "Claude · OpenAI · RAG · pgvector",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s build something useful.",
    copy: "Open to remote international opportunities.",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
};
