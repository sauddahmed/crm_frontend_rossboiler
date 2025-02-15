import React, { useState, useEffect } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/CustomerMaster.css";

function CustomerMaster() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("id");
  const [tableData, setTableData] = useState([
    [
      1,
      "John Doe",
      "TechCorp Inc.",
      "john.doe@techcorp.com",
      "9876543210",
      "123 Main Street, Cityville, NY 10001",
      ["Site A", "Site B"],
      ["Alice Johnson", "Bob Smith"],
      ["123-456-7890", "987-654-3210"],
    ],
    [
      2,
      "Jane Smith",
      "Global Solutions Ltd.",
      "jane.smith@globalsolutions.com",
      "2345678901",
      "456 Oak Road, Springfield, IL 62701",
      ["Site C"],
      ["Charlie Brown"],
      ["555-123-4567"],
    ],
    [
      3,
      "Michael Brown",
      "TechVenture LLC",
      "michael.brown@techventure.com",
      "3456789012",
      "789 Pine Lane, Greenfield, WI 53220",
      ["Site D", "Site E", "Site F"],
      ["David Lee", "Emma Stone"],
      ["111-222-3333", "444-555-6666", "777-888-9999"],
    ],
    [
      4,
      "Emily Davis",
      "Innovative Solutions",
      "emily.davis@innovativesolutions.com",
      "4567890123",
      "101 Maple Avenue, Boulder, CO 80302",
      ["Site G"],
      ["Frank Green", "Grace Black"],
      ["222-333-4444"],
    ],
    [
      5,
      "Ali Ahmed",
      "NextGen Technologies",
      "ali.ahmed@nextgentech.com",
      "5678901234",
      "654 Pine Avenue, Uptown, FL 33101",
      ["Site H", "Site I"],
      ["Helen White"],
      ["555-222-3333", "888-555-6666"],
    ],
    [
      6,
      "Sophia Brown",
      "Rapid Ventures",
      "sophia.brown@rapidventures.com",
      "6789012345",
      "987 Cedar Lane, Bay Area, WA 98001",
      ["Site J"],
      ["Jack Black", "Olivia Green"],
      ["777-444-5555"],
    ],
    [
      7,
      "David Lee",
      "Future Networks",
      "david.lee@futurenet.com",
      "7890123456",
      "432 Birch Road, Mountain View, CO 80501",
      ["Site K", "Site L"],
      ["Peter Allen"],
      ["123-789-4567", "987-321-7654"],
    ],
    [
      8,
      "Zara Sheikh",
      "Smart Solutions",
      "zara.sheikh@smartsol.com",
      "8901234567",
      "876 Spruce Lane, Sunnyvale, CA 94085",
      ["Site M"],
      ["Rachel Adams"],
      ["222-111-3333"],
    ],
    [
      9,
      "Ethan Hill",
      "Pioneer Innovations",
      "ethan.hill@pioneer.com",
      "9012345678",
      "567 Redwood Drive, Downtown, OR 97035",
      ["Site N", "Site O"],
      ["Samuel Grant", "Tom Oliver"],
      ["111-555-9999"],
    ],
    [
      10,
      "Lakshmi Menon",
      "BrightTech",
      "lakshmi.menon@brighttech.com",
      "0123456789",
      "210 Aspen Street, Lakeside, MI 49085",
      ["Site P"],
      ["Usha Rao"],
      ["333-555-6666"],
    ],
    [
      11,
      "Pranav Joshi",
      "Skyline Enterprises",
      "pranav.joshi@skyline.com",
      "1234567890",
      "101 Willow Road, Hilltop, TX 77001",
      ["Site Q"],
      ["Vikram Reddy", "Sarah Patel"],
      ["444-222-8888"],
    ],
    [
      12,
      "Chloe Martin",
      "Blue Horizon",
      "chloe.martin@bluehorizon.com",
      "2345678901",
      "909 Cypress Avenue, Greenfield, IN 46201",
      ["Site R", "Site S"],
      ["Monica Green"],
      ["555-444-3333", "222-111-7777"],
    ],
    [
      13,
      "Anna Taylor",
      "Infinity Solutions",
      "anna.taylor@infinity.com",
      "3456789012",
      "777 Palm Court, Beachside, CA 90291",
      ["Site T"],
      ["Lily Grant"],
      ["666-333-4444"],
    ],
    [
      14,
      "Vikram Reddy",
      "Omega Systems",
      "vikram.reddy@omegasys.com",
      "4567890123",
      "505 Olive Street, City Center, WA 98101",
      ["Site U"],
      ["Peter Finch", "Nina Jones"],
      ["888-777-6666"],
    ],
    [
      15,
      "Jessica Wong",
      "Prime Tech",
      "jessica.wong@primetech.com",
      "5678901234",
      "666 Ash Avenue, Suburbia, NY 11743",
      ["Site V"],
      ["Oscar Knight"],
      ["999-555-4444"],
    ],
    [
      16,
      "Naveen Sharma",
      "UltraLogix",
      "naveen.sharma@ultralogix.com",
      "6789012345",
      "303 Fir Street, Old Town, TX 76102",
      ["Site W", "Site X"],
      ["Pooja Kumar"],
      ["123-654-9870", "432-765-1234"],
    ],
    [
      17,
      "Ravi Gupta",
      "Vertex Solutions",
      "ravi.gupta@vertex.com",
      "7890123456",
      "404 Hawthorn Lane, Eastside, NJ 07001",
      ["Site Y"],
      ["Tina Sharma", "Vishal Kumar"],
      ["555-666-7777"],
    ],
    [
      18,
      "Sneha Patil",
      "Matrix Enterprises",
      "sneha.patil@matrix.com",
      "8901234567",
      "505 Poplar Road, Riverside, OH 45040",
      ["Site Z"],
      ["Arjun Kapoor"],
      ["666-777-8888"],
    ],
    [
      19,
      "Aisha Khan",
      "Core Dynamics",
      "aisha.khan@coredyn.com",
      "9012345678",
      "808 Dogwood Lane, Midtown, GA 30301",
      ["Site AA"],
      ["Krishna Reddy", "Jaya Verma"],
      ["777-888-9999"],
    ],
    [
      20,
      "Omar Khan",
      "Xcel Solutions",
      "omar.khan@xcel.com",
      "0123456789",
      "909 Chestnut Drive, Westend, IL 60010",
      ["Site AB"],
      ["Amit Patel", "Priya Mehta"],
      ["888-777-1111", "333-444-5555"],
    ],
  ]);

  const [filteredData, setFilteredData] = useState(tableData);
  const [newCustomer, setNewCustomer] = useState({
    customerName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    address: "",
    sites: [{ siteName: "" }],
    spocs: [{ spocName: "" }],
    contactNumbers: [{ contactNumber: "" }],
  });

  // Effect to initialize filteredData
  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  const handleInputChange = (e, group, index) => {
    const { name, value } = e.target;
    setNewCustomer((prev) => {
      const updatedGroup = [...prev[group]];
      updatedGroup[index] = { ...updatedGroup[index], [name]: value };
      return { ...prev, [group]: updatedGroup };
    });
  };

  const handleAddField = (group) => {
    setNewCustomer((prev) => ({
      ...prev,
      [group]: [...prev[group], { [`${group.slice(0, -1)}Name`]: "" }],
    }));
  };

  const handleRemoveField = (group, index) => {
    setNewCustomer((prev) => {
      const updatedGroup = prev[group].filter((_, idx) => idx !== index);
      return { ...prev, [group]: updatedGroup };
    });
  };

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
        newCustomer.sites.map((site) => site.siteName),
        newCustomer.spocs.map((spoc) => spoc.spocName),
        newCustomer.contactNumbers.map((contact) => contact.contactNumber),
      ],
    ]);
    setNewCustomer({
      customerName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      address: "",
      sites: [{ siteName: "" }],
      spocs: [{ spocName: "" }],
      contactNumbers: [{ contactNumber: "" }],
    });
    setShowAddForm(false);
  };

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

  const resetFilter = () => {
    setSearchQuery("");
    setFilteredData(tableData);
  };

  return (
    <section className="category-master-container">
      <div className="category-master">
        <h1 className="category-master-title">CUSTOMER MASTER</h1>

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

              {/* Sites */}
              <div>
                <label>Sites:</label>
                {newCustomer.sites.map((site, index) => (
                  <div key={index} className="form-row">
                    <input
                      type="text"
                      name="siteName"
                      value={site.siteName}
                      onChange={(e) => handleInputChange(e, "sites", index)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveField("sites", index)}
                    >
                      Remove Site
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => handleAddField("sites")}>
                  Add Site
                </button>
              </div>

              {/* SPOCs */}
              <div>
                <label>SPOCs:</label>
                {newCustomer.spocs.map((spoc, index) => (
                  <div key={index} className="form-row">
                    <input
                      type="text"
                      name="spocName"
                      value={spoc.spocName}
                      onChange={(e) => handleInputChange(e, "spocs", index)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveField("spocs", index)}
                    >
                      Remove SPOC
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => handleAddField("spocs")}>
                  Add SPOC
                </button>
              </div>

              {/* Contact Numbers */}
              <div>
                <label>Contact Numbers:</label>
                {newCustomer.contactNumbers.map((contact, index) => (
                  <div key={index} className="form-row">
                    <input
                      type="text"
                      name="contactNumber"
                      value={contact.contactNumber}
                      onChange={(e) =>
                        handleInputChange(e, "contactNumbers", index)
                      }
                      required
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveField("contactNumbers", index)}
                    >
                      Remove Contact
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddField("contactNumbers")}
                >
                  Add Contact Number
                </button>
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
            "Sites",
            "SPOCs",
            "Contact Numbers",
          ]}
          tabledata={filteredData}
        />
      </div>
    </section>
  );
}

export default CustomerMaster;
