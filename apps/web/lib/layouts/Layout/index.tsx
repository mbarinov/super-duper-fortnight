import React from "react";

import Sidebar from "./sidebar";
import Header from "./header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};
