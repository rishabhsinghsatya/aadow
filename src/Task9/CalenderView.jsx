import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Plus,
  Search,
  Bell,
  MoreVertical,
  MessageSquareX,
  Filter,
  Menu,
} from "lucide-react";
import React, { useState } from "react";

const CalendarView = () => {
  const [activeTab, setActiveTab] = useState("month");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState(
    currentDate.toISOString().split("T")[0]
  ); // Default to today's date
  const [showEventForm, setShowEventForm] = useState(false); // State to toggle event form visibility
  const [isExpanded, setIsExpanded] = useState(false); // For expandable tab
  const [checkboxItems, setCheckboxItems] = useState([
    "🎇Ester Howard",
    "🏆Task",
    "🎮Bootcamp",
    "🥅Birthday",
    "🎭Reminder",
    "🎓college",
  ]); // Default checkbox items
  const [newCheckboxItem, setNewCheckboxItem] = useState(""); // To add new checkbox items
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false); // For expandable "Categories" tab

  // Categories default items
  const categories = ["Works", "Educational", "Personal"]; // Categories items

  // Toggle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const changeMonth = (increment) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setCurrentDate(newDate);
  };

  const renderWeekDays = () => {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="grid grid-cols-7 text-center font-bold mb-1">
        {weekDays.map((day) => (
          <div key={day} className="border-b-2">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderMiniCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const days = [];
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();

    // Generate the days for the mini calendar
    for (let i = 0; i < startDay; i++) {
      days.push(null); // Empty cells for the days before the first of the month
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          const dateKey = day ? `${year}-${month + 1}-${day}` : null;
          return (
            <div
              key={index}
              className={`text-center ${day === null ? "bg-blue-200" : ""} ${
                day === new Date().getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear()
                  ? "bg-blue-500 text-white"
                  : ""
              } ${events[dateKey] ? "bg-yellow-300" : ""}`} // Highlight days with events
            >
              {day}
              {day && events[dateKey] && (
                <div className="text-xs text-red-600">⚫</div>
              )}{" "}
              {/* Event indicator */}
            </div>
          );
        })}
      </div>
    );
  };

  const renderCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    let days = [];

    if (activeTab === "month") {
      // Month view
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startDay = firstDay.getDay();

      for (let i = 0; i < startDay; i++) {
        days.push(null); // Empty cells for the days before the first of the month
      }
      for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
      }
    } else if (activeTab === "week") {
      // Week view
      const firstDayOfWeek = new Date(currentDate);
      const dayOfWeek = firstDayOfWeek.getDay();
      firstDayOfWeek.setDate(firstDayOfWeek.getDate() - dayOfWeek); // Go back to the first day of the week

      for (let i = 0; i < 7; i++) {
        days.push(new Date(firstDayOfWeek)); // Add each day of the week
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1); // Move to the next day
      }
    } else if (activeTab === "day") {
      // Day view (show current date)
      days.push(currentDate.getDate());
    }

    return (
      <div>
        {renderWeekDays()} {/* Render week day names */}
        <div
          className={`grid ${
            activeTab === "week" ? "grid-cols-7" : "grid-cols-7 gap-1"
          }`}
        >
          {days.map((day, index) => {
            const dayNum =
              activeTab === "day"
                ? day
                : day instanceof Date
                ? day.getDate()
                : day;
            const dateKey =
              day instanceof Date
                ? `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`
                : null;

            return (
              <div
                key={index}
                className={`border h-20 text-center  ${
                  day === null ? "bg-gray-100" : "bg-gray-200"
                } ${
                  dayNum === new Date().getDate() &&
                  month === new Date().getMonth() &&
                  year === new Date().getFullYear()
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => day && handleDayClick(dayNum)}
              >
                {dayNum}
                {day && events[dateKey] && (
                  <div className="text-xs text-red-600">⚫</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const handleDayClick = (day) => {
    setEventDate(
      `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`
    );
    setShowEventForm(true); // Show the event form when a day is clicked
  };

  const createEvent = (e) => {
    e.preventDefault();
    if (eventTitle) {
      const eventKey = eventDate;
      setEvents((prevEvents) => ({
        ...prevEvents,
        [eventKey]: eventTitle,
      }));
      // Reset the form
      setEventTitle("");
      setShowEventForm(false); // Hide the form after creating an event
    }
  };

  const addCheckboxItem = (e) => {
    e.preventDefault();
    if (newCheckboxItem) {
      setCheckboxItems([...checkboxItems, newCheckboxItem]);
      setNewCheckboxItem(""); // Reset input
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div
        className="w-1/4 bg-white py-4 overflow-y-auto border-r-2"
        style={{ maxHeight: "100vh" }}
      >
        {/* <h2 className="text-xl font-bold mb-4">Navigation</h2> */}
        <div className="flex justify-between items-center border rounded-lg bg-gray-50 gap-2 p-1 mx-4">
          <button
            className={`py-2 px-4 rounded-lg text-left ${
              activeTab === "day" ? "bg-white text-black border" : ""
            }`}
            onClick={() => handleTabClick("day")}
          >
            Day
          </button>
          <button
            className={`py-2 px-4 rounded-lg text-left ${
              activeTab === "week" ? "bg-white text-black border" : ""
            }`}
            onClick={() => handleTabClick("week")}
          >
            Week
          </button>
          <button
            className={`py-2 px-4 rounded-lg text-left ${
              activeTab === "month" ? "bg-white text-black border" : ""
            }`}
            onClick={() => handleTabClick("month")}
          >
            Month
          </button>
        </div>

        <hr className="mt-4 mb-4" />

        {/* Month Navigation and Mini Calendar */}
        <div className="flex justify-between mb-4 p-4">
          <span className="self-center font-semibold text-lg">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => changeMonth(-1)}
              className="border rounded-lg p-1"
            >
              <ChevronLeft className="text-blue-500" />
            </button>
            <button
              onClick={() => changeMonth(1)}
              className="border rounded-lg p-1"
            >
              <ChevronRight className="text-blue-500" />
            </button>
          </div>
        </div>
        {renderMiniCalendar()}

        {/* Add Schedule Button */}
        <button
          className=" text-black bg-gray-300 w-full my-6"
          onClick={() => setShowEventForm(!showEventForm)} // Toggle form visibility
        >
          {showEventForm ? (
            "Cancel"
          ) : (
            <div className="flex justify-around items-center">
              <div>Schedule</div> <Plus />
            </div>
          )}
        </button>

        {/* Event Creation Form */}
        {showEventForm && (
          <form onSubmit={createEvent} className="mb-4">
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Event Title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 mb-2 w-full"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 w-full"
            >
              Create Event
            </button>
          </form>
        )}

        {/* Expandable Checkbox Tab */}
        <div className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer mb-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <h2 className="text-lg font-normal">My Calendars</h2>
            <span>{isExpanded ? <ChevronUp /> : <ChevronDown />}</span>
          </div>
          {isExpanded && (
            <div>
              {checkboxItems.map((item, index) => (
                <div
                  key={index}
                  className=" flex justify-start items-center mb-2"
                >
                  <label className="flex justify-center items-center text-sm font-normal ">
                    <input type="checkbox" className="" />
                    {item}
                  </label>
                </div>
              ))}
              <form onSubmit={addCheckboxItem} className="mt-2">
                <input
                  type="text"
                  value={newCheckboxItem}
                  onChange={(e) => setNewCheckboxItem(e.target.value)}
                  placeholder="Add other tab"
                  className="border border-gray-300 rounded-lg p-2 mb-2 w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-lg p-2 w-full"
                >
                  Add
                </button>
              </form>
            </div>
          )}
        </div>
        {/* Expandable Checkbox Tab: Categories */}
        <div className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer mb-2"
            onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
          >
            <h2 className="text-lg font-normal">Categories</h2>
            <span>
              {isCategoriesExpanded ? <ChevronUp /> : <ChevronDown />}
            </span>
          </div>
          {isCategoriesExpanded && (
            <div>
              {categories.map((category, index) => (
                <div key={index} className="mb-2">
                  <label className="flex items-center">{category}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Calendar Area */}
      <div className="w-3/4 overflow-auto">
        <div className="flex justify-between items-center py-4 px-4 border-b border-gray-200 mt-1">
          <div className="flex-grow max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full pl-10 pr-4 py-2 border-none focus:outline-none focus:border-transparent"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 ml-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell size={30} className="text-gray-400" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <MessageSquareX size={30} className="text-gray-400" />
            </button>
            <div className=" border-l border-gray-300 h-8"></div>
            <div className="flex items-center space-x-2">
              <img
                src="https://picsum.photos/id/220/200/300"
                alt="User profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Esther Howard</span>
                <span className="text-xs">esther.howard@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Main header with dynamic month */}
          <div className="flex justify-between items-center py-2 px-4 bg-white">
          <span className="self-center font-semibold text-2xl">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </span>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              {/* Button to open modal */}
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                onClick={toggleModal}
              >
                + Add Schedule
              </button>
            </div>
          </div>

          {/* Modal for adding schedule */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg p-8 w-96">
                <h2 className="text-xl font-bold mb-4">Create New Schedule</h2>

                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter schedule title"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Date</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Time</label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                      onClick={toggleModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        {renderCalendar()}
      </div>
    </div>
  );
};

export default CalendarView;
