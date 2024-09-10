import React from "react";
import { FaFlagUsa } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { GiUnitedKingdom, GiUnlitCandelabra } from "react-icons/gi";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import us from "../../assets/us.png";
import uk from "../../assets/uk.png";
import canada from "../../assets/canada.png";

const Country = () => {
  return (
    <div className="flex justify-center">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-blsck font-semibold text-2xl">Top Country</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <FiMoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-4">
          <p className="text-gray-500 text-sm">Visits</p>
          <div className="flex items-baseline space-x-2">
            <p className="text-3xl font-bold">3,280</p>
            <span className="text-green-500 text-sm font-bold text-end">
              2.84% ↑
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img className="w-6 h-6" src={us} alt="" />
              <p className="text-gray-700">United States</p>
            </div>
            <p className="text-gray-700 font-medium">20%</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img className="w-6 h-6" src={uk} alt="" />
              <p className="text-gray-700">United Kingdom</p>
            </div>
            <p className="text-gray-700 font-medium">12%</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img className="w-6 h-6" src={canada} alt="" />
              <p className="text-gray-700">Canada</p>
            </div>
            <p className="text-gray-700 font-medium">9%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
