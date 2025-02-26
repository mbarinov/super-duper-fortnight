"use client";

import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { fetchExpenseData, ExpenseData } from "@/lib/api/expenses";

ChartJS.register(ArcElement, Tooltip, Legend);

const defaultOptions: ChartOptions<"pie"> = {
  responsive: true,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: "#fff",
      font: {
        size: 14,
        weight: "bold",
      },
      anchor: "center",
      align: "center",
      formatter: (value, context) => {
        const label = context.chart.data.labels
          ? context.chart.data.labels[context.dataIndex]
          : "";
        return `${value}% ${label}`;
      },
    },
  },
};

const PieChart: React.FC = () => {
  const {
    data = [],
    isError,
    error,
    isLoading,
  } = useQuery<ExpenseData[], Error>({
    queryKey: ["expenses"],
    queryFn: fetchExpenseData,
  });

  const chartData: ChartData<"pie"> = useMemo(
    () => ({
      labels: data.map((item: ExpenseData) => item.category),
      datasets: [
        {
          label: "Spending",
          data: data.map((item: ExpenseData) => item.percentage),
          backgroundColor: data.map((item: ExpenseData) => item.color),
          borderColor: ["#FFFFFF"],
          borderWidth: 1,
          offset: 16,
          hoverOffset: 20,
        },
      ],
    }),
    [data]
  );

  if (isLoading) {
    return <div className=" h-[300px] rounded-lg animate-pulse" />;
  }

  if (isError) {
    console.error("Error fetching expense data:", error);
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-red-50 rounded-lg">
        <p className="text-red-500">Failed to load expense data</p>
      </div>
    );
  }

  return (
    <Pie
      data={chartData}
      options={defaultOptions}
      plugins={[ChartDataLabels]}
    />
  );
};

export const LazyExpenses = dynamic(() => Promise.resolve(PieChart), {
  loading: () => <div className=" rounded-lg h-[300px] animate-pulse" />,
  ssr: false,
});

export default LazyExpenses;
