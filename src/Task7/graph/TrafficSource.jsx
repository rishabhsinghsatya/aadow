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
import { Ellipsis } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TrafficSource = () => {
  // Data
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
        max: 30000, // Set the maximum value on the Y-axis to 30,000
        ticks: {
          stepSize: 10000, // Display only 0k, 10k, 20k, 30k
          callback: function (value) {
            return `$${value / 1000}k`; // Show $k values on the y-axis
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-700 font-semibold text-lg">
            Traffic Source
          </h2>
          <button className="text-gray-400 hover:text-gray-600">
            <Ellipsis />
          </button>
        </div>
        <div className="mt-4 mb-4 flex justify-start space-x-4 text-sm">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Search Engine Traffic
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-sky-400 rounded-full mr-2"></span>
            Direct Traffic
          </div>
        </div>
        <div className="h-64">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TrafficSource;
