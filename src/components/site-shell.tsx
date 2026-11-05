"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { contentByLocale } from "@/content";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/hooks/use-language";
import { translate, localize } from "@/content/translations";
import {
  projects as projectData,
  cases as caseData,
  stack as stackData,
  career as careerData,
} from "@/content/portfolio";
import { ProductGallery } from "@/components/product-gallery";
import { useTheme } from "@/hooks/use-theme";
import { usePortfolioMotion } from "@/hooks/use-portfolio-motion";
import { Architecture } from "@/components/architecture";
import { EditorialVisual } from "@/components/editorial-visual";
import { MotionEnhancements } from "@/components/motion-enhancements";
import { ProjectScreenshots } from "@/components/project-screenshots";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_EN_PATH,
} from "@/lib/constants";

export function SiteShell() {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useLanguage();
  const t = (text: string) => translate(text, locale);
  const projects = localize(projectData, locale),
    cases = localize(caseData, locale),
    stack = localize(stackData, locale),
    career = localize(careerData, locale);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStack, setActiveStack] = useState(0);
  const activeSection = usePortfolioMotion(locale);
  const [feedback, setFeedback] = useState("");
  useEffect(() => {
    if (!feedback) return;
    const timer = window.setTimeout(() => setFeedback(""), 2400);
    return () => window.clearTimeout(timer);
  }, [feedback]);
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);
  const resumeFeedback = () =>
    setFeedback(
      locale === "pt-BR"
        ? "Download do currículo solicitado."
        : "Resume download requested.",
    );
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setFeedback(locale === "pt-BR" ? "E-mail copiado." : "Email copied.");
    } catch {
      setFeedback(
        locale === "pt-BR"
          ? "Não foi possível copiar. Use o link de e-mail."
          : "Could not copy. Use the email link instead.",
      );
    }
  };
  return (
    <>
      <MotionEnhancements locale={locale} />
      <div className="reading-progress" aria-hidden="true" />
      <div
        className="feedback-toast"
        role="status"
        aria-live="polite"
        data-visible={Boolean(feedback)}
      >
        {feedback}
      </div>
      <a className="skip-link" href="#main">
        {t("Skip to content")}
      </a>
      <header className="site-header">
        <div className="container nav-shell">
          <a
            href="#top"
            className="brand"
            aria-label={t("Gabriel Bomfim home")}
          >
            <span className="monogram">
              {t("GB")}
              <span>.</span>
            </span>
            <span>{t("Gabriel Bomfim")}</span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {t(menuOpen ? "Close" : "Menu")}
          </button>
          <nav
            id="primary-nav"
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label={t("Primary navigation")}
          >
            {[
              ["work", "Work"],
              ["experience", "Experience"],
              ["stack", "Stack"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={
                  activeSection === id ||
                  (id === "work" &&
                    ["projects", "identity"].includes(activeSection))
                    ? "location"
                    : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                {t(label)}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <LanguageToggle locale={locale} onSelect={setLocale} />
            <button
              className="theme-control"
              onClick={toggleTheme}
              aria-label={
                locale === "pt-BR"
                  ? `Mudar para tema ${theme === "dark" ? "claro" : "escuro"}`
                  : `Switch to ${theme === "dark" ? "light" : "dark"} mode`
              }
              title={t("Toggle color theme")}
            >
              {theme === "dark" ? "☼" : "☾"}
            </button>
            <a
              className="resume-nav"
              href={RESUME_EN_PATH}
              download
              onClick={resumeFeedback}
            >
              {t("Resume ↓")}
            </a>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero container" id="top">
          <div className="hero-grid">
            <div className="hero-text">
              <p className="eyebrow">{t("Senior Software Engineer")}</p>
              <h1>
                <span className="hero-line">
                  <span>{t("Gabriel")}</span>
                </span>
                <span className="hero-line">
                  <span>
                    {t("Bomfim")}
                    <span className="accent">.</span>
                  </span>
                </span>
              </h1>
              <p className="hero-statement">
                {t("Complex systems.")}
                <br />
                <span>{t("Clear decisions.")}</span>
              </p>
              <p className="hero-copy">
                {t(
                  "I design and build reliable software, from backend architecture to the product people use. My work spans SaaS, fintech, and enterprise cybersecurity.",
                )}
              </p>
              <p className="hero-specialty mono">
                {t("PHP / LARAVEL / REACT / CYBERSECURITY")}
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  {t("Explore my work ↘")}
                </a>
                <a
                  className="text-link"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("GitHub ↗")}
                </a>
                <a
                  className="text-link"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("LinkedIn ↗")}
                </a>
              </div>
            </div>
            <figure className="hero-portrait">
              <Image
                src="/images/portrait/gabriel-bomfim.jpg"
                alt={t("Gabriel Bomfim in a black suit")}
                width={2032}
                height={3048}
                priority
                sizes="(max-width:760px) 280px, 340px"
              />
            </figure>
          </div>
          <div className="hero-bottom">
            <span>
              <strong>7+</strong>
              {t(" years building software")}
            </span>
            <span>
              <strong>{t("SaaS")}</strong>
              {t(" architecture to delivery")}
            </span>
            <span>
              <strong>{t("Security")}</strong>
              {t(" domain experience")}
            </span>
            <a href="#identity">{t("Scroll to discover ↓")}</a>
          </div>
        </section>
        <section className="section identity" id="identity">
          <div className="container section-grid identity-layout">
            <div>
              <p className="section-number">{t("01 / THE ENGINEER")}</p>
              <h2>
                {t("Backend roots.")}
                <br />
                <span className="muted">
                  {t("A wider view of the product.")}
                </span>
              </h2>
              <div className="identity-copy">
                <p>
                  {t(
                    "I started with business applications and white-label banking. Today, I work on enterprise cybersecurity software at Redbelt Security.",
                  )}
                </p>
                <p>
                  {t(
                    "My foundation is PHP, Laravel, and Symfony. I also work with React interfaces, databases, and infrastructure, understanding how each part connects.",
                  )}
                </p>
              </div>
            </div>
            <EditorialVisual kind="layers" locale={locale} />
          </div>
        </section>
        <section className="section" id="work">
          <div className="container">
            <SectionTitle
              number="02"
              label={t("SELECTED WORK")}
              title={t("The problems behind the code.")}
              copy={t("Professional experience and an independent product.")}
            />
            {cases.map((item, index) => (
              <article className="case-study" key={item.title}>
                <div className="case-top">
                  <span className="mono">{item.category}</span>
                  <span className="case-number">0{index + 1}</span>
                </div>
                <div className="case-grid">
                  <div>
                    <p className="eyebrow">{item.company}</p>
                    <h3>{item.title}</h3>
                    <p className="case-summary">{item.summary}</p>
                    <ul className="tech-list">
                      {item.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    {item.url && (
                      <a
                        className="text-link"
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("L7 public website ↗")}
                      </a>
                    )}
                    <EditorialVisual
                      kind={index === 0 ? "security" : "property"}
                      locale={locale}
                    />
                  </div>
                  <dl className="case-details">
                    {item.details.map(([label, text]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{text}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
            <article className="independent-product">
              <div className="case-top">
                <span className="mono">
                  {t("INDEPENDENT PRODUCT / COMPLETED")}
                </span>
              </div>
              <div className="case-grid">
                <div>
                  <h3 className="product-name">
                    {t("Orça")}
                    <span>{t("Fast")}</span>
                  </h3>
                  <p className="case-summary">
                    {t(
                      "From a blank repository to a complete quoting product.",
                    )}
                  </p>
                  <p>
                    {t(
                      "I built a multi-tenant B2B SaaS for service businesses to create, share, and track professional quotes.",
                    )}
                  </p>
                  <ul className="tech-list">
                    {[
                      "Laravel",
                      "React",
                      "MySQL",
                      "Redis",
                      "Docker",
                      "Stripe",
                    ].map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <dl className="case-details">
                  <div>
                    <dt>{t("Ownership")}</dt>
                    <dd>
                      {t(
                        "Product architecture, database, backend, frontend, integrations, and deployment.",
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt>{t("Engineering")}</dt>
                    <dd>
                      {t(
                        "Quote view tracking, team management, financial goals, Stripe webhooks, transactional email, and AI-assisted pricing suggestions.",
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt>{t("Outcome")}</dt>
                    <dd>
                      {t(
                        "The quote workflow brought into one system. Product design by Gabriela.",
                      )}
                    </dd>
                  </div>
                </dl>
              </div>
              <ProductGallery gallery={contentByLocale[locale].gallery} />
            </article>
          </div>
        </section>
        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionTitle
              number="03"
              label={t("ENGINEERING PROJECTS")}
              title={t("Small systems. Deliberate choices.")}
              copy={t(
                "Public portfolio demonstrations exploring security, reliability, and operational workflows.",
              )}
            />
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project" key={project.slug}>
                  {project.images.length > 0 ? (
                    <ProjectScreenshots project={project} locale={locale} />
                  ) : (
                    <div
                      className={`project-art art-${project.slug}`}
                      aria-hidden="true"
                    >
                      <span className="art-code">{project.code}</span>
                      <span className="art-name">{project.name}</span>
                      <span className="art-line">{project.visual}</span>
                    </div>
                  )}
                  <div className="project-heading">
                    <h3>{project.name}</h3>
                    <a
                      href={project.url}
                      aria-label={`${project.name} GitHub repository`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      ↗
                    </a>
                  </div>
                  <p>{project.description}</p>
                  <ul className="project-highlights">
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <ul className="tech-list">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <a
                    className="text-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("Explore repository ↗")}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section" id="experience">
          <div className="container">
            <SectionTitle
              number="04"
              label={t("EXPERIENCE")}
              title={t("Built over time.")}
              copy={t(
                "From business workflows to enterprise security platforms.",
              )}
            />
            <div className="timeline">
              {career.map((job, index) => (
                <article className="career-row" key={job.company}>
                  <div className="career-date mono">
                    {job.date}
                    <span>0{3 - index}</span>
                  </div>
                  <div>
                    <p className="career-role">{job.role}</p>
                    <h3>{job.company}</h3>
                    <p>{job.copy}</p>
                  </div>
                  <span className="career-domain">
                    <span className="career-event mono">
                      {
                        [
                          "security.platforms",
                          "business.systems",
                          "career.started",
                        ][index]
                      }
                    </span>
                    {job.domain}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section stack-section" id="stack">
          <div className="container">
            <SectionTitle
              number="05"
              label={t("ENGINEERING STACK")}
              title={t("Tools with a purpose.")}
              copy={t(
                "The choices depend on the problem. These are the tools and domains I work with.",
              )}
            />
            <Architecture locale={locale} />
            <div className="stack-layout">
              <div
                className="stack-tabs"
                role="tablist"
                aria-label={t("Engineering disciplines")}
                aria-orientation="vertical"
              >
                {stack.map((group, i) => (
                  <button
                    key={group.title}
                    role="tab"
                    id={`stack-tab-${i}`}
                    aria-controls="stack-panel"
                    aria-selected={i === activeStack}
                    tabIndex={i === activeStack ? 0 : -1}
                    onClick={() => setActiveStack(i)}
                    onKeyDown={(event) => {
                      if (
                        ["ArrowDown", "ArrowUp", "Home", "End"].includes(
                          event.key,
                        )
                      ) {
                        event.preventDefault();
                        const next =
                          event.key === "Home"
                            ? 0
                            : event.key === "End"
                              ? stack.length - 1
                              : (i +
                                  (event.key === "ArrowDown"
                                    ? 1
                                    : stack.length - 1)) %
                                stack.length;
                        setActiveStack(next);
                        document.getElementById(`stack-tab-${next}`)?.focus();
                      }
                    }}
                  >
                    <span className="mono">0{i + 1}</span>
                    {group.title}
                    <span aria-hidden="true">↗</span>
                  </button>
                ))}
              </div>
              <div
                className="stack-panel"
                key={`${activeStack}-${locale}`}
                role="tabpanel"
                id="stack-panel"
                aria-labelledby={`stack-tab-${activeStack}`}
                tabIndex={0}
              >
                <span className="mono accent">{stack[activeStack].label}</span>
                <h3>{stack[activeStack].headline}</h3>
                <p>{stack[activeStack].copy}</p>
                <ul>
                  {stack[activeStack].tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="about">
          <div className="container section-grid">
            <p className="section-number">{t("06 / HOW I WORK")}</p>
            <div>
              <h2>{t("I stay with the problem.")}</h2>
              <div className="story-copy">
                <p>
                  {t(
                    "When something is unfamiliar, I investigate. I trace the workflow, learn what I need, and work toward a practical solution.",
                  )}
                </p>
                <p>
                  {t(
                    "That approach has helped me connect enterprise platforms, work through GRC requirements, and build an independent product.",
                  )}
                </p>
                <p>
                  {t(
                    "I care about what happens after the first release: code another engineer can follow, decisions that have a reason, and systems that can keep evolving.",
                  )}
                </p>
              </div>
              <a
                className="text-link"
                href={RESUME_EN_PATH}
                download
                onClick={resumeFeedback}
              >
                {t("Read my Resume ↓")}
              </a>
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="container">
            <p className="section-number">{t("07 / LET'S TALK")}</p>
            <h2>
              {t("Have a difficult")}
              <br />
              {t("problem to solve")}
              <span className="accent">?</span>
            </h2>
            <p>
              {t("Let's talk about the system, the team, and what comes next.")}
            </p>
            <a className="contact-email" href={`mailto:${EMAIL}`}>
              {EMAIL} <span aria-hidden="true">↗</span>
            </a>
            <button className="copy-email" type="button" onClick={copyEmail}>
              {locale === "pt-BR" ? "Copiar e-mail" : "Copy email"}{" "}
              <span aria-hidden="true">⧉</span>
            </button>
            <div className="contact-bottom">
              <span>{t("Gabriel Bomfim / Brazil")}</span>
              <div>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                  {t("GitHub ↗")}
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                  {t("LinkedIn ↗")}
                </a>
                <a href={RESUME_EN_PATH} download onClick={resumeFeedback}>
                  {t("Resume ↓")}
                </a>
              </div>
              <a href="#top">{t("Back to top ↑")}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
function SectionTitle({
  number,
  label,
  title,
  copy,
}: {
  number: string;
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-title">
      <p className="section-number">
        {number} / {label}
      </p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}
