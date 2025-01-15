import React, { useState } from "react";
import "../../css_files/Master/SubCategoryMaster.css";
import Table from "../Homepage/Table";

function SubCategoryMaster() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("id");
  const [newSubCategory, setNewSubCategory] = useState({
    category: "",
    subCategory: "",
    description: "",
  });

  const categories = [
    "Electronics",
    "Home Furniture",
    "Apparel",
    "Books",
    "Toys & Games",
    "Personal Care",
    "Kitchen",
    "Garden",
    "Automotive",
    "Fashion",
    "Photography",
  ];

  const tableData = [
    [1, "Electronics", "Laptops", "Portable personal computers"],
    [2, "Electronics", "Smartphones", "Mobile phones with advanced features"],
    [3, "Home Furniture", "Chairs", "Seating furniture for various purposes"],
    [4, "Home Furniture", "Tables", "Furniture for dining or work"],
    [5, "Apparel", "Men's Clothing", "Apparel for men"],
    [6, "Apparel", "Women's Clothing", "Apparel for women"],
    [7, "Books", "Fiction Books", "Novels and stories"],
    [8, "Books", "Non-fiction Books", "Educational and informational books"],
    [9, "Toys & Games", "Board Games", "Games for multiple players"],
    [10, "Toys & Games", "Video Games", "Games for electronic devices"],
    [11, "Personal Care", "Skincare", "Products for healthy skin"],
    [12, "Personal Care", "Haircare", "Products for hair maintenance"],
    [13, "Kitchen", "Cookware", "Utensils for cooking"],
    [14, "Kitchen", "Bakeware", "Utensils for baking"],
    [15, "Garden", "Gardening Tools", "Equipment for gardening tasks"],
    [16, "Garden", "Plant Seeds", "Seeds for planting various crops"],
    [17, "Automotive", "Car Accessories", "Add-ons for vehicles"],
    [18, "Automotive", "Bike Accessories", "Add-ons for bikes"],
    [19, "Fashion", "Watches", "Wearable timekeeping devices"],
    [20, "Photography", "Cameras", "Devices for capturing photographs"],
  ];

  // Handle search filter
  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filteredData = tableData.filter((row) => {
      if (filterType === "id") {
        return row[0].toString().includes(lowerCaseQuery);
      } else if (filterType === "subCategory") {
        return row[2].toLowerCase().includes(lowerCaseQuery);
      }
      return true;
    });
    return filteredData;
  };

  const filteredData = handleFilter();

  // Reset filter
  const resetFilter = () => {
    setSearchQuery("");
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSubCategory((prev) => ({ ...prev, [name]: value }));
  };

  // Handle add form submission
  const handleAddSubCategory = (e) => {
    e.preventDefault();
    if (
      !newSubCategory.category ||
      !newSubCategory.subCategory ||
      !newSubCategory.description
    ) {
      alert("All fields are required!");
      return;
    }
    // Add new sub-category logic (e.g., updating state or sending to backend)
    console.log("New Sub-Category: ", newSubCategory);
    setNewSubCategory({ category: "", subCategory: "", description: "" });
    setShowAddForm(false);
  };

  return (
    <section className="category-master-container">
      <div className="category-master">
        <h1 className="category-master-title">SUB-CATEGORY MASTER</h1>

        {/* Search Section */}
        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by ID</option>
            <option value="subCategory">Search by Sub-Category</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${
              filterType === "id" ? "ID" : "Sub-Category"
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
          <form className="add-category-form" onSubmit={handleAddSubCategory}>
            <div className="form-row">
              <label>Category:</label>
              <select
                name="category"
                value={newSubCategory.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <label>Sub-Category Name:</label>
              <input
                type="text"
                name="subCategory"
                value={newSubCategory.subCategory}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={newSubCategory.description}
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
          tablehead={[
            "Sub-Category Id",
            "Category",
            "Sub-Category Name",
            "Description",
          ]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default SubCategoryMaster;
