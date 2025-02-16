import React, { useState } from "react";

const BillingCalculater = () => {
  const [units, setUnites] = useState("");
  const [theBillAmount, setTheBillAmount] = useState(null);

  const calculateTheBill = () => {
    const unitRate = 0.5;
    const total = parseFloat(units) * unitRate;
    setTheBillAmount(isNaN(total) ? null : total.toFixed(2));
    setUnites("");
  };

  return (
    <div className="min-h-screen mx-auto flex flex-col items-center justify-center bg-indigo-700 p-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 space-y-4">
        <h1 className="text-2xl font-semibold text-gray-700 text-center">
          Electricity Billing Calculater
        </h1>
        <input
          type="number"
          value={units}
          onChange={(event) => setUnites(event.target.value)}
          placeholder="Enter consumed units"
          className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 p-3"
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 transition duration-200 text-white rounded-md py-2"
          onClick={calculateTheBill}
        >
          Calculate the Bill
        </button>
       
        {theBillAmount !== null && (
          <div className="mt-4 text-lg font-medium text-center text-gray-700">
            Total Amount : <span>{theBillAmount}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingCalculater;
