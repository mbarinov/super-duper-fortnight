import Link from "next/link";
import React from "react";
import cn from "classnames";

interface IconButtonProps {
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  href,
  onClick,
  className,
  ariaLabel = "Icon Button",
}) => {
  const buttonContent = (
    <div
      className={cn(
        "w-[50px] h-[50px] flex items-center justify-center bg-[#F5F7FA] text-[#718EBF] hover:bg-[#E9EDF5] transition-colors duration-200 rounded-full cursor-pointer",
        className,
      )}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </div>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
};

export default IconButton;
