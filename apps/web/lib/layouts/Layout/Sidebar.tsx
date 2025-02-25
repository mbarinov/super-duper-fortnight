import React from "react";

import { TaskIcon } from "@repo/icons";
import { NAV_ITEMS } from "./navigation";
import { SidebarIcon } from "./SidebarIcon";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-[250px] bg-white border-r border-accent-border">
      <div className="p-4 h-[100px] text-hero flex items-center gap-2">
        <TaskIcon className="w-9 h-9" />
        Soar Task
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
            <li key={href}>
              <SidebarIcon label={label} href={href}>
                <Icon className="w-full h-full" />
              </SidebarIcon>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
