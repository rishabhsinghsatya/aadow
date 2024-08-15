import React, { useState } from "react";
import {
  Home,
  Info,
  Settings,
  Bell,
  ShoppingBag,
  Calendar,
  Folder,
  HelpCircle,
  User,
  LogOut,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Box,
  Package,
  Tag,
  Truck,
  Gift,
  Star,
  Minus,
  Plus,
  Store,
  Key,
  FileText,
} from "lucide-react";
import "./SidebarNav.css"; // Assuming you have a CSS file for styling

const SidebarNav = () => {
  const [selectedIcon, setSelectedIcon] = useState("Home");
  const [selectedTab, setSelectedTab] = useState("Products");
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderProductsContent = () => {
    const sections = [
      { name: "Overview", icon: <Box /> },
      { name: "Store", icon: <Store /> },
      { name: "Emails", icon: <Package /> },
      { name: "Reports", icon: <Truck /> },
      { name: "Designs", icon: <Gift /> },
      { name: "Settings", icon: <Settings /> },
    ];

    return sections.map((section) => (
      <div key={section.name} className="expandable-section">
        <div
          className="section-head"
          onClick={() => toggleSection(section.name)}
          style={{
            
              backgroundColor: expandedSections[section.name]
                ? "#E5E7EB"
                : "#FFF",
           
          }}
        >
          <div className="section-icon">{section.icon}</div>
          <div className="section-title">{section.name}</div>
          <div className="section-toggle">
            {expandedSections[section.name] ? <Minus /> : <Plus />}
          </div>
        </div>
        {expandedSections[section.name] && (
          <div className="section-content">
            {/* <p>{section.name} Content: Detailed information about {section.name}.</p> */}
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        )}
      </div>
    ));
  };

  const renderShopContent = () => {
    switch (selectedTab) {
      case "Products":
        return (
          <div className="products-content">{renderProductsContent()}</div>
        );
      case "Cart":
        return <div>Cart Content: Items currently in your shopping cart.</div>;
      default:
        return <div>Select a tab to see content here.</div>;
    }
  };

  const renderContent = () => {
    switch (selectedIcon) {
      case "Home":
        return <div>Home Content: Welcome to the home page!</div>;
      case "Info":
        return <div>Info Content: Here’s some information for you.</div>;
      case "Settings":
        return <div>Settings Content: Adjust your preferences here.</div>;
      case "Bell":
        return <div>Notifications Content: You have new notifications.</div>;
      case "ShoppingBag":
        return (
          <div className="shop-content">
            <h2>Online Store</h2>
            <div className="tabs">
              <button
                className={`tab ${selectedTab === "Products" ? "active" : ""}`}
                onClick={() => setSelectedTab("Products")}
              >
                Untitled UI
              </button>
              <button
                className={`tab ${selectedTab === "Cart" ? "active" : ""}`}
                onClick={() => setSelectedTab("Cart")}
              >
                Learn Figma
              </button>
            </div>
            <div className="tab-content">{renderShopContent()}</div>
          </div>
        );
      case "Calendar":
        return <div>Calendar Content: View your upcoming events.</div>;
      case "Folder":
        return <div>Folder Content: Access your files and folders.</div>;
      case "HelpCircle":
        return <div>Help Content: Need help? You can find it here.</div>;
      case "MessageSquare":
        return <div>Messages Content: Check your messages here.</div>;
      default:
        return <div>Select an icon to see content here.</div>;
    }
  };

  return (
    <div className="main-container">
      <div className="sidebar-nav">
        {/* Main Icons */}
        <div className="icon-container">
          <div className="logo">
            <img src="https://picsum.photos/id/230/200/300" alt="Logo" />
          </div>
          <Home className="icon" onClick={() => setSelectedIcon("Home")} />
          <Info className="icon" onClick={() => setSelectedIcon("Info")} />
          <ShoppingBag
            className="icon"
            onClick={() => setSelectedIcon("ShoppingBag")}
          />
          <Settings
            className="icon"
            onClick={() => setSelectedIcon("Settings")}
          />
          <Bell className="icon" onClick={() => setSelectedIcon("Bell")} />

          <Calendar
            className="icon"
            onClick={() => setSelectedIcon("Calendar")}
          />
          <Folder className="icon" onClick={() => setSelectedIcon("Folder")} />
          <HelpCircle
            className="icon"
            onClick={() => setSelectedIcon("HelpCircle")}
          />
          <MessageSquare
            className="icon"
            onClick={() => setSelectedIcon("MessageSquare")}
          />
        </div>

        {/* Bottom Icons */}
        <div className="bottom-icons">
          <LogOut className="icon" />
          <div className="user-section">
            <img
              src="https://picsum.photos/id/230/200/300"
              alt="User"
              className="user-avatar"
            />
            {/* <div className="user-info">
              <span className="user-name">Sophia Munn</span>
              <span className="user-email">sophia@untitledui.com</span>
            </div> */}
            <div className="user-menu">
              <div className="customer-info" style={{padding:"10px"}}>
                <div className="avatar">
                  <img src="https://picsum.photos/id/270/200/300" alt="" />
                </div>
                <div>
                  <div className="customer-name">Sophia Munn</div>
                  <div className="customer-email">sophia@gmail.com</div>
                </div>
              </div>
              <div className="user-menu-item">
                <User size={16} /> View profile
              </div>
              <div className="user-menu-item">
                <Settings size={16} /> Account settings
              </div>
              <div className="user-menu-item">
                <Key size={16} /> Keyboard shortcuts
              </div>
              <div className="user-menu-item">
                <FileText size={16} /> Updates
              </div>
              <div className="user-menu-item logout">
                <LogOut size={16} /> Log out
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`content-section ${
          selectedIcon ? selectedIcon.toLowerCase() + "-open" : ""
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default SidebarNav;
