import React from "react";
import "./TopNavbar.css";
import bellIcon from "../../assets/bell-icon.svg";
import settingIcon from "../../assets/setting-icon.svg";
import menuIcon from "../../assets/menu-icon.svg";
import userProfile from "../../assets/user.jpg";

const TopNavbar = () => {
  return (
    <div className="top-nav">
      <div className="top-nav-left">
        <h2 className="logo">UntitledUI</h2>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#tasks">Tasks</a>
          </li>
          <li>
            <a href="#reporting">Reporting</a>
          </li>
          <li>
            <a href="#Users">Users</a>
          </li>
        </ul>
      </div>
      <div className="top-nav-right">
        <button>Upgrade now</button>
        <img src={settingIcon} alt="setting icon" />
        <img src={bellIcon} alt="bell icon" />
        <img src={userProfile} alt="user profile" />
        <img className="menu-icon" src={menuIcon} alt="" />
      </div>
    </div>
  );
};

export default TopNavbar;
