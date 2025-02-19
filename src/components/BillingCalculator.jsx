import React, { useState } from "react";
import { toast } from "react-hot-toast";
import CustomToaster from "./CustomeToaster";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const companyRates = {
  Beco: 0.42,
  SomPower: 0.5,
  NEC: 0.45,
};

const BillingCalculator = () => {
  const [company, setCompany] = useState("Beco");
  const [units, setUnits] = useState("");
  const [billAmount, setBillAmount] = useState(null);
  const [error, setError] = useState("");
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
      setUnits("");

      localStorage.setItem("theLastBillAmount", total.toFixed(2));
      localStorage.setItem("lastCompany", company);
      localStorage.setItem("lastUnits", units);
      toast.success("Bill calculated successfully!");
    }
  };

  const resetBill = () => {
    setBillAmount(null);
    setUnits("");
    setError("");
    localStorage.removeItem("theLastBillAmount");
    localStorage.removeItem("lastCompany");
    localStorage.removeItem("lastUnits");
    toast.info("Bill reset successfully!");
  };

  const saveBill = () => {
    navigate("/saved-bills");
  };

  return (
    <div>
      <Navbar />
      <CustomToaster />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white w-full max-w-lg md:max-w-md lg:max-w-xl rounded-lg shadow-lg p-6 space-y-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 text-center">
            Electricity Billing Calculator
          </h1>

          <div className="flex flex-col gap-4">
            <select
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              className="w-full h-14 border border-gray-300 rounded-md p-3 text-lg"
            >
              {Object.keys(companyRates).map((comp) => (
                <option key={comp} value={comp}>
                  {comp}
                </option>
              ))}
            </select>

            <div className="text-lg font-medium text-center">
              Electric Rate:{" "}
              <span className="font-bold">
                {companyRates[company]} per unit
              </span>
            </div>

            <input
              type="number"
              value={units}
              onChange={(event) => setUnits(event.target.value)}
              placeholder="Enter consumed units"
              className="w-full h-14 border border-gray-300 rounded-md p-3 text-lg"
            />

            {error && (
              <div className="text-md text-red-600 text-center font-medium">
                {error}
              </div>
            )}

            <button
              className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 transition duration-200 text-white rounded-md text-lg font-semibold"
              onClick={calculateBill}
            >
              Calculate Bill
            </button>

            <button
              className="w-full h-14 bg-green-600 hover:bg-green-700 transition duration-200 text-white rounded-md text-lg font-semibold"
              onClick={resetBill}
            >
              Reset
            </button>

            <button
              className="w-full h-14 bg-blue-600 hover:bg-blue-700 transition duration-200 text-white rounded-md text-lg font-semibold"
              onClick={saveBill}
            >
              Save
            </button>
          </div>

          {billAmount !== null && (
            <div className="mt-4 text-lg font-medium text-center text-gray-700">
              Total Amount: <span className="font-bold">${billAmount}</span>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BillingCalculator;
