"use client";

import { useState } from "react";
import type { Locale } from "@/content/types";

const nodes = [
  {
    id: "frontend",
    title: "React",
    label: ["Product interface", "Interface do produto"],
    body: [
      "The interface presents state and collects intent. Business rules stay on the server.",
      "A interface apresenta o estado e recebe ações. As regras de negócio ficam no servidor.",
    ],
  },
  {
    id: "api",
    title: "Laravel / Symfony",
    label: ["API boundary", "Fronteira da API"],
    body: [
      "Validate requests, authorize access, and hand work to domain services. Keep HTTP concerns separate from business decisions.",
      "Validar requisições, autorizar acesso e encaminhar o trabalho aos serviços de domínio. Separar HTTP das decisões de negócio.",
    ],
  },
  {
    id: "auth",
    title: "Auth",
    label: ["Identity & permissions", "Identidade e permissões"],
    body: [
      "Enforce permissions and tenant boundaries on the backend. A hidden button is not an access control.",
      "Validar permissões e isolamento entre tenants no backend. Esconder um botão não é controle de acesso.",
    ],
  },
  {
    id: "jobs",
    title: "Redis / Jobs",
    label: ["Background processing", "Processamento assíncrono"],
    body: [
      "Move slower work out of the request path. Plan for retries and make repeated processing safe.",
      "Tirar tarefas lentas do caminho da requisição. Prever retentativas e tornar seguro o processamento repetido.",
    ],
  },
  {
    id: "domain",
    title: "Domain services",
    label: ["Business decisions", "Decisões de negócio"],
    body: [
      "Keep workflow rules explicit and testable. The domain coordinates changes without depending on the interface.",
      "Manter regras de fluxo explícitas e testáveis. O domínio coordena mudanças sem depender da interface.",
    ],
  },
  {
    id: "data",
    title: "MySQL / PostgreSQL",
    label: ["Persistent state", "Estado persistente"],
    body: [
      "Model relationships and protect consistency with transactions. Choose indexes around real access patterns.",
      "Modelar relacionamentos e proteger a consistência com transações. Escolher índices com base nos padrões reais de acesso.",
    ],
  },
  {
    id: "integrations",
    title: "External APIs",
    label: ["Enterprise integrations", "Integrações corporativas"],
    body: [
      "Treat external systems as unreliable boundaries. Use timeouts, clear mappings, and inspectable failures.",
      "Tratar sistemas externos como fronteiras sujeitas a falhas. Usar limites de tempo, mapeamentos claros e falhas rastreáveis.",
    ],
  },
  {
    id: "webhooks",
    title: "Webhooks",
    label: ["Incoming events", "Eventos recebidos"],
    body: [
      "Verify signatures and deduplicate events before changing state. Keep a delivery history for investigation.",
      "Verificar assinaturas e eliminar eventos duplicados antes de alterar o estado. Manter um histórico para investigação.",
    ],
  },
  {
    id: "monitoring",
    title: "Observability",
    label: ["Operational feedback", "Visibilidade operacional"],
    body: [
      "Follow the workflow through logs and useful metrics. Make failures understandable before they become support tickets.",
      "Acompanhar o fluxo com logs e métricas úteis. Tornar as falhas compreensíveis antes que virem chamados.",
    ],
  },
];
const edges = [
  [0, 1],
  [1, 2],
  [1, 4],
  [4, 3],
  [4, 5],
  [3, 6],
  [6, 7],
  [7, 4],
  [4, 8],
  [5, 8],
];

export function Architecture({ locale }: { locale: Locale }) {
  const [selected, setSelected] = useState(1);
  const lang = locale === "pt-BR" ? 1 : 0;
  const titles: Record<string, string> = lang
    ? {
        auth: "Autenticação",
        domain: "Serviços de domínio",
        integrations: "APIs externas",
        monitoring: "Observabilidade",
      }
    : {};
  const node = nodes[selected];
  const related = new Set([
    selected,
    ...edges.filter((edge) => edge.includes(selected)).flat(),
  ]);
  return (
    <div className="architecture">
      <div className="architecture-heading">
        <h3>{lang ? "Do pedido ao resultado." : "From request to result."}</h3>
        <span className="mono">
          {lang ? "SISTEMA CONCEITUAL" : "CONCEPTUAL SYSTEM"}
        </span>
      </div>
      <div
        className="architecture-map"
        role="group"
        aria-label={
          lang
            ? "Componentes de uma arquitetura conceitual"
            : "Conceptual architecture components"
        }
      >
        <svg
          className="architecture-lines"
          viewBox="0 0 900 390"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {edges.map(([from, to]) => {
            const x1 = 150 + (from % 3) * 300,
              y1 = 65 + Math.floor(from / 3) * 130,
              x2 = 150 + (to % 3) * 300,
              y2 = 65 + Math.floor(to / 3) * 130;
            return (
              <path
                key={`${from}-${to}`}
                d={`M${x1},${y1} C${x1},${(y1 + y2) / 2} ${x2},${(y1 + y2) / 2} ${x2},${y2}`}
                className={
                  from === selected || to === selected ? "connected" : ""
                }
              />
            );
          })}
        </svg>
        {nodes.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className="architecture-node"
            aria-pressed={i === selected}
            aria-describedby="architecture-detail"
            data-related={related.has(i)}
            onMouseEnter={() => setSelected(i)}
            onFocus={() => setSelected(i)}
            onClick={() => setSelected(i)}
          >
            <span className="node-index mono">0{i + 1}</span>
            <strong>{titles[item.id] ?? item.title}</strong>
            <span>{item.label[lang]}</span>
          </button>
        ))}
      </div>
      <div className="architecture-detail" id="architecture-detail">
        <div key={`${selected}-${locale}`}>
          <span className="mono accent">{node.label[lang]}</span>
          <h4>{titles[node.id] ?? node.title}</h4>
          <p>{node.body[lang]}</p>
        </div>
      </div>
    </div>
  );
}
