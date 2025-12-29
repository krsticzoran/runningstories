interface BlockQuoteProps {
  text: string;
  border?: boolean;
}

export function BlockQuote({ text, border = false }: BlockQuoteProps) {
  return (
    <blockquote
      className={`
          my-10
          ${border ? "border-l-4 border-[#ddd]  pl-6" : ""} 
          !font-instrument italic text-[22px] sm:text-[26px] leading-[34px] sm:leading-10 text-custom-dark
        `}
    >
      {text}
    </blockquote>
  );
}
