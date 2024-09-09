import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the chart components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#4f46e5", // Tailwind Indigo-500
        backgroundColor: "rgba(79, 70, 229, 0.5)", // Transparent Indigo-500
        fill: true,
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: [50, 70, 60, 90, 66, 45, 30],
        borderColor: "#ef4444", // Tailwind Red-500
        backgroundColor: "rgba(239, 68, 68, 0.5)", // Transparent Red-500
        fill: true,
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the label in the chart
      },
      title: {
        display: true,
        // text: "Sales and Expenses Over Time",
      },
    },
  };

  return (
    <div className="w-full max-w-lg mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
