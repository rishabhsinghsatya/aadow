import { Ellipsis } from "lucide-react";
import React from "react";

const VisitByDevice = () => {
  return (
    <div className="flex justify-center">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-black font-semibold text-lg">Visits by Device</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <Ellipsis />
          </button>
        </div>

        <div className="mb-4">
          <p className="text-gray-500 text-sm font-semibold">Visits</p>
          <div className="flex items-baseline space-x-2">
            <p className="text-3xl font-bold">3,280</p>
            <span className="text-green-500 text-sm font-semibold">
              2.84% ↑
            </span>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-4" />

        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <span className="w-1 h-4 bg-blue-500 inline-block  mr-1"></span>
              <span className="font-medium text-sm text-gray-600">Mobile</span>
            </div>
            <h2 className="text-2xl font-bold">60%</h2>
            <p className="text-sm text-gray-400 text-left">1,968</p>
          </div>

          <div className="flex items-center justify-center">
            <span className="text-gray-500 text-sm border rounded-full p-2">
              VS
            </span>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <span className="w-1 h-4 bg-blue-300 inline-block  mr-1"></span>
              <span className="font-medium text-sm text-gray-600">Desktop</span>
            </div>
            <h2 className="text-2xl font-bold">40%</h2>
            <p className="text-sm text-gray-400 text-right">1,312</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="w-3/5 h-2 bg-blue-500 rounded-full mr-1"></div>
          <div className="w-1/2 h-2 bg-blue-300 rounded-full ml-1"></div>
        </div>
      </div>
    </div>
  );
};

export default VisitByDevice;
