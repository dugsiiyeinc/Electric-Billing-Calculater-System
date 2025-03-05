import React, { useState } from "react";

const companies = [
  {
    id: 1,
    name: "Beco",
    rate: 0.42,
  },
  {
    id: 2,
    name: "SomPower",
    rate: 0.5,
  },
  {
    id: 3,
    name: "NEC",
    rate: 0.45,
  },
];

const BillingForm = ({ setSelectedCategory }) => {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [bill, setBill] = useState("");
  const [month, setMonth] = useState("");

  const handleSelectedCompanyChange = (e) => {
    const optionId = Number(e.target.value);
    const selectedOption = companies.find((company) => company.id === optionId);
    console.log(selectedOption);
    setSelectedCategory(selectedOption.name.toLocaleLowerCase());
    setSelectedCompany(selectedOption);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "bill") {
      const billing = Number(value);
      // Ensure it's a valid number before setting the state
      if (!isNaN(billing) && billing > 0) {
        setBill(billing);
        setSelectedCategory(billing);
      } else {
        setBill(""); // Reset to empty if invalid value
      }
    }

    if (name === "month") {
      const currentMonth = parseFloat(value);
      // Ensure it's a valid number before setting the state
      if (!isNaN(currentMonth) && currentMonth > 0) {
        setMonth(currentMonth);
        setSelectedCategory(currentMonth);
      } else {
        setMonth(""); // Reset to empty if invalid value
      }
    }
  };

  return (
    <div className="w-full flex items-center lg:justify-center flex-wrap gap-2 mt-4">
      <select
        value={selectedCompany.id}
        onChange={handleSelectedCompanyChange}
        className="field-sizing-content border border-gray-300 py-1 px-2 rounded"
      >
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="bill"
        placeholder="Enter bill"
        value={bill}
        onChange={handleChange}
        className="field-sizing-content  border border-gray-300 py-1 px-2 rounded"
      />
      <input
        type="number"
        placeholder="Rate"
        value={selectedCompany.rate}
        readOnly
        className="field-sizing-content border bg-gray-200 border-gray-300 py-1 px-2 rounded"
      />
      <input
        type="number"
        name="month"
        value={month}
        onChange={handleChange}
        placeholder="Enter Month"
        className="field-sizing-content  border border-gray-300 py-1 px-2 rounded"
      />
    </div>
  );
};

export default BillingForm;
