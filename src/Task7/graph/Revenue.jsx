import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueChart = () => {
  // Data for the bar chart
  const data = {
    labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [30000, 15000, 25000, 18000, 12000, 28000],
        backgroundColor: '#4285F4', // Blue color for the bars
        borderRadius: 4, // Rounded bar edges
        barThickness: 20, // Control bar thickness
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
      y: {
        grid: {
          color: '#e5e7eb', // Light gray horizontal grid lines
        },
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value / 1000}k`; // Format y-axis values to show in $k
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-xs">
      {/* Revenue Number and Percent Change */}
      <div className="mb-4 text-center">
        <p className="text-gray-500">Revenue</p>
        <h1 className="text-3xl font-bold">$120,210</h1>
        <span className="text-green-500 text-sm">7.56% ↑</span>
      </div>

      {/* Bar Chart */}
      <div className="h-44">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;
