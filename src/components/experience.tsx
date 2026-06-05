import type { Content } from "@/content/types";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

type ExperienceProps = {
  content: Content["experience"];
};

export function Experience({ content }: ExperienceProps) {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          copy={content.copy}
        />
        <div className="experience-list">
          {content.items.map((item) => (
            <Card key={item.company} className="experience-card" data-reveal>
              <p className="experience-period">{item.period}</p>
              <div>
                <h3>{item.company}</h3>
                <p>{item.description}</p>
                {item.details ? <p>{item.details}</p> : null}
              </div>
              <p className="experience-stack">{item.stack}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
