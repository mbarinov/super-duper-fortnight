// src/components/Layout/Sidebar.js
import React from "react";

import { TaskIcon } from "@repo/icons";
import { NAV_ITEMS } from "./navigation";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-[250px] bg-white border-r">
      <div className="p-4 h-[100px] text-hero flex items-center gap-2">
        <TaskIcon className="w-9 h-9" />
        Soar Task
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {NAV_ITEMS.map(({ label, href, icon }) => (
            <li key={href}>
              <a
                href={href}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md mx-2"
              >
                {/* You can add icons here if needed */}
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
