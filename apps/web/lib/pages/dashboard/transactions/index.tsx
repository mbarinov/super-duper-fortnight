"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "@/lib/api/transactions";
import { TransactionType } from "@/lib/api/transactions/types";
import TransactionSkeleton from "./transaction-skeleton";

const Transaction = dynamic(() => import("./transaction"), {
  ssr: true,
  loading: () => <TransactionSkeleton />,
});

function TransactionsLoading() {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 2 }).map((_, index) => (
        <TransactionSkeleton key={index} />
      ))}
    </div>
  );
}

function TransactionsError({ message }: { message: string }) {
  return (
    <div className="p-4 rounded-lg bg-red-50 text-red-600 border border-red-200">
      <p>Failed to load transactions: {message}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-2 text-sm underline"
      >
        Retry
      </button>
    </div>
  );
}

function TransactionsEmpty() {
  return <div className="p-4 text-gray-500">No transactions available</div>;
}

function TransactionsContent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <TransactionsLoading />;

  if (error) {
    return (
      <TransactionsError
        message={(error as Error).message || "Unknown error"}
      />
    );
  }

  const transactions = data || [];
  if (transactions.length === 0) return <TransactionsEmpty />;

  return (
    <div className="flex flex-col gap-2">
      {transactions.map((transaction: TransactionType) => (
        <Transaction key={transaction.id} {...transaction} />
      ))}
    </div>
  );
}

const Transactions = dynamic(() => Promise.resolve(TransactionsContent), {
  ssr: false,
});

export default function TransactionsWrapper() {
  return (
    <div className="flex-1 h-full md:bg-white overflow-y-auto scrollbar-hide">
      <Suspense fallback={<TransactionsLoading />}>
        <Transactions />
      </Suspense>
    </div>
  );
}
