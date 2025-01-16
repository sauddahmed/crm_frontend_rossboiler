import React, { useState, useEffect } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/CustomerPricing.css";

function CustomerPricing() {
  const [showAddForm, setShowAddForm] = useState(false); // State to show/hide Add form
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/CustomerPricing)
  const [tableData, setTableData] = useState([
    [1, "Basic Plan", "CUST001", "10%", "Basic plan for small businesses"],
    [
      2,
      "Standard Plan",
      "CUST002",
      "15%",
      "Standard plan for medium-sized businesses",
    ],
    [3, "Premium Plan", "CUST003", "20%", "Comprehensive premium plan"],
    [4, "Enterprise Plan", "CUST004", "20%", "Designed for large enterprises"],
    [5, "Startup Plan", "CUST005", "10%", "Affordable plan for startups"],
    [6, "Growth Plan", "CUST006", "15%", "Plan for scaling businesses"],
    [7, "Professional Plan", "CUST007", "20%", "Best for professionals"],
    [8, "Non-Profit Plan", "CUST008", "10%", "Special pricing for non-profits"],
    [
      9,
      "Freelancer Plan",
      "CUST009",
      "15%",
      "Flexible pricing for freelancers",
    ],
    [10, "Corporate Plan", "CUST010", "20%", "Tailored for corporate clients"],
    [
      11,
      "Educational Plan",
      "CUST011",
      "10%",
      "Discounted plan for educational institutions",
    ],
    [
      12,
      "Community Plan",
      "CUST012",
      "15%",
      "Plan for community-driven initiatives",
    ],
    [
      13,
      "Executive Plan",
      "CUST013",
      "20%",
      "Comprehensive plan for executives",
    ],
    [
      14,
      "Basic Plus Plan",
      "CUST014",
      "15%",
      "Enhanced version of the basic plan",
    ],
    [15, "Ultimate Plan", "CUST015", "20%", "All-inclusive ultimate plan"],
    [
      16,
      "Small Business Plan",
      "CUST016",
      "10%",
      "Targeted at small businesses",
    ],
    [
      17,
      "Custom Plan",
      "CUST017",
      "15%",
      "Customized pricing for unique needs",
    ],
    [18, "Annual Plan", "CUST018", "20%", "Annual subscription plan"],
    [
      19,
      "Monthly Plan",
      "CUST019",
      "15%",
      "Flexible monthly subscription plan",
    ],
    [20, "Trial Plan", "CUST020", "10%", "Plan for trial and testing purposes"],
  ]);
  const [filteredData, setFilteredData] = useState(tableData); // State for filtered table data
  const [newCustomerPricing, setNewCustomerPricing] = useState({
    customerPricing: "",
    code: "",
    percentage: "10%",
    description: "",
  }); // State for the new pricing form data

  // Effect to initialize filteredData
  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomerPricing((prev) => ({ ...prev, [name]: value }));
  };

  // Add new customer pricing
  const handleAddCustomerPricing = (e) => {
    e.preventDefault();
    if (
      !newCustomerPricing.customerPricing ||
      !newCustomerPricing.code ||
      !newCustomerPricing.percentage ||
      !newCustomerPricing.description
    ) {
      alert("All fields are required!");
      return;
    }
    setTableData((prev) => [
      ...prev,
      [
        prev.length + 1,
        newCustomerPricing.customerPricing,
        newCustomerPricing.code,
        newCustomerPricing.percentage,
        newCustomerPricing.description,
      ],
    ]);
    setNewCustomerPricing({
      customerPricing: "",
      code: "",
      percentage: "10%",
      description: "",
    }); // Reset form
    setShowAddForm(false); // Hide the form after adding
  };

  // Handle search filter
  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredData = tableData.filter((row) => {
      if (filterType === "id") {
        return row[0].toString().includes(lowerCaseQuery);
      } else if (filterType === "customerPricing") {
        return row[1].toLowerCase().includes(lowerCaseQuery);
      }
      return true;
    });
    setFilteredData(newFilteredData);
  };

  // Reset filter
  const resetFilter = () => {
    setSearchQuery("");
    setFilteredData(tableData);
  };

  return (
    <section className="category-master-container">
      <div className="category-master">
        <h1 className="category-master-title">CUSTOMER PRICING</h1>

        {/* Search Section */}
        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by ID</option>
            <option value="customerPricing">Search by Customer Pricing</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${
              filterType === "id" ? "ID" : "Customer Pricing"
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

        {/* Add Form */}
        {showAddForm && (
          <div className="form-container">
            <form
              onSubmit={handleAddCustomerPricing}
              className="add-category-form"
            >
              <div className="form-row">
                <label>Customer Pricing:</label>
                <input
                  type="text"
                  name="customerPricing"
                  value={newCustomerPricing.customerPricing}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Code:</label>
                <input
                  type="text"
                  name="code"
                  value={newCustomerPricing.code}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Percentage:</label>
                <select
                  name="percentage"
                  value={newCustomerPricing.percentage}
                  onChange={handleInputChange}
                  required
                >
                  <option value="10%">10%</option>
                  <option value="15%">15%</option>
                  <option value="20%">20%</option>
                </select>
              </div>
              <div className="form-row">
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={newCustomerPricing.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="add-category-button">
                Add Customer Pricing
              </button>
            </form>
          </div>
        )}

        {/* Table Component */}
        <Table
          tablehead={[
            "ID",
            "Customer Pricing",
            "Code",
            "Percentage",
            "Description",
          ]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default CustomerPricing;
