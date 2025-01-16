import React, { useState, useEffect } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/TechnicianMaster.css";

function TechnicianMaster() {
  const [showAddForm, setShowAddForm] = useState(false); // State to show/hide Add form
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filterType, setFilterType] = useState("id"); // State for filter type (ID/Name)
  const [tableData, setTableData] = useState([
    [
      1,
      "John Smith",
      29,
      "B.Tech",
      "Electrical Technician",
      4,
      450000,
      "Mumbai",
      "1234-5678-9012",
      "ABCDE1234F",
      "123 Main St, Mumbai, MH",
      "9876543210",
    ],
    [
      2,
      "Rajesh Kumar",
      35,
      "Diploma",
      "Mechanical Technician",
      7,
      520000,
      "Delhi",
      "2345-6789-0123",
      "BCDEF2345G",
      "456 Park Ave, Delhi, DL",
      "9876543211",
    ],
    [
      3,
      "Aisha Khan",
      31,
      "B.E.",
      "Automation Specialist",
      5,
      480000,
      "Bangalore",
      "3456-7890-1234",
      "CDEFG3456H",
      "789 Elm St, Bangalore, KA",
      "9876543212",
    ],
    [
      4,
      "David Lee",
      28,
      "ITI",
      "Maintenance Technician",
      3,
      400000,
      "Chennai",
      "4567-8901-2345",
      "DEFGH4567I",
      "321 Maple Rd, Chennai, TN",
      "9876543213",
    ],
    [
      5,
      "Sneha Patil",
      30,
      "B.Sc",
      "Network Technician",
      6,
      470000,
      "Pune",
      "5678-9012-3456",
      "EFGHI5678J",
      "654 Cedar Ave, Pune, MH",
      "9876543214",
    ],
    [
      6,
      "Ali Ahmed",
      33,
      "M.Tech",
      "System Technician",
      8,
      550000,
      "Hyderabad",
      "6789-0123-4567",
      "FGHIJ6789K",
      "987 Spruce Ln, Hyderabad, TS",
      "9876543215",
    ],
    [
      7,
      "Emily Davis",
      27,
      "BCA",
      "Computer Technician",
      2,
      420000,
      "Kolkata",
      "7890-1234-5678",
      "GHIJK7890L",
      "876 Pine Blvd, Kolkata, WB",
      "9876543216",
    ],
    [
      8,
      "Arjun Mehta",
      36,
      "Diploma",
      "Field Technician",
      9,
      530000,
      "Jaipur",
      "8901-2345-6789",
      "HIJKL8901M",
      "765 Birch St, Jaipur, RJ",
      "9876543217",
    ],
    [
      9,
      "Jessica Wong",
      29,
      "B.Sc",
      "Instrumentation Technician",
      4,
      460000,
      "Ahmedabad",
      "9012-3456-7890",
      "IJKLM9012N",
      "654 Fir Ln, Ahmedabad, GJ",
      "9876543218",
    ],
    [
      10,
      "Naveen Sharma",
      32,
      "B.Tech",
      "HVAC Technician",
      6,
      510000,
      "Lucknow",
      "0123-4567-8901",
      "JKLMN0123O",
      "543 Hawthorn Rd, Lucknow, UP",
      "9876543219",
    ],
    [
      11,
      "Sophia Brown",
      34,
      "MCA",
      "IT Support Technician",
      7,
      600000,
      "Gurgaon",
      "1234-5678-9012",
      "KLMNO1234P",
      "432 Poplar St, Gurgaon, HR",
      "9876543220",
    ],
    [
      12,
      "Ravi Gupta",
      26,
      "B.E.",
      "Electrical Technician",
      2,
      430000,
      "Surat",
      "2345-6789-0123",
      "LMNOP2345Q",
      "321 Dogwood Ln, Surat, GJ",
      "9876543221",
    ],
    [
      13,
      "Zara Sheikh",
      28,
      "B.Tech",
      "Automation Specialist",
      3,
      450000,
      "Patna",
      "3456-7890-1234",
      "MNOPQ3456R",
      "210 Aspen Rd, Patna, BR",
      "9876543222",
    ],
    [
      14,
      "Ethan Hill",
      37,
      "Diploma",
      "Mechanical Technician",
      10,
      570000,
      "Chandigarh",
      "4567-8901-2345",
      "NOPQR4567S",
      "101 Willow Ln, Chandigarh, PB",
      "9876543223",
    ],
    [
      15,
      "Lakshmi Menon",
      31,
      "BCA",
      "Network Technician",
      6,
      500000,
      "Thiruvananthapuram",
      "5678-9012-3456",
      "OPQRS5678T",
      "303 Palm St, Thiruvananthapuram, KL",
      "9876543224",
    ],
    [
      16,
      "Omar Khan",
      33,
      "M.Tech",
      "System Technician",
      8,
      580000,
      "Kanpur",
      "6789-0123-4567",
      "PQRST6789U",
      "404 Olive Rd, Kanpur, UP",
      "9876543225",
    ],
    [
      17,
      "Anna Taylor",
      29,
      "B.Sc",
      "Computer Technician",
      4,
      490000,
      "Indore",
      "7890-1234-5678",
      "QRSTU7890V",
      "505 Chestnut Ln, Indore, MP",
      "9876543226",
    ],
    [
      18,
      "Vikram Joshi",
      38,
      "Diploma",
      "Field Technician",
      12,
      600000,
      "Nagpur",
      "8901-2345-6789",
      "RSTUV8901W",
      "606 Ash Rd, Nagpur, MH",
      "9876543227",
    ],
    [
      19,
      "Chloe Martin",
      27,
      "B.Tech",
      "Instrumentation Technician",
      3,
      470000,
      "Vadodara",
      "9012-3456-7890",
      "STUVW9012X",
      "707 Cypress Ln, Vadodara, GJ",
      "9876543228",
    ],
    [
      20,
      "Pranav Reddy",
      32,
      "B.E.",
      "HVAC Technician",
      6,
      520000,
      "Visakhapatnam",
      "0123-4567-8901",
      "TUVWX0123Y",
      "808 Redwood Blvd, Visakhapatnam, AP",
      "9876543229",
    ],
  ]);
  const [filteredData, setFilteredData] = useState(tableData); // State for filtered table data
  const [newTechnician, setNewTechnician] = useState({
    technicianName: "",
    age: "",
    qualification: "",
    experience: "",
    yearsWithRoss: "",
    ctc: "",
    postingLocation: "",
    aadharNumber: "",
    pan: "",
    address: "",
    phoneNumber: "",
  }); // State for new technician form data

  // Effect to initialize filteredData
  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTechnician((prev) => ({ ...prev, [name]: value }));
  };

  // Add new technician
  const handleAddTechnician = (e) => {
    e.preventDefault();
    if (
      !newTechnician.technicianName ||
      !newTechnician.age ||
      !newTechnician.qualification ||
      !newTechnician.experience ||
      !newTechnician.yearsWithRoss ||
      !newTechnician.ctc ||
      !newTechnician.postingLocation ||
      !newTechnician.aadharNumber ||
      !newTechnician.pan ||
      !newTechnician.address ||
      !newTechnician.phoneNumber
    ) {
      alert("All fields are required!");
      return;
    }
    setTableData((prev) => [
      ...prev,
      [
        prev.length + 1,
        newTechnician.technicianName,
        newTechnician.age,
        newTechnician.qualification,
        newTechnician.experience,
        newTechnician.yearsWithRoss,
        newTechnician.ctc,
        newTechnician.postingLocation,
        newTechnician.aadharNumber,
        newTechnician.pan,
        newTechnician.address,
        newTechnician.phoneNumber,
      ],
    ]);
    setNewTechnician({
      technicianName: "",
      age: "",
      qualification: "",
      experience: "",
      yearsWithRoss: "",
      ctc: "",
      postingLocation: "",
      aadharNumber: "",
      pan: "",
      address: "",
      phoneNumber: "",
    }); // Reset form
    setShowAddForm(false); // Hide the form after adding
  };

  // Handle search filter
  const handleFilter = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredData = tableData.filter((row) => {
      if (filterType === "id") {
        return row[0].toString().includes(lowerCaseQuery);
      } else if (filterType === "technicianName") {
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
        <h1 className="category-master-title">Technician Master</h1>

        {/* Search Section */}
        <div className="search-container">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="search-select"
          >
            <option value="id">Search by Technician Id</option>
            <option value="technicianName">Search by Technician Name</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${
              filterType === "id" ? "Technician Id" : "Technician Name"
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
            <form onSubmit={handleAddTechnician} className="add-category-form">
              <div className="form-row">
                <label>Technician Name:</label>
                <input
                  type="text"
                  name="technicianName"
                  value={newTechnician.technicianName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={newTechnician.age}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Qualification:</label>
                <input
                  type="text"
                  name="qualification"
                  value={newTechnician.qualification}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Experience:</label>
                <input
                  type="text"
                  name="experience"
                  value={newTechnician.experience}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>No. of Years with Ross:</label>
                <input
                  type="number"
                  name="yearsWithRoss"
                  value={newTechnician.yearsWithRoss}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>CTC:</label>
                <input
                  type="number"
                  name="ctc"
                  value={newTechnician.ctc}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Posting Location:</label>
                <input
                  type="text"
                  name="postingLocation"
                  value={newTechnician.postingLocation}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Aadhar Number:</label>
                <input
                  type="text"
                  name="aadharNumber"
                  value={newTechnician.aadharNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>PAN:</label>
                <input
                  type="text"
                  name="pan"
                  value={newTechnician.pan}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={newTechnician.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Personal Phone Number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={newTechnician.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="add-category-button">
                Add Technician
              </button>
            </form>
          </div>
        )}

        {/* Table */}
        <Table
          tablehead={[
            "Technician Id",
            "Technician Name",
            "Age",
            "Qualification",
            "Experience",
            "No. of Years with Ross",
            "CTC",
            "Posting Location",
            "Aadhar Number",
            "PAN",
            "Residential Address",
            "Personal Phone Number",
          ]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default TechnicianMaster;
