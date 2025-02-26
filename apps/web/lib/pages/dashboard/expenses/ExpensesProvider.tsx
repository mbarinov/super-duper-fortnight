"use client";

import React from "react";
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Dynamically import the PieChart component with next/dynamic
const PieChart = dynamic(() => import("./index"), {
  loading: () => (
    <div className="w-full h-[200px] bg-gray-100 rounded-lg animate-pulse" />
  ),
  ssr: false, // Disable server-side rendering for chart components that rely on browser APIs
});

/**
 * Creates a configured QueryClient instance
 */
const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
      },
    },
  });

/**
 * ExpensesProvider component that provides React Query context to expense components
 * This allows for data fetching, caching, and synchronization along with lazy-loading
 */
const ExpensesProvider: React.FC = () => {
  // Create a new QueryClient instance for this component
  const [queryClient] = React.useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <PieChart />
    </QueryClientProvider>
  );
};

export default ExpensesProvider;
