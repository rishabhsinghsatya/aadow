import {
  ChevronDown,
  Cloud,
  Filter,
  FilterIcon,
  Link,
  Trash2,
} from "lucide-react";
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
      // className="p-2 bg-white text-black rounded hover:bg-gray-300"
      onClick={onDelete}
    >
      <Trash2 className="text-red-600 bg-white  rounded hover:bg-gray-300" />{" "}
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
      // className="p-2 bg-white text-black rounded hover:bg-gray-300"
      onClick={onDelete}
    >
      <Trash2 className="text-red-600 bg-white  rounded hover:bg-gray-300" />
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
          <Link />
        </div>
        <div className="border h-8"></div>
        <div className="border rounded-md bg-white">
          <Trash2 className="text-red-600" />
        </div>
      </div>
      <div className="mb-6 flex justify-evenly w-full">
        <h2 className="text-lg font-semibold mb-2">Condition settings for:</h2>
        <div className="flex items-center gap-2">
          {/* <div className="bg-pink-600 px-1 border rounded-sm"> */}
          <FilterIcon className="text-white bg-pink-600 rounded-lg h-9 w-9 p-1" />
          {/* </div> */}
          <span className="px-3 py-1 rounded-md text-base font-medium">
            Update stage
          </span>
          <span className="text-gray-500">→</span>
          <Cloud className="text-white bg-blue-700 rounded-lg h-9 w-9 p-1" />
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
