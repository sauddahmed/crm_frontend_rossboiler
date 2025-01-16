import React, { useState, useEffect } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/CategoryMaster.css";

function GSTMaster() {
  const [showAddForm, setShowAddForm] = useState(false); // State to show/hide Add form
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/Rate)
  const [tableData, setTableData] = useState([
    [101, "5%", "GST applicable on essential goods"],
    [102, "12%", "GST applicable on restaurant services"],
    [103, "18%", "GST applicable on electronic appliances"],
    [104, "28%", "GST applicable on luxury items"],
    [105, "18%", "GST on mobile phones and accessories"],
    [106, "12%", "GST applicable on hotels and lodges"],
    [107, "5%", "GST applicable on footwear under Rs. 1000"],
    [108, "18%", "GST applicable on beauty products"],
    [109, "28%", "GST on tobacco and related products"],
    [110, "12%", "GST on furniture and fixtures"],
    [111, "5%", "GST on transport services"],
    [112, "18%", "GST on software services"],
    [113, "28%", "GST on motor vehicles"],
    [114, "12%", "GST on financial services"],
    [115, "5%", "GST on packaged food items"],
    [116, "18%", "GST on clothing and garments"],
    [117, "28%", "GST on construction materials"],
    [118, "5%", "GST on printing and publishing services"],
    [119, "12%", "GST on educational services"],
    [120, "18%", "GST on cleaning and maintenance services"],
  ]);
  const [filteredData, setFilteredData] = useState(tableData); // State for filtered table data
  const [newGST, setNewGST] = useState({
    rate: "",
    description: "",
  }); // State for the new GST input fields

  // Effect to initialize filteredData
  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGST((prev) => ({ ...prev, [name]: value }));
  };

  // Add new GST
  const handleAddGST = (e) => {
    e.preventDefault();
    if (!newGST.rate || !newGST.description) {
      alert("All fields are required!");
      return;
    }
    setTableData((prev) => [
      ...prev,
      [prev.length + 101, newGST.rate, newGST.description],
    ]);
    setNewGST({ rate: "", description: "" }); // Reset form
    setShowAddForm(false); // Hide the form after adding
  };

  // Handle search filter
  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredData = tableData.filter((row) => {
      if (filterType === "id") {
        return row[0].toString().includes(lowerCaseQuery);
      } else if (filterType === "rate") {
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
        <h1 className="category-master-title">GST MASTER</h1>

        {/* Search Section */}
        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by ID</option>
            <option value="rate">Search by Rate</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${filterType === "id" ? "ID" : "Rate"}`}
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
          <form onSubmit={handleAddGST} className="add-category-form">
            <div className="form-row">
              <label>Rate:</label>
              <input
                type="text"
                name="rate"
                value={newGST.rate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={newGST.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="add-category-button">
              Add
            </button>
          </form>
        )}

        {/* Table */}
        <Table
          tablehead={["GST Id", "Rate", "Description"]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default GSTMaster;
