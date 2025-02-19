import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaPrint } from "react-icons/fa";

const SavedBills = () => {
  const savedBills = JSON.parse(localStorage.getItem("savedBills")) || [];
  const [searchTerm, setSearchTerm] = useState("");

  const clearSavedBills = () => {
    localStorage.removeItem("savedBills");
    window.location.reload();
  };

  const filteredBills = savedBills.filter((bill) =>
    bill.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white w-full max-w-5xl rounded-lg shadow-2xl p-8">
          {/* Heading with responsive font size */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-xl font-semibold text-gray-800 text-center mb-6">
            Saved Bills
          </h1>

          {/* Search Box */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by company name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Print Button and Clear Data Button */}
          <div className="mb-6 flex justify-between items-center">
            <button className="flex gap-2 items-center bg-green-600 py-2 px-4 rounded-md text-sm sm:text-base font-medium capitalize text-white transition-all duration-200 hover:bg-green-700 hover:shadow-lg">
              <FaPrint size={20} /> Print
            </button>
            <button
              onClick={clearSavedBills}
              className="flex gap-2 items-center bg-red-600 py-2 px-4 rounded-md text-sm sm:text-base font-medium capitalize text-white transition-all duration-200 hover:bg-red-700 hover:shadow-lg"
            >
              Clear Data
            </button>
          </div>

          {/* Bill Data Table with responsive text size */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm sm:text-base md:text-lg text-gray-500">
              <thead className="text-xs sm:text-sm md:text-base text-gray-700 bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Company</th>
                  <th className="py-3 px-4 text-left">Rate</th>
                  <th className="py-3 px-4 text-left">Units</th>
                  <th className="py-3 px-4 text-left">Bill Amount</th>
                  <th className="py-3 px-4 text-left">Company Profit/Loss</th>
                  <th className="py-3 px-4 text-left">My Profit/Loss</th>
                  <th className="py-3 px-4 text-left">Profit/Loss Difference</th>
                </tr>
              </thead>
              <tbody>
                {filteredBills.map((bill, index) => (
                  <tr key={index} className="border-t border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-600">{bill.company}</td>
                    <td className="py-4 px-4 text-gray-600">{bill.rate}</td>
                    <td className="py-4 px-4 text-gray-600">{bill.units}</td>
                    <td className="py-4 px-4 text-gray-600">${bill.billAmount}</td>
                    <td
                      className={`py-4 px-4 text-gray-600 ${bill.companyProfitLoss >= 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {bill.companyProfitLoss}
                    </td>
                    <td
                      className={`py-4 px-4 text-gray-600 ${bill.myProfitLoss >= 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {bill.myProfitLoss}
                    </td>
                    <td
                      className={`py-4 px-4 text-gray-600 ${bill.profitOrLoss >= 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {bill.profitOrLoss}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SavedBills;