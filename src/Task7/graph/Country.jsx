import React from "react";
import { FaFlagUsa } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { GiUnitedKingdom, GiUnlitCandelabra } from "react-icons/gi";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const Country = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-700 font-semibold text-lg">Top Country</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <FiMoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Visits */}
      <div className="mb-4">
        <p className="text-gray-500">Visits</p>
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold ">3,280</h1>
          <span className="text-green-500 text-sm">2.84% ↑</span>
        </div>
      </div>

      {/* Top Countries */}
      <div className="space-y-3">
        {/* United States */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaFlagUsa className="h-5 w-5" />
            <p className="text-gray-700">United States</p>
          </div>
          <p className="text-gray-700 font-medium">20%</p>
        </div>

        {/* United Kingdom */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GiUnlitCandelabra className="h-5 w-5" />
            <p className="text-gray-700">United Kingdom</p>
          </div>
          <p className="text-gray-700 font-medium">12%</p>
        </div>

        {/* Canada */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaCanadianMapleLeaf className="h-5 w-5" />
            <p className="text-gray-700">Canada</p>
          </div>
          <p className="text-gray-700 font-medium">9%</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
