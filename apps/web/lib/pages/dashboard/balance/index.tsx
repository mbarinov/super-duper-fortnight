"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { fetchBalanceData, BalanceData } from "@/lib/api/balances";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
  ScriptableContext,
  TooltipItem,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const ChartSkeleton = () => <div className="w-full rounded-lg"></div>;

const Balance: React.FC = () => {
  const { data: balanceData, isLoading } = useQuery({
    queryKey: ["balanceData"],
    queryFn: fetchBalanceData,
  });

  if (isLoading || !balanceData) {
    return <ChartSkeleton />;
  }

  return <BalanceChart data={balanceData} />;
};

// The actual chart component that receives data
const BalanceChart: React.FC<{ data: BalanceData[] }> = ({ data }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const labels = data.map((item) => item.month);
  const values = data.map((item) => item.balance);

  const chartData: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Balance",
        data: values,
        borderColor: "#1814F3",
        fill: true,
        tension: 0.4,
        backgroundColor: function (context: ScriptableContext<"line">) {
          const ctx = context.chart.ctx;
          const chartArea = context.chart.chartArea;
          if (!chartArea) {
            return undefined;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(24, 20, 243, 0.4)");
          gradient.addColorStop(1, "rgba(24, 20, 243, 0)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"line">) {
            const label = context.dataset.label || "";
            const value = context.parsed.y;
            return `${label}: ${formatter.format(value)}`;
          },
        },
      },
    },
    scales: {
      x: {
        border: {
          display: false,
          dash: [5, 5],
        },
        grid: {
          display: true,
          color: "#DFE5EE",
        },
        ticks: {
          color: "#718EBF",
        },
      },
      y: {
        border: {
          display: false,
          dash: [5, 5],
        },
        grid: {
          color: "#DFE5EE",
        },
        beginAtZero: false,
        ticks: {
          color: "#718EBF",
          maxTicksLimit: 6,
          callback: function (tickValue: number | string) {
            if (typeof tickValue === "number") {
              return formatter.format(tickValue);
            }
            return tickValue;
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

const LazyMyChart: React.FC = () => {
  return (
    <Suspense fallback={<ChartSkeleton />}>
      <Balance />
    </Suspense>
  );
};

const DynamicChart = dynamic(() => Promise.resolve(LazyMyChart), {
  ssr: false,
  loading: ChartSkeleton,
});

export default DynamicChart;
