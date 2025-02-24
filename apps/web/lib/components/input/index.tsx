import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import cn from "classnames";

import { SearchIcon } from "@repo/icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: string;
  rightIcon?: ReactNode;
  error?: boolean;
  className?: string;
}

const iconClasses = "flex items-center justify-center w-5 h-5";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ leftIcon, rightIcon, className, error, ...props }, ref) => {
    const LeftIconComponent =
      leftIcon === "search" ? <SearchIcon fill="#718EBF" /> : null;

    const inputClasses = cn(
      // Base styles
      "h-[50px] w-full rounded-full",
      "px-[25px] py-[15px]",
      "bg-background",

      // Typography
      "placeholder:text-gray-400",

      // Focus states
      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",

      // Transitions
      "transition-all duration-200",

      // Conditional styles
      error && "border-red-500 focus:ring-red-500",
      leftIcon && "pl-[60px]",
      rightIcon && "pr-[60px]",

      // Custom styles
      className
    );

    return (
      <div className="relative flex items-center">
        {LeftIconComponent && (
          <div
            className={cn(iconClasses, "absolute left-[25px] text-blue-accent")}
          >
            {LeftIconComponent}
          </div>
        )}

        <input ref={ref} className={inputClasses} {...props} />

        {rightIcon && (
          <div className={cn(iconClasses, "absolute right-[25px]")}>
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
