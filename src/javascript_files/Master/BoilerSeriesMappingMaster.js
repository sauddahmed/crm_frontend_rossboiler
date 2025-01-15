import React, { useState } from "react";
import "../../css_files/Master/BoilerSeriesMaster.css";
import Table from "../Homepage/Table";
import AddBoilerSeriesMaster from "./AddBoilerSeriesMaster";
import SearchBoilerSeriesMaster from "./SearchBoilerSeriesMaster";

function BoilerSeriesMappingMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = [
    "Boiler-Series Id",
    "Boiler Head",
    "Series Code",
    "Description",
  ];
  const tabledata = [
    [
      1,
      "Fire Tube Boiler",
      "FTB-1001",
      "Boiler with fire tubes passing through a sealed container for heat transfer",
    ],
    [
      2,
      "Water Tube Boiler",
      "WTB-2002",
      "Boiler where water flows through tubes and is heated by external flames",
    ],
    [
      3,
      "Electric Boiler",
      "EB-3003",
      "Energy-efficient boiler powered by electricity to generate steam",
    ],
    [
      4,
      "Package Boiler",
      "PB-4004",
      "Compact pre-assembled boiler for quick installation",
    ],
    [
      5,
      "Condensing Boiler",
      "CB-5005",
      "Boiler designed to condense steam for heat recovery and efficiency",
    ],
    [
      6,
      "Steam Boiler",
      "SB-6006",
      "Boiler generating steam for industrial or heating applications",
    ],
    [
      7,
      "Oil-Fired Boiler",
      "OFB-7007",
      "Boiler utilizing oil as a fuel source for heating",
    ],
    [
      8,
      "Gas-Fired Boiler",
      "GFB-8008",
      "Boiler using natural gas or propane for combustion",
    ],
    [
      9,
      "Coal-Fired Boiler",
      "CFB-9009",
      "Traditional boiler burning coal for energy",
    ],
    [
      10,
      "Waste Heat Boiler",
      "WHB-1010",
      "Boiler reusing waste heat from other industrial processes",
    ],
    [
      11,
      "Biomass Boiler",
      "BB-1111",
      "Eco-friendly boiler burning organic materials like wood or agricultural waste",
    ],
    [
      12,
      "Vertical Boiler",
      "VB-1212",
      "Boiler with a vertical cylindrical design for compact spaces",
    ],
    [
      13,
      "Horizontal Boiler",
      "HB-1313",
      "Boiler with a horizontal cylindrical configuration for large-scale use",
    ],
    [
      14,
      "High-Pressure Boiler",
      "HPB-1414",
      "Boiler designed to operate under high pressure for industrial processes",
    ],
    [
      15,
      "Low-Pressure Boiler",
      "LPB-1515",
      "Boiler operating at low pressure for safe and efficient heating",
    ],
    [
      16,
      "Industrial Boiler",
      "IB-1616",
      "Large-scale boiler for heavy-duty industrial applications",
    ],
    [
      17,
      "Residential Boiler",
      "RB-1717",
      "Smaller boiler suited for residential heating needs",
    ],
    [
      18,
      "Marine Boiler",
      "MB-1818",
      "Boiler used on ships for propulsion or heating systems",
    ],
    [
      19,
      "Locomotive Boiler",
      "LB-1919",
      "Boiler used in steam locomotives for engine power",
    ],
    [
      20,
      "Thermal Fluid Boiler",
      "TFB-2020",
      "Boiler heating thermal fluids for industrial applications requiring high precision",
    ],
  ];

  return (
    <>
      <section className="boiler-series-master">
        <h1>Boiler-Series Mapping Master</h1>
        <blockquote className="boiler-series-master-forms">
          <button onClick={() => setshowaddform(true)}>Add</button>
          <button onClick={() => setshowsearchform(true)}>Search</button>
        </blockquote>
        {showaddform && (
          <AddBoilerSeriesMaster setshowaddform={setshowaddform} />
        )}
        {showsearchform && (
          <SearchBoilerSeriesMaster setshowsearchform={setshowsearchform} />
        )}
        <Table tablehead={tablehead} tabledata={tabledata} />
      </section>
    </>
  );
}

export default BoilerSeriesMappingMaster;
