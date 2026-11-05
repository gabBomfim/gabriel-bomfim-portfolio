import type { Locale } from "@/content/types";

type VisualKind = "layers" | "security" | "property";

export function EditorialVisual({
  kind,
  locale,
}: {
  kind: VisualKind;
  locale: Locale;
}) {
  const pt = locale === "pt-BR";
  const captions = {
    layers: pt ? "CAMADAS DO PRODUTO" : "PRODUCT LAYERS",
    security: pt
      ? "INTEGRAÇÕES BIDIRECIONAIS · FLUXO CONCEITUAL"
      : "BIDIRECTIONAL INTEGRATIONS · CONCEPTUAL FLOW",
    property: pt
      ? "OPERAÇÃO IMOBILIÁRIA · FLUXO CONCEITUAL"
      : "REAL ESTATE OPERATIONS · CONCEPTUAL FLOW",
  };
  const labels = {
    layers: pt
      ? "React na interface, PHP no backend, bancos de dados e infraestrutura na base."
      : "React at the interface, PHP at the backend, and databases and infrastructure at the foundation.",
    security: pt
      ? "ServiceNow, Jira e TOPdesk trocam dados com o RIS para apoiar GRC e operações de segurança."
      : "ServiceNow, Jira, and TOPdesk exchange data with RIS to support GRC and security operations.",
    property: pt
      ? "Captação de clientes, CRM e gestão imobiliária."
      : "Lead acquisition, CRM, and property management.",
  };

  return (
    <figure className={`editorial-visual visual-${kind}`}>
      <svg
        viewBox={kind === "layers" ? "0 0 500 304" : "0 0 500 220"}
        role="img"
        aria-label={labels[kind]}
      >
        {kind === "layers" && <Layers pt={pt} />}
        {kind === "security" && <Security pt={pt} />}
        {kind === "property" && <Property pt={pt} />}
      </svg>
      <figcaption className="mono">{captions[kind]}</figcaption>
    </figure>
  );
}

function Layers({ pt }: { pt: boolean }) {
  const layers = [
    { label: pt ? "Interface" : "Interface", tech: "React", tone: "cyan" },
    { label: "Backend", tech: "PHP / Laravel / Symfony", tone: "green" },
    {
      label: pt ? "Dados e infraestrutura" : "Data & infrastructure",
      tech: "MySQL / PostgreSQL / Docker",
      tone: "amber",
    },
  ];
  return (
    <>
      <path
        className="visual-wire"
        d="M48 86v146m202-146v146M150 36v218"
        strokeDasharray="3 6"
      />
      {[...layers].reverse().map((layer, i) => {
        const y = 174 - i * 70;
        return (
          <g
            key={layer.label}
            className={`visual-layer visual-tone-${layer.tone}`}
            transform={`translate(0 ${y})`}
          >
            <path
              className="visual-plane-side"
              d="M48 42 150 76 252 42v13L150 90 48 55Z"
            />
            <path className="visual-plane" d="m48 42 102-35 102 35-102 34Z" />
            <path
              className="visual-line"
              d="m89 42 61-21 61 21-61 21Z"
              opacity=".44"
            />
            <path className="visual-line" d="M252 42h27l17-15h19" />
            <circle className="visual-dot" cx="315" cy="27" r="3" />
            <text className="visual-label" x="328" y="32">
              {layer.label}
            </text>
            <text className="visual-meta" x="328" y="52">
              {layer.tech}
            </text>
          </g>
        );
      })}
    </>
  );
}

function Security({ pt }: { pt: boolean }) {
  return (
    <g className="visual-tone-cyan">
      <path
        className="visual-line visual-signal"
        pathLength="1"
        d="M132 52h43l34 57h19M132 109h96m-96 57h43l34-57M309 109h36l20-40h22m-42 40 20 40h22"
      />
      <Packet route="M132 52H175L209 109H225" delay={0} />
      <Packet route="M225 109H209L175 166H132" delay={850} />
      <Packet route="M309 109H345L365 69H387" delay={420} />
      {["ServiceNow", "Jira", "TOPdesk"].map((name, i) => (
        <g key={name} transform={`translate(24 ${33 + i * 57})`}>
          <rect className="visual-node" width="108" height="38" rx="3" />
          <text className="visual-label" x="54" y="24" textAnchor="middle">
            {name}
          </text>
        </g>
      ))}
      <path
        className="visual-plane"
        d="m267 60 42 15v38c0 25-17 43-42 55-25-12-42-30-42-55V75Z"
      />
      <path className="visual-line" d="m253 105 10 10 18-19" />
      <text className="visual-label" x="267" y="141" textAnchor="middle">
        RIS
      </text>
      {[
        ["GRC", 50],
        [pt ? "Operações" : "Operations", 130],
      ].map(([label, y]) => (
        <g key={label} transform={`translate(387 ${y})`}>
          <rect className="visual-node" width="89" height="38" rx="3" />
          <text className="visual-label" x="44.5" y="24" textAnchor="middle">
            {label}
          </text>
        </g>
      ))}
    </g>
  );
}

function Property({ pt }: { pt: boolean }) {
  return (
    <g className="visual-tone-amber">
      <path
        className="visual-line visual-signal"
        pathLength="1"
        d="M121 102h62m-9-8 9 8-9 8m121-8h53m-9-8 9 8-9 8"
      />
      <Packet route="M121 102H183" delay={0} />
      <Packet route="M295 102H348" delay={760} />
      <rect
        className="visual-node"
        x="29"
        y="62"
        width="92"
        height="80"
        rx="3"
      />
      <circle className="visual-line" cx="75" cy="92" r="11" />
      <path className="visual-line" d="M54 125c0-24 42-24 42 0" />
      <rect
        className="visual-plane"
        x="184"
        y="53"
        width="111"
        height="98"
        rx="3"
      />
      <path className="visual-line" d="M203 77h73m-57 21h57m-57 20h57" />
      <circle className="visual-dot" cx="206" cy="98" r="3" />
      <circle className="visual-dot" cx="206" cy="118" r="3" />
      <path className="visual-plane" d="M349 60h121v88H349Z" />
      <path
        className="visual-line visual-detail"
        pathLength="1"
        d="M397 60v42h73m-121 13h66v33m0-33v-13m24-42v42"
      />
      <path
        className="visual-line"
        d="M360 72h24v20h-24Zm82 43h16v22h-16Z"
        opacity=".55"
      />
      <text className="visual-label" x="75" y="181" textAnchor="middle">
        {pt ? "Captação" : "Lead acquisition"}
      </text>
      <text className="visual-label" x="239.5" y="181" textAnchor="middle">
        CRM
      </text>
      <text className="visual-label" x="409.5" y="181" textAnchor="middle">
        {pt ? "Gestão imobiliária" : "Property management"}
      </text>
    </g>
  );
}

function Packet({ route, delay }: { route: string; delay: number }) {
  return (
    <circle
      className="visual-packet"
      r="3"
      opacity="0"
      aria-hidden="true"
      style={{ offsetPath: `path("${route}")`, animationDelay: `${delay}ms` }}
    />
  );
}
