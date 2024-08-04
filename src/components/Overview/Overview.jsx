import React, { useState } from "react";
import "./Overview.css";
import menuIcon from "../../assets/menu-icon.svg";

const Overview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  //for filters
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const metrics = [
    { label: "Total members", value: "3,240", change: "+20%" },
    { label: "Enrolled members", value: "2,420", change: "+15%" },
    { label: "Active now", value: "342", change: "-10%" },
  ];

  const users = [
    {
      name: "Olivia Pope",
      email: "olivia@example.com",
      status: "Enrolled",
      course: "UX Masterclass",
      enrolled: "Jan 4, 2022",
      progress: 75,
      rating: 3,
    },
    {
      name: "Phoenix Baker",
      email: "phoenix@example.com",
      status: "Enrolled",
      course: "UX Masterclass",
      enrolled: "Jan 4, 2022",
      progress: 60,
      rating: 5,
    },
    {
      name: "Lana Steiner",
      email: "lana@example.com",
      status: "Enrolled",
      course: "UX Masterclass",
      enrolled: "Jan 2, 2022",
      progress: 30,
      rating: 2,
    },
    {
      name: "Demi Wilkinson",
      email: "demi@example.com",
      status: "Enrolled",
      course: "UX Masterclass",
      enrolled: "Jan 6, 2022",
      progress: 90,
      rating: 0,
    },
    {
      name: "Candice Wu",
      email: "candice@example.com",
      status: "Enrolled",
      course: "UX Masterclass",
      enrolled: "Jan 7, 2022",
      progress: 25,
      rating: 1,
    },
    {
      name: "Candice Wu",
      email: "candice@example.com",
      status: "Enrolled",
      course: "UX Masterclass",
      enrolled: "Jan 7, 2022",
      progress: 5,
      rating: 4,
    },
    {
      name: "Candice Wu",
      email: "candice@example.com",
      status: "Enrolled",
      course: "UX Masterclass",
      enrolled: "Jan 7, 2022",
      progress: 25,
      rating: 5,
    },
    {
      name: "Candice Wu",
      email: "candice@example.com",
      status: "Enrolled",
      course: "UX Masterclass",
      enrolled: "Jan 7, 2022",
      progress: 20,
      rating: 3,
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

  const handleCheckboxChange = (userId) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(userId)
        ? prevSelectedUsers.filter((id) => id !== userId)
        : [...prevSelectedUsers, userId]
    );
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Audience overview</h1>

      <div className="metrics-container">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <h2 className="metric-title">{metric.label}</h2>
            <p className="metric-value">
              {metric.value}
              <span
                className={`metric-change ${
                  metric.change.startsWith("+") ? "positive" : "negative"
                }`}
              >
                {metric.change}
              </span>
            </p>
          </div>
        ))}
      </div>
      <div className="search-filter-bar">
        <div className="multi-select-container">
          {selectedOptions.map((option) => (
            <div key={option} className="selected-option">
              <span>{option}</span>
              <button
                onClick={() => handleRemove(option)}
                className="remove-button"
              >
                &#x2715;
              </button>
            </div>
          ))}
          <div className="dropdown-container">
            <button
              type="button"
              className="dropdown-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* {selectedOptions.length > 0
                ? "Add/Remove filters"
                : "Select options"} */}
              More Filters
            </button>
            {isOpen && (
              <div className="dropdown-menu">
                {options.map((option) => (
                  <button
                    key={option}
                    className={`menu-item ${
                      selectedOptions.includes(option) ? "selected" : ""
                    }`}
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                    {selectedOptions.includes(option) && (
                      <span className="checkmark">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
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

      <table className="user-table">
        <thead>
          <tr>
            <th></th>
            <th>Customer</th>
            <th>Status</th>
            <th>Course</th>
            <th>Enrolled</th>
            <th>Progress</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </td>
              <td>
                <div className="user-info">
                  <div className="user-avatar">
                    <img src="https://picsum.photos/id/270/200/300" alt="" />
                  </div>
                  <div>
                    <div>{user.name}</div>
                    <small className="user-email">{user.email}</small>
                  </div>
                </div>
              </td>
              <td>
                <span className="status-badge">{user.status}</span>
              </td>
              <td>{user.course}</td>
              <td>{user.enrolled}</td>
              <td>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${user.progress}%` }}
                  ></div>
                </div>
              </td>
              <td>
                {"★".repeat(user.rating)}
                {"☆".repeat(5 - user.rating)}
              </td>
              <td>
                <img src={menuIcon} style={{ width: "18px" }} alt="menu icon" />
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
          Page {currentPage} of {Math.ceil(users.length / usersPerPage)}
        </span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(users.length / usersPerPage)}
        >
          Next <span className="arrow right"></span>
        </button>
      </div>
    </div>
  );
};

export default Overview;
