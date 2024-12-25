import React, { useState } from "react";
import "../../css_files/Master/PackingMaster.css";
import Table from "../Homepage/Table";
import AddPackingMaster from "./AddPackingMaster";
import SearchPackingMaster from "./SearchPackingMaster";

function PackingMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Packing Id", "Packing Name", "Used For", "Description"];
  const tabledata = [
    [1, "Small Box", "Electronics", "Compact box for small items"],
    [2, "Medium Box", "Books", "Box suitable for medium-sized items"],
    [3, "Large Box", "Clothing", "Spacious box for large items"],
    [
      4,
      "Bubble Wrap",
      "Fragile Items",
      "Protective wrapping for fragile items",
    ],
    [5, "Envelope", "Documents", "Secure envelope for papers"],
    [6, "Plastic Bag", "Groceries", "Reusable plastic bag"],
    [7, "Glass Jar", "Food Storage", "Jar for storing food items"],
    [8, "Metal Can", "Beverages", "Can for drinks or liquid storage"],
    [9, "Wooden Crate", "Heavy Items", "Strong crate for heavy goods"],
    [10, "Foam Sheet", "Packaging", "Sheet for cushioning products"],
    [11, "Cardboard Box", "Shipping", "Standard box for shipping items"],
    [
      12,
      "Plastic Container",
      "Food Storage",
      "Durable container for storing food",
    ],
    [13, "Tin Box", "Gifts", "Decorative box for gifting"],
    [14, "Paper Bag", "Retail", "Eco-friendly paper bag"],
    [
      15,
      "Thermal Box",
      "Perishables",
      "Insulated box for temperature-sensitive items",
    ],
    [16, "Fabric Bag", "Shopping", "Durable and reusable shopping bag"],
    [17, "Bottle", "Liquids", "Container for storing liquids"],
    [
      18,
      "Padded Envelope",
      "Fragile Documents",
      "Envelope with padding for protection",
    ],
    [19, "Mesh Bag", "Produce", "Breathable bag for fresh produce"],
    [
      20,
      "Cylindrical Tube",
      "Posters",
      "Tube for storing rolled paper or posters",
    ],
  ];

  return (
    <>
      <section className="packing-master">
        <h1>Packing Master</h1>
        <blockquote className="packing-master-forms">
          <button onClick={() => setshowaddform(true)}>
            Add Packing Master
          </button>
          <button onClick={() => setshowsearchform(true)}>
            Search Packing Master
          </button>
        </blockquote>
        {showaddform && <AddPackingMaster setshowaddform={setshowaddform} />}
        {showsearchform && (
          <SearchPackingMaster setshowsearchform={setshowsearchform} />
        )}
        <Table tablehead={tablehead} tabledata={tabledata} />
      </section>
    </>
  );
}

export default PackingMaster;
