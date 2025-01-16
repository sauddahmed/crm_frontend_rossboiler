import React, { useState, useEffect } from "react";
import "../../css_files/Master/BoilerMaster.css";
import Table from "../Homepage/Table";

function BoilerMaster() {
  const [showAddForm, setShowAddForm] = useState(false); // State to show/hide Add form
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/Boiler)
  const [tableData, setTableData] = useState([
    [
      1,
      "Fire Tube Boiler",
      "Boiler with fire tubes passing through a sealed container",
    ],
    [
      2,
      "Water Tube Boiler",
      "Boiler where water flows through tubes and is heated by fire outside",
    ],
    [3, "Electric Boiler", "Boiler powered by electricity to generate steam"],
    [4, "Package Boiler", "Compact boiler pre-assembled for easy installation"],
    [
      5,
      "Condensing Boiler",
      "Boiler designed to recover and reuse heat from exhaust gases",
    ],
    [
      6,
      "Steam Boiler",
      "Boiler that generates steam for industrial or heating purposes",
    ],
    [7, "Oil-Fired Boiler", "Boiler using oil as a fuel source for heating"],
    [8, "Gas-Fired Boiler", "Boiler fueled by natural gas or propane"],
    [
      9,
      "Coal-Fired Boiler",
      "Traditional boiler using coal as the primary fuel source",
    ],
    [
      10,
      "Waste Heat Boiler",
      "Boiler that utilizes waste heat from other industrial processes",
    ],
    [
      11,
      "Biomass Boiler",
      "Eco-friendly boiler using organic materials as fuel",
    ],
    [12, "Vertical Boiler", "Boiler with a vertical cylindrical configuration"],
    [
      13,
      "Horizontal Boiler",
      "Boiler with a horizontal cylindrical configuration",
    ],
    [
      14,
      "High-Pressure Boiler",
      "Boiler designed to operate at high pressures",
    ],
    [15, "Low-Pressure Boiler", "Boiler designed for low-pressure operations"],
    [16, "Industrial Boiler", "Large-scale boiler for industrial applications"],
    [
      17,
      "Residential Boiler",
      "Smaller boiler designed for home heating purposes",
    ],
    [
      18,
      "Marine Boiler",
      "Boiler used on ships to power engines or heating systems",
    ],
    [19, "Locomotive Boiler", "Boiler used to power steam locomotives"],
    [
      20,
      "Thermal Fluid Boiler",
      "Boiler designed for heating thermal fluids for industrial use",
    ],
  ]);
  const [filteredData, setFilteredData] = useState(tableData); // State for filtered table data
  const [newBoiler, setNewBoiler] = useState({
    boilerHead: "",
    description: "",
  }); // State for the new boiler input fields

  // Effect to initialize filteredData
  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBoiler((prev) => ({ ...prev, [name]: value }));
  };

  // Add new boiler
  const handleAddBoiler = (e) => {
    e.preventDefault();
    if (!newBoiler.boilerHead || !newBoiler.description) {
      alert("All fields are required!");
      return;
    }
    setTableData((prev) => [
      ...prev,
      [prev.length + 1, newBoiler.boilerHead, newBoiler.description],
    ]);
    setNewBoiler({ boilerHead: "", description: "" }); // Reset form
    setShowAddForm(false); // Hide the form after adding
  };

  // Handle search filter
  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredData = tableData.filter((row) => {
      if (filterType === "id") {
        return row[0].toString().includes(lowerCaseQuery);
      } else if (filterType === "boilerHead") {
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
        <h1 className="category-master-title">BOILER MASTER</h1>

        {/* Search Section */}
        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by ID</option>
            <option value="boilerHead">Search by Boiler Head</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${
              filterType === "id" ? "ID" : "Boiler Head"
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
            <form onSubmit={handleAddBoiler} className="add-category-form">
              <div className="form-row">
                <label>Boiler Head:</label>
                <input
                  type="text"
                  name="boilerHead"
                  value={newBoiler.boilerHead}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={newBoiler.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="add-category-button">
                Add
              </button>
            </form>
          </div>
        )}

        {/* Table */}
        <Table
          tablehead={["Boiler Id", "Boiler Head", "Description"]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default BoilerMaster;
