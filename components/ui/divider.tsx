type DividerProps = {
  className?: string;
};

export default function Divider({ className }: DividerProps) {
  return (
    <div className={`flex justify-center w-full my-[60px] ${className ?? ""}`}>
      <div className="max-w-[1300px] px-5 sm:px-8 lg:px-[60px] xl:px-0  w-full">
        <div className="h-0.5 w-full bg-[#ddd]" />
      </div>
    </div>
  );
}
