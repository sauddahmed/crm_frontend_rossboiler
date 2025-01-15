import React, { useState } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/CategoryMaster.css";

function HSNMaster() {
  const [showAddForm, setShowAddForm] = useState(false); // State to show/hide Add form
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/HSN Code)
  const [tableData, setTableData] = useState([
    [1, "A123", "Electronics and gadgets"],
    [2, "B4567", "Furniture and fittings"],
    [3, "C78901", "Clothing and apparel"],
    [4, "D234X", "Books and publications"],
    [5, "E56789", "Toys and games"],
    [6, "F8901G", "Sports equipment"],
    [7, "G1234Y", "Beauty products"],
    [8, "H5678Z", "Kitchen appliances"],
    [9, "I90123", "Gardening tools"],
    [10, "J4567W", "Automotive parts"],
    [11, "K890L", "Jewelry and accessories"],
    [12, "L12345", "Musical instruments"],
    [13, "M67890", "Healthcare items"],
    [14, "N23456", "Office supplies"],
    [15, "O789XY", "Travel gear"],
    [16, "P123Z4", "Pet accessories"],
    [17, "Q5678A", "Art and craft supplies"],
    [18, "R9012B", "Fitness equipment"],
    [19, "S3456C", "Gaming consoles"],
    [20, "T7890D", "Photography equipment"],
  ]);
  const [filteredData, setFilteredData] = useState(tableData); // State for filtered table data
  const [newHSN, setNewHSN] = useState({
    code: "",
    description: "",
  }); // State for the new HSN input fields

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHSN((prev) => ({ ...prev, [name]: value }));
  };

  // Add new HSN
  const handleAddHSN = (e) => {
    e.preventDefault();
    if (!newHSN.code || !newHSN.description) {
      alert("All fields are required!");
      return;
    }
    setTableData((prev) => [
      ...prev,
      [prev.length + 1, newHSN.code, newHSN.description],
    ]);
    setNewHSN({ code: "", description: "" }); // Reset form
    setShowAddForm(false); // Hide the form after adding
  };

  // Handle search filter
  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredData = tableData.filter((row) => {
      if (filterType === "id") {
        return row[0].toString().includes(lowerCaseQuery);
      } else if (filterType === "code") {
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
        <h1 className="category-master-title">HSN MASTER</h1>

        {/* Search Section */}
        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by ID</option>
            <option value="code">Search by HSN Code</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${filterType === "id" ? "ID" : "HSN Code"}`}
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
          <form onSubmit={handleAddHSN} className="add-category-form">
            <div className="form-row">
              <label>HSN Code:</label>
              <input
                type="text"
                name="code"
                value={newHSN.code}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={newHSN.description}
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
          tablehead={["HSN Id", "HSN Code", "Description"]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default HSNMaster;
