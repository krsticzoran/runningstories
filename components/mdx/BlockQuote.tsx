interface BlockQuoteProps {
  text: string;
}

export function BlockQuote({ text }: BlockQuoteProps) {
  return (
    <blockquote className="my-10 pl-6 border-l-4 border-[#ddd] !font-instrument italic text-[22px] sm:text-[26px] leading-[34px] sm:leading-10 text-custom-dark">
      {text}
    </blockquote>
  );
}
