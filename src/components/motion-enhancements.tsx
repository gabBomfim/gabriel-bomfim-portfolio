"use client";

import { useEffect } from "react";
import type { Locale } from "@/content/types";

export function MotionEnhancements({ locale }: { locale: Locale }) {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stop: (() => void) | undefined;
    const syncPreference = () => {
      stop?.();
      stop = preference.matches ? undefined : observeMotion();
    };
    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => {
      preference.removeEventListener("change", syncPreference);
      stop?.();
    };
  }, [locale]);
  return null;
}

function observeMotion() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(
      ".editorial-visual, .project-art, .case-details, .career-row, .hero-bottom",
    ),
  );
  const observer = new IntersectionObserver(
    (entries) => {
      for (const { target, intersectionRatio } of entries) {
        const element = target as HTMLElement;
        const inView = intersectionRatio >= 0.28;
        element.dataset.motionInView = String(inView);
        if (inView) element.dataset.motionSeen = "true";
      }
    },
    { threshold: 0.28 },
  );
  elements.forEach((element) => observer.observe(element));

  const careerObserver = new IntersectionObserver(
    (entries) => {
      for (const { target, isIntersecting } of entries) {
        (target as HTMLElement).dataset.motionCurrent = String(isIntersecting);
      }
    },
    { rootMargin: "-38% 0px -43% 0px" },
  );
  elements
    .filter((element) => element.matches(".career-row"))
    .forEach((row) => careerObserver.observe(row));

  const portrait = document.querySelector<HTMLElement>(".hero-portrait");
  const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  let frame = 0;
  let x = 0;
  let y = 0;
  const resetPortrait = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    portrait?.style.removeProperty("--portrait-x");
    portrait?.style.removeProperty("--portrait-y");
  };
  const movePortrait = (event: PointerEvent) => {
    if (!portrait || !pointer.matches || event.pointerType !== "mouse") return;
    x = event.clientX;
    y = event.clientY;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const rect = portrait.getBoundingClientRect();
      portrait.style.setProperty(
        "--portrait-x",
        `${(0.5 - (x - rect.left) / rect.width) * 10}px`,
      );
      portrait.style.setProperty(
        "--portrait-y",
        `${(0.5 - (y - rect.top) / rect.height) * 10}px`,
      );
    });
  };
  portrait?.addEventListener("pointermove", movePortrait, { passive: true });
  portrait?.addEventListener("pointerleave", resetPortrait);

  return () => {
    observer.disconnect();
    careerObserver.disconnect();
    portrait?.removeEventListener("pointermove", movePortrait);
    portrait?.removeEventListener("pointerleave", resetPortrait);
    resetPortrait();
    elements.forEach((element) => {
      delete element.dataset.motionInView;
      delete element.dataset.motionSeen;
      delete element.dataset.motionCurrent;
    });
  };
}
