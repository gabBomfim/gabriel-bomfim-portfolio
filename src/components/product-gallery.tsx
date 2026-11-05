"use client";

import { useCallback, useRef, useState } from "react";

import type { Content, GalleryItem } from "@/content/types";

import { ImageModal } from "@/components/ui/image-modal";
import { MockupDesktop } from "@/components/ui/mockup-desktop";
import { MockupPhone } from "@/components/ui/mockup-phone";

type ProductGalleryProps = {
  gallery: Content["gallery"];
};

export function ProductGallery({ gallery }: ProductGalleryProps) {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const closeModal = useCallback(() => setActiveItem(null), []);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="gallery-shell" data-reveal>
      <div className="gallery-controls">
        <button
          type="button"
          title={
            gallery.openLabel === "Open screenshot"
              ? "Previous screenshots"
              : "Capturas anteriores"
          }
          aria-label={
            gallery.openLabel === "Open screenshot"
              ? "Previous screenshots"
              : "Capturas anteriores"
          }
          onClick={() =>
            trackRef.current?.scrollBy({
              left: -trackRef.current.clientWidth * 0.7,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth",
            })
          }
        >
          ←
        </button>
        <button
          type="button"
          title={
            gallery.openLabel === "Open screenshot"
              ? "Next screenshots"
              : "Próximas capturas"
          }
          aria-label={
            gallery.openLabel === "Open screenshot"
              ? "Next screenshots"
              : "Próximas capturas"
          }
          onClick={() =>
            trackRef.current?.scrollBy({
              left: trackRef.current.clientWidth * 0.7,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth",
            })
          }
        >
          →
        </button>
      </div>
      <div
        ref={trackRef}
        className="gallery-track"
        aria-label={gallery.ariaLabel}
      >
        {gallery.items.map((item) => (
          <button
            className={`gallery-item gallery-item-${item.kind}`}
            key={item.src}
            type="button"
            aria-label={`${gallery.openLabel}: ${item.title}`}
            onClick={() => setActiveItem(item)}
          >
            {item.kind === "desktop" ? (
              <MockupDesktop
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            ) : (
              <MockupPhone
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            )}
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <ImageModal
        item={activeItem}
        closeLabel={gallery.closeLabel}
        onClose={closeModal}
      />
    </div>
  );
}
