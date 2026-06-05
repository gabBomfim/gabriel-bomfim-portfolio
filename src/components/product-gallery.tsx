"use client";

import { useCallback, useState } from "react";

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

  return (
    <div className="gallery-shell" data-reveal>
      <div className="gallery-track" aria-label={gallery.ariaLabel}>
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
