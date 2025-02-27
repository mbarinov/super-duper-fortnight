import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  const buttonClassName = cn(
    "text-button h-[40px] md:h-[50px] px-4 md:px-6 rounded-[8px] md:rounded-[15px] bg-[#232323] text-white py-3 md:py-4 w-full md:min-w-[150px] text-center",
    className
  );

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
