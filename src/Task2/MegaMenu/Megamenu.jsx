import React, { useState, useRef, useEffect } from "react";
import "./Megamenu.css";

const menuItems = [
  {
    title: "Features",
    submenu: [
      {
        icon: "🏦",
        title: "Banking",
        description: "Store, manage and share your funds safely",
      },
      {
        icon: "💰",
        title: "Collect",
        description: "Gather payments for dues, donations, events & more",
      },
      {
        icon: "💳",
        title: "Spend",
        description: "Control member spending with digital debit cards",
      },
      {
        icon: "💸",
        title: "Earn",
        description:
          "Set up a passive fundraising program for consistent donations",
      },
    ],
  },
  { title: "Use Cases", submenu: [] },
  { title: "Prices", submenu: [] },
  { title: "Customers", submenu: [] },
  { title: "About", submenu: [] },
];

const solutions = [
  { icon: "🏛️", title: "Fraternities & Sororities" },
  { icon: "🎓", title: "College Clubs", isNew: true },
  { icon: "⚽", title: "Sports Club" },
  { icon: "📢", title: "Booster Clubs" },
  { icon: "🏢", title: "Agency Companies" },
  { icon: "🏫", title: "Multi-chapter Orgs" },
  { icon: "👪", title: "PTAs" },
  { icon: "🌈", title: "Girl Scouts" },
  { icon: "☀️", title: "Summer Camps" },
  { icon: "❄️", title: "Winter Camps" },
];

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
        setActiveSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (title) => {
    if (title === activeMenu) {
      setActiveMenu(null);
      setActiveSubMenu(null);
    } else {
      setActiveMenu(title);
      setActiveSubMenu(null);
    }
  };

  const handleSubMenuClick = (title) => {
    if (title === activeSubMenu) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(title);
    }
  };

  return (
    <div className="nav-container" ref={menuRef}>
      <div className="nav">
        <div className="logo">Moonday</div>
        <nav>
          <ul className="menu">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleMenuClick(item.title)}
                className={activeMenu === item.title ? "active" : ""}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Log In</button>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
      {activeMenu && (
        <div className="mega-menu">
          <div className="mega-menu-content">
            <div className="menu-column">
              <h3>{activeMenu}</h3>
              {menuItems
                .find((item) => item.title === activeMenu)
                ?.submenu.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className={`menu-item ${
                      activeSubMenu === subItem.title ? "active-submenu" : ""
                    }`}
                    onClick={() => handleSubMenuClick(subItem.title)}
                  >
                    <span className="icon">{subItem.icon}</span>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h4 style={{ margin: "1px" }}>{subItem.title}</h4>
                      <p style={{ margin: "1px" }}>{subItem.description}</p>
                    </div>
                  </div>
                ))}
              {menuItems.find((item) => item.title === activeMenu)?.submenu
                .length === 0 && (
                <div className="menu-item">No submenu available.</div>
              )}
            </div>
            {activeSubMenu === "Banking" ? (
              <div className="menu-column">
                <h3>SOLUTIONS FOR BANKING</h3>
                <div className="solutions-grid">
                  {solutions.map((solution, solIndex) => (
                    <div key={solIndex} className="solution-item">
                      <span className="icon">{solution.icon}</span>
                      <span>{solution.title}</span>
                      {solution.isNew && (
                        <span className="new-badge">NEW</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              activeSubMenu && (
                <div className="menu-column">
                  <h3>{activeSubMenu}</h3>
                  <p>Data is not available</p>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
