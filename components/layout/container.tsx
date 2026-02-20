import { ReactNode, ElementType } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`px-5 sm:px-8 lg:px-[60px] xl:px-0 max-w-[1300px] w-full mx-auto ${
        className ?? ""
      }`}
    >
      {children}
    </Component>
  );
}
