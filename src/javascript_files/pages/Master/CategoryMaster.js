import React, { useState, useEffect } from "react";
import { useDataContext } from "../../../context/DataContextDash";
import "./../../css_files/CategoryMaster.css"; // Import the updated CSS

const CategoryMaster = () => {
  const { tableData, addDataToTable, editDataInTable, deleteDataFromTable } =
    useDataContext();

  const [formData, setFormData] = useState({
    category: "",
    description: "",
    id: "",
  });

  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/Category)
  const [filteredData, setFilteredData] = useState(tableData); // State to store filtered results
  const [nextId, setNextId] = useState(1); // State to track the next ID

  useEffect(() => {
    setFilteredData(tableData);
    if (tableData.length > 0) {
      const numericIds = tableData
        .map((item) => parseInt(item.id, 10))
        .filter((id) => !isNaN(id));
      const maxId = numericIds.length > 0 ? Math.max(...numericIds) : 0;
      setNextId(maxId + 1);
    } else {
      setNextId(1);
    }
  }, [tableData]);

  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      editDataInTable(editingIndex, formData);
      setEditingIndex(null);
    } else {
      addDataToTable({ ...formData, id: nextId.toString() });
      setNextId(nextId + 1);
    }
    setFormData({
      category: "",
      description: "",
      id: "",
    });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(tableData[index]);
  };

  const handleDelete = (index) => {
    deleteDataFromTable(index);
  };

  // Handle Filter Button Click
  const handleFilter = () => {
    const newFilteredData = tableData.filter((item) => {
      if (filterType === "id") {
        return item.id.toString().includes(searchQuery);
      } else if (filterType === "category") {
        return item.category.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    });
    setFilteredData(newFilteredData);
  };

  // Reset Filter and Show All Data
  const resetFilter = () => {
    setSearchQuery("");
    setFilterType("id");
    setFilteredData(tableData);
  };

  return (
    <div className="category-master">
      <h1 className="page-header">CATEGORY MASTER</h1>

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
          placeholder={`Enter ${filterType === "id" ? "ID" : "Category"}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleFilter} className="search-button">
          Filter
        </button>
        <button onClick={resetFilter} className="reset-button">
          Reset
        </button>
      </div>

      {/* Form */}
      <form className="form-container" onSubmit={handleFormSubmit}>
        <div className="form-field">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            disabled
            className="form-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          {editingIndex !== null ? "Save Changes" : "Add Category"}
        </button>
      </form>

      {/* Table */}
      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.category}</td>
                <td>{data.description}</td>
                <td>
                  <button
                    className="action-btn"
                    onClick={() => handleEdit(index)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => handleDelete(index)}
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryMaster;
