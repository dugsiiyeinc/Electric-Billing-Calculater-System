import React from "react";
import BillingItem from "./BillingItem";
import { FaPrint } from "react-icons/fa";

const BillingList = ({ data }) => {
  return (
    <div className="w-full max-w-full mx-auto  mt-8">
      <div className="mb-4 flex justify-end">
        <button className=" flex gap-2 items-center bg-green-600 py-2 px-3  rounded  text-sm font-medium capitalize text-white mt-2 cursor-pointer transition-colors duration-200  hover:bg-green-700">
          print <FaPrint siz={20} />
        </button>
      </div>
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr className="text-left">
              <th className="border border-gray-300 text-sm  font-semibold p-2">
                ID
              </th>
              <th className="border border-gray-300 text-sm  font-semibold p-2">
                Name
              </th>
              <th className="border border-gray-300 text-sm  font-semibold p-2">
                Bill
              </th>
              <th className="border border-gray-300 text-sm  font-semibold p-2">
                Rate
              </th>
              <th className="border border-gray-300 text-sm  font-semibold p-2">
                Last Month
              </th>
              <th className="border border-gray-300 text-sm  font-semibold p-2">
                Current Month
              </th>
              <th className="border border-gray-300 text-sm  font-semibold p-2">
                profit
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <BillingItem key={row.id} row={row} />
            ))}
              {
              data.length === 0 && <p className="p-4 text-gray-700">No available data History.</p>
            }
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className="bg-indigo-600 py-2 px-3  rounded  text-sm font-medium capitalize text-white mt-2 cursor-pointer transition-colors duration-200  hover:bg-indigo-700">
          Previous
        </button>
        <button className="bg-indigo-600 py-2 px-3  rounded  text-sm font-medium capitalize text-white mt-2 cursor-pointer transition-colors duration-200  hover:bg-indigo-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default BillingList;
