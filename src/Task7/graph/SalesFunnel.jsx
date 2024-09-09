import React from 'react';
import { Line } from 'react-chartjs-2';
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
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const SalesFunnel = () => {
  // Data for the sales funnel chart
  const data = {
    labels: ['Total Market', 'Prospects', 'Leads', 'Sales'],
    datasets: [
      {
        label: 'Sales Funnel',
        data: [142901, 101020, 60314, 54280],
        fill: {
          target: 'origin',
          above: (ctx) => {
            const idx = ctx.rawIndex;
            const colors = ['rgba(74, 144, 226, 0.2)', 'rgba(67, 170, 139, 0.2)', 'rgba(244, 208, 63, 0.2)', 'rgba(232, 67, 147, 0.2)'];
            return colors[idx];
          }, // Custom color for each area below the line
        },
        backgroundColor: 'rgba(74, 144, 226, 0.2)', // Blue fill as default (will be overwritten by `fill`)
        borderColor: '#4a90e2', // Blue line
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
          display: true, // Display vertical grid lines
          color: 'rgba(0, 0, 0, 0.1)', // Light gray color for the vertical lines
          borderDash: [5, 5], // Dotted line
        },
        ticks: {
          display: true, // Show labels for each stage
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
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-700 font-semibold text-lg">Sales Funnel</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0z" />
            <path fillRule="evenodd" d="M2 10a8 8 0 1116 0A8 8 0 012 10zm8-6a6 6 0 100 12A6 6 0 0010 4z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Sales Funnel Numbers */}
      <div className="grid grid-cols-4 gap-4 text-center mb-4">
        <div>
          <p className="text-gray-500">Total Market</p>
          <h1 className="text-3xl font-bold">142,901</h1>
        </div>
        <div>
          <p className="text-gray-500">Prospects</p>
          <h1 className="text-3xl font-bold">101,020</h1>
        </div>
        <div>
          <p className="text-gray-500">Leads</p>
          <h1 className="text-3xl font-bold">60,314</h1>
        </div>
        <div>
          <p className="text-gray-500">Sales</p>
          <h1 className="text-3xl font-bold">54,280</h1>
        </div>
      </div>

      {/* Line Chart for Sales Funnel */}
      <div className="h-32">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesFunnel;
