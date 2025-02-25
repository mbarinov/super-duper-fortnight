import React, { ReactNode } from "react";

interface GridItemProps {
  title: string;
  actionTitle?: string;
  children: ReactNode;
}

export default function GridItem({
  title,
  actionTitle,
  children,
}: GridItemProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-header text-primary-secondary">{title}</h3>
        {actionTitle && (
          <button className="text-subheader text-primary-secondary hover:underline">
            {actionTitle}
          </button>
        )}
      </div>

      <div className="mt-4 md:mt-5">{children}</div>
    </div>
  );
}
