import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GrossVolume from "./graph/GrossVolume";
import WeeklyVisitor from "./graph/WeeklyVisitor";
import VisitsByTime from "./graph/VisitByTime";
import VisitByDevice from "./graph/VisitByDevice";
import SalesFunnel from "./graph/SalesFunnel";
import Country from "./graph/Country";
import TrafficSource from "./graph/TrafficSource";
import Visits from "./graph/Visits";
import RevenueChart from "./graph/Revenue";

const Nav = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-black text-white shadow-md p-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/bar" className="hover:text-yellow-300">
                GrossVolume
              </Link>
            </li>
            <li>
              <Link to="/line" className="hover:text-yellow-300">
                WeeklyVisitor
              </Link>
            </li>
            <li>
              <Link to="/pie" className="hover:text-yellow-300">
                VisitsByTime
              </Link>
            </li>
            <li>
              <Link to="/device" className="hover:text-yellow-300">
                VisitByDevice
              </Link>
            </li>
            <li>
              <Link to="/salesfunnel" className="hover:text-yellow-300">
                VisitByDevice
              </Link>
            </li>
            <li>
              <Link to="/country" className="hover:text-yellow-300">
                TopCountry
              </Link>
            </li>
            <li>
              <Link to="/traffic" className="hover:text-yellow-300">
                TrafficSource
              </Link>
            </li>
            <li>
              <Link to="/visits" className="hover:text-yellow-300">
                Visits
              </Link>
            </li>
            <li>
              <Link to="/revenue" className="hover:text-yellow-300">
                RevenueChart
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-8">
          <Routes>
            <Route path="/bar" element={<GrossVolume />} />
            <Route path="/line" element={<WeeklyVisitor />} />
            <Route path="/pie" element={<VisitsByTime />} />
            <Route path="/device" element={<VisitByDevice />} />
            <Route path="/salesfunnel" element={<SalesFunnel />} />
            <Route path="/country" element={<Country />} />
            <Route path="/traffic" element={<TrafficSource />} />
            <Route path="/visits" element={<Visits />} />
            <Route path="/revenue" element={<RevenueChart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Nav;
