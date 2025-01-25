import React, { useState, useEffect } from "react";
import "../../css_files/Master/PartsMaster.css"; // Assuming the relevant CSS is in this file
import Table from "../Homepage/Table";

function PartsMaster() {
  const [showAddForm, setShowAddForm] = useState(false); // State to show/hide Add form
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/Part Name)
  const [tableData, setTableData] = useState([
    [
      1,
      "1234",
      "Laptop Screen",
      "15.6-inch HD display",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "85285100",
      "Goods",
      4500,
      "1.5 kg",
      "Length:40; Breadth:20",
      "Box",
      "Glass",
      "Yes",
    ],
    [
      2,
      "1234",
      "Keyboard",
      "Standard QWERTY keyboard",
      "Electronics",
      "Laptops",
      "Pieces",
      "12%",
      "84716050",
      "Goods",
      1200,
      "0.8 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "No",
    ],
    [
      3,
      "1234",
      "Laptop Charger",
      "65W power adapter",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "85044030",
      "Goods",
      2000,
      "0.5 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "Yes",
    ],
    [
      4,
      "1234",
      "Laptop Battery",
      "Lithium-ion battery",
      "Electronics",
      "Laptops",
      "Pieces",
      "28%",
      "85076000",
      "Goods",
      3500,
      "1.0 kg",
      "Length:40; Breadth:20",
      "Box",
      "Lithium-ion",
      "Yes",
    ],
    [
      5,
      "1234",
      "Cooling Pad",
      "USB-powered cooling pad",
      "Electronics",
      "Laptops",
      "Pieces",
      "12%",
      "84733020",
      "Goods",
      800,
      "0.7 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "No",
    ],
    [
      6,
      "1234",
      "Laptop Stand",
      "Adjustable aluminum stand",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "76169990",
      "Goods",
      1000,
      "0.9 kg",
      "Length:40; Breadth:20",
      "Box",
      "Aluminum",
      "Yes",
    ],
    [
      7,
      "1234",
      "Laptop Bag",
      "Water-resistant laptop bag",
      "Electronics",
      "Laptops",
      "Pieces",
      "12%",
      "42022220",
      "Goods",
      1500,
      "1.2 kg",
      "Length:40; Breadth:20",
      "Bag",
      "Fabric",
      "No",
    ],
    [
      8,
      "1234",
      "Mouse",
      "Wireless optical mouse",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "84716060",
      "Goods",
      600,
      "0.3 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "No",
    ],
    [
      9,
      "1234",
      "USB Hub",
      "4-port USB 3.0 hub",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "84719000",
      "Goods",
      800,
      "0.4 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "Yes",
    ],
    [
      10,
      "1234",
      "Webcam",
      "HD webcam with microphone",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "85258090",
      "Goods",
      2500,
      "0.5 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "Yes",
    ],
    [
      11,
      "1234",
      "Docking Station",
      "Universal docking station",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "84733020",
      "Goods",
      8000,
      "1.8 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "Yes",
    ],
    [
      12,
      "1234",
      "SSD Drive",
      "1TB internal SSD",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "84717020",
      "Goods",
      8500,
      "0.25 kg",
      "Length:40; Breadth:20",
      "Box",
      "Silicon",
      "Yes",
    ],
    [
      13,
      "1234",
      "RAM Module",
      "8GB DDR4 RAM",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "84733020",
      "Goods",
      4000,
      "0.2 kg",
      "Length:40; Breadth:20",
      "Box",
      "Silicon",
      "No",
    ],
    [
      14,
      "1234",
      "Ethernet Adapter",
      "USB to Ethernet adapter",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "85176290",
      "Goods",
      700,
      "0.4 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "No",
    ],
    [
      15,
      "1234",
      "Headset",
      "Wireless headset with mic",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "85183000",
      "Goods",
      3000,
      "0.6 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "Yes",
    ],
    [
      16,
      "1234",
      "Bluetooth Adapter",
      "USB Bluetooth 5.0 adapter",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "85176290",
      "Goods",
      500,
      "0.2 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "No",
    ],
    [
      17,
      "1234",
      "Graphics Card",
      "External GPU enclosure",
      "Electronics",
      "Laptops",
      "Pieces",
      "28%",
      "84733020",
      "Goods",
      35000,
      "3.5 kg",
      "Length:40; Breadth:20",
      "Box",
      "Metal",
      "Yes",
    ],
    [
      18,
      "1234",
      "Laptop Sleeve",
      "Shockproof laptop sleeve",
      "Electronics",
      "Laptops",
      "Pieces",
      "12%",
      "42029200",
      "Goods",
      1200,
      "0.8 kg",
      "Length:40; Breadth:20",
      "Bag",
      "Fabric",
      "No",
    ],
    [
      19,
      "1234",
      "Power Bank",
      "20000mAh power bank",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "85076000",
      "Goods",
      2500,
      "0.9 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "Yes",
    ],
    [
      20,
      "1234",
      "Screen Guard",
      "Anti-glare screen protector",
      "Electronics",
      "Laptops",
      "Pieces",
      "18%",
      "85299090",
      "Goods",
      300,
      "0.1 kg",
      "Length:40; Breadth:20",
      "Envelope",
      "Plastic",
      "No",
    ],
    // Add more data as needed...
  ]);
  const [filteredData, setFilteredData] = useState(tableData); // State for filtered table data
  const [newPart, setNewPart] = useState({
    partNumber: "",
    partName: "",
    description: "",
    category: "",
    subcategory: "",
    units: "",
    gst: "",
    hsn: "",
    supplyType: "",
    sellingPrice: "",
    weight: "",
    dimensions: "",
    packing: "",
    material: "",
    certification: "",
  });

  // Effect to initialize filteredData
  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPart((prev) => ({ ...prev, [name]: value }));
  };

  // Add new part
  const handleAddPart = (e) => {
    e.preventDefault();
    if (!newPart.partName || !newPart.description) {
      alert("All fields are required!");
      return;
    }
    setTableData((prev) => [
      ...prev,
      [
        prev.length + 1,
        newPart.partNumber,
        newPart.partName,
        newPart.description,
        newPart.category,
        newPart.subcategory,
        newPart.units,
        newPart.gst,
        newPart.hsn,
        newPart.supplyType,
        newPart.sellingPrice,
        newPart.weight,
        newPart.dimensions,
        newPart.packing,
        newPart.material,
        newPart.certification,
      ],
    ]);
    setNewPart({
      PartNumber: "",
      partName: "",
      description: "",
      category: "",
      subcategory: "",
      units: "",
      gst: "",
      hsn: "",
      supplyType: "",
      sellingPrice: "",
      weight: "",
      dimensions: "",
      packing: "",
      material: "",
      certification: "",
    }); // Reset form
    setShowAddForm(false); // Hide the form after adding
  };

  // Handle search filter
  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredData = tableData.filter((row) => {
      if (filterType === "id") {
        return row[0].toString().includes(lowerCaseQuery);
      } else if (filterType === "partName") {
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
        <h1 className="category-master-title">PARTS MASTER</h1>

        {/* Search Section */}
        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by ID</option>
            <option value="partName">Search by Part Name</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${
              filterType === "id" ? "ID" : "Part Name"
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
            <form onSubmit={handleAddPart} className="add-category-form">
              <div className="form-row">
                <label>Part Number:</label>
                <input
                  type="number"
                  name="partNumber"
                  value={newPart.partNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Part Name:</label>
                <input
                  type="text"
                  name="partName"
                  value={newPart.partName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={newPart.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Category:</label>
                <select
                  name="category"
                  value={newPart.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Furniture">Furniture</option>
                </select>
              </div>
              <div className="form-row">
                <label>Subcategory:</label>
                <select
                  name="subcategory"
                  value={newPart.subcategory}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a subcategory</option>
                  {newPart.category === "Electronics" && (
                    <>
                      <option value="Mobile Phones">Mobile Phones</option>
                      <option value="Laptops">Laptops</option>
                      <option value="Accessories">Accessories</option>
                    </>
                  )}
                  {newPart.category === "Automotive" && (
                    <>
                      <option value="Car Parts">Car Parts</option>
                      <option value="Motorcycle Parts">Motorcycle Parts</option>
                      <option value="Accessories">Accessories</option>
                    </>
                  )}
                  {newPart.category === "Furniture" && (
                    <>
                      <option value="Tables">Tables</option>
                      <option value="Chairs">Chairs</option>
                      <option value="Beds">Beds</option>
                    </>
                  )}
                </select>
              </div>
              <div className="form-row">
                <label>Units:</label>
                <select
                  name="units"
                  value={newPart.units}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Units</option>
                  <option value="Piece">Piece</option>
                  <option value="Kilogram">Kilogram</option>
                  <option value="Meter">Meter</option>
                  <option value="Dozen">Dozen</option>
                  <option value="Liter">Liter</option>
                </select>
              </div>

              <div className="form-row">
                <label>GST (%):</label>
                <select
                  name="gst"
                  value={newPart.gst}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select GST (%)</option>
                  <option value="0%">0%</option>
                  <option value="5%">5%</option>
                  <option value="12%">12%</option>
                  <option value="18%">18%</option>
                  <option value="28%">28%</option>
                </select>
              </div>

              <div className="form-row">
                <label>HSN Code:</label>
                <select
                  name="hsn"
                  value={newPart.hsn}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select HSN Code</option>
                  <option value="1001">1001</option>
                  <option value="2002">2002</option>
                  <option value="3003">3003</option>
                  <option value="4004">4004</option>
                  <option value="5005">5005</option>
                </select>
              </div>

              <div className="form-row">
                <label>Types of Supply:</label>
                <select
                  name="supplyType"
                  value={newPart.supplyType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Type of Supply</option>
                  <option value="Goods">Goods</option>
                  <option value="Services">Services</option>
                  <option value="Both">Both</option>
                </select>
              </div>

              <div className="form-row">
                <label>Selling Price:</label>
                <input
                  type="text"
                  name="sellingPrice"
                  value={newPart.sellingPrice}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Weight:</label>
                <input
                  type="text"
                  name="weight"
                  value={newPart.weight}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Dimensions (Cm):</label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="number"
                    name="length"
                    value={newPart.length}
                    placeholder="Length"
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="number"
                    name="width"
                    value={newPart.width}
                    placeholder="Width"
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="number"
                    name="height"
                    value={newPart.height}
                    placeholder="Height"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <label>Packing:</label>
                <select
                  name="packing"
                  value={newPart.packing}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Packing</option>
                  <option value="Box">Box</option>
                  <option value="Bag">Bag</option>
                  <option value="Bundle">Bundle</option>
                  <option value="Roll">Roll</option>
                  <option value="Packet">Packet</option>
                </select>
              </div>

              <div className="form-row">
                <label>Material:</label>
                <input
                  type="text"
                  name="material"
                  value={newPart.material}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Certification:</label>
                <select
                  name="certification"
                  value={newPart.certification}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Certification</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
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
            "Part ID",
            "Part No.",
            "Part Name",
            "Description",
            "Category",
            "Subcategory",
            "Units",
            "GST",
            "HSN Code",
            "Types of Supply",
            "Selling Price",
            "Weight",
            "Dimensions",
            "Packing",
            "Material",
            "Certification",
          ]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default PartsMaster;
