"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import type { GalleryItem } from "@/content/types";

type ImageModalProps = {
  item: GalleryItem | null;
  closeLabel: string;
  onClose: () => void;
};

export function ImageModal({ item, closeLabel, onClose }: ImageModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    closeButtonRef.current?.focus();
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  if (!item) {
    return null;
  }

  return (
    <div
      className="image-modal"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onMouseDown={onClose}
    >
      <button
        ref={closeButtonRef}
        className="modal-close"
        type="button"
        aria-label={closeLabel}
        onClick={onClose}
      >
        ×
      </button>
      <div
        className={`modal-frame modal-frame-${item.kind}`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
        />
      </div>
    </div>
  );
}
