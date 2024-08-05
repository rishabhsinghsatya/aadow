import "./App.css";
import React, { useState } from 'react';

import TopNavbar from "./components/TopNavbar/TopNavbar";
import BottomNav from "./components/BottomNav/BottomNav";
import Overview from "./components/Overview/Overview";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/Orders/Orders";
import Navbar from "./Task2/Navbar/Nav";
import Upload from "./Task2/Upload/Upload";
import Import from "./Task2/Import/Import";
import Map from "./Task2/Map/Map";
import Identify from "./Task2/Identify/Identify";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Upload":
        return <Upload />;
      case "Identify":
        return <Identify />;
      case "Map":
        return <Map />;
      case "Import":
        return <Import />;
      default:
        return <Upload />;
    }
  };
  return (
    <div>
      {/* <TopNavbar />
      <BottomNav />
      <Overview /> */}
      {/* <Dashboard /> */}
      {/* <Orders /> */}
      <Navbar setCurrentPage={setCurrentPage} />
      <header className="App-header">{renderPage()}</header>
    </div>
  );
}

export default App;
