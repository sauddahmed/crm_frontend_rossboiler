import React, { useState, useEffect } from "react";
import "../../css_files/Master/CategoryMaster.css";
import Table from "../Homepage/Table";

function CurrencyMaster() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("id");
  const [tableData, setTableData] = useState([
    [1, "US Dollar", "USD", 1.0, "Primary currency of the United States"],
    [2, "Euro", "EUR", 0.92, "Official currency of the Eurozone"],
    [3, "British Pound", "GBP", 0.79, "Currency of the United Kingdom"],
    [4, "Indian Rupee", "INR", 83.2, "Official currency of India"],
    [5, "Australian Dollar", "AUD", 1.55, "Currency of Australia"],
    [6, "Canadian Dollar", "CAD", 1.34, "Currency of Canada"],
    [7, "Japanese Yen", "JPY", 148.9, "Currency of Japan"],
    [8, "Swiss Franc", "CHF", 0.87, "Currency of Switzerland"],
    [9, "Chinese Yuan", "CNY", 7.3, "Currency of China"],
    [10, "Brazilian Real", "BRL", 5.1, "Currency of Brazil"],
    [11, "South African Rand", "ZAR", 18.6, "Currency of South Africa"],
    [12, "Mexican Peso", "MXN", 17.5, "Currency of Mexico"],
    [13, "Russian Ruble", "RUB", 96.2, "Currency of Russia"],
    [14, "Singapore Dollar", "SGD", 1.36, "Currency of Singapore"],
    [15, "Hong Kong Dollar", "HKD", 7.83, "Currency of Hong Kong"],
    [16, "New Zealand Dollar", "NZD", 1.67, "Currency of New Zealand"],
    [17, "South Korean Won", "KRW", 1321.8, "Currency of South Korea"],
    [18, "Thai Baht", "THB", 36.4, "Currency of Thailand"],
    [19, "Saudi Riyal", "SAR", 3.75, "Currency of Saudi Arabia"],
    [20, "Turkish Lira", "TRY", 27.1, "Currency of Turkey"],
  ]);
  const [filteredData, setFilteredData] = useState(tableData);
  const [newCurrency, setNewCurrency] = useState({
    currencyName: "",
    currencyCode: "",
    rate: "",
    description: "",
  });

  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCurrency((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCurrency = (e) => {
    e.preventDefault();
    if (
      !newCurrency.currencyName ||
      !newCurrency.currencyCode ||
      !newCurrency.rate ||
      !newCurrency.description
    ) {
      alert("All fields are required!");
      return;
    }
    setTableData((prev) => [
      ...prev,
      [
        prev.length + 1,
        newCurrency.currencyName,
        newCurrency.currencyCode,
        newCurrency.rate,
        newCurrency.description,
      ],
    ]);
    setNewCurrency({
      currencyName: "",
      currencyCode: "",
      rate: "",
      description: "",
    });
    setShowAddForm(false);
  };

  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredData = tableData.filter((row) => {
      if (filterType === "id") {
        return row[0].toString().includes(lowerCaseQuery);
      } else if (filterType === "currencyName") {
        return row[1].toLowerCase().includes(lowerCaseQuery);
      }
      return true;
    });
    setFilteredData(newFilteredData);
  };

  const resetFilter = () => {
    setSearchQuery("");
    setFilteredData(tableData);
  };

  return (
    <section className="category-master-container">
      <div className="category-master">
        <h1 className="category-master-title">CURRENCY MASTER</h1>

        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by ID</option>
            <option value="currencyName">Search by Currency Name</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${
              filterType === "id" ? "ID" : "Currency Name"
            }`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button onClick={handleFilter} className="filter-button">
            Filter
          </button>
          <button onClick={resetFilter} className="reset-button">
            Reset
          </button>
          <button
            onClick={() => setShowAddForm((prev) => !prev)}
            className="add-button"
          >
            {showAddForm ? "Hide" : "Add"}
          </button>
        </div>

        {showAddForm && (
          <form onSubmit={handleAddCurrency} className="add-category-form">
            <div className="form-row">
              <label>Currency Name:</label>
              <input
                type="text"
                name="currencyName"
                value={newCurrency.currencyName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Currency Code:</label>
              <input
                type="text"
                name="currencyCode"
                value={newCurrency.currencyCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Rate:</label>
              <input
                type="number"
                step="0.01"
                name="rate"
                value={newCurrency.rate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={newCurrency.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="add-category-button">
              Add
            </button>
          </form>
        )}

        <Table
          tablehead={[
            "Currency Id",
            "Currency Name",
            "Currency Code",
            "Rate",
            "Description",
          ]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default CurrencyMaster;
