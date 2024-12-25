import React, { useState } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/HSNMaster.css";
import AddHSNMaster from "./AddHSNMaster";
import SearchHSNMaster from "./SearchHSNMaster";

function HSNMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
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
      <Table />
    </section>
  );
}

export default HSNMaster;
