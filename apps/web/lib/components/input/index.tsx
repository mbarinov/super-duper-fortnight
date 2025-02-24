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

    const wrapperClasses = cn("relative flex items-center w-full", className);

    const inputClasses = cn(
      "h-[40px] md:h-[50px] w-full rounded-full px-[25px] py-[15px] bg-background",
      "placeholder:text-gray-400",
      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
      "transition-all duration-200",
      {
        "border-red-500 focus:ring-red-500": error,
        "pl-[60px]": leftIcon,
        "pr-[60px]": rightIcon,
      }
    );

    return (
      <div className={wrapperClasses}>
        {LeftIconComponent && (
          <div
            className={cn(
              iconClasses,
              "absolute left-[25px] h-full text-blue-accent"
            )}
          >
            {LeftIconComponent}
          </div>
        )}

        <input ref={ref} className={inputClasses} {...props} />

        {rightIcon && (
          <div
            className={cn(
              iconClasses,
              "absolute h-full right-[25px] text-blue-accent"
            )}
          >
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
