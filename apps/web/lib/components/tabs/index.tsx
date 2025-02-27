"use client";

import React, { useState, useEffect } from "react";
import cn from "classnames";

interface Tab {
  label: string;
  render: () => React.ReactNode;
}

interface TabContentMap {
  [key: number]: React.ReactNode;
}

export default function Tabs({ tabs = [] as Tab[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const [loadedTabContent, setLoadedTabContent] = useState<TabContentMap>({});

  // When a tab is clicked, switch to it and load its content if not already loaded
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (!loadedTabContent[index]) {
      const content = tabs[index]?.render();
      if (content) {
        setLoadedTabContent((prev) => ({ ...prev, [index]: content }));
      }
    }
  };

  useEffect(() => {
    if (tabs.length && !loadedTabContent[activeTab]) {
      const content = tabs[activeTab]?.render();
      if (content) {
        setLoadedTabContent((prev) => ({ ...prev, [activeTab]: content }));
      }
    }
  }, [activeTab, loadedTabContent, tabs]);

  console.log({
    activeTab,
  });
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4 border-b border-[#F4F5F7]">
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <div key={index} className="relative overflow-hidden">
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={cn(
                  "py-2 px-4 text-body text-[#718EBF] outline-none focus:outline-none cursor-pointer",
                  {
                    "text-[#232323]": isActive,
                  }
                )}
              >
                {tab.label}
              </button>
              <div
                className={cn(
                  "h-[6px] absolute bottom-[-7px] transition-all duration-300 mx-2 left-0 right-0 bg-[#232323] rounded-full",
                  {
                    "!bottom-[-3px]": isActive,
                  }
                )}
              ></div>
            </div>
          );
        })}
      </div>

      <div className="p-4">{loadedTabContent[activeTab] || null}</div>
    </div>
  );
}
