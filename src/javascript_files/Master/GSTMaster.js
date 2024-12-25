import React, { useState } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/GSTMaster.css";
import AddGSTMaster from "./AddGSTMaster";
import SearchGSTMaster from "./SearchGSTMaster";

function GSTMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["GST Id", "Rate", "Description"];
  const tabledata = [
    [101, "5%", "GST applicable on essential goods"],
    [102, "12%", "GST applicable on restaurant services"],
    [103, "18%", "GST applicable on electronic appliances"],
    [104, "28%", "GST applicable on luxury items"],
    [105, "18%", "GST on mobile phones and accessories"],
    [106, "12%", "GST applicable on hotels and lodges"],
    [107, "5%", "GST applicable on footwear under Rs. 1000"],
    [108, "18%", "GST applicable on beauty products"],
    [109, "28%", "GST on tobacco and related products"],
    [110, "12%", "GST on furniture and fixtures"],
    [111, "5%", "GST on transport services"],
    [112, "18%", "GST on software services"],
    [113, "28%", "GST on motor vehicles"],
    [114, "12%", "GST on financial services"],
    [115, "5%", "GST on packaged food items"],
    [116, "18%", "GST on clothing and garments"],
    [117, "28%", "GST on construction materials"],
    [118, "5%", "GST on printing and publishing services"],
    [119, "12%", "GST on educational services"],
    [120, "18%", "GST on cleaning and maintenance services"],
  ];

  return (
    <section className="gst-master">
      <h1>GST Master</h1>
      <blockquote className="gst-master-forms">
        <button onClick={() => setshowaddform(true)}>Add GST Master</button>
        <button onClick={() => setshowsearchform(true)}>
          Search GST Master
        </button>
      </blockquote>
      {showaddform && <AddGSTMaster setshowaddform={setshowaddform} />}
      {showsearchform && (
        <SearchGSTMaster setshowsearchform={setshowsearchform} />
      )}
      <Table tablehead={tablehead} tabledata={tabledata} />
    </section>
  );
}

export default GSTMaster;
