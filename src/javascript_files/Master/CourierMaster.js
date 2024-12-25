import React, { useState } from "react";
import "../../css_files/Master/CourierMaster.css";
import Table from "../Homepage/Table";
import AddCourierMaster from "./AddCourierMaster";
import SearchCourierMaster from "./SearchCourierMaster";

function CourierMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = [
    "Courier Id",
    "Courier Name",
    "Courier Email",
    "Courier Phone Number",
    "Courier Address",
  ];

  const tabledata = [
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
  ];

  return (
    <>
      <section className="courier-master">
        <h1>Courier Master</h1>
        <blockquote className="courier-master-forms">
          <button onClick={() => setshowaddform(true)}>
            Add Courier Master
          </button>
          <button onClick={() => setshowsearchform(true)}>
            Search Courier Master
          </button>
        </blockquote>
        {showaddform && <AddCourierMaster setshowaddform={setshowaddform} />}
        {showsearchform && (
          <SearchCourierMaster setshowsearchform={setshowsearchform} />
        )}
        <Table tablehead={tablehead} tabledata={tabledata} />
      </section>
    </>
  );
}

export default CourierMaster;
