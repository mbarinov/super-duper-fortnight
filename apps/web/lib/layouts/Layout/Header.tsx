import React from "react";
import { MenuIcon } from "@repo/icons";

import { Input } from "@/lib/components/input";
import { NAV_ITEMS } from "./navigation";

const Header = () => {
  return (
    <header className="relative">
      {/* Hidden checkbox for toggle control */}
      <input type="checkbox" id="nav-toggle" className="hidden peer" />

      <div className="flex items-center justify-between bg-white px-6 py-6 pb-5 relative z-10 min-h-[100px]">
        {/* Left Section: Mobile Toggle & Search */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* Mobile menu button - now a label */}
          <label
            htmlFor="nav-toggle"
            className="block text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <MenuIcon className="transition-transform duration-300 peer-checked:rotate-90" />
          </label>
        </div>

        <div className="text-title text-center">Soar Task</div>

        {/* Right Section: Avatar or Profile */}
        <div className="flex items-center space-x-4">
          <Input
            leftIcon="search"
            className="hidden md:block"
            type="search"
            placeholder="Search for something"
          />
          {/* You could add notification icons, etc. here */}
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-sm font-bold text-white">JD</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between md:hidden bg-white px-6 pb-5 relative z-10">
        <Input
          leftIcon="search"
          type="search"
          placeholder="Search for something"
        />
      </div>
      {/* Mobile Navigation Menu */}
      <nav
        className="md:hidden bg-white overflow-hidden max-h-0 peer-checked:max-h-[400px] transition-all duration-300 ease-in-out"
        aria-label="Mobile navigation"
      >
        <ul className="p-4 space-y-1">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="block py-2.5 px-4 text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
