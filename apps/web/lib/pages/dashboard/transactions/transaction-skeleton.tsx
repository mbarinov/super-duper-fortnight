import React from "react";

export default function TransactionSkeleton() {
  return (
    <div className="flex flex-row gap-4 items-center animate-pulse">
      <div className="w-[50px] h-[50px] rounded-full bg-slate-200"></div>

      <div className="flex flex-col gap-2 flex-1">
        <div className="h-4 bg-slate-200 rounded w-2/3"></div>
        <div className="h-3 bg-slate-200 rounded w-1/2"></div>
      </div>

      <div className="h-4 bg-slate-200 rounded w-20"></div>
    </div>
  );
}
