import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Ellipsis } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SalesFunnel = () => {
  // Data for the sales funnel chart
  const data = {
    labels: ["Total Market", "Prospects", "Leads", "Sales"],
    datasets: [
      {
        label: "Sales Funnel",
        data: [142901, 101020, 60314, 54280],
        fill: {
          target: "origin",
          above: (ctx) => {
            const idx = ctx.rawIndex;
            const colors = [
              "rgba(74, 144, 226, 0.2)",
              "rgba(67, 170, 139, 0.2)",
              "rgba(244, 208, 63, 0.2)",
              "rgba(232, 67, 147, 0.2)",
            ];
            return colors[idx];
          }, // Custom color for each area below the line
        },
        backgroundColor: "rgba(74, 144, 226, 0.2)", // Blue fill as default (will be overwritten by `fill`)
        borderColor: "#4a90e2", // Blue line
        tension: 0.4, // Smooth line
      },
    ],
  };

  // Chart options with vertical grid lines for each category
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // No legend
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
          borderDash: [5, 5], // Dotted line
        },
        ticks: {
          display: true,
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false, // Hide horizontal grid lines
        },
        ticks: {
          display: false, // Hide numbers on the y-axis
        },
      },
    },
  };

  return (
    <div className="flex justify-center">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-black font-semibold text-xl">Sales Funnel</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <Ellipsis />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 text-center mb-4">
          <div>
            <p className="text-gray-500 text-left">Total Market</p>
            <p className="text-3xl font-bold">142,901</p>
          </div>
          <div>
            <p className="text-gray-500 text-left">Prospects</p>
            <p className="text-3xl font-bold">101,020</p>
          </div>
          <div>
            <p className="text-gray-500 text-left">Leads</p>
            <p className="text-3xl font-bold">60,314</p>
          </div>
          <div>
            <p className="text-gray-500 text-left">Sales</p>
            <p className="text-3xl font-bold">54,280</p>
          </div>
        </div>

        <div className="h-32">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SalesFunnel;
