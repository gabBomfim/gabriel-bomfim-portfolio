import Image from "next/image";

type MockupPhoneProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: "eager" | "lazy";
};

export function MockupPhone({
  src,
  alt,
  width,
  height,
  loading = "lazy",
}: MockupPhoneProps) {
  return (
    <div className="mockup-phone" aria-label={alt}>
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
