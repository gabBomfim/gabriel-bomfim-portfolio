"use client";

import type { Content, Locale, Theme } from "@/content/types";
import { RESUME_EN_PATH } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";

type HeaderProps = {
  content: Content;
  theme: Theme;
  onToggleTheme: () => void;
  onSetLanguage: (locale: Locale) => void;
};

export function Header({
  content,
  theme,
  onToggleTheme,
  onSetLanguage,
}: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#top" aria-label="Gabriel Bomfim home">
          Gabriel<span>.</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">{content.nav.work}</a>
          <a href="#experience">{content.nav.experience}</a>
          <a href="#about">{content.nav.about}</a>
          <a href="#contact">{content.nav.contact}</a>
        </nav>
        <div className="nav-actions">
          <LanguageToggle
            locale={content.locale}
            onSelect={onSetLanguage}
          />
          <ThemeToggle
            theme={theme}
            lightLabel={content.theme.switchToLight}
            darkLabel={content.theme.switchToDark}
            onToggle={onToggleTheme}
          />
          <Button
            className="header-resume"
            href={RESUME_EN_PATH}
            download
            variant="primary"
          >
            {content.nav.resume}
          </Button>
        </div>
      </div>
    </header>
  );
}
