"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classNames from "classnames";

interface SidebarIconProps {
  children: React.ReactNode;
  label: string;
  href: string;
}

export const SidebarIcon = ({ children, label, href }: SidebarIconProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const iconClassName = classNames(
    "w-6 h-6 transition-colors duration-300 ease-in-out hover:text-[#232323]",
    {
      "text-[#232323]": isActive,
      "text-[#B1B1B1]": !isActive,
    }
  );

  const labelClassName = classNames(
    "transition-colors duration-200 ease-in-out ml-6 hover:text-[#232323]",
    {
      "text-[#232323]": isActive,
      "text-[#B1B1B1]": !isActive,
    }
  );

  return (
    <Link
      href={href}
      className="flex items-center px-4 py-2 rounded-md mx-2 transition-colors duration-200 ease-in-out group relative"
    >
      <div className={iconClassName}>{children}</div>
      <span className={labelClassName}>{label}</span>
      <div
        className={classNames(
          "absolute left-0 top-0 w-[6px] transition-all duration-300 h-full ml-[-10px] bg-[#232323] rounded-full",
          {
            "!ml-[-14px]": !isActive,
          }
        )}
      />
    </Link>
  );
};
