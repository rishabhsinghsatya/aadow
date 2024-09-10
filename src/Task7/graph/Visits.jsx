import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Visits = () => {
  // Data
  const data = {
    labels: ["Chrome", "Safari", "Edge"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#4285F4", "#FF7F0E", "#00A3FF"],
        hoverBackgroundColor: ["#4285F4", "#FF7F0E", "#00A3FF"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full max-w-xs">
        <div className="flex flex-col items-start mb-4 text-left w-full">
          <p className="text-gray-500">Visits</p>
          <div className="flex items-baseline">
            <p className="text-3xl font-bold">3,280</p>
            <span className="text-green-500 text-sm ml-2 font-semibold">
              2.84% ↑
            </span>
          </div>
        </div>

        <div className="relative h-44">
          <Doughnut data={data} options={options} />
        </div>

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
    </div>
  );
};

export default Visits;
