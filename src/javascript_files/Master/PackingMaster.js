import React, { useState, useEffect } from "react";
import "../../css_files/Master/CategoryMaster.css";
import Table from "../Homepage/Table";

function PackingMaster() {
  const [showAddForm, setShowAddForm] = useState(false); // State to show/hide Add form
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/Packing Name)
  const [tableData, setTableData] = useState([
    [1, "Small Box", "Electronics", "Compact box for small items"],
    [2, "Medium Box", "Books", "Box suitable for medium-sized items"],
    [3, "Large Box", "Clothing", "Spacious box for large items"],
    [
      4,
      "Bubble Wrap",
      "Fragile Items",
      "Protective wrapping for fragile items",
    ],
    [5, "Envelope", "Documents", "Secure envelope for papers"],
    [6, "Plastic Bag", "Groceries", "Reusable plastic bag"],
    [7, "Glass Jar", "Food Storage", "Jar for storing food items"],
    [8, "Metal Can", "Beverages", "Can for drinks or liquid storage"],
    [9, "Wooden Crate", "Heavy Items", "Strong crate for heavy goods"],
    [10, "Foam Sheet", "Packaging", "Sheet for cushioning products"],
    [11, "Cardboard Box", "Shipping", "Standard box for shipping items"],
    [
      12,
      "Plastic Container",
      "Food Storage",
      "Durable container for storing food",
    ],
    [13, "Tin Box", "Gifts", "Decorative box for gifting"],
    [14, "Paper Bag", "Retail", "Eco-friendly paper bag"],
    [
      15,
      "Thermal Box",
      "Perishables",
      "Insulated box for temperature-sensitive items",
    ],
    [16, "Fabric Bag", "Shopping", "Durable and reusable shopping bag"],
    [17, "Bottle", "Liquids", "Container for storing liquids"],
    [
      18,
      "Padded Envelope",
      "Fragile Documents",
      "Envelope with padding for protection",
    ],
    [19, "Mesh Bag", "Produce", "Breathable bag for fresh produce"],
    [
      20,
      "Cylindrical Tube",
      "Posters",
      "Tube for storing rolled paper or posters",
    ],
  ]);
  const [filteredData, setFilteredData] = useState(tableData); // State for filtered table data
  const [newPacking, setNewPacking] = useState({
    packingName: "",
    usedFor: "",
    description: "",
  }); // State for the new packing input fields

  // Effect to initialize filteredData
  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPacking((prev) => ({ ...prev, [name]: value }));
  };

  // Add new packing
  const handleAddPacking = (e) => {
    e.preventDefault();
    if (
      !newPacking.packingName ||
      !newPacking.usedFor ||
      !newPacking.description
    ) {
      alert("All fields are required!");
      return;
    }

    // Validate the length of packingName and usedFor
    if (
      newPacking.packingName.length > 100 ||
      newPacking.usedFor.length > 100
    ) {
      alert("Packing Name and Used For must not exceed 100 characters!");
      return;
    }

    setTableData((prev) => [
      ...prev,
      [
        prev.length + 1,
        newPacking.packingName,
        newPacking.usedFor,
        newPacking.description,
      ],
    ]);
    setNewPacking({ packingName: "", usedFor: "", description: "" }); // Reset form
    setShowAddForm(false); // Hide the form after adding
  };

  // Handle search filter
  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredData = tableData.filter((row) => {
      if (filterType === "id") {
        return row[0].toString().includes(lowerCaseQuery);
      } else if (filterType === "packingName") {
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
        <h1 className="category-master-title">PACKING MASTER</h1>

        {/* Search Section */}
        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by ID</option>
            <option value="packingName">Search by Packing Name</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${
              filterType === "id" ? "ID" : "Packing Name"
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
          <form onSubmit={handleAddPacking} className="add-category-form">
            <div className="form-row">
              <label>Packing Name:</label>
              <input
                type="text"
                name="packingName"
                value={newPacking.packingName}
                onChange={handleInputChange}
                maxLength="100" // Added maxLength attribute
                required
              />
            </div>
            <div className="form-row">
              <label>Used For:</label>
              <input
                type="text"
                name="usedFor"
                value={newPacking.usedFor}
                onChange={handleInputChange}
                maxLength="100" // Added maxLength attribute
                required
              />
            </div>
            <div className="form-row">
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={newPacking.description}
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
          tablehead={["Packing Id", "Packing Name", "Used For", "Description"]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default PackingMaster;
