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
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GrossVolume = () => {
  const grossVolumeData = {
    labels: ["0 am", "6 am", "12 pm", "6 pm", "12 am"],
    datasets: [
      {
        label: "Today",
        data: [0, 20000, 45000, 64000, 72000],
        borderColor: "#4A90E2",
        backgroundColor: "rgba(74, 144, 226, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Yesterday",
        data: [0, 25000, 40000, 60000, 70000],
        borderColor: "#C4C4C4",
        backgroundColor: "rgba(196, 196, 196, 0.2)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const grossVolumeOptions = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#e5e7eb",
        },
        ticks: {
          callback: (value) => `$${value / 1000}k`,
        },
      },
    },
  };

  const usdBalanceData = {
    labels: ["0 am", "6 am", "12 pm", "6 pm", "12 am"],
    datasets: [
      {
        label: "USD Balance",
        data: [50000, 60000, 68000, 70000, 72000],
        borderColor: "#4A90E2",
        fill: false,
      },
    ],
  };

  const payoutsData = {
    labels: ["0 am", "6 am", "12 pm", "6 pm", "12 am"],
    datasets: [
      {
        label: "Payouts",
        data: [35000, 40000, 43000, 42000, 43000],
        borderColor: "#4A90E2",
        fill: false,
      },
    ],
  };

  const smallChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex">
      <div className="w-2/3 pr-6">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">$64,718.50</h2>
            <span className="text-green-500 text-sm">12.56% ↑</span>
          </div>
          <p className="text-gray-500">Gross Volume</p>
          <div className="h-45">
            <Line data={grossVolumeData} options={grossVolumeOptions} />
          </div>
        </div>
      </div>

      <div className="w-1/3 grid grid-cols-1 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">$72,168.75</h2>
            <span className="text-red-500 text-sm">8.12% ↓</span>
          </div>
          <p className="text-gray-500">Available to Payout</p>
          <div className="h-24">
            <Line data={usdBalanceData} options={smallChartOptions} />
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">$43,360.25</h2>
            <span className="text-green-500 text-sm">14.50% ↑</span>
          </div>
          <p className="text-gray-500">Expected Today</p>
          <div className="h-24">
            <Line data={payoutsData} options={smallChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrossVolume;
