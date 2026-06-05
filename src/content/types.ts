export type Locale = "en-US" | "pt-BR";
export type Theme = "dark" | "light";

export type Metric = {
  value: string;
  label: string;
};

export type ExperienceItem = {
  period: string;
  company: string;
  description: string;
  details: string;
  stack: string;
};

export type WorkItem = {
  title: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  items: string;
};

export type GalleryItem = {
  title: string;
  alt: string;
  src: string;
  kind: "desktop" | "mobile";
  width: number;
  height: number;
};

export type Content = {
  locale: Locale;
  theme: {
    switchToLight: string;
    switchToDark: string;
  };
  nav: {
    work: string;
    experience: string;
    about: string;
    contact: string;
    resume: string;
  };
  hero: {
    role: string;
    title: string;
    titleAccent: string;
    copy: string;
    location: string;
    availability: string;
    primaryCta: string;
    resumeCta: string;
    noteTitle: string;
    noteBody: string;
    technologies: string[];
    portraitAlt: string;
  };
  metrics: Metric[];
  featuredProduct: {
    eyebrow: string;
    title: string;
    sectionCopy: string;
    name: string;
    description: string;
    designCredit: string;
    technologies: string[];
    primaryCta: string;
    secondaryCta: string;
    logoAlt: string;
    desktopAlt: string;
  };
  gallery: {
    ariaLabel: string;
    openLabel: string;
    closeLabel: string;
    items: GalleryItem[];
  };
  experience: {
    eyebrow: string;
    title: string;
    copy: string;
    items: ExperienceItem[];
  };
  selectedWork: {
    eyebrow: string;
    title: string;
    copy: string;
    items: WorkItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    skills: SkillGroup[];
  };
  contact: {
    eyebrow: string;
    title: string;
    copy: string;
    email: string;
    linkedin: string;
    github: string;
  };
};
