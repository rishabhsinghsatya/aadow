import "./App.css";
import React, { useState } from "react";

import TopNavbar from "./components/TopNavbar/TopNavbar";
import BottomNav from "./components/BottomNav/BottomNav";
import Overview from "./components/Overview/Overview";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/Orders/Orders";
import Navbar from "./Task2/Navbar/Nav";
// import Upload from "./Task2/Upload/Upload";
// import Import from "./Task2/Import/Import";
// import Map from "./Task2/Map/Map";
// import Identify from "./Task2/Identify/Identify";
import MegaMenu from "./Task2/MegaMenu/Megamenu";
import Campaign from "./Task3/Campaign/Campaign";
import SidebarNav from "./Task5/Navbar/SidebarNav";
import NewsletterFooter from "./Task5/Footer/Footer";
import FirstFooter from "./Task5/FirstFooter/FirstFooter";
import TriggerWorkflow from "./Task6/TriggerWorkflow/TriggerWorkflow";
import Broadcast from "./Task6/Broadcast/Broadcast";
import LineChart from "./Task7/LineChart";
import Nav from "./Task7/Nav";
import SubscriberList from "./Task8/SubscriberList";
function App() {
  // const [currentPage, setCurrentPage] = useState("Home");

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case "Upload":
  //       return <Upload />;
  //     case "Identify":
  //       return <Identify />;
  //     case "Map":
  //       return <Map />;
  //     case "Import":
  //       return <Import />;
  //     default:
  //       return <Upload />;
  //   }
  // };
  return (
    <div>
      {/* <TopNavbar />
      <BottomNav />
      <Overview /> */}
      {/* <Dashboard /> */}
      {/* <Orders /> */}
      {/* <Navbar setCurrentPage={setCurrentPage} />
      <header className="App-header">{renderPage()}</header> */}
      {/* <MegaMenu /> */}
      {/* <Campaign /> */}
      {/* <Sidebar /> */}
      {/* <SidebarNav /> */}
      {/* <NewsletterFooter /> */}
      {/* <FirstFooter/> */}
      {/* <TriggerWorkflow /> */}
      {/* <Broadcast/> */}
      {/* <LineChart /> */}
      {/* <Nav /> */}
      <SubscriberList />
    </div>
  );
}

export default App;
