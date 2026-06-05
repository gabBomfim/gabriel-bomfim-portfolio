"use client";

import { useCallback, useEffect, useState } from "react";

import type { Locale } from "@/content/types";

const STORAGE_KEY = "gabriel-bomfim-locale";
const DEFAULT_LOCALE: Locale = "en-US";
const LOCALES: Locale[] = ["en-US", "pt-BR"];

function isLocale(value: string | null): value is Locale {
  return value !== null && LOCALES.includes(value as Locale);
}

export function useLanguage() {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(STORAGE_KEY);
    const nextLocale = isLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE;

    setLocaleState(nextLocale);
    document.documentElement.lang = nextLocale;
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    document.documentElement.lang = nextLocale;
  }, []);

  return {
    locale,
    setLocale,
  };
}
