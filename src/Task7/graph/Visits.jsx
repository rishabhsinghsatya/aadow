import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Visits = () => {
  // Data for the doughnut chart
  const data = {
    labels: ["Chrome", "Safari", "Edge"],
    datasets: [
      {
        data: [60, 30, 10], // Chrome: 60%, Safari: 30%, Edge: 10%
        backgroundColor: ["#4285F4", "#FF7F0E", "#00A3FF"], // Colors for Chrome, Safari, Edge
        hoverBackgroundColor: ["#4285F4", "#FF7F0E", "#00A3FF"],
        borderWidth: 0,
        cutout: "70%", // Cutout for the doughnut
      },
    ],
  };

  const options = {
    rotation: -90, // Start angle to rotate the chart (half-circle effect)
    circumference: 180, // Display only half of the doughnut
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-xs">
      {/* Visits and Percent Change */}
      <div className="mb-4 text-center">
        <p className="text-gray-500">Visits</p>
        <h1 className="text-3xl font-bold">3,280</h1>
        <span className="text-green-500 text-sm">2.84% ↑</span>
      </div>

      {/* Semi-circle Doughnut Chart */}
      <div className="relative h-44">
        <Doughnut data={data} options={options} />
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-6 mt-4 text-sm">
        <div className="flex items-center">
          <span
            className="w-3 h-3 inline-block mr-1 rounded-full"
            style={{ backgroundColor: "#4285F4" }}
          ></span>
          <span className="text-gray-700">Chrome</span>
        </div>
        <div className="flex items-center">
          <span
            className="w-3 h-3 inline-block mr-1 rounded-full"
            style={{ backgroundColor: "#FF7F0E" }}
          ></span>
          <span className="text-gray-700">Safari</span>
        </div>
        <div className="flex items-center">
          <span
            className="w-3 h-3 inline-block mr-1 rounded-full"
            style={{ backgroundColor: "#00A3FF" }}
          ></span>
          <span className="text-gray-700">Edge</span>
        </div>
      </div>
    </div>
  );
};

export default Visits;
