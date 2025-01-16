import React, { useState } from "react";
import "../../css_files/Master/UnitMaster.css";
import Table from "../Homepage/Table";

function UnitMaster() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("id");
  const [tableData, setTableData] = useState([
    [1, "Kilogram", "KG", "Measurement of mass"],
    [2, "Meter", "M", "Measurement of length"],
    [3, "Liter", "L", "Measurement of volume"],
    [4, "Piece", "PCS", "Individual countable items"],
    [5, "Dozen", "DZ", "12 pieces"],
    [6, "Gram", "G", "Small unit of mass"],
    [7, "Centimeter", "CM", "Small unit of length"],
    [8, "Milliliter", "ML", "Small unit of volume"],
    [9, "Pack", "PK", "Collection of items in a package"],
    [10, "Box", "BX", "Container of items"],
    [11, "Ton", "T", "Large unit of mass"],
    [12, "Yard", "YD", "Unit of length"],
    [13, "Inch", "IN", "Small unit of length"],
    [14, "Square Meter", "SQM", "Measurement of area"],
    [15, "Cubic Meter", "CBM", "Measurement of volume"],
    [16, "Hour", "HR", "Unit of time"],
    [17, "Minute", "MIN", "Small unit of time"],
    [18, "Second", "SEC", "Very small unit of time"],
    [19, "Barrel", "BBL", "Unit of volume for liquids"],
    [20, "Carton", "CTN", "Box used for packaging"],
  ]);
  const [filteredData, setFilteredData] = useState(tableData);
  const [newUnit, setNewUnit] = useState({
    name: "",
    code: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUnit((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUnit = (e) => {
    e.preventDefault();
    const { name, code, description } = newUnit;

    if (!name || !code || !description) {
      alert("All fields are required!");
      return;
    }

    if (code.length !== 2) {
      alert("Unit code must be exactly 2 characters!");
      return;
    }

    setTableData((prev) => [
      ...prev,
      [prev.length + 1, name, code, description],
    ]);
    setNewUnit({ name: "", code: "", description: "" });
    setShowAddForm(false);
  };

  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredData = tableData.filter((row) => {
      if (filterType === "id") {
        return row[0].toString().includes(lowerCaseQuery);
      } else if (filterType === "name") {
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
        <h1 className="category-master-title">UNIT MASTER</h1>

        {/* Search Section */}
        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by ID</option>
            <option value="name">Search by Name</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${filterType === "id" ? "ID" : "Name"}`}
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
          <form onSubmit={handleAddUnit} className="add-category-form">
            <div className="form-row">
              <div className="form-field">
                <label>Unit Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newUnit.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label>Unit Code:</label>
                <input
                  type="text"
                  name="code"
                  value={newUnit.code}
                  onChange={handleInputChange}
                  maxLength={2}
                  pattern=".{2,2}"
                  title="Unit code must be exactly 2 characters."
                  required
                />
              </div>
              <div className="form-field">
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={newUnit.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="add-category-button">
              Add
            </button>
          </form>
        )}

        {/* Table */}
        <Table
          tablehead={["Unit Id", "Unit Name", "Unit Code", "Description"]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default UnitMaster;
