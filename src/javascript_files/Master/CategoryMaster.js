import React, { useState, useEffect } from "react";
import "../../css_files/Master/CategoryMaster.css";
import Table from "../Homepage/Table";

function CategoryMaster() {
  const [showAddForm, setShowAddForm] = useState(false); // State to show/hide Add form
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/Category)
  const [tableData, setTableData] = useState([
    [1, "Electronics", "Devices and gadgets"],
    [2, "Furniture", "Home and office furniture"],
    [3, "Clothing", "Apparel and garments"],
    [4, "Books", "Educational and recreational books"],
    [5, "Toys", "Toys and games for kids"],
    [6, "Sports", "Sporting goods and equipment"],
    [7, "Beauty", "Beauty and personal care products"],
    [8, "Kitchen", "Kitchen appliances and utensils"],
    [9, "Gardening", "Gardening tools and supplies"],
    [10, "Automotive", "Car parts and accessories"],
    [11, "Jewelry", "Rings, necklaces, and other accessories"],
    [12, "Music", "Musical instruments and accessories"],
    [13, "Health", "Healthcare and wellness products"],
    [14, "Stationery", "Office and school supplies"],
    [15, "Travel", "Travel gear and accessories"],
    [16, "Pets", "Pet food and accessories"],
    [17, "Art", "Art supplies and craft materials"],
    [18, "Fitness", "Fitness equipment and accessories"],
    [19, "Gaming", "Gaming consoles and accessories"],
    [20, "Photography", "Cameras and photography tools"],
  ]);
  const [filteredData, setFilteredData] = useState(tableData); // State for filtered table data
  const [newCategory, setNewCategory] = useState({
    category: "",
    description: "",
  }); // State for the new category input fields

  // Dummy categories for dropdown
  const categories = [
    "Electronics",
    "Furniture",
    "Clothing",
    "Books",
    "Toys",
    "Sports",
    "Beauty",
    "Kitchen",
    "Gardening",
    "Automotive",
    "Jewelry",
    "Music",
  ];

  // Effect to initialize filteredData
  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prev) => ({ ...prev, [name]: value }));
  };

  // Add new category
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategory.category || !newCategory.description) {
      alert("All fields are required!");
      return;
    }
    setTableData((prev) => [
      ...prev,
      [prev.length + 1, newCategory.category, newCategory.description],
    ]);
    setNewCategory({ category: "", description: "" }); // Reset form
    setShowAddForm(false); // Hide the form after adding
  };

  // Handle search filter
  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredData = tableData.filter((row) => {
      if (filterType === "id") {
        return row[0].toString().includes(lowerCaseQuery);
      } else if (filterType === "category") {
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
        <h1 className="category-master-title">CATEGORY MASTER</h1>

        {/* Search Section */}
        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by ID</option>
            <option value="category">Search by Category</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${filterType === "id" ? "ID" : "Category"}`}
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
            <form onSubmit={handleAddCategory} className="add-category-form">
              <div className="form-row">
                <label>Category:</label>
                <select
                  name="category"
                  value={newCategory.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-row">
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={newCategory.description}
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
          tablehead={["Category Id", "Category Name", "Description"]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default CategoryMaster;
