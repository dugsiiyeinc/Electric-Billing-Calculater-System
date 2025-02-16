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
    <div >
      <div>
        <h1>Electricity Billing Calculater</h1>
        <input
          type="number"
          value={units}
          onChange={(event) => setUnites(event.target.value)}
        />
        <button onClick={calculateTheBill}>Calculate the Bill</button>
        {theBillAmount !== null && (
          <div>
            Total Amount : <span>{theBillAmount}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingCalculater;
