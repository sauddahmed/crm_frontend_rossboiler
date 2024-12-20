import React, { useState } from "react";
import { useDataContext } from "../../../context/DataContextDash";

const SubCategoryMaster = () => {
  const { tableData, addDataToTable, editDataInTable, deleteDataFromTable } =
    useDataContext();

  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    city: "",
    contactPerson: "",
    contactNumber: "",
    requirement: "",
    comments: "",
    email: "",
    unitModel: "",
    serviceNo: "",
  });

  const [editingIndex, setEditingIndex] = useState(null); // Track the row being edited

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
      // If editing, update the row
      editDataInTable(editingIndex, formData);
      setEditingIndex(null); // Reset editing state
    } else {
      // Otherwise, add new data
      addDataToTable(formData);
    }
    // Reset form
    setFormData({
      companyName: "",
      companyAddress: "",
      city: "",
      contactPerson: "",
      contactNumber: "",
      requirement: "",
      comments: "",
      email: "",
      unitModel: "",
      serviceNo: "",
    });
  };

  const handleEdit = (index) => {
    setEditingIndex(index); // Set the index being edited
    setFormData(tableData[index]); // Load the data into the form
  };

  const handleDelete = (index) => {
    deleteDataFromTable(index); // Delete the selected row
  };

  return (
    <div className="dashboard">
      <h1>Sub Category Master</h1>

      {/* Form for adding/editing data */}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="companyAddress"
          placeholder="Company Address"
          value={formData.companyAddress}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="contactPerson"
          placeholder="Contact Person"
          value={formData.contactPerson}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="requirement"
          placeholder="Requirement"
          value={formData.requirement}
          onChange={handleInputChange}
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="unitModel"
          placeholder="Unit Model"
          value={formData.unitModel}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="serviceNo"
          placeholder="Service No"
          value={formData.serviceNo}
          onChange={handleInputChange}
        />
        <button type="submit">
          {editingIndex !== null ? "Save Changes" : "Add Data"}
        </button>
      </form>

      {/* Table displaying data */}
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Contact Person</th>
            <th>City</th>
            <th>Contact Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.companyName}</td>
              <td>{data.contactPerson}</td>
              <td>{data.city}</td>
              <td>{data.contactNumber}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubCategoryMaster;
