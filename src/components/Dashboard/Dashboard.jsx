import React, { useState } from "react";
import "./Dashboard.css";
import menuIcon from "../../assets/menu-icon.svg";
import moreIcon from "../../assets/more-icon.svg";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState("12 months");

  const customersPerPage = 5;

  //for filters
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const metrics = [
    { icon: "💰", label: "Sales", value: "$88,9.44", change: "+8%" },
    { icon: "👥", label: "Customers", value: "112,440", change: "+12%" },
    { icon: "🔥", label: "Active now", value: "561,112", change: "+7%" },
  ];

  const allCustomers = [
    {
      id: 1,
      name: "Nikolas Gibbons",
      email: "nikolas@protonet.com",
      date: "Mar 4, 2023",
      revenue: "$450.00",
      status: "Subscribed",
    },
    {
      id: 2,
      name: "Amélie Laurent",
      email: "amelie@protonet.com",
      date: "Mar 4, 2023",
      revenue: "$450.00",
      status: "Subscribed",
    },
    {
      id: 3,
      name: "Arman Foley",
      email: "arman@protonet.com",
      date: "Mar 4, 2023",
      revenue: "$180.00",
      status: "Subscribed",
    },
    {
      id: 4,
      name: "Caitlyn King",
      email: "caitlyn@protonet.com",
      date: "Mar 4, 2023",
      revenue: "$540.00",
      status: "Subscribed",
    },
    {
      id: 5,
      name: "Serena Heath",
      email: "serena@protonet.com",
      date: "Mar 4, 2023",
      revenue: "$180.00",
      status: "Subscribed",
    },
  ];
  const options = ["Last 12 months", "All products", "Last 6 months"];
  const handleSelect = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const handleRemove = (optionToRemove) => {
    setSelectedOptions(
      selectedOptions.filter((option) => option !== optionToRemove)
    );
  };

  const handleCheckboxChange = (customerId) => {
    setSelectedCustomers((prevSelectedCustomers) =>
      prevSelectedCustomers.includes(customerId)
        ? prevSelectedCustomers.filter((id) => id !== customerId)
        : [...prevSelectedCustomers, customerId]
    );
  };

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = allCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(allCustomers.length / customersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const renderChartData = () => {
    switch (selectedTab) {
      case "12 months":
        return <div>Data for 12 months</div>;
      case "30 days":
        return <div>Data for 30 days</div>;
      case "7 days":
        return <div>Data for 7 days</div>;
      case "24 hours":
        return <div>Data for 24 hours</div>;
      default:
        return <div>No data available</div>;
    }
  };

  return (
    <div className="dashboard">
      <header className="header">
        <div>
          <h1>My dashboard</h1>
          <p>Here's an overview of your store traffic and customers.</p>
        </div>
        <div className="users-avatar">
          <img src="https://picsum.photos/id/270/200/300" alt="" />
          <p style={{ fontSize: "15px", fontWeight: "500" }}>Caitlyn King</p>
          <img src={menuIcon} style={{ width: "20px" }} alt="menu icon" />
        </div>
      </header>

      <div className="metrics-containers">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-cards">
            <span className="metric-icon">{metric.icon}</span>
            <div className="metric-details">
              <h2>{metric.label}</h2>
              <p className="metric-value">{metric.value}</p>
            </div>
            <span className="metric-change">{metric.change}</span>
          </div>
        ))}
      </div>

      <div className="chart-container">
        <div className="chart-header">
          <div className="revenue">
            <h3>Revenue</h3>
            <p className="revenue-value">
              $88,820.44{" "}
              <span className="revenue-change" style={{ fontSize: "15px" }}>
                +8%
              </span>
            </p>
          </div>
          <div className="tab-filter">
            <div className="chart-tabs">
              <button
                className={selectedTab === "12 months" ? "active" : ""}
                onClick={() => handleTabChange("12 months")}
              >
                12 months
              </button>
              <button
                className={selectedTab === "30 days" ? "active" : ""}
                onClick={() => handleTabChange("30 days")}
              >
                30 days
              </button>
              <button
                className={selectedTab === "7 days" ? "active" : ""}
                onClick={() => handleTabChange("7 days")}
              >
                7 days
              </button>
              <button
                className={selectedTab === "24 hours" ? "active" : ""}
                onClick={() => handleTabChange("24 hours")}
              >
                24 hours
              </button>
            </div>
            <div className="filter-container">
              {selectedOptions.map((option) => (
                <div key={option} className="filter-selected-option">
                  <span>{option}</span>
                  <button
                    onClick={() => handleRemove(option)}
                    className="remove-button"
                  >
                    &#x2715;
                  </button>
                </div>
              ))}
              <div className="filter-dropdown-container">
                <button
                  type="button"
                  className="filter-dropdown-button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {/* {selectedOptions.length > 0
                ? "Add/Remove filters"
                : "Select options"} */}
                  More Filters
                </button>
                {isOpen && (
                  <div className="filter-dropdown-menu">
                    {options.map((option) => (
                      <button
                        key={option}
                        className={`filter-menu-item ${
                          selectedOptions.includes(option) ? "selected" : ""
                        }`}
                        onClick={() => handleSelect(option)}
                      >
                        {option}
                        {selectedOptions.includes(option) && (
                          <span className="filter-checkmark">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="chart-placeholder">{renderChartData()}</div>
        <div className="chart-date-range">1 Jan 2024 - 31 Dec 2024</div>
      </div>

      <div className="customers-container">
        <div className="customers-header">
          <h3>
            Customers <span className="customer-count">1,253</span>
          </h3>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
        <table className="customers-table">
          <thead>
            <tr>
              <th></th>
              <th>Customer</th>
              <th className="purchase-date">Purchase date</th>
              <th className="total-revenue">Total revenue</th>
              <th className="status">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedCustomers.includes(customer.id)}
                    onChange={() => handleCheckboxChange(customer.id)}
                  />
                </td>
                <td>
                  <div className="customer-info">
                    <div className="customer-avatar">
                      <img src="https://picsum.photos/id/270/200/300" alt="" />
                    </div>
                    <div>
                      <div className="customer-name">{customer.name}</div>
                      <div className="customer-email">{customer.email}</div>
                    </div>
                  </div>
                </td>
                <td className="purchase-date">{customer.date}</td>
                <td className="total-revenue">{customer.revenue}</td>
                <td className="status">
                  <span className="status-badge">{customer.status}</span>
                </td>
                <td>
                  <img
                    src={moreIcon}
                    style={{ width: "20px" }}
                    alt="menu icon"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <span className="arrow left"></span> Previous
          </button>
          <span>
            Page {currentPage} of{" "}
            {Math.ceil(allCustomers.length / customersPerPage)}
          </span>
          <button
            className="pagination-button"
            onClick={handleNextPage}
            disabled={
              currentPage === Math.ceil(allCustomers.length / customersPerPage)
            }
          >
            Next <span className="arrow right"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
