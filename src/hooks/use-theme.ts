"use client";

import { useCallback, useEffect, useState } from "react";

import type { Theme } from "@/content/types";

const STORAGE_KEY = "gabriel-bomfim-theme";
const DEFAULT_THEME: Theme = "dark";

function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light";
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    const nextTheme = isTheme(storedTheme) ? storedTheme : DEFAULT_THEME;

    setThemeState(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}
