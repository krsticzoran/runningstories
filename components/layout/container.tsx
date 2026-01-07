import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`px-5 sm:px-8 lg:px-[60px] xl:px-0 max-w-[1300px] w-full mx-auto ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
