import React, { useState, useEffect } from "react";
import "../../css_files/Master/CourierMaster.css";
import Table from "../Homepage/Table";

function CourierMaster() {
  const [showAddForm, setShowAddForm] = useState(false); // State to show/hide Add form
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/Name)
  const [tableData, setTableData] = useState([
    [
      1,
      "Express Delivery",
      "express.delivery@example.com",
      "9876543210",
      "123 Main Street, Cityville, CA 90210",
    ],
    [
      2,
      "Rapid Ship",
      "rapid.ship@example.com",
      "9876543211",
      "456 Elm Street, Townsville, TX 75001",
    ],
    [
      3,
      "Priority Post",
      "priority.post@example.com",
      "9876543212",
      "789 Oak Street, Metropolis, NY 10001",
    ],
    [
      4,
      "Swift Courier",
      "swift.courier@example.com",
      "9876543213",
      "321 Maple Avenue, Centertown, IL 60007",
    ],
    [
      5,
      "Next Day Express",
      "nextday.express@example.com",
      "9876543214",
      "654 Pine Avenue, Uptown, FL 33101",
    ],
    [
      6,
      "Lightning Logistics",
      "lightning.logistics@example.com",
      "9876543215",
      "987 Cedar Lane, Bay Area, WA 98001",
    ],
    [
      7,
      "Secure Parcel",
      "secure.parcel@example.com",
      "9876543216",
      "432 Birch Road, Mountain View, CO 80501",
    ],
    [
      8,
      "Global Freight",
      "global.freight@example.com",
      "9876543217",
      "876 Spruce Lane, Sunnyvale, CA 94085",
    ],
    [
      9,
      "OnTime Couriers",
      "ontime.couriers@example.com",
      "9876543218",
      "567 Redwood Drive, Downtown, OR 97035",
    ],
    [
      10,
      "AirDash Express",
      "airdash.express@example.com",
      "9876543219",
      "210 Aspen Street, Lakeside, MI 49085",
    ],
    [
      11,
      "Parcel Pros",
      "parcel.pros@example.com",
      "9876543220",
      "101 Willow Road, Hilltop, TX 77001",
    ],
    [
      12,
      "Speedy Services",
      "speedy.services@example.com",
      "9876543221",
      "909 Cypress Avenue, Greenfield, IN 46201",
    ],
    [
      13,
      "Elite Express",
      "elite.express@example.com",
      "9876543222",
      "777 Palm Court, Beachside, CA 90291",
    ],
    [
      14,
      "Metro Couriers",
      "metro.couriers@example.com",
      "9876543223",
      "505 Olive Street, City Center, WA 98101",
    ],
    [
      15,
      "Arrow Logistics",
      "arrow.logistics@example.com",
      "9876543224",
      "666 Ash Avenue, Suburbia, NY 11743",
    ],
    [
      16,
      "Fast Track",
      "fast.track@example.com",
      "9876543225",
      "303 Fir Street, Old Town, TX 76102",
    ],
    [
      17,
      "Premier Delivery",
      "premier.delivery@example.com",
      "9876543226",
      "404 Hawthorn Lane, Eastside, NJ 07001",
    ],
    [
      18,
      "Ultra Express",
      "ultra.express@example.com",
      "9876543227",
      "505 Poplar Road, Riverside, OH 45040",
    ],
    [
      19,
      "HyperShip",
      "hypership@example.com",
      "9876543228",
      "808 Dogwood Lane, Midtown, GA 30301",
    ],
    [
      20,
      "QuickShip",
      "quickship@example.com",
      "9876543229",
      "909 Chestnut Drive, Westend, IL 60010",
    ],
  ]);
  const [filteredData, setFilteredData] = useState(tableData); // State for filtered table data
  const [newCourier, setNewCourier] = useState({
    courierName: "",
    courierEmail: "",
    courierPhoneNumber: "",
    courierAddress: "",
  }); // State for the new courier input fields

  // Effect to initialize filteredData
  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourier((prev) => ({ ...prev, [name]: value }));
  };

  // Add new courier
  const handleAddCourier = (e) => {
    e.preventDefault();
    if (
      !newCourier.courierName ||
      !newCourier.courierEmail ||
      !newCourier.courierPhoneNumber ||
      !newCourier.courierAddress
    ) {
      alert("All fields are required!");
      return;
    }
    setTableData((prev) => [
      ...prev,
      [
        prev.length + 1,
        newCourier.courierName,
        newCourier.courierEmail,
        newCourier.courierPhoneNumber,
        newCourier.courierAddress,
      ],
    ]);
    setNewCourier({
      courierName: "",
      courierEmail: "",
      courierPhoneNumber: "",
      courierAddress: "",
    }); // Reset form
    setShowAddForm(false); // Hide the form after adding
  };

  // Handle search filter
  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredData = tableData.filter((row) => {
      if (filterType === "id") {
        return row[0].toString().includes(lowerCaseQuery);
      } else if (filterType === "courierName") {
        return row[1].toLowerCase().includes(lowerCaseQuery);
      } else if (filterType === "courierEmail") {
        return row[2].toLowerCase().includes(lowerCaseQuery);
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
        <h1 className="category-master-title">COURIER MASTER</h1>

        {/* Search Section */}
        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by ID</option>
            <option value="courierName">Search by Courier Name</option>
            <option value="courierEmail">Search by Courier Email</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${
              filterType === "id"
                ? "ID"
                : filterType === "courierName"
                ? "Courier Name"
                : "Courier Email"
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
            <form onSubmit={handleAddCourier} className="add-category-form">
              <div className="form-row">
                <label>Courier Name:</label>
                <input
                  type="text"
                  name="courierName"
                  value={newCourier.courierName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Courier Email:</label>
                <input
                  type="email"
                  name="courierEmail"
                  value={newCourier.courierEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Courier Phone Number:</label>
                <input
                  type="text"
                  name="courierPhoneNumber"
                  value={newCourier.courierPhoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Courier Address:</label>
                <input
                  type="text"
                  name="courierAddress"
                  value={newCourier.courierAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="add-category-button">
                Add Courier
              </button>
            </form>
          </div>
        )}

        {/* Table */}
        <Table
          tablehead={[
            "Courier Id",
            "Courier Name",
            "Courier Email",
            "Courier Phone Number",
            "Courier Address",
          ]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default CourierMaster;
