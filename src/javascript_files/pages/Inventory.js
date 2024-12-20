import React, { useState } from "react";
import { useDataContext } from "../../context/DataContextParts"; // Import the context

const Inventory = () => {
  const {
    partsData,
    addPart,
    editPart, // Destructure the editPart function
    deletePart,
    showAddPartForm,
    setShowAddPartForm,
  } = useDataContext();

  // State to manage form input values
  const [formValues, setFormValues] = useState({
    name: "",
    stock: "",
    price: "",
  });

  // State to manage the currently edited part
  const [editingPartId, setEditingPartId] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle editing of a part
  const handleEdit = (part) => {
    setEditingPartId(part.id); // Set the part ID being edited
    setFormValues({
      name: part.name,
      stock: part.stock,
      price: part.price,
    }); // Populate the form with existing details
  };

  // Handle saving the edited part
  const saveEdit = (e) => {
    e.preventDefault();
    editPart(editingPartId, {
      name: formValues.name,
      stock: Number(formValues.stock),
      price: Number(formValues.price),
    });
    setEditingPartId(null); // Clear the editing state
    setFormValues({ name: "", stock: "", price: "" }); // Reset the form
  };

  return (
    <div>
      <h2>Parts Inventory</h2>
      {/* Button to show/hide Add Part form */}
      <button onClick={() => setShowAddPartForm(true)}>Add Part</button>

      {/* Display the form if showAddPartForm is true */}
      {showAddPartForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addPart({
              id: Date.now(),
              name: formValues.name,
              stock: Number(formValues.stock),
              price: Number(formValues.price),
            });
            setShowAddPartForm(false);
            setFormValues({ name: "", stock: "", price: "" });
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Part Name"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formValues.stock}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formValues.price}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Part</button>
        </form>
      )}

      {/* Display the edit form if editing a part */}
      {editingPartId && (
        <form onSubmit={saveEdit}>
          <input
            type="text"
            name="name"
            placeholder="Part Name"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formValues.stock}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formValues.price}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Save</button>
          <button onClick={() => setEditingPartId(null)}>Cancel</button>
        </form>
      )}

      {/* Parts inventory table */}
      <table>
        <thead>
          <tr>
            <th>Part Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {partsData.map((part) => (
            <tr key={part.id}>
              <td>{part.name}</td>
              <td>{part.stock}</td>
              <td>{part.price}</td>
              <td>
                {/* Button to edit the part */}
                <button onClick={() => handleEdit(part)}>Edit</button>
                {/* Button to delete the part */}
                <button onClick={() => deletePart(part.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
