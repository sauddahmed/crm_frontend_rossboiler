import React, { useState, useEffect } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/CustomerPricing.css";

function CustomerPricing() {
  const [showAddForm, setShowAddForm] = useState(false); // State to show/hide Add form
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/Name)
  const [tableData, setTableData] = useState([
    [
      1,
      "John Doe",
      "TechCorp Inc.",
      "john.doe@techcorp.com",
      "9876543210",
      "123 Main Street, Cityville, NY 10001",
    ],
    [
      2,
      "Jane Smith",
      "Innovate Solutions",
      "jane.smith@innovate.com",
      "9876543211",
      "456 Elm Street, Townsville, TX 75001",
    ],
    [
      3,
      "Rajesh Kumar",
      "Global Systems",
      "rajesh.kumar@globalsys.com",
      "9876543212",
      "789 Oak Street, Metropolis, CA 90210",
    ],
    [
      4,
      "Emily Davis",
      "Alpha Dynamics",
      "emily.davis@alphadynamics.com",
      "9876543213",
      "321 Maple Avenue, Centertown, IL 60007",
    ],
    [
      5,
      "Ali Ahmed",
      "NextGen Technologies",
      "ali.ahmed@nextgentech.com",
      "9876543214",
      "654 Pine Avenue, Uptown, FL 33101",
    ],
    [
      6,
      "Sophia Brown",
      "Rapid Ventures",
      "sophia.brown@rapidventures.com",
      "9876543215",
      "987 Cedar Lane, Bay Area, WA 98001",
    ],
    [
      7,
      "David Lee",
      "Future Networks",
      "david.lee@futurenet.com",
      "9876543216",
      "432 Birch Road, Mountain View, CO 80501",
    ],
    [
      8,
      "Zara Sheikh",
      "Smart Solutions",
      "zara.sheikh@smartsol.com",
      "9876543217",
      "876 Spruce Lane, Sunnyvale, CA 94085",
    ],
    [
      9,
      "Ethan Hill",
      "Pioneer Innovations",
      "ethan.hill@pioneer.com",
      "9876543218",
      "567 Redwood Drive, Downtown, OR 97035",
    ],
    [
      10,
      "Lakshmi Menon",
      "BrightTech",
      "lakshmi.menon@brighttech.com",
      "9876543219",
      "210 Aspen Street, Lakeside, MI 49085",
    ],
    [
      11,
      "Pranav Joshi",
      "Skyline Enterprises",
      "pranav.joshi@skyline.com",
      "9876543220",
      "101 Willow Road, Hilltop, TX 77001",
    ],
    [
      12,
      "Chloe Martin",
      "Blue Horizon",
      "chloe.martin@bluehorizon.com",
      "9876543221",
      "909 Cypress Avenue, Greenfield, IN 46201",
    ],
    [
      13,
      "Anna Taylor",
      "Infinity Solutions",
      "anna.taylor@infinity.com",
      "9876543222",
      "777 Palm Court, Beachside, CA 90291",
    ],
    [
      14,
      "Vikram Reddy",
      "Omega Systems",
      "vikram.reddy@omegasys.com",
      "9876543223",
      "505 Olive Street, City Center, WA 98101",
    ],
    [
      15,
      "Jessica Wong",
      "Prime Tech",
      "jessica.wong@primetech.com",
      "9876543224",
      "666 Ash Avenue, Suburbia, NY 11743",
    ],
    [
      16,
      "Naveen Sharma",
      "UltraLogix",
      "naveen.sharma@ultralogix.com",
      "9876543225",
      "303 Fir Street, Old Town, TX 76102",
    ],
    [
      17,
      "Ravi Gupta",
      "Vertex Solutions",
      "ravi.gupta@vertex.com",
      "9876543226",
      "404 Hawthorn Lane, Eastside, NJ 07001",
    ],
    [
      18,
      "Sneha Patil",
      "Matrix Enterprises",
      "sneha.patil@matrix.com",
      "9876543227",
      "505 Poplar Road, Riverside, OH 45040",
    ],
    [
      19,
      "Aisha Khan",
      "Core Dynamics",
      "aisha.khan@coredyn.com",
      "9876543228",
      "808 Dogwood Lane, Midtown, GA 30301",
    ],
    [
      20,
      "Omar Khan",
      "Xcel Solutions",
      "omar.khan@xcel.com",
      "9876543229",
      "909 Chestnut Drive, Westend, IL 60010",
    ],
  ]);
  const [filteredData, setFilteredData] = useState(tableData); // State for filtered table data
  const [newCustomer, setNewCustomer] = useState({
    customerName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    address: "",
  }); // State for new customer form data

  // Effect to initialize filteredData
  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prev) => ({ ...prev, [name]: value }));
  };

  // Add new customer
  const handleAddCustomer = (e) => {
    e.preventDefault();
    if (
      !newCustomer.customerName ||
      !newCustomer.companyName ||
      !newCustomer.email ||
      !newCustomer.phoneNumber ||
      !newCustomer.address
    ) {
      alert("All fields are required!");
      return;
    }
    setTableData((prev) => [
      ...prev,
      [
        prev.length + 1,
        newCustomer.customerName,
        newCustomer.companyName,
        newCustomer.email,
        newCustomer.phoneNumber,
        newCustomer.address,
      ],
    ]);
    setNewCustomer({
      customerName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      address: "",
    }); // Reset form
    setShowAddForm(false); // Hide the form after adding
  };

  // Handle search filter
  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredData = tableData.filter((row) => {
      if (filterType === "id") {
        return row[0].toString().includes(lowerCaseQuery);
      } else if (filterType === "customerName") {
        return row[1].toLowerCase().includes(lowerCaseQuery);
      } else if (filterType === "companyName") {
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
        <h1 className="category-master-title">CUSTOMER PRICING</h1>

        {/* Search Section */}
        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by ID</option>
            <option value="customerName">Search by Customer Name</option>
            <option value="companyName">Search by Company Name</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${
              filterType === "id"
                ? "ID"
                : filterType === "customerName"
                ? "Customer Name"
                : "Company Name"
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
            <form onSubmit={handleAddCustomer} className="add-category-form">
              <div className="form-row">
                <label>Customer Name:</label>
                <input
                  type="text"
                  name="customerName"
                  value={newCustomer.customerName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Company Name:</label>
                <input
                  type="text"
                  name="companyName"
                  value={newCustomer.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={newCustomer.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Phone Number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={newCustomer.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={newCustomer.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="add-category-button">
                Add Customer
              </button>
            </form>
          </div>
        )}

        {/* Table Component */}
        <Table
          tablehead={[
            "Customer Id",
            "Customer Name",
            "Company Name",
            "Email",
            "Phone Number",
            "Address",
          ]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default CustomerPricing;
