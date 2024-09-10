import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueChart = () => {
  // Data for the bar chart
  const data = {
    labels: ["Jan", "Mar", "May", "Jul", "Sep", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [30000, 15000, 25000, 18000, 12000, 28000],
        backgroundColor: "#4285F4",
        // borderRadius: 4,
        barThickness: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        barPercentage: 0.8,
        categoryPercentage: 0.5,
      },
      y: {
        grid: {
          color: "#e5e7eb",
        },
        beginAtZero: true,
        max: 30000,
        ticks: {
          stepSize: 10000,
          callback: function (value) {
            return `$${value / 1000}k`;
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-xs">
        <div className="flex flex-col items-start mb-4 text-left w-full">
          <p className="text-gray-500">Revenue</p>
          <div className="flex items-baseline">
            <p className="text-3xl font-bold">$120,210</p>
            <span className="text-green-500 text-sm ml-2 font-semibold">
              7.56% ↑
            </span>
          </div>
        </div>

        <div className="h-44">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
