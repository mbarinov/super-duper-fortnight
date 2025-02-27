import React from "react";

import Sidebar from "./sidebar";
import Header from "./header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen md:bg-background bg-white">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="md:w-[1100px] md:mx-auto md:my-5 px-6 md:px-0">
          {children}
        </main>
      </div>
    </div>
  );
};
