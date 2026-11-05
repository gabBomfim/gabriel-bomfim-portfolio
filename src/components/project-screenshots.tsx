"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/content/portfolio";
import type { Locale } from "@/content/types";
import { ImageModal } from "@/components/ui/image-modal";

export function ProjectScreenshots({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const close = useCallback(() => setExpanded(false), []);
  const pt = locale === "pt-BR";
  const image = project.images[selected];
  const title = `${project.name}: ${image.label[pt ? "pt" : "en"]}`;
  const enlarge = pt ? "Ampliar captura" : "Enlarge screenshot";
  return (
    <figure className={`project-captures art-${project.slug}`}>
      <div className="project-capture-frame">
        <div className="capture-window-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span className="mono">{project.name}</span>
        </div>
        <button
          type="button"
          className="capture-open"
          aria-label={`${enlarge}: ${title}`}
          title={enlarge}
          onClick={() => setExpanded(true)}
        >
          <Image
            key={image.src}
            src={image.src}
            alt={title}
            width={image.width}
            height={image.height}
            loading="lazy"
            sizes="(max-width: 760px) 90vw, 570px"
          />
          <span className="capture-enlarge" aria-hidden="true">
            ↗
          </span>
        </button>
      </div>
      <figcaption className="capture-caption">
        <span>{image.label[pt ? "pt" : "en"]}</span>
        <div
          className="capture-select"
          role="group"
          aria-label={
            pt ? `Capturas de ${project.name}` : `${project.name} screenshots`
          }
        >
          {project.images.map((capture, i) => (
            <button
              key={capture.src}
              type="button"
              aria-pressed={i === selected}
              aria-label={capture.label[pt ? "pt" : "en"]}
              title={capture.label[pt ? "pt" : "en"]}
              onClick={() => setSelected(i)}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </figcaption>
      {expanded &&
        createPortal(
          <ImageModal
            item={{
              src: image.src,
              width: image.width,
              height: image.height,
              title,
              alt: title,
              kind: "desktop",
            }}
            closeLabel={pt ? "Fechar captura" : "Close screenshot"}
            onClose={close}
          />,
          document.body,
        )}
    </figure>
  );
}
