import React, { useState, useEffect } from "react";
import { usePartsContext } from "../../../context/PartsContext";
import "./../../css_files/CategoryMaster.css"; // Import the updated CSS

const PartsMaster = () => {
  const { tableData, addDataToTable, editDataInTable, deleteDataFromTable } =
    usePartsContext();

  const [formData, setFormData] = useState({
    partNo: "",
    name: "",
    description: "",
    underGroup: "",
    units: "",
    gst: "",
    hsnDetails: "",
    typeOfSupply: "",
    sellingPrice: "",
    weight: "",
    dimensions: "",
    packing: "",
    moc: "",
    certification: "",
    id: "",
  });

  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/Category)
  const [filteredData, setFilteredData] = useState(tableData); // State to store filtered results
  const [nextId, setNextId] = useState(1); // State to track the next ID
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingRowIndex, setEditingRowIndex] = useState(null); // Track row being edited
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
      partNo: "",
      name: "",
      description: "",
      underGroup: "",
      units: "",
      gst: "",
      hsnDetails: "",
      typeOfSupply: "",
      sellingPrice: "",
      weight: "",
      dimensions: "",
      packing: "",
      moc: "",
      certification: "",
      id: "",
    });
  };

  const handleDelete = (index) => {
    deleteDataFromTable(index);
  };

  const handleFilter = () => {
    const newFilteredData = tableData.filter((item) => {
      if (filterType === "id") {
        return item.id.toString().includes(searchQuery);
      } else if (filterType === "name") {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (filterType === "partNo") {
        return item.code.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    });
    setFilteredData(newFilteredData);
  };

  const resetFilter = () => {
    setSearchQuery("");
    setFilterType("id");
    setFilterType("name");
    setFilterType("partNo");
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
      <h1 className="page-header">PARTS MASTER</h1>

      {/* Search Section */}
      <div className="search-container">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="search-select"
        >
          <option value="id">Search by ID</option>
          <option value="name">Search by Name</option>
          <option value="parts">Search by Parts</option>
        </select>

        <input
          type="text"
          placeholder={`Search ${
            (filterType === "id" ? "ID" : "Name", "Parts")
          }`}
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
        <form className="form-container-parts" onSubmit={handleFormSubmit}>
          <div className="parts-field">
            <label htmlFor="partNo" className="form-label-parts">
              Part No
            </label>
            <input
              id="partNo"
              name="partNo"
              value={formData.partNo}
              onChange={handleInputChange}
              className="form-input-parts"
              type="text"
              maxLength="100"
            />
          </div>
          <div className=" parts-field">
            <label htmlFor="name" className="form-label-parts">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input-parts"
              maxLength="100"
            />
          </div>
          <div className=" unit-field">
            <label htmlFor="description" className="form-label-parts">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-input-parts"
            />
          </div>
          <div className=" parts-field">
            <label htmlFor="underGroup" className="form-label-parts">
              Under-Group
            </label>
            <select
              id="underGroup"
              name="underGroup"
              value={formData.underGroup}
              onChange={handleInputChange}
              className="form-input-parts"
              type="text"
            >
              <option value="category">Category</option>
              <option value="subcategory">Sub Category</option>
            </select>
          </div>
          <div className=" parts-field">
            <label htmlFor="units" className="form-label-parts">
              Units
            </label>
            <select
              id="units"
              name="units"
              value={formData.units}
              onChange={handleInputChange}
              className="form-input-parts"
              type="text"
            >
              <option value="kilogram">Kgs</option>
              <option value="gram">Grams</option>
            </select>
          </div>
          <div className="parts-field">
            <label htmlFor="gst" className="form-label-parts">
              GST
            </label>
            <select
              id="gst"
              name="gst"
              value={formData.gst}
              onChange={handleInputChange}
              className="form-input-parts"
              type="text"
            >
              <option value="7%">7%</option>
              <option value="12%">12%</option>
              <option value="18%">18%</option>
            </select>
          </div>
          <div className=" parts-field">
            <label htmlFor="hsnDetails" className="form-label-parts">
              Hsn Details
            </label>
            <select
              id="hsnDetails"
              name="hsnDetails"
              value={formData.hsnDetails}
              onChange={handleInputChange}
              className="form-input-parts"
              type="text"
            >
              <option value="hsn1">Hsn 1</option>
              <option value="hsn2">Hsn 2</option>
              <option value="hsn3">Hsn 3</option>
            </select>
          </div>
          <div className=" parts-field">
            <label htmlFor="typeOfSupply" className="form-label-parts">
              Type of Supply
            </label>
            <select
              id="typeOfSupply"
              name="typeOfSupply"
              value={formData.typeOfSupply}
              onChange={handleInputChange}
              className="form-input-parts"
              type="text"
            >
              <option value="goods">Goods</option>
              <option value="service">Service</option>
            </select>
          </div>
          <div className=" parts-field">
            <label htmlFor="sellingPrice" className="form-label-parts">
              Selling Price
            </label>
            <input
              id="sellingPrice"
              name="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleInputChange}
              className="form-input-parts"
              type="text"
              maxLength="20"
            />
          </div>
          <div className=" parts-field">
            <label htmlFor="weight" className="form-label-parts">
              Weight
            </label>
            <input
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className="form-input-parts"
              type="text"
              maxLength="10"
            />
          </div>
          <div className=" parts-field">
            <label htmlFor="dimensions" className="form-label-parts">
              Dimensions
            </label>
            <input
              id="dimensions"
              name="dimensions"
              value={formData.dimensions}
              onChange={handleInputChange}
              className="form-input-parts"
              type="text"
              maxLength="50"
            />
          </div>

          <div className=" parts-field">
            <label htmlFor="packing" className="form-label-parts">
              Packing
            </label>
            <select
              id="packing"
              name="packing"
              value={formData.packing}
              onChange={handleInputChange}
              className="form-input-parts"
              type="text"
            >
              <option value="packaging1">Packaging 1</option>
              <option value="packaging2">Packaging 2</option>
            </select>
          </div>

          <div className=" parts-field">
            <label htmlFor="moc" className="form-label-parts">
              MOC
            </label>
            <input
              id="moc"
              name="moc"
              value={formData.moc}
              onChange={handleInputChange}
              className="form-input-parts"
              type="text"
              maxLength="100"
            />
          </div>
          <div className=" parts-field">
            <label htmlFor="certification" className="form-label-parts">
              Certification
            </label>
            <select
              id="certification"
              name="certification"
              value={formData.certification}
              onChange={handleInputChange}
              className="form-input-parts"
              type="text"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button type="submit" className="form-button form-button-parts">
            Add
          </button>
        </form>
      )}

      {/* Table */}
      <div className="table-wrapper-parts">
        <table className="styled-table-parts">
          <thead>
            <tr>
              <th>ID</th>
              <th>Part No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Group</th>
              <th>Units</th>
              <th>GST</th>
              <th>HSN Details</th>
              <th>Supply</th>
              <th>Selling Price</th>
              <th>Weight</th>
              <th>Dimensions</th>
              <th>Packing</th>
              <th>MOC</th>
              <th>Certification</th>
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
                      name="partNo"
                      value={rowEditData.partNo}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.partNo
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <input
                      type="text"
                      name="name"
                      value={rowEditData.name}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.name
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
                    <input
                      type="text"
                      name="underGroup"
                      value={rowEditData.underGroup}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.underGroup
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <input
                      type="text"
                      name="units"
                      value={rowEditData.units}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.units
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <input
                      type="text"
                      name="gst"
                      value={rowEditData.gst}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.gst
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <input
                      type="text"
                      name="hsnDetails"
                      value={rowEditData.hsnDetails}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.hsnDetails
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <input
                      type="text"
                      name="typeOfSupply"
                      value={rowEditData.typeOfSupply}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.typeOfSupply
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <input
                      type="text"
                      name="sellingPrice"
                      value={rowEditData.sellingPrice}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.sellingPrice
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <input
                      type="text"
                      name="weight"
                      value={rowEditData.weight}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.weight
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <input
                      type="text"
                      name="dimensions"
                      value={rowEditData.dimensions}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.dimensions
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <input
                      type="text"
                      name="packing"
                      value={rowEditData.packing}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.packing
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <input
                      type="text"
                      name="moc"
                      value={rowEditData.moc}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.moc
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <input
                      type="text"
                      name="certification"
                      value={rowEditData.certification}
                      onChange={handleRowEditChange}
                      className="table-edit-input"
                    />
                  ) : (
                    data.certification
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <>
                      <button
                        className="action-btn save-btn action-btn-parts"
                        onClick={() => saveInlineEdit(index)}
                      >
                        💾
                      </button>
                      <button
                        className="action-btn cancel-btn action-btn-parts"
                        onClick={cancelInlineEdit}
                      >
                        ✖️
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="action-btn edit-btn action-btn-parts"
                        onClick={() => startInlineEdit(index, data)}
                      >
                        ✏️
                      </button>
                      <button
                        className="action-btn delete-btn action-btn-parts"
                        onClick={() => handleDelete(index)}
                      >
                        🗑️
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

export default PartsMaster;
