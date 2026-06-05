import { enUS } from "@/content/en-US";
import { ptBR } from "@/content/pt-BR";
import type { Content, Locale } from "@/content/types";

export const contentByLocale: Record<Locale, Content> = {
  "en-US": enUS,
  "pt-BR": ptBR,
};
