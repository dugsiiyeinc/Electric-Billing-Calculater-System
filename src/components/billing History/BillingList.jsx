import React, { useState } from "react";
import BillingItem from "./BillingItem";
import { FaPrint } from "react-icons/fa";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const BillingList = ({ data }) => {
  const [startIndex,setStartIndex] = useState(0);
  const rowPerPage = 10;

  const handleNext  = () =>{
    if(startIndex < data.length){
      setStartIndex(startIndex + rowPerPage);
    }
  }
  const handlePrev = () =>{
    if(startIndex > 0){
      setStartIndex(startIndex - rowPerPage);
    }
  }
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
            {data.slice(startIndex, startIndex + rowPerPage).map((row) => (
              <BillingItem key={row.id} row={row} />
            ))}
              {
              data.length === 0 && <tr><td className="p-4 text-gray-700">No available data History.</td></tr>
            }
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button 
        onClick={handlePrev}  
        disabled={startIndex === 0}
        className="flex items-center border py-2 px-2 rounded  text-sm font-medium bg-white capitalize text-black mt-2 cursor-pointer transition-colors duration-200  hover:bg-gray-300">
          <MdNavigateBefore size={20} />   Previous 
        </button>
        <button 
          onClick={handleNext}  
          disabled={startIndex + rowPerPage >= data.length}
          className="flex items-center border py-2 px-3  rounded  text-sm font-medium bg-white capitalize text-black mt-2 cursor-pointer transition-colors duration-200  hover:bg-gray-300">
          Next <MdNavigateNext size={20} />
        </button>
      </div>
    </div>
  );
};

export default BillingList;
