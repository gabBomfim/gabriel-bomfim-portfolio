"use client";

import type { Theme } from "@/content/types";

type ThemeToggleProps = {
  theme: Theme;
  lightLabel: string;
  darkLabel: string;
  onToggle: () => void;
};

export function ThemeToggle({
  theme,
  lightLabel,
  darkLabel,
  onToggle,
}: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      className="icon-button"
      type="button"
      aria-label={isDark ? lightLabel : darkLabel}
      onClick={onToggle}
    >
      <span aria-hidden="true">{isDark ? "☼" : "☾"}</span>
    </button>
  );
}
