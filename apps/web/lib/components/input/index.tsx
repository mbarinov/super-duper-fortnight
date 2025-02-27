import { InputHTMLAttributes, forwardRef } from "react";
import cn from "classnames";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center w-full", className)}>
        <input
          ref={ref}
          className="h-[40px] w-full rounded-[10px] px-[15px] py-[12px] bg-white border border-[#DFEAF2] text-[#718EBF] placeholder:text-[#718EBF]"
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
