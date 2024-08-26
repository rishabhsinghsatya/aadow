import React, { useState } from "react";

const FilterRow = ({ onDelete }) => (
  <div className="flex items-center">
    <select className="mr-4 p-2  rounded-md bg-white flex-1 min-w-[150px]">
      <option>Opportunity ID</option>
      <option>Expected amount</option>
      <option>Fiscal year</option>
      <option>Stage</option>
      <option>Close date</option>
    </select>

    <select className="mr-4 p-2 border rounded-md bg-white flex-1 min-w-[150px]">
      <option>Is equal to</option>
      <option>Is not equal to</option>
      <option>Is greater than</option>
      <option>Is less than</option>
      <option>Contains</option>
      <option>Does not contain</option>
    </select>

    <input
      type="text"
      className="flex-grow m-0 p-0 border rounded-md"
      placeholder="Enter value"
    />

    <button
      className="p-2 bg-white text-black rounded hover:bg-red-600"
      onClick={onDelete}
    >
      Delete
    </button>
  </div>
);

const SecondFilterRow = ({ onDelete }) => (
  <div className="flex m-2 px-10 mb-4 items-center border rounded-full bg-gray-50">
    <select className="mr-4 p-2 border rounded-md bg-white flex-1 min-w-[150px]">
      <option>Opportunity ID</option>
      <option>Expected amount</option>
      <option>Fiscal year</option>
      <option>Stage</option>
      <option>Close date</option>
    </select>

    <select className="mr-4 p-2 border rounded-md bg-white flex-1 min-w-[150px]">
      <option>Is equal to</option>
      <option>Is not equal to</option>
      <option>Is greater than</option>
      <option>Is less than</option>
      <option>Contains</option>
      <option>Does not contain</option>
    </select>

    <input
      type="text"
      className="flex-grow mr-2 p-0 border rounded"
      placeholder="Enter value"
    />

    <button
      className="p-2 bg-white text-black rounded hover:bg-red-600"
      onClick={onDelete}
    >
      Delete
    </button>
  </div>
);

const TriggerWorkFlow = () => {
  const [firstRows, setFirstRows] = useState([1]);
  const [secondRows, setSecondRows] = useState([1, 2]);
  const [condition, setCondition] = useState("AND");

  const addFirstRow = () => setFirstRows([...firstRows, firstRows.length + 1]);

  const deleteFirstRow = (index) =>
    setFirstRows(firstRows.filter((_, i) => i !== index));

  const addSecondRow = () =>
    setSecondRows([...secondRows, secondRows.length + 1]);

  const deleteSecondRow = (index) =>
    setSecondRows(secondRows.filter((_, i) => i !== index));

  return (
    <div className="flex flex-col items-center  gap-8">
      <div className="flex justify-end items-center gap-2 border-b-2 py-4 px-4 w-full">
        <div>Last run: 5 Jun, 14:53</div>
        <div className="border h-8"></div>
        <div className="mr-2 p-1 border rounded-md bg-white  w-[100px] h-8 text-center font-bold">
          Run now
        </div>
        <div className="mr-2 p-1 border rounded-md bg-white w-[100px] h-8 text-center font-bold">
          Enabled
        </div>
        <div className="border rounded-md bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="purple"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </div>
        <div className="border h-8"></div>
        <div className="border rounded-md bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="red"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </div>
      <div className="mb-6 flex justify-evenly w-full">
        <h2 className="text-lg font-semibold mb-2">Condition settings for:</h2>
        <div className="flex items-center gap-2">
          <div className="bg-pink-600 px-1 border rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="px-3 py-1 rounded-md text-base font-medium">
            Update stage
          </span>
          <span className="text-gray-500">→</span>
          <div className="bg-blue-600 px-1 border rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="px-3 py-1 rounded-md text-base font-medium">
            Salesforce leads
          </span>
        </div>
      </div>

      <div className="w-1/2 p-2 px-10 border rounded-3xl shadow bg-gray-50">
        {firstRows.map((_, index) => (
          <FilterRow
            key={`first-${index}`}
            onDelete={() => deleteFirstRow(index)}
          />
        ))}
        {/* <button
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={addFirstRow}
        >
          Add Row to First Filter
        </button> */}
      </div>

      {/* <div className="flex flex-col items-center">
        <select
          className="p-2 mb-2 border rounded bg-gray-100"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>
        <div className="w-[2px] h-24 bg-gray-300"></div>
      </div> */}

      <div className="w-1/2 p-2  border rounded-lg shadow bg-white">
        {secondRows.map((_, index) => (
          <SecondFilterRow
            key={`second-${index}`}
            onDelete={() => deleteSecondRow(index)}
          />
        ))}
        <button
          className=" text-purple-500 text-sm font-semibold"
          onClick={addSecondRow}
        >
          + Add condition
        </button>
      </div>
      <div className="mb-6 flex justify-evenly w-full">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md text-sm font-medium">
            + Add rule
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md text-sm font-medium">
            + Add inner group
          </button>
        </div>
        <button className="px-4 py-2 bg-purple-700 text-white rounded-md text-sm font-medium">
          Run Query
        </button>
      </div>
    </div>
  );
};

export default TriggerWorkFlow;
