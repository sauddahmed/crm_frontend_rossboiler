import React, { useState } from "react";
import "../../css_files/Master/BoilerMaster.css";
import Table from "../Homepage/Table";
import AddBoilerMaster from "./AddBoilerMaster";
import SearchBoilerMaster from "./SearchBoilerMaster";

function BoilerMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Boiler Id", "Boiler Head", "Description"];
  const tabledata = [
    [
      1,
      "Fire Tube Boiler",
      "Boiler with fire tubes passing through a sealed container",
    ],
    [
      2,
      "Water Tube Boiler",
      "Boiler where water flows through tubes and is heated by fire outside",
    ],
    [3, "Electric Boiler", "Boiler powered by electricity to generate steam"],
    [4, "Package Boiler", "Compact boiler pre-assembled for easy installation"],
    [
      5,
      "Condensing Boiler",
      "Boiler designed to recover and reuse heat from exhaust gases",
    ],
    [
      6,
      "Steam Boiler",
      "Boiler that generates steam for industrial or heating purposes",
    ],
    [7, "Oil-Fired Boiler", "Boiler using oil as a fuel source for heating"],
    [8, "Gas-Fired Boiler", "Boiler fueled by natural gas or propane"],
    [
      9,
      "Coal-Fired Boiler",
      "Traditional boiler using coal as the primary fuel source",
    ],
    [
      10,
      "Waste Heat Boiler",
      "Boiler that utilizes waste heat from other industrial processes",
    ],
    [
      11,
      "Biomass Boiler",
      "Eco-friendly boiler using organic materials as fuel",
    ],
    [12, "Vertical Boiler", "Boiler with a vertical cylindrical configuration"],
    [
      13,
      "Horizontal Boiler",
      "Boiler with a horizontal cylindrical configuration",
    ],
    [
      14,
      "High-Pressure Boiler",
      "Boiler designed to operate at high pressures",
    ],
    [15, "Low-Pressure Boiler", "Boiler designed for low-pressure operations"],
    [16, "Industrial Boiler", "Large-scale boiler for industrial applications"],
    [
      17,
      "Residential Boiler",
      "Smaller boiler designed for home heating purposes",
    ],
    [
      18,
      "Marine Boiler",
      "Boiler used on ships to power engines or heating systems",
    ],
    [19, "Locomotive Boiler", "Boiler used to power steam locomotives"],
    [
      20,
      "Thermal Fluid Boiler",
      "Boiler designed for heating thermal fluids for industrial use",
    ],
  ];

  return (
    <>
      <section className="boiler-master">
        <h1>Boiler Master</h1>
        <blockquote className="boiler-master-forms">
          <button onClick={() => setshowaddform(true)}>
            Add Boiler Master
          </button>
          <button onClick={() => setshowsearchform(true)}>
            Search Boiler Master
          </button>
        </blockquote>
        {showaddform && <AddBoilerMaster setshowaddform={setshowaddform} />}
        {showsearchform && (
          <SearchBoilerMaster setshowsearchform={setshowsearchform} />
        )}
        <Table tablehead={tablehead} tabledata={tabledata} />
      </section>
    </>
  );
}

export default BoilerMaster;
