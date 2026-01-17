import { cn } from "@/lib/utils";

interface HighlightProps {
  text: string;
  variant?: "accent";
  className?: string;
}

export function Highlight({
  text,
  variant = "accent",
  className = "",
}: HighlightProps) {
  const variants = {
    accent: " bg-custom-accent",
  };

  return (
    <span
      className={cn(
        variants[variant],
        "px-1 text-lg sm:text-xl font-bold text-black leading-[22px] sm:leading-[25px]",
        className
      )}
    >
      {text}
    </span>
  );
}
