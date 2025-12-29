interface HighlightProps {
  text: string;
  variant?: "accent";
}

export function Highlight({ text, variant = "accent" }: HighlightProps) {
  const variants = {
    accent: " bg-custom-accent",
  };

  return (
    <span
      className={`${variants[variant]} px-1 text-lg sm:text-xl font-bold text-black leading-[22px] sm:leading-[25px]   `}
    >
      {text}
    </span>
  );
}
