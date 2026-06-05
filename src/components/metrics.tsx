import type { Metric } from "@/content/types";

import { Card } from "@/components/ui/card";

type MetricsProps = {
  metrics: Metric[];
};

export function Metrics({ metrics }: MetricsProps) {
  return (
    <section className="metrics-section" aria-label="Professional metrics">
      <div className="container metrics-grid">
        {metrics.map((metric) => (
          <Card key={metric.value} className="metric-card" data-reveal>
            <strong>{metric.value}</strong>
            <p>{metric.label}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
