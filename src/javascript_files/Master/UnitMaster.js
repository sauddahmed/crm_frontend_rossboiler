import React, { useState } from "react";
import "../../css_files/Master/UnitMaster.css";
import Table from "../Homepage/Table";
import AddUnitMaster from "./AddUnitMaster";
import SearchUnitMaster from "./SearchUnitMaster";

function UnitMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Unit Id", "Unit Name", "Unit Code", "Description"];

  const tabledata = [
    [1, "Kilogram", "KG", "Measurement of mass"],
    [2, "Meter", "M", "Measurement of length"],
    [3, "Liter", "L", "Measurement of volume"],
    [4, "Piece", "PCS", "Individual countable items"],
    [5, "Dozen", "DZ", "12 pieces"],
    [6, "Gram", "G", "Small unit of mass"],
    [7, "Centimeter", "CM", "Small unit of length"],
    [8, "Milliliter", "ML", "Small unit of volume"],
    [9, "Pack", "PK", "Collection of items in a package"],
    [10, "Box", "BX", "Container of items"],
    [11, "Ton", "T", "Large unit of mass"],
    [12, "Yard", "YD", "Unit of length"],
    [13, "Inch", "IN", "Small unit of length"],
    [14, "Square Meter", "SQM", "Measurement of area"],
    [15, "Cubic Meter", "CBM", "Measurement of volume"],
    [16, "Hour", "HR", "Unit of time"],
    [17, "Minute", "MIN", "Small unit of time"],
    [18, "Second", "SEC", "Very small unit of time"],
    [19, "Barrel", "BBL", "Unit of volume for liquids"],
    [20, "Carton", "CTN", "Box used for packaging"],
  ];

  return (
    <>
      <section className="unit-master">
        <h1>Unit Master</h1>
        <blockquote className="unit-master-forms">
          <button onClick={() => setshowaddform(true)}>Add Unit Master</button>
          <button onClick={() => setshowsearchform(true)}>
            Search Unit Master
          </button>
        </blockquote>
        {showaddform && <AddUnitMaster setshowaddform={setshowaddform} />}
        {showsearchform && (
          <SearchUnitMaster setshowsearchform={setshowsearchform} />
        )}
        <Table tablehead={tablehead} tabledata={tabledata} />
      </section>
    </>
  );
}

export default UnitMaster;
