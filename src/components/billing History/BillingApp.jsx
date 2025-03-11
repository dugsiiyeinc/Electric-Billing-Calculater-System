import React, { useEffect, useRef, useState } from "react";
import BillingForm from "./BillingForm";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BillingList from "./BillingList";


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
