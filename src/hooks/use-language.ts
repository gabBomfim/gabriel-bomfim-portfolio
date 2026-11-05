"use client";

import { useCallback, useEffect, useState } from "react";

import type { Locale } from "@/content/types";

const DEFAULT_LOCALE: Locale = "en-US";

export function useLanguage() {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    document.documentElement.lang = DEFAULT_LOCALE;
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    document.documentElement.lang = nextLocale;
  }, []);

  return {
    locale,
    setLocale,
  };
}
