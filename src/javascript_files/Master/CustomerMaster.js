import React, { useState } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/CustomerMaster.css";
import AddCustomerMaster from "./AddCustomerMaster";
import SearchCustomerMaster from "./SearchCustomerMaster";

function CustomerMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = [
    "Customer Id",
    "Customer Name",
    "Name of Company or Organization",
    "Email",
    "Phone Number",
    "Address",
  ];
  const tabledata = [
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
  ];

  return (
    <section className="customer-master">
      <h1>Customer Master</h1>
      <blockquote className="customer-master-forms">
        <button onClick={() => setshowaddform(true)}>
          Add Customer Master
        </button>
        <button onClick={() => setshowsearchform(true)}>
          Search Customer Master
        </button>
      </blockquote>
      {showaddform && <AddCustomerMaster setshowaddform={setshowaddform} />}
      {showsearchform && (
        <SearchCustomerMaster setshowsearchform={setshowsearchform} />
      )}
      <Table tablehead={tablehead} tabledata={tabledata} />
    </section>
  );
}

export default CustomerMaster;
