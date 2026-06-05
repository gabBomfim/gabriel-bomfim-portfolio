import type { Content } from "@/content/types";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

type AboutProps = {
  content: Content["about"];
};

export function About({ content }: AboutProps) {
  return (
    <section id="about">
      <div className="container">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <div className="about-grid">
          <Card className="about-copy" data-reveal>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Card>
          <div className="skill-grid" data-reveal>
            {content.skills.map((skill) => (
              <Card key={skill.title} className="skill-card">
                <h3>{skill.title}</h3>
                <p>{skill.items}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
