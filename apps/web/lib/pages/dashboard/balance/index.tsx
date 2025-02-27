"use client";

import React from "react";
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
import { Line } from "react-chartjs-2";

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

const MyChart: React.FC = () => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

  const chartData: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Balance",
        data: [250, 400, 750, 800, 450, 300, 650],
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

export default MyChart;
