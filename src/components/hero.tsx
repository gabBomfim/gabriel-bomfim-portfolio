import type { Content } from "@/content/types";
import Image from "next/image";
import { RESUME_EN_PATH } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";

type HeroProps = {
  content: Content["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy-block">
          <p className="eyebrow" data-reveal>
            {content.role}
          </p>
          <h1 id="hero-title" data-reveal>
            {content.title} <span>{content.titleAccent}</span>
          </h1>
          <p className="hero-copy" data-reveal>
            {content.copy}
          </p>
          <div className="hero-actions" data-reveal>
            <Button href="#work" variant="primary">
              {content.primaryCta}
            </Button>
            <Button href={RESUME_EN_PATH} download>
              {content.resumeCta}
            </Button>
          </div>
          <div className="hero-meta" data-reveal>
            <span>
              <i className="availability-dot" aria-hidden="true" />
              {content.availability}
            </span>
            <span>{content.location}</span>
          </div>
          <div className="tag-row" data-reveal>
            {content.technologies.map((technology) => (
              <Tag key={technology}>{technology}</Tag>
            ))}
          </div>
        </div>
        <div className="portrait-stage" data-reveal>
          <div className="blueprint-lines" aria-hidden="true" />
          <div className="portrait-card">
            <Image
              src="/images/portrait/gabriel-bomfim.jpg"
              alt={content.portraitAlt}
              width={2032}
              height={3048}
              loading="eager"
            />
          </div>
          <div className="floating-note">
            <strong>{content.noteTitle}</strong>
            <span>{content.noteBody}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
