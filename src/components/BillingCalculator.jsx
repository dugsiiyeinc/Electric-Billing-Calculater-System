import React, { useState } from "react";
import { toast } from "react-hot-toast";
import CustomToaster from "./CustomeToaster";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { FaRegSave, FaSyncAlt, FaCalculator } from "react-icons/fa";

const companyRates = {
  Beco: 0.42,
  SomPower: 0.5,
  NEC: 0.45,
  MogadishuPower:0.55,
  BlueSky: 0.6
};

const BillingCalculator = () => {
  const [company, setCompany] = useState("Beco");
  const [units, setUnits] = useState("");
  const [billAmount, setBillAmount] = useState(null);
  const [error, setError] = useState("");
  const [lastCalculatedBill, setLastCalculatedBill] = useState(null);
  const navigate = useNavigate();

  const calculateBill = () => {
    if (units === "") {
      setError("Please enter the number of units");
      setBillAmount(null);
      toast.error("Please enter the number of units");
      return;
    }

    const unitConsumed = parseFloat(units);
    if (isNaN(unitConsumed) || unitConsumed <= 0) {
      setError("Please enter a valid number of units");
      setBillAmount(null);
      toast.error("Please enter a valid number!");
    } else {
      setError("");
      const total = unitConsumed * companyRates[company];
      setBillAmount(total.toFixed(2));

      // Store the latest calculation in state but NOT in localStorage
      const bill = {
        id: Date.now(),
        name: company,
        bill: unitConsumed,
        rate: companyRates[company],
        lastMonth: getLastBillAmount(),
        currentMonth: total.toFixed(2),
      };

      setLastCalculatedBill(bill); // Store the bill in state only
      setUnits("");
      toast.success("Bill calculated successfully!");
    }
  };

  const getLastBillAmount = () => {
    const savedBills = JSON.parse(localStorage.getItem("savedBills")) || [];
    return savedBills.length > 0 ? savedBills[savedBills.length - 1].currentMonth : 0;
  };

  const saveBillToLocalStorage = () => {
    if (!lastCalculatedBill) {
      toast.error("No bill calculated to save!");
      return;
    }

    const savedBills = JSON.parse(localStorage.getItem("savedBills")) || [];
    savedBills.push(lastCalculatedBill);
    localStorage.setItem("savedBills", JSON.stringify(savedBills));

    toast.success("Bill saved successfully!");
  };

  const resetBill = () => {
    setBillAmount(null);
    setUnits("");
    setError("");
    setLastCalculatedBill(null);
    toast.info("Bill reset successfully!");
  };

  const saveBill = () => {
    saveBillToLocalStorage();
    const onlineUser = JSON.parse(localStorage.getItem("onlineUser")) || null;
    if (onlineUser) {
      navigate("/savedData");
    } else {
      toast.error("If you want to see saved data, please log in first!");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <Navbar />
      <CustomToaster />
      <div className="min-h-screen flex items-center justify-center py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-lg w-full bg-white shadow rounded-lg p-8 space-y-8 transform transition-all duration-300 ease-in-out hover:scale-105">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Electricity Billing Calculator
          </h1>

          <div className="space-y-6">
            <div>
              <label htmlFor="company" className="block text-lg font-medium text-gray-700">
                Select Company
              </label>
              <select
                id="company"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="w-full h-12 border border-gray-300 rounded-md px-4 text-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                {Object.keys(companyRates).map((comp) => (
                  <option key={comp} value={comp}>
                    {comp}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-lg font-medium text-center">
              Electric Rate:{" "}
              <span className="font-bold text-indigo-600">{companyRates[company]} per unit</span>
            </div>

            <div>
              <label htmlFor="units" className="block text-lg font-medium text-gray-700">
                Enter Consumed Units
              </label>
              <input
                id="units"
                type="number"
                value={units}
                onChange={(event) => setUnits(event.target.value)}
                placeholder="Enter consumed units"
                className="w-full h-12 border border-gray-300 rounded-md px-4 text-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              {error && (
                <div className="text-red-600 text-center text-sm font-medium mt-1">{error}</div>
              )}
            </div>

            <div className="space-y-4">
              <button
                className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-md transition duration-200 flex items-center justify-center gap-2"
                onClick={calculateBill}
              >
                <FaCalculator />
                Calculate Bill
              </button>

              <button
                className="w-full h-14 bg-gray-500 hover:bg-gray-600 text-white font-semibold text-lg rounded-md transition duration-200 flex items-center justify-center gap-2"
                onClick={resetBill}
              >
                <FaSyncAlt />
                Reset
              </button>

              <button
                className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-md transition duration-200 flex items-center justify-center gap-2"
                onClick={saveBill}
              >
                <FaRegSave />
                Save Bill
              </button>
            </div>
          </div>

          {billAmount !== null && (
            <div className="mt-8 text-lg text-gray-700">
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="font-bold text-indigo-700">${billAmount}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BillingCalculator;
