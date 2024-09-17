import React, { useState, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";

const SubscriberList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [subscribers, setSubscribers] = useState([]);
  const pageSize = 6; // Number of items per page

  // Fetch subscriber data from JSON file
  useEffect(() => {
    fetch("./subscribers.json");
    //   .then((response) => response.json())
    //   .then((data) => setSubscribers(data))
    //   .catch((error) => console.error("Error loading subscribers:", error));
  }, []);

  const filteredSubscribers = subscribers
    .filter((subscriber) => {
      const searchText = searchTerm.toLowerCase();
      return (
        subscriber.name.toLowerCase().includes(searchText) ||
        subscriber.email.toLowerCase().includes(searchText) ||
        subscriber.phone.includes(searchText) ||
        subscriber.listname.toLowerCase().includes(searchText)
      );
    })
    .filter((subscriber) => {
      if (filterStatus === "All") return true;
      return subscriber.status === filterStatus;
    });

  const totalPages = Math.ceil(filteredSubscribers.length / pageSize);
  const paginatedSubscribers = filteredSubscribers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
    setCurrentPage(1); // Reset to the first page on filter
  };

  const renderSegmentBadges = (segment) => {
    const colors = {
      green: "bg-green-500",
      yellow: "bg-yellow-500",
      red: "bg-red-500",
      gray: "bg-gray-500",
    };
    return (
      <span
        className={`inline-block w-2 h-2 rounded-full ${colors[segment]}`}
      />
    );
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`w-8 h-8 rounded ${
            i === currentPage
              ? "bg-gray-200"
              : "bg-white border border-gray-300"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Name, Email, Phone or Listname..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <select
          value={filterStatus}
          onChange={handleFilterChange}
          className="px-4 py-2 border border-gray-300 rounded"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Subscriber
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Listname
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Added on
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Segment
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {paginatedSubscribers.map((subscriber) => (
            <tr key={subscriber.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://picsum.photos/id/237/200/300"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {subscriber.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {subscriber.email} | {subscriber.phone}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    subscriber.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {subscriber.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {subscriber.listname}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {subscriber.addedOn}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {renderSegmentBadges(subscriber.segment)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-gray-400 hover:text-gray-500">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded"
          onClick={() =>
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
          }
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </button>
        <div className="flex space-x-2">{renderPagination()}</div>
        <button
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded"
          onClick={() =>
            setCurrentPage((nextPage) => Math.min(nextPage + 1, totalPages))
          }
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SubscriberList;
