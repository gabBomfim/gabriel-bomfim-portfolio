"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/content/types";

export function usePortfolioMotion(locale: Locale) {
  const [activeSection, setActiveSection] = useState("top");
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section-title, .section-grid, .case-study, .independent-product, .project, .career-row, .stack-layout, .architecture, .contact-section h2",
      ),
    );
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section[id]"),
    );
    const timeline = document.querySelector<HTMLElement>(".timeline");
    let frame = 0;
    let offsets: number[] = [];
    let total = 1;
    let timelineTop = 0;
    let timelineHeight = 1;
    const measure = () => {
      offsets = sections.map(
        (section) => section.getBoundingClientRect().top + window.scrollY,
      );
      total = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      if (timeline) {
        timelineTop = timeline.getBoundingClientRect().top + window.scrollY;
        timelineHeight = Math.max(1, timeline.offsetHeight);
      }
    };
    const paint = () => {
      frame = 0;
      const y = window.scrollY;
      document.documentElement.style.setProperty(
        "--reading-progress",
        String(Math.min(1, y / total)),
      );
      timeline?.style.setProperty(
        "--timeline-progress",
        String(
          Math.max(
            0,
            Math.min(
              1,
              (y + window.innerHeight * 0.65 - timelineTop) / timelineHeight,
            ),
          ),
        ),
      );
      const current = sections.reduce(
        (id, section, index) =>
          offsets[index] <= y + window.innerHeight * 0.3 ? section.id : id,
        "top",
      );
      setActiveSection(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const resize = new ResizeObserver(() => {
      measure();
      onScroll();
    });
    resize.observe(document.body);
    measure();
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -24px 0px" },
    );
    const revealAll = () => {
      observer.disconnect();
      targets.forEach((element) => element.classList.remove("reveal-pending"));
    };
    if (!preference.matches)
      targets.forEach((element, index) => {
        element.classList.add("motion-reveal");
        element.style.setProperty(
          "--reveal-delay",
          `${element.classList.contains("project") ? (index % 2) * 90 : 0}ms`,
        );
        if (element.getBoundingClientRect().top > window.innerHeight - 24) {
          element.classList.add("reveal-pending");
          observer.observe(element);
        }
      });
    const onPreference = () => {
      if (preference.matches) revealAll();
    };
    preference.addEventListener("change", onPreference);
    return () => {
      window.removeEventListener("scroll", onScroll);
      preference.removeEventListener("change", onPreference);
      cancelAnimationFrame(frame);
      resize.disconnect();
      revealAll();
      document.documentElement.style.removeProperty("--reading-progress");
    };
  }, [locale]);
  return activeSection;
}
