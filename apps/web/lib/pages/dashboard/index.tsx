"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// Lazy load components
const BalanceChart = dynamic(() => import("./balance"), {
  ssr: false,
  loading: () => <div className="w-full h-[300px] bg-gray-100 rounded-lg" />,
});

const CreditCard = dynamic(() => import("./cards/card"), {
  ssr: false,
  loading: () => (
    <div className="md:w-[350px] md:h-[235px] w-[265px] h-[170px]">
      <div className="w-full h-full rounded-[25px] bg-gray-200"></div>
    </div>
  ),
});

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Balance</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <BalanceChart />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Your Cards</h2>
          <div className="flex flex-col gap-4">
            <CreditCard
              cardId="3778"
              isPremium={true}
              onClick={() => console.log("Premium card clicked")}
            />

            <CreditCard
              cardId="4242"
              onClick={() => console.log("Regular card clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
