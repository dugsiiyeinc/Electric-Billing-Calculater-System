import React, { useEffect, useRef, useState } from "react";
import BillingForm from "./BillingForm";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BillingList from "./BillingList";
// const data = [
//   { id: 1, name: "Beco", bill: 25, rate: 0.39, lastMonth: 10.22, currentMonth: 11, profit: +1.95 },
//   { id: 2, name: "Blue Sky", bill: 28, rate: 0.45, lastMonth: 12.50, currentMonth: 9.80, profit: -1.20 },
//   { id: 3, name: "Mogadishu Power", bill: 24, rate: 0.41, lastMonth: 9.88, currentMonth: 10, profit: +2.10 },
//   { id: 4, name: "Blue Sky", bill: 26, rate: 0.38, lastMonth: 11.90, currentMonth: 9.55, profit: -1.75 },
//   { id: 5, name: "Blue Sky", bill: 22, rate: 0.40, lastMonth: 9.45, currentMonth: 12, profit: +2.50 },
//   { id: 6, name: "Mogadishu Power", bill: 27, rate: 0.43, lastMonth: 11.30, currentMonth: 9.70, profit: -1.50 },
//   { id: 7, name: "Beco", bill: 23, rate: 0.42, lastMonth: 9.66, currentMonth: 12, profit: +2.34 },
//   { id: 8, name: "Blue Sky", bill: 29, rate: 0.47, lastMonth: 12.75, currentMonth: 9.85, profit: -1.80 },
//   { id: 9, name: "Mogadishu Power", bill: 21, rate: 0.37, lastMonth: 9.10, currentMonth: 13, profit: +2.80 },
//   { id: 10, name: "Beco", bill: 30, rate: 0.50, lastMonth: 13.00, currentMonth: 9.60, profit: -2.00 },
//   { id: 11, name: "Beco", bill: 25, rate: 0.39, lastMonth: 10.22, currentMonth: 11, profit: +1.95 },
//   { id: 12, name: "Blue Sky", bill: 28, rate: 0.45, lastMonth: 12.50, currentMonth: 9.80, profit: -1.20 },
//   { id: 13, name: "Mogadishu Power", bill: 24, rate: 0.41, lastMonth: 9.88, currentMonth: 10, profit: +2.10 },
//   { id: 14, name: "Blue Sky", bill: 26, rate: 0.38, lastMonth: 11.90, currentMonth: 9.55, profit: -1.75 },
//   { id: 15, name: "Blue Sky", bill: 22, rate: 0.40, lastMonth: 9.45, currentMonth: 12, profit: +2.50 },
//   { id: 16, name: "Mogadishu Power", bill: 27, rate: 0.43, lastMonth: 11.30, currentMonth: 9.70, profit: -1.50 },
//   { id: 17, name: "Beco", bill: 23, rate: 0.42, lastMonth: 9.66, currentMonth: 12, profit: +2.34 },
//   { id: 18, name: "Blue Sky", bill: 29, rate: 0.47, lastMonth: 12.75, currentMonth: 9.85, profit: -1.80 },
//   { id: 19, name: "Mogadishu Power", bill: 21, rate: 0.37, lastMonth: 9.10, currentMonth: 13, profit: +2.80 },
//   { id: 20, name: "Beco", bill: 30, rate: 0.50, lastMonth: 13.00, currentMonth: 9.60, profit: -2.00 },
//   { id: 21, name: "Beco", bill: 25, rate: 0.39, lastMonth: 10.22, currentMonth: 11, profit: +1.95 },
//   { id: 22, name: "Blue Sky", bill: 28, rate: 0.45, lastMonth: 12.50, currentMonth: 9.80, profit: -1.20 },
//   { id: 23, name: "Mogadishu Power", bill: 24, rate: 0.41, lastMonth: 9.88, currentMonth: 10, profit: +2.10 },
//   { id: 24, name: "Blue Sky", bill: 26, rate: 0.38, lastMonth: 11.90, currentMonth: 9.55, profit: -1.75 },
//   { id: 25, name: "Blue Sky", bill: 22, rate: 0.40, lastMonth: 9.45, currentMonth: 12, profit: +2.50 },
//   { id: 26, name: "Mogadishu Power", bill: 27, rate: 0.43, lastMonth: 11.30, currentMonth: 9.70, profit: -1.50 },
//   { id: 27, name: "Beco", bill: 23, rate: 0.42, lastMonth: 9.66, currentMonth: 12, profit: +2.34 },
//   { id: 28, name: "Blue Sky", bill: 29, rate: 0.47, lastMonth: 12.75, currentMonth: 9.85, profit: -1.80 },
//   { id: 29, name: "Mogadishu Power", bill: 21, rate: 0.37, lastMonth: 9.10, currentMonth: 13, profit: +2.80 },
//   { id: 30, name: "Beco", bill: 30, rate: 0.50, lastMonth: 13.00, currentMonth: 9.60, profit: -2.00 },
// ];

const BillingApp = () => {
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const [originalData, setOriginalData] = useState(
    JSON.parse(localStorage.getItem("savedBills")) || []
  );
  const [filteredBillingHistory, setFilteredBillingHistory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (selectedCategory) {
      const filteredData = () => {
        try {
          const filteredHistory = originalData.filter(
            ({ name, bill, lastMonth, currentMonth }) =>
              name.toLocaleLowerCase() === selectedCategory ||
              bill === selectedCategory ||
              currentMonth === selectedCategory ||
              lastMonth === selectedCategory
          );
          console.log(filteredHistory);
          setFilteredBillingHistory(filteredHistory);
        } catch (error) {
          console.error(error);
        }
      };
      filteredData();
    } else {
      setFilteredBillingHistory(originalData);
    }
  }, [selectedCategory, originalData]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceQuery(query);
    }, 300);

    return () => clearTimeout(timerId);
  }, [query]);

  useEffect(() => {
    if (debounceQuery) {
      const searchData = () => {
        try {
          const searchHistory = originalData.filter((history) =>
            history.name
              .toLocaleLowerCase()
              .includes(debounceQuery.toLocaleLowerCase())
          );
          setFilteredBillingHistory(searchHistory);
          console.log(searchHistory);
        } catch (error) {
          console.error(error);
        }
      };
      searchData();
    } else {
      setFilteredBillingHistory(originalData);
    }
  }, [debounceQuery]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [debounceQuery]);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="py-10 max-w-5xl mx-auto px-2 items-center justify-center">
        <div className="w-full mb-4">
          <h1 className="text-2xl font-bold mb-4">Billing History</h1>
          <input
            type="text"
            placeholder="Search Billing History By Name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputRef}
            className="w-full border border-gray-400 py-2 px-3 rounded focus:outline-indigo-500"
          />
        </div>
        <BillingForm setSelectedCategory={setSelectedCategory} />
        <BillingList data={filteredBillingHistory} />
      </div>

      <Footer />
    </div>
  );
};

export default BillingApp;
