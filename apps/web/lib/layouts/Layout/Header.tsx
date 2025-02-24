import React from "react";
import { MenuIcon } from "@repo/icons";
import { NAV_ITEMS } from "./navigation";

const Header = () => {
  return (
    <header className="relative">
      {/* Hidden checkbox for toggle control */}
      <input type="checkbox" id="nav-toggle" className="hidden peer" />

      <div className="flex items-center justify-between bg-white p-4 shadow relative z-10">
        {/* Left Section: Mobile Toggle & Search */}
        <div className="flex items-center space-x-2">
          {/* Mobile menu button - now a label */}
          <label
            htmlFor="nav-toggle"
            className="md:hidden block text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <MenuIcon className="transition-transform duration-300 peer-checked:rotate-90" />
          </label>

          {/* Search bar - hidden on mobile, visible on md+ */}
          <input
            type="search"
            placeholder="Search for something"
            className="hidden md:block border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Right Section: Avatar or Profile */}
        <div className="flex items-center space-x-4">
          {/* You could add notification icons, etc. here */}
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-sm font-bold text-white">JD</span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className="md:hidden bg-white overflow-hidden max-h-0 peer-checked:max-h-[400px] transition-all duration-300 ease-in-out border-b"
        aria-label="Mobile navigation"
      >
        <ul className="p-4 space-y-1 border-t">
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
