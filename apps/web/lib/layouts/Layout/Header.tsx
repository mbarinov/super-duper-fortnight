import React from "react";
import { MenuIcon, SettingsOutlineIcon, NotificationsIcon } from "@repo/icons";

import { Search } from "../../components/search";
import { IconButton } from "../../components/icon-button";
import Avatar from "../../components/avatar";
import { NAV_ITEMS } from "./navigation";
import Title from "./title";
import { SidebarIcon } from "./SidebarIcon";

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

        <Title />
        <Avatar className="md:hidden" src="/user-avatar.png" name="John Doe" />

        {/* Right Section: Avatar or Profile */}
        <div className="items-center gap-[30px] hidden md:flex">
          <Search
            leftIcon="search"
            className=""
            type="search"
            placeholder="Search for something"
          />
          <IconButton
            icon={<SettingsOutlineIcon size={25} />}
            href="/settings"
            ariaLabel="Settings"
          />

          <IconButton
            icon={<NotificationsIcon size={25} />}
            href="/notifications"
            ariaLabel="Notifications"
          />
          <Avatar src="/user-avatar.png" name="John Doe" />
        </div>
      </div>

      <div className="flex items-center justify-between md:hidden bg-white px-6 pb-5 relative z-10">
        <Search
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
    </header>
  );
};

export default Header;
