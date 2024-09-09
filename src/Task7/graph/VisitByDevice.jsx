import React from "react";

const VisitByDevice = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-sm">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-700 font-semibold text-lg">
          Visits by Device
        </h2>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0z" />
            <path
              fillRule="evenodd"
              d="M2 10a8 8 0 1116 0A8 8 0 012 10zm8-6a6 6 0 100 12A6 6 0 0010 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Visits Number */}
      <div className="mb-4">
        <p className="text-gray-500">Visits</p>
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold">3,280</h1>
          <span className="text-green-500 text-sm">2.84% ↑</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-200 my-4" />

      {/* Mobile vs Desktop Comparison */}
      <div className="flex justify-between items-center">
        {/* Mobile */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <span className="w-2 h-2 bg-blue-500 inline-block rounded-full mr-1"></span>
            <span className="font-medium text-sm text-gray-600">Mobile</span>
          </div>
          <h2 className="text-2xl font-semibold">60%</h2>
          <p className="text-sm text-gray-400">1,968</p>
        </div>

        {/* VS Separator */}
        <div className="flex items-center justify-center">
          <span className="text-gray-500 text-sm">VS</span>
        </div>

        {/* Desktop */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <span className="w-2 h-2 bg-blue-300 inline-block rounded-full mr-1"></span>
            <span className="font-medium text-sm text-gray-600">Desktop</span>
          </div>
          <h2 className="text-2xl font-semibold">40%</h2>
          <p className="text-sm text-gray-400">1,312</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-between items-center mt-4">
        {/* Mobile Progress */}
        <div className="w-1/2 h-1 bg-blue-500 rounded-full mr-1"></div>
        {/* Desktop Progress */}
        <div className="w-1/2 h-1 bg-blue-300 rounded-full ml-1"></div>
      </div>
    </div>
  );
};

export default VisitByDevice;
