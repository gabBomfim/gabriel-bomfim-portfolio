"use client";

import { useEffect } from "react";

import { contentByLocale } from "@/content";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "@/hooks/use-theme";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { FeaturedProduct } from "@/components/featured-product";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { SelectedWork } from "@/components/selected-work";

export function SiteShell() {
  const { locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const content = contentByLocale[locale];

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [locale]);

  return (
    <>
      <Header
        content={content}
        theme={theme}
        onToggleTheme={toggleTheme}
        onSetLanguage={setLocale}
      />
      <main>
        <Hero content={content.hero} />
        <Metrics metrics={content.metrics} />
        <FeaturedProduct content={content} />
        <SelectedWork content={content.selectedWork} />
        <Experience content={content.experience} />
        <About content={content.about} />
        <Contact content={content.contact} />
      </main>
    </>
  );
}
