import React, { useState } from "react";
import "./Orders.css";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("View all");
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    {
      invoice: "INV-3066",
      status: "Paid",
      date: "Jan 6, 2022",
      name: "Olivia Rhye",
      email: "olivia@untitledui.com",
    },
    {
      invoice: "INV-3065",
      status: "Paid",
      date: "Jan 6, 2022",
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
    },
    {
      invoice: "INV-3064",
      status: "Paid",
      date: "Jan 6, 2022",
      name: "Lana Steiner",
      email: "lana@untitledui.com",
    },
    {
      invoice: "INV-3063",
      status: "Paid",
      date: "Jan 5, 2022",
      name: "Demi Wilkinson",
      email: "demi@untitledui.com",
    },
    {
      invoice: "INV-3062",
      status: "Refunded",
      date: "Jan 5, 2022",
      name: "Candice Wu",
      email: "candice@untitledui.com",
    },
    {
      invoice: "INV-3061",
      status: "Paid",
      date: "Jan 5, 2022",
      name: "Natali Craig",
      email: "natali@untitledui.com",
    },
    {
      invoice: "INV-3060",
      status: "Cancelled",
      date: "Jan 4, 2022",
      name: "Drew Cano",
      email: "drew@untitledui.com",
    },
    {
      invoice: "INV-3059",
      status: "Paid",
      date: "Jan 4, 2022",
      name: "Orlando Diggs",
      email: "orlando@untitledui.com",
    },
  ];

  return (
    <div className="orders-container">
      <h1>Orders</h1>

      <div className="filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for order"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="dropdown">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Paid">Paid</option>
            <option value="Refunded">Refunded</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <div className="dropdown">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="View all">View all</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div className="customer-search">
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>
              Invoice <span className="sort-icon">▼</span>
            </th>
            <th>Status</th>
            <th>Date</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.invoice}</td>
              <td>
                <span className={`status-badge ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td>{order.date}</td>
              <td>
                <div className="customer-info">
                  <div className="avatar"></div>
                  <div>
                    <div className="customer-name">{order.name}</div>
                    <div className="customer-email">{order.email}</div>
                  </div>
                </div>
              </td>
              <td>
                <button className="more-options">⋯</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button className="prev-button">← Previous</button>
        <div className="page-numbers">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="next-button">Next →</button>
      </div>
    </div>
  );
};

export default Orders;
