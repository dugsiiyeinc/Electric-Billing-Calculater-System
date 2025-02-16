import React, { useEffect, useState } from "react";

const BillingCalculator = () => {
  const [units, setUnits] = useState("");
  const [billAmount, setBillAmount] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedBill = localStorage.getItem("theLastBillAmount");
    if (savedBill && !isNaN(savedBill)) {
      setBillAmount(savedBill);
    }
  }, []);

  const calculateBill = () => {
    if (units === "") {
      setError("Please enter the number of units");
      setBillAmount(null);
      return;
    }

    const unitConsumed = parseFloat(units);
    if (isNaN(unitConsumed) || unitConsumed <= 0) {
      setError("Please enter a valid number of units");
      setBillAmount(null);
    } else {
      setError("");
      const unitRate = 0.5;
      const total = unitConsumed * unitRate;
      setBillAmount(total.toFixed(2));
      setUnits("");

      localStorage.setItem("theLastBillAmount", total.toFixed(2));
    }
  };

  const resetBill = () => {
    setBillAmount(null);
    setUnits("");
    setError("");

    localStorage.removeItem("theLastBillAmount");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-700 px-4">
      <div className="bg-white w-full max-w-lg md:max-w-md lg:max-w-xl rounded-lg shadow-lg p-6 space-y-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 text-center">
          Electricity Billing Calculator
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="number"
            value={units}
            onChange={(event) => setUnits(event.target.value)}
            placeholder="Enter consumed units"
            className="w-full h-14 md:h-16 lg:h-18 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 p-3 text-lg lg:placeholder:text-xl md:placeholder:text-lg placeholder:tracking-wider "
          />

          {error && (
            <div className="text-md text-red-600 text-center font-medium">
              {error}
            </div>
          )}

          <button
            className="w-full h-14 md:h-16 lg:h-18 bg-blue-500 hover:bg-blue-700 transition duration-200 text-white rounded-md lg:text-xl md:text-lg text-md font-semibold "
            onClick={calculateBill}
          >
            Calculate Bill
          </button>

          <button
            className="w-full h-14 md:h-16 lg:h-18 bg-green-600 hover:bg-green-700 transition duration-200 rounded-md text-white  lg:text-xl md:text-lg text-md font-semibold "
            onClick={resetBill}
          >
            Reset
          </button>
        </div>

        {billAmount !== null && (
          <div className="mt-4 text-lg font-medium text-center text-gray-700">
            Total Amount: <span className="font-bold">${billAmount}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingCalculator;
