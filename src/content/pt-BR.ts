import type { Content } from "@/content/types";

export const ptBR: Content = {
  locale: "pt-BR",
  theme: {
    switchToLight: "Mudar para modo claro",
    switchToDark: "Mudar para modo escuro",
  },
  nav: {
    work: "Projetos",
    experience: "Experiência",
    about: "Sobre",
    contact: "Contato",
    resume: "Baixar currículo",
  },
  hero: {
    role: "Senior Software Engineer",
    title: "Eu crio software que",
    titleAccent: "resolve problemas reais.",
    copy: "Engenheiro com foco em backend e mais de 5 anos de experiência construindo produtos SaaS, integrações corporativas e sistemas usados em fintech e cibersegurança.",
    location: "Baseado em Atibaia, São Paulo, Brasil.",
    availability: "Disponível para oportunidades remotas internacionais.",
    primaryCta: "Ver projetos",
    resumeCta: "Baixar currículo",
    noteTitle: "Backend primeiro. Visão de produto.",
    noteBody: "Do desenho do banco ao deploy.",
    technologies: [
      "PHP",
      "Laravel",
      "Symfony",
      "React",
      "MySQL",
      "Integrações",
      "SaaS",
    ],
    portraitAlt:
      "Gabriel Bomfim usando terno preto em um retrato profissional",
  },
  metrics: [
    {
      value: "5+",
      label: "Anos construindo software em produção",
    },
    {
      value: "01",
      label: "Produto SaaS criado de ponta a ponta",
    },
    {
      value: "360°",
      label: "Atuação em todo o ciclo do produto",
    },
    {
      value: "B2B",
      label: "Integrações corporativas em ambientes regulados",
    },
  ],
  featuredProduct: {
    eyebrow: "Produto em destaque",
    title: "Construído do zero.",
    sectionCopy:
      "Um produto real é mais do que um código-fonte. É um conjunto de decisões que precisam funcionar bem em produção.",
    name: "OrçaFast",
    description:
      "Uma plataforma SaaS que ajuda empresas de serviços a criar, enviar e acompanhar orçamentos profissionais. Construí o produto de ponta a ponta: banco de dados, backend, frontend, integrações, infraestrutura e deploy.",
    designCredit: "Design do produto por Gabriela.",
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
      "Sugestões de preço com Claude",
      "Arquitetura multi-tenant",
      "Rastreamento de visualização de orçamento",
    ],
    primaryCta: "Ver produto online",
    secondaryCta: "Criar conta grátis",
    logoAlt: "Logo da OrçaFast",
    desktopAlt: "Tela desktop do dashboard da OrçaFast",
  },
  gallery: {
    ariaLabel: "Capturas de tela do produto OrçaFast",
    openLabel: "Abrir captura de tela",
    closeLabel: "Fechar imagem da galeria",
    items: [
      {
        title: "Dashboard desktop",
        alt: "Tela desktop do dashboard da OrçaFast",
        src: "/images/orcafast/dashboard-desktop.png",
        kind: "desktop",
        width: 1917,
        height: 947,
      },
      {
        title: "Dashboard mobile",
        alt: "Tela mobile do dashboard da OrçaFast",
        src: "/images/orcafast/dashboard-mobile.png",
        kind: "mobile",
        width: 323,
        height: 700,
      },
      {
        title: "Clientes",
        alt: "Tela de clientes da OrçaFast",
        src: "/images/orcafast/clients-mobile.png",
        kind: "mobile",
        width: 322,
        height: 696,
      },
      {
        title: "Metas financeiras",
        alt: "Tela de metas financeiras da OrçaFast",
        src: "/images/orcafast/financial-goals-mobile.png",
        kind: "mobile",
        width: 323,
        height: 697,
      },
      {
        title: "Ranking da equipe",
        alt: "Tela de ranking da equipe da OrçaFast",
        src: "/images/orcafast/team-ranking-mobile.png",
        kind: "mobile",
        width: 322,
        height: 700,
      },
      {
        title: "Criar orçamento",
        alt: "Tela de criação de orçamento da OrçaFast",
        src: "/images/orcafast/create-quote-mobile.png",
        kind: "mobile",
        width: 322,
        height: 694,
      },
      {
        title: "Orçamento compartilhável",
        alt: "Tela de orçamento compartilhável da OrçaFast",
        src: "/images/orcafast/shared-quote-mobile.png",
        kind: "mobile",
        width: 323,
        height: 697,
      },
      {
        title: "Orçamento para download",
        alt: "Tela de orçamento para download da OrçaFast",
        src: "/images/orcafast/downloadable-quote-mobile.png",
        kind: "mobile",
        width: 322,
        height: 699,
      },
    ],
  },
  experience: {
    eyebrow: "Experiência",
    title: "Software para ambientes reais de operação.",
    copy: "Grande parte do meu trabalho viveu dentro de produtos em que confiabilidade, integrações e responsabilidade técnica importam.",
    items: [
      {
        period: "2022 — Presente",
        company: "Redbelt Security",
        description:
          "Construí e liderei integrações corporativas para um SaaS de cibersegurança usado em ambientes regulados.",
        details:
          "Atuei em backend, frontend, banco de dados, mobile, dashboards e módulos de GRC.",
        stack:
          "ServiceNow · TOPdesk · Jira · QRadar · Google SecOps · Microsoft 365 · Symfony",
      },
      {
        period: "2021 — 2022",
        company: "THR Softwares",
        description:
          "Construí sistemas financeiros, ferramentas de CRM e integrações que ajudaram clientes a automatizar rotinas de vendas e finanças.",
        details: "",
        stack: "PHP · Laravel · Vue.js · MySQL · Hotmart · Facebook",
      },
      {
        period: "2019 — 2021",
        company: "Holding RPX",
        description:
          "Construí sistemas para operações bancárias white-label, incluindo um fluxo de tickets que substituiu solicitações por e-mail por um processo de atendimento mais rápido e organizado.",
        details: "",
        stack: "PHP · Laravel · CodeIgniter",
      },
    ],
  },
  selectedWork: {
    eyebrow: "Trabalhos selecionados",
    title: "Projetos corporativos descritos sem expor sistemas privados.",
    copy: "Nem todo trabalho pode ser mostrado publicamente. Mesmo assim, o tipo de problema resolvido diz bastante.",
    items: [
      {
        title: "Ecossistema de integrações corporativas",
        description:
          "Conectei plataformas críticas para reduzir trabalho repetitivo e melhorar a experiência do cliente.",
      },
      {
        title: "Módulos de gestão de risco de segurança",
        description:
          "Construí funcionalidades para ambientes com forte demanda de conformidade, rastreabilidade e confiabilidade.",
      },
      {
        title: "Fluxo de atendimento ao cliente",
        description:
          "Substituí um processo baseado em e-mail por um sistema de tickets mais rápido para operar e acompanhar.",
      },
      {
        title: "Automação de vendas e finanças",
        description:
          "Construí ferramentas e integrações para fluxos de CRM, vendas e finanças usados por empresas reais.",
      },
    ],
  },
  about: {
    eyebrow: "Sobre",
    title: "Profundidade em backend com visão completa de produto.",
    paragraphs: [
      "Sou engenheiro de software baseado em Atibaia, São Paulo, Brasil.",
      "Minha base mais forte é em backend com PHP e Laravel, mas trabalho bem em todo o ciclo de vida de um produto.",
      "Gosto de entender o problema, desenhar o banco de dados, construir a interface, integrar serviços externos e colocar o produto em produção.",
      "Valorizo comunicação clara, decisões práticas e código que continua fácil de manter.",
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
        title: "Dados",
        items: "MySQL · PostgreSQL · Redis",
      },
      {
        title: "Entrega",
        items: "Docker · CI/CD · GitHub Actions",
      },
      {
        title: "Qualidade",
        items: "TDD · PHPUnit · Pest · SOLID",
      },
      {
        title: "IA aplicada",
        items: "Claude · OpenAI · RAG · pgvector",
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos construir algo útil.",
    copy: "Aberto a oportunidades remotas internacionais.",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
};
