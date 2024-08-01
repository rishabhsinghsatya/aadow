import "./App.css";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import BottomNav from "./components/BottomNav/BottomNav";
import Overview from "./components/Overview/Overview";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <div>
      <TopNavbar />
      <BottomNav />
      <Overview />
      {/* <Dashboard /> */}
      {/* <Orders /> */}
    </div>
  );
}

export default App;
