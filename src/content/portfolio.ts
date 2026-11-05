export type ProjectCapture = {
  src: string;
  label: { en: string; pt: string };
  width: number;
  height: number;
};

function capture(
  project: string,
  file: string,
  en: string,
  pt: string,
): ProjectCapture {
  return {
    src: `/projects/${project}/${file}.webp`,
    label: { en, pt },
    width: 1600,
    height: 1000,
  };
}

export type Project = {
  name: string;
  slug: string;
  code: string;
  visual: string;
  url: string;
  description: string;
  highlights: string[];
  tech: string[];
  images: ProjectCapture[];
};
// Verified against public READMEs on November 4, 2026. Portfolio demonstrations.
export const projects: Project[] = [
  {
    name: "ControlScope",
    slug: "controlscope",
    code: "CS",
    visual: "GOVERN / IDENTIFY / PROTECT / DETECT / RESPOND / RECOVER",
    url: "https://github.com/gabBomfim/ControlScope",
    description:
      "A security posture dashboard for reviewing control coverage and deciding what to improve next.",
    highlights: [
      "Illustrative scoring isolated behind a strategy",
      "Validated control updates and function filters",
      "NIST CSF-inspired vocabulary, not a certification tool",
    ],
    tech: ["Laravel 13", "React", "TypeScript", "MySQL"],
    images: [
      capture(
        "controlscope",
        "01-overview",
        "Security posture overview",
        "Visão geral da postura de segurança",
      ),
      capture(
        "controlscope",
        "02-protect-filter",
        "Controls filtered by Protect",
        "Controles filtrados por Protect",
      ),
    ],
  },
  {
    name: "IncidentFlow",
    slug: "incidentflow",
    code: "IF",
    visual: "DECLARE → ASSIGN → RESPOND → RESOLVE",
    url: "https://github.com/gabBomfim/IncidentFlow",
    description:
      "An incident response workspace built around ownership, response targets, and a visible timeline.",
    highlights: [
      "Severity-specific SLA calculations",
      "Domain-validated status transitions",
      "Timeline of meaningful incident changes",
    ],
    tech: ["Laravel 13", "React 19", "TypeScript", "SQLite"],
    images: [
      capture(
        "incidentflow",
        "01-board",
        "Incident response board",
        "Quadro de resposta a incidentes",
      ),
      capture(
        "incidentflow",
        "02-incident-detail",
        "Incident details and response SLA",
        "Detalhes do incidente e SLA de resposta",
      ),
    ],
  },
  {
    name: "HookRelay",
    slug: "hookrelay",
    code: "HR",
    visual: "EVENT → QUEUE → SIGN → DELIVER → RETRY",
    url: "https://github.com/gabBomfim/HookRelay",
    description:
      "A webhook delivery workspace for inspecting signed events, failures, and retry history.",
    highlights: [
      "HMAC-SHA256 signing and idempotency keys",
      "Queued delivery with bounded retries",
      "Destination validation and strict HTTP timeouts",
    ],
    tech: ["Symfony 7.4", "PostgreSQL", "Messenger", "Redis"],
    images: [
      capture(
        "hookrelay",
        "01-overview",
        "Webhook delivery overview",
        "Visão geral das entregas de webhooks",
      ),
      capture(
        "hookrelay",
        "02-delivery-detail",
        "Delivery details",
        "Detalhes da entrega",
      ),
      capture(
        "hookrelay",
        "03-failed-retry-trace",
        "Failed delivery and retry history",
        "Entrega com falha e histórico de tentativas",
      ),
    ],
  },
  {
    name: "AccessLens",
    slug: "accesslens",
    code: "AL",
    visual: "ROLES / PERMISSIONS / POLICY / EVIDENCE",
    url: "https://github.com/gabBomfim/AccessLens",
    description:
      "An access review demonstration bringing grants, policy signals, and review decisions into one workspace.",
    highlights: [
      "Permission matrices and policy-aware risk signals",
      "Auditable review decisions",
      "Backend-enforced security administrator role",
    ],
    tech: ["TypeScript", "Docker", "Role-based access"],
    images: [
      capture(
        "accesslens",
        "01-overview",
        "Access review overview",
        "Visão geral das revisões de acesso",
      ),
      capture(
        "accesslens",
        "02-review-detail",
        "Access review details",
        "Detalhes da revisão de acesso",
      ),
    ],
  },
];
export const cases = [
  {
    category: "PROFESSIONAL EXPERIENCE / CYBERSECURITY",
    company: "REDBELT SECURITY · RIS",
    title: "Connecting the systems security teams depend on.",
    summary:
      "Enterprise integrations, GRC capabilities, and operational visibility inside a cybersecurity platform.",
    tech: [
      "Symfony",
      "REST APIs",
      "Background jobs",
      "Multi-tenancy",
      "Automated testing",
    ],
    details: [
      [
        "Context",
        "Security operations depend on information spread across enterprise platforms.",
      ],
      [
        "My contribution",
        "Designed and delivered bidirectional ServiceNow, Jira, and TOPdesk integrations. Contributed to GRC architecture and implementation across controls, risk, and maturity assessments.",
      ],
      [
        "Approach & outcome",
        "Connected workflows, synchronized information, and automated manual work. Built dashboards to help teams understand incidents and operations.",
      ],
    ],
  },
  {
    category: "PROFESSIONAL EXPERIENCE / BUSINESS SOFTWARE",
    company: "THR SOFTWARE",
    title: "Business workflows, built from the ground up.",
    summary:
      "Real estate management, CRM, financial systems, customer service, and digital signature projects.",
    tech: ["PHP", "Laravel", "Vue.js", "MySQL", "Facebook integrations"],
    url: "https://l7inteligenciaimobiliaria.com.br/",
    details: [
      [
        "Context",
        "Business teams needed software that matched their sales, finance, and customer workflows.",
      ],
      [
        "My contribution",
        "Developed a real estate management solution from scratch for L7 and worked on Facebook integrations for customer acquisition. Also contributed to THR Atendimento and THR Digital Signature.",
      ],
      [
        "Scope",
        "L7 is linked as a public business reference. This does not attribute its current website or all current platform features to my work.",
      ],
    ],
  },
];
export const career = [
  {
    date: "2022 – PRESENT",
    company: "Redbelt Security",
    role: "Software Engineer",
    domain: "Cybersecurity",
    copy: "Building and evolving RIS across enterprise integrations, GRC, incident management, and operational dashboards.",
  },
  {
    date: "2021 – 2022",
    company: "THR Software",
    role: "Software Engineer",
    domain: "Business systems",
    copy: "Business management, CRM, finance, real estate, customer service, and external integrations.",
  },
  {
    date: "2019 – 2021",
    company: "Holding RPX",
    role: "Software Engineer",
    domain: "Fintech",
    copy: "Business applications and white-label banking workflows. Helped replace email-based customer requests with a structured ticket process.",
  },
];
export const stack = [
  {
    title: "Backend",
    label: "BUSINESS LOGIC / INTEGRATIONS",
    headline: "The system behind the interface.",
    copy: "PHP, Laravel, and Symfony are my core tools for SaaS platforms, APIs, enterprise integrations, and background processing. Node.js extends that toolkit.",
    tools: [
      "PHP",
      "Laravel",
      "Symfony",
      "Node.js",
      "REST APIs",
      "Background jobs",
    ],
  },
  {
    title: "Frontend",
    label: "PRODUCT / INTERACTION",
    headline: "Make complex workflows understandable.",
    copy: "Interfaces that help people see state, take action, and understand what happened. I work across the product when the problem calls for it.",
    tools: ["React", "TypeScript", "JavaScript", "Vue.js"],
  },
  {
    title: "Data",
    label: "PERSISTENCE / STATE",
    headline: "Start with the shape of the data.",
    copy: "Relational models, tenant boundaries, and practical use of caching and queues support the workflows built on top.",
    tools: ["MySQL", "PostgreSQL", "Redis", "Multi-tenant systems"],
  },
  {
    title: "Engineering",
    label: "STRUCTURE / DELIVERY",
    headline: "Build it so it can keep changing.",
    copy: "Clear boundaries, automated tests, and repeatable delivery matter when maintaining existing systems as much as when starting new ones.",
    tools: [
      "Software architecture",
      "Docker",
      "CI/CD",
      "Automated testing",
      "PHPUnit",
      "GitHub Actions",
    ],
  },
  {
    title: "Cybersecurity",
    label: "DOMAIN / OPERATIONS",
    headline: "Software for security teams.",
    copy: "Experience building platform capabilities for risk, controls, operational visibility, and incident workflows. My role is software engineering within this domain.",
    tools: [
      "GRC",
      "NIST CSF",
      "ISO 27001",
      "Vulnerability management",
      "SOC",
      "Incident response",
    ],
  },
];
