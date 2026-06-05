"use client";

import type { Locale } from "@/content/types";

type LanguageToggleProps = {
  locale: Locale;
  onSelect: (locale: Locale) => void;
};

export function LanguageToggle({ locale, onSelect }: LanguageToggleProps) {
  return (
    <div
      className="language-switch"
      role="group"
      aria-label={
        locale === "en-US" ? "Select language" : "Selecionar idioma"
      }
    >
      <button
        className="language-option"
        type="button"
        aria-pressed={locale === "en-US"}
        onClick={() => onSelect("en-US")}
      >
        EN-US
      </button>
      <button
        className="language-option"
        type="button"
        aria-pressed={locale === "pt-BR"}
        onClick={() => onSelect("pt-BR")}
      >
        PT-BR
      </button>
    </div>
  );
}
