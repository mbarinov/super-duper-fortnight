import { ReactNode } from "react";
import cn from "classnames";

interface BoxProps {
  children: ReactNode;
  className?: string;
}

export default function Box({ children, className }: BoxProps) {
  return (
    <div
      className={cn(
        "w-full md:py-9 md:px-6 p-5 md:rounded-[25px] bg-white",
        className
      )}
    >
      {children}
    </div>
  );
}
