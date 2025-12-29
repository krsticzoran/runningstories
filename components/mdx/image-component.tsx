import Image from "next/image";

interface ImageComponentProps {
  src: string;
  alt: string;
}

export function ImageComponent({ src, alt }: ImageComponentProps) {
  return (
    <div className="relative w-full my-8 aspect-3/2">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 100vw, 100vw"
      />
    </div>
  );
}
