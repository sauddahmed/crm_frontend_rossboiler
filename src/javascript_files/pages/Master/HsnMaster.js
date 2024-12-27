import React, { useState, useEffect } from "react";
import { useHsnContext } from "../../../context/HsnContext";
import "./../../css_files/CategoryMaster.css"; // Import the updated CSS

const HsnMaster = () => {
  const { tableData, addDataToTable, editDataInTable, deleteDataFromTable } =
    useHsnContext();

  const [formData, setFormData] = useState({
    hsnCode: "",
    description: "",
    id: "",
  });

  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/Category)
  const [filteredData, setFilteredData] = useState(tableData); // State to store filtered results
  const [nextId, setNextId] = useState(1); // State to track the next ID
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [rowEditData, setRowEditData] = useState({}); // Store data for inline editing

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addDataToTable({ ...formData, id: nextId.toString() });
    setNextId(nextId + 1);
    setFormData({
      hsnCode: "",
      description: "",
      id: "",
    });
  };

  //   const handleEdit = (index) => {
  //     setEditingRowIndex(index); // Correct variable
  //     setFormData(tableData[index]);
  //   };

  const handleDelete = (index) => {
    deleteDataFromTable(index);
  };

  // Handle Filter Button Click
  const handleFilter = () => {
    const newFilteredData = tableData.filter((item) => {
      if (filterType === "id") {
        return item.id.toString().includes(searchQuery);
      } else if (filterType === "hsnCode") {
        return item.hsnCode.includes(searchQuery);
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

  // Start Inline Editing
  const startInlineEdit = (index, row) => {
    setEditingRowIndex(index);
    setRowEditData(row);
  };

  // Save Inline Edits
  const saveInlineEdit = (index) => {
    editDataInTable(index, rowEditData);
    setEditingRowIndex(null);
  };

  // Cancel Inline Edits
  const cancelInlineEdit = () => {
    setEditingRowIndex(null);
  };

  const handleRowEditChange = (e) => {
    const { name, value } = e.target;
    setRowEditData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="category-master">
      <h1 className="page-header">HSN MASTER</h1>

      {/* Search Section */}
      <div className="search-container">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="search-select"
        >
          <option value="id">Search by ID</option>
          <option value="hsnCode">Search by HSN Code</option>
        </select>
        <input
          type="text"
          placeholder={`Enter ${filterType === "id" ? "ID" : "HSN Code"}`}
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
        <button
          onClick={() => setIsFormVisible((prev) => !prev)}
          className="search-button toggle-form-button"
        >
          {isFormVisible ? "Hide" : "Add"}
        </button>
      </div>

      {/* Form */}
      {isFormVisible && (
        <form className="form-container" onSubmit={handleFormSubmit}>
          <div className="form-field">
            <label htmlFor="hsnCode" className="form-label">
              HSN Code
            </label>
            <input
              type="text"
              id="hsnCode"
              name="hsnCode"
              value={formData.hsnCode}
              onChange={handleInputChange}
              required
              className="form-input"
              placeholder="Enter HSN Code"
            />
          </div>
          <div className="form-field">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button">
            {editingRowIndex !== null ? "Save Changes" : "Add Category"}
          </button>
        </form>
      )}

      {/* Table */}
      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>HSN Code</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>

                <td>
                  {editingRowIndex === index ? (
                    <input
                      type="text"
                      name="hsnCode"
                      value={rowEditData.hsnCode}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.hsnCode
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <textarea
                      name="description"
                      value={rowEditData.description}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.description
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <>
                      <button
                        className="action-btn save-btn"
                        onClick={() => saveInlineEdit(index)}
                      >
                        💾 Save
                      </button>
                      <button
                        className="action-btn cancel-btn"
                        onClick={cancelInlineEdit}
                      >
                        ✖️ Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="action-btn edit-btn"
                        onClick={() => startInlineEdit(index, data)}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="action-btn delete-btn"
                        onClick={() => handleDelete(index)}
                      >
                        🗑️ Delete
                      </button>
                    </>
                  )}
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

export default HsnMaster;
