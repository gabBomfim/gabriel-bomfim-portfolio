import type { Content } from "@/content/types";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";

import { Button } from "@/components/ui/button";

type ContactProps = {
  content: Content["contact"];
};

export function Contact({ content }: ContactProps) {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-band" data-reveal>
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2>{content.title}</h2>
            <p>{content.copy}</p>
          </div>
          <div className="contact-actions">
            <Button href={`mailto:${EMAIL}`} variant="primary">
              {content.email}
            </Button>
            <Button href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              {content.linkedin}
            </Button>
            <Button href={GITHUB_URL} target="_blank" rel="noreferrer">
              {content.github}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
