import React, { useState, useEffect } from "react";
import "../../css_files/Master/BoilerSeriesMaster.css";
import Table from "../Homepage/Table";

function BoilerSeriesMaster() {
  const [showAddForm, setShowAddForm] = useState(false); // State to show/hide Add form
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/Boiler)
  const [tableData, setTableData] = useState([
    [
      1,
      "Fire Tube Boiler",
      "FTB-1001",
      "Boiler with fire tubes passing through a sealed container for heat transfer",
    ],
    [
      2,
      "Water Tube Boiler",
      "WTB-2002",
      "Boiler where water flows through tubes and is heated by external flames",
    ],
    [
      3,
      "Electric Boiler",
      "EB-3003",
      "Energy-efficient boiler powered by electricity to generate steam",
    ],
    [
      4,
      "Package Boiler",
      "PB-4004",
      "Compact pre-assembled boiler for quick installation",
    ],
    [
      5,
      "Condensing Boiler",
      "CB-5005",
      "Boiler designed to condense steam for heat recovery and efficiency",
    ],
    [
      6,
      "Steam Boiler",
      "SB-6006",
      "Boiler generating steam for industrial or heating applications",
    ],
    [
      7,
      "Oil-Fired Boiler",
      "OFB-7007",
      "Boiler utilizing oil as a fuel source for heating",
    ],
    [
      8,
      "Gas-Fired Boiler",
      "GFB-8008",
      "Boiler using natural gas or propane for combustion",
    ],
    [
      9,
      "Coal-Fired Boiler",
      "CFB-9009",
      "Traditional boiler burning coal for energy",
    ],
    [
      10,
      "Waste Heat Boiler",
      "WHB-1010",
      "Boiler reusing waste heat from other industrial processes",
    ],
    [
      11,
      "Biomass Boiler",
      "BB-1111",
      "Eco-friendly boiler burning organic materials like wood or agricultural waste",
    ],
    [
      12,
      "Vertical Boiler",
      "VB-1212",
      "Boiler with a vertical cylindrical design for compact spaces",
    ],
    [
      13,
      "Horizontal Boiler",
      "HB-1313",
      "Boiler with a horizontal cylindrical configuration for large-scale use",
    ],
    [
      14,
      "High-Pressure Boiler",
      "HPB-1414",
      "Boiler designed to operate under high pressure for industrial processes",
    ],
    [
      15,
      "Low-Pressure Boiler",
      "LPB-1515",
      "Boiler operating at low pressure for safe and efficient heating",
    ],
    [
      16,
      "Industrial Boiler",
      "IB-1616",
      "Large-scale boiler for heavy-duty industrial applications",
    ],
    [
      17,
      "Residential Boiler",
      "RB-1717",
      "Smaller boiler suited for residential heating needs",
    ],
    [
      18,
      "Marine Boiler",
      "MB-1818",
      "Boiler used on ships for propulsion or heating systems",
    ],
    [
      19,
      "Locomotive Boiler",
      "LB-1919",
      "Boiler used in steam locomotives for engine power",
    ],
    [
      20,
      "Thermal Fluid Boiler",
      "TFB-2020",
      "Boiler heating thermal fluids for industrial applications requiring high precision",
    ],
  ]);
  const [filteredData, setFilteredData] = useState(tableData); // State for filtered table data
  const [newBoilerSeries, setNewBoilerSeries] = useState({
    boilerHead: "",
    seriesCode: "",
    description: "",
  }); // State for the new boiler series input fields

  // Effect to initialize filteredData
  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBoilerSeries((prev) => ({ ...prev, [name]: value }));
  };

  // Add new boiler series
  const handleAddBoilerSeries = (e) => {
    e.preventDefault();
    if (
      !newBoilerSeries.boilerHead ||
      !newBoilerSeries.seriesCode ||
      !newBoilerSeries.description
    ) {
      alert("All fields are required!");
      return;
    }
    setTableData((prev) => [
      ...prev,
      [
        prev.length + 1,
        newBoilerSeries.boilerHead,
        newBoilerSeries.seriesCode,
        newBoilerSeries.description,
      ],
    ]);
    setNewBoilerSeries({ boilerHead: "", seriesCode: "", description: "" }); // Reset form
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
      } else if (filterType === "seriesCode") {
        return row[2].toLowerCase().includes(lowerCaseQuery);
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
        <h1 className="category-master-title">BOILER SERIES MASTER</h1>

        {/* Search Section */}
        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by ID</option>
            <option value="boilerHead">Search by Boiler Head</option>
            <option value="seriesCode">Search by Series Code</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${
              filterType === "id"
                ? "ID"
                : filterType === "boilerHead"
                ? "Boiler Head"
                : "Series Code"
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
              onSubmit={handleAddBoilerSeries}
              className="add-category-form"
            >
              <div className="form-row">
                <label>Boiler Head:</label>
                <input
                  type="text"
                  name="boilerHead"
                  value={newBoilerSeries.boilerHead}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Series Code:</label>
                <input
                  type="text"
                  name="seriesCode"
                  value={newBoilerSeries.seriesCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={newBoilerSeries.description}
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
          tablehead={[
            "Boiler-Series Id",
            "Boiler Head",
            "Series Code",
            "Description",
          ]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default BoilerSeriesMaster;
