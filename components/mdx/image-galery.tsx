import Image from "next/image";

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function GalleryImage({ src, alt, className }: GalleryImageProps) {
  const finalClassName =
    className === "hidden" ? "hidden md:block xl:hidden" : className || "";

  return (
    <div className={`relative w-full aspect-3/2 ${finalClassName}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
    </div>
  );
}

interface ImageGalleryProps {
  children: React.ReactNode;
}

export function ImageGallery({ children }: ImageGalleryProps) {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {children}
    </div>
  );
}
