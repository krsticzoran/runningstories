export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Ako je samo filename (bez putanje), vraćaj kao public sliku
  if (!src.includes("/") && !src.startsWith(".")) {
    return `/${src}?w=${width}&q=${quality || 75}`;
  }

  return `${src}?w=${width}&q=${quality || 75}`;
}
