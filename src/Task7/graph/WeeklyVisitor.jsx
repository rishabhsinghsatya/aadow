import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { EllipsisVertical } from "lucide-react";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const WeeklyVisitor = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "New visitors",
        data: [600, 480, 360, 240, 120, 240, 360],
        backgroundColor: "rgba(74, 144, 226, 0.2)", // Light blue
        borderColor: "#6495ED",
        // pointBackgroundColor: "#4a90e2",
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
      },
      {
        label: "Returning visitors",
        data: [300, 240, 180, 240, 300, 420, 480],
        backgroundColor: "rgba(100, 149, 237, 0.2)", // Slightly different shade of blue
        borderColor: "#8728e2",
        // pointBackgroundColor: "#6495ED",
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 6,
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        grid: {
          color: "#e5e7eb", // Light gray for grid
        },
        ticks: {
          stepSize: 120, // Interval between values on the radial axis
          backdropColor: "transparent", // Removes the background box from behind the labels
        },
        suggestedMin: 0,
        suggestedMax: 600,
      },
    },
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-black font-semibold text-lg">Weekly Visitors</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <EllipsisVertical />
          </button>
        </div>
        <Radar data={data} options={options} />
        <div className="mt-4 flex justify-start space-x-4 text-sm">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-purple-700 rounded-full mr-2"></span>
            New visitors
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            Returning visitors
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyVisitor;
