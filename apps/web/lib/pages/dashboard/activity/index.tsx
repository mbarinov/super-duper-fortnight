"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { fetchTransactionData } from "@/lib/api/activity-chart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BlankSpace = () => (
  <div className="w-full h-[300px] bg-white flex items-center justify-center" />
);

const ActivityChart = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["transactionData"],
    queryFn: fetchTransactionData,
    refetchOnWindowFocus: false,
  });

  if (isLoading || !data) {
    return <BlankSpace />;
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Deposit",
        data: data.depositData,
        backgroundColor: "#396AFF",
        borderRadius: 6,
        maxBarThickness: 15,
      },
      {
        label: "Withdraw",
        data: data.withdrawData,
        backgroundColor: "#232323",
        borderRadius: 6,
        maxBarThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    borderSkipped: false as const,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: true,
        position: "top" as const,
        align: "end" as const,
        labels: {
          color: "#718EBF",
          usePointStyle: true,
          pointStyle: "circle" as const,
          boxWidth: 10,
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#232323",
        bodyColor: "#232323",
        borderColor: "rgba(113, 142, 191, 0.3)",
        borderWidth: 1,
        padding: 10,
        boxWidth: 8,
        boxHeight: 8,
        usePointStyle: true,
        boxPadding: 6,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#718EBF",
          maxTicksLimit: 10,
        },
        grid: {
          color: "#F3F3F5",
          drawBorder: true,
          lineWidth: 0.5,
        },
      },
      x: {
        ticks: {
          color: "#718EBF",
        },
        grid: {
          display: false,
          color: "#F3F3F5",
        },
      },
    },
  };

  return (
    <div className="w-full h-[300px]">
      <Bar data={chartData} options={options} />
    </div>
  );
};

const DynamicActivityChart = dynamic(() => Promise.resolve(ActivityChart), {
  ssr: false,
  loading: BlankSpace,
});

export default DynamicActivityChart;
