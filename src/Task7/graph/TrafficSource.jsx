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

const TrafficSource = () => {
  // Data for the traffic source bar chart
  const data = {
    labels: ["Jan", "Mar", "May", "Jul", "Sep", "Dec"],
    datasets: [
      {
        label: "Search Engine Traffic",
        data: [30000, 20000, 25000, 22000, 24000, 29000],
        backgroundColor: "#4a90e2",
        barThickness: 10,
      },
      {
        label: "Direct Traffic",
        data: [20000, 15000, 18000, 17000, 16000, 21000],
        backgroundColor: "#00bfff",
        barThickness: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
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
          display: false, // Hide vertical grid lines
        },
        barPercentage: 0.8, // Adjust this value to increase/decrease the gap
        categoryPercentage: 0.5,
      },
      y: {
        grid: {
          color: "#e5e7eb", // Light gray horizontal grid lines
        },
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value / 1000}k`; // Show $k values on the y-axis
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-700 font-semibold text-lg">Traffic Source</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M6 10a2 2 0 114-0 2 2 0 01-4 0z" />
            <path
              fillRule="evenodd"
              d="M2 10a8 8 0 1116 0A8 8 0 012 10zm8-6a6 6 0 100 12A6 6 0 0010 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Bar Chart */}
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TrafficSource;
