import type { Content } from "@/content/types";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

type SelectedWorkProps = {
  content: Content["selectedWork"];
};

export function SelectedWork({ content }: SelectedWorkProps) {
  return (
    <section className="selected-work">
      <div className="container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          copy={content.copy}
        />
        <div className="work-grid">
          {content.items.map((item, index) => (
            <Card key={item.title} className="work-card" data-reveal>
              <span className="work-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
