import { Ellipsis } from "lucide-react";
import React from "react";

// Data
const data = [
  { hour: "12 am", Sun: 1, Mon: 2, Tue: 3, Wed: 4, Thu: 5, Fri: 5, Sat: 5 },
  { hour: "3 am", Sun: 1, Mon: 2, Tue: 3, Wed: 4, Thu: 5, Fri: 5, Sat: 5 },
  { hour: "6 am", Sun: 1, Mon: 2, Tue: 3, Wed: 4, Thu: 5, Fri: 5, Sat: 5 },
  { hour: "9 am", Sun: 2, Mon: 3, Tue: 4, Wed: 5, Thu: 5, Fri: 5, Sat: 5 },
  { hour: "12 pm", Sun: 2, Mon: 3, Tue: 4, Wed: 5, Thu: 5, Fri: 5, Sat: 5 },
  { hour: "3 pm", Sun: 3, Mon: 4, Tue: 5, Wed: 5, Thu: 5, Fri: 5, Sat: 5 },
  { hour: "6 pm", Sun: 3, Mon: 4, Tue: 5, Wed: 5, Thu: 5, Fri: 5, Sat: 5 },
  { hour: "9 pm", Sun: 3, Mon: 4, Tue: 5, Wed: 5, Thu: 5, Fri: 5, Sat: 5 },
];

// Days of the week
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Function to get color intensity based on the number of visits
const getColor = (value) => {
  const intensity = Math.min(255, Math.round((value / 5) * 255)); // Scale value to RGB intensity
  return `rgb(${255 - intensity}, ${255 - intensity}, 255)`; // Blue gradient effect
};

const VisitsByTime = () => {
  return (
    <div className="flex justify-center">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-700 font-semibold text-lg">Visit By Time</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <Ellipsis />{" "}
          </button>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <div className="grid grid-cols-8 gap-[2px]">
            {data.map((row, rowIndex) => (
              <React.Fragment key={row.hour}>
                <div className="text-right text-xs font-medium text-gray-600 pr-2">
                  {row.hour}
                </div>
                {days.map((day) => (
                  <div
                    key={`${row.hour}-${day}`}
                    className="w-[3.5rem] h-8"
                    style={{ backgroundColor: getColor(row[day]) }}
                  ></div>
                ))}
              </React.Fragment>
            ))}

            <div className="col-start-2 col-span-7 grid grid-cols-7 gap-1 mt-2">
              {days.map((day) => (
                <div
                  key={`bottom-${day}`}
                  className="text-center text-xs font-medium text-gray-600"
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-2 text-xs">
            <div className="flex items-center">
              <span className="w-2 h-4 bg-blue-900 inline-block mr-1"></span>
              3,000+
            </div>
            <div className="flex items-center">
              <span className="w-2 h-4 bg-blue-700 inline-block mr-1"></span>
              2,000+
            </div>
            <div className="flex items-center">
              <span className="w-2 h-4 bg-blue-500 inline-block mr-1"></span>
              1,000+
            </div>
            <div className="flex items-center">
              <span className="w-2 h-4 bg-blue-300 inline-block mr-1"></span>
              500+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitsByTime;
