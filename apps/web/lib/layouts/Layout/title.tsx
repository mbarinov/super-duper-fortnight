"use client";

import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./navigation";

export default function Title() {
  const pathname = usePathname();

  const currentNavItem = NAV_ITEMS.find((item) => item.href === pathname);

  return (
    <h1 className="text-title text-center">{currentNavItem?.label || ""}</h1>
  );
}
