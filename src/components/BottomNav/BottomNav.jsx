import React from "react";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <ul className="navbar-links">
        <li>
          <a href="#overview">Overview</a>
        </li>
        <li>
          <a href="#notification">Notification</a>
        </li>
        <li>
          <a href="#analytics">Analytics</a>
        </li>
        <li>
          <a href="#saved-reports">Saved Reports</a>
        </li>
        <li>
          <a href="#schedule-reports">Schedule Reports</a>
        </li>
        <li>
          <a href="#user-reports">User Reports</a>
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
