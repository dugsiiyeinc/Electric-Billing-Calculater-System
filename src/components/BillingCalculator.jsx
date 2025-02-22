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

const companyCostRates = {
  Beco: 0.35,
  SomPower: 0.40,
  NEC: 0.38,
};

const myCostRate = 0.30; // Your cost rate per unit

const BillingCalculator = () => {
  const [company, setCompany] = useState("Beco");
  const [units, setUnits] = useState("");
  const [billAmount, setBillAmount] = useState(null);
  const [companyProfitLoss, setCompanyProfitLoss] = useState(null);
  const [myProfitLoss, setMyProfitLoss] = useState(null);
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

      // Calculate company profit/loss
      const companyCost = unitConsumed * companyCostRates[company];
      const companyProfitLoss = (total - companyCost).toFixed(2);
      setCompanyProfitLoss(companyProfitLoss);

      // Calculate my profit/loss
      const myCost = unitConsumed * myCostRate;
      const myProfitLoss = (total - myCost).toFixed(2);
      setMyProfitLoss(myProfitLoss);

      // Save the bill to local storage in the required format
      const bill = {
        id: Date.now(), // Unique ID for each bill
        name: company,
        bill: unitConsumed,
        rate: companyRates[company],
        lastMonth: getLastBillAmount(),
        currentMonth: total.toFixed(2),
        profit: parseFloat(myProfitLoss), // Profit/Loss
      };

      saveBillToLocalStorage(bill);
      setUnits("");
      toast.success("Bill calculated and saved successfully!");
    }
  };

  const getLastBillAmount = () => {
    const savedBills = JSON.parse(localStorage.getItem("savedBills")) || [];
    return savedBills.length > 0 ? savedBills[savedBills.length - 1].currentMonth : 0;
  };

  const saveBillToLocalStorage = (bill) => {
    const savedBills = JSON.parse(localStorage.getItem("savedBills")) || [];
    savedBills.push(bill);
    localStorage.setItem("savedBills", JSON.stringify(savedBills));
  };

  const resetBill = () => {
    setBillAmount(null);
    setCompanyProfitLoss(null);
    setMyProfitLoss(null);
    setUnits("");
    setError("");
    toast.info("Bill reset successfully!");
  };

  const saveBill = () => {
    const onlineUser = JSON.parse(localStorage.getItem("onlineUser")) || null;
    if(onlineUser){
      navigate("/savedData"); // Navigate to the SavedData page
    }else{
      toast.error("if you want to see saved data first Login !");
      navigate("/login");
    }
   
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-300">
      <Navbar />
      <CustomToaster />
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 space-y-8">
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
                className="w-full h-12 border border-gray-300 rounded-md px-4 text-lg"
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
              <span className="font-bold text-indigo-600">
                {companyRates[company]} per unit
              </span>
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
                className="w-full h-12 border border-gray-300 rounded-md px-4 text-lg"
              />
              {error && (
                <div className="text-red-600 text-center text-sm font-medium mt-1">
                  {error}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <button
                className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-md transition duration-200"
                onClick={calculateBill}
              >
                Calculate Bill
              </button>

              <button
                className="w-full h-14 bg-gray-500 hover:bg-gray-600 text-white font-semibold text-lg rounded-md transition duration-200"
                onClick={resetBill}
              >
                Reset
              </button>

              <button
                className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-md transition duration-200"
                onClick={saveBill}
              >
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

              <div className="flex justify-between">
                <span>Company Profit/Loss:</span>
                <span
                  className={`font-bold ${companyProfitLoss >= 0 ? "text-green-500" : "text-red-500"}`}
                >
                  {companyProfitLoss >= 0 ? `+${companyProfitLoss}` : companyProfitLoss}
                </span>
              </div>

              <div className="flex justify-between">
                <span>My Profit/Loss:</span>
                <span
                  className={`font-bold ${myProfitLoss >= 0 ? "text-green-500" : "text-red-500"}`}
                >
                  {myProfitLoss >= 0 ? `+${myProfitLoss}` : myProfitLoss}
                </span>
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