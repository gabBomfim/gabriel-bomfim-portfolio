import Image from "next/image";

type MockupDesktopProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: "eager" | "lazy";
};

export function MockupDesktop({
  src,
  alt,
  width,
  height,
  loading = "lazy",
}: MockupDesktopProps) {
  return (
    <div className="mockup-desktop" aria-label={alt}>
      <div className="mockup-browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
      />
    </div>
  );
}
