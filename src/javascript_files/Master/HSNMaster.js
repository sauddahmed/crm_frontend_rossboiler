import React, { useState } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/HSNMaster.css";
import AddHSNMaster from "./AddHSNMaster";
import SearchHSNMaster from "./SearchHSNMaster";

function HSNMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["HSN Id", "HSN Code", "Description"];
  const tabledata = [
    [1, "A123", "Electronics and gadgets"],
    [2, "B4567", "Furniture and fittings"],
    [3, "C78901", "Clothing and apparel"],
    [4, "D234X", "Books and publications"],
    [5, "E56789", "Toys and games"],
    [6, "F8901G", "Sports equipment"],
    [7, "G1234Y", "Beauty products"],
    [8, "H5678Z", "Kitchen appliances"],
    [9, "I90123", "Gardening tools"],
    [10, "J4567W", "Automotive parts"],
    [11, "K890L", "Jewelry and accessories"],
    [12, "L12345", "Musical instruments"],
    [13, "M67890", "Healthcare items"],
    [14, "N23456", "Office supplies"],
    [15, "O789XY", "Travel gear"],
    [16, "P123Z4", "Pet accessories"],
    [17, "Q5678A", "Art and craft supplies"],
    [18, "R9012B", "Fitness equipment"],
    [19, "S3456C", "Gaming consoles"],
    [20, "T7890D", "Photography equipment"],
  ];
  return (
    <section className="hsn-master">
      <h1>HSN Master</h1>
      <blockquote className="hsn-master-forms">
        <button onClick={() => setshowaddform(true)}>Add HSN Master</button>
        <button onClick={() => setshowsearchform(true)}>
          Search HSN Master
        </button>
      </blockquote>
      {showaddform && <AddHSNMaster setshowaddform={setshowaddform} />}
      {showsearchform && (
        <SearchHSNMaster setshowsearchform={setshowsearchform} />
      )}
      <Table tablehead={tablehead} tabledata={tabledata} />
    </section>
  );
}

export default HSNMaster;
