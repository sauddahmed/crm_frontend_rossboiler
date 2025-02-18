import React, { useState, useEffect } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/GSTMaster.css";
import AddGSTMaster from "./AddGSTMaster";
import SearchGSTMaster from "./SearchGSTMaster";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function GSTMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Id", "Rate", "Description"];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [gstupdatedata, setgstupdatedata] = useState(null);
  const [datareload, setdatareload] = useState(0);

  function setsearchedtabledata(tabledata) {
    setTableData([]);
    const tablearr = [];
    tablearr.push(tabledata.id);
    tablearr.push(tabledata.rate);
    tablearr.push(tabledata.description);
    setTableData((prev) => {
      const arr = [...prev];
      arr.push(tablearr);
      return arr;
    });
    setshowsearchform(false);
  }

  function fetchgstdata(gstid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/GST/GetGSTById?id=${gstid}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setgstupdatedata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setTableData([]);
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/GST`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          const data = [];
          data.push(response.data[i].id);
          data.push(response.data[i].rate);
          data.push(response.data[i].description);
          setTableData((prev) => {
            const arr = [...prev];
            arr.push(data);
            return arr;
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching gst data:", error);
      });
  }, [reload]);

  return (
    <section className="gst-master">
      <ToastContainer />
      <h1>GST Master</h1>
      <blockquote className="gst-master-forms">
        <button
          onClick={() => {
            setshowaddform(true);
            settriggerupdate(false);
          }}
        >
          Add GST Master
        </button>
        <button onClick={() => setshowsearchform(true)}>
          Search GST Master
        </button>
      </blockquote>
      {showaddform && (
        <AddGSTMaster
          setshowaddform={setshowaddform}
          reload={reload}
          setReload={setReload}
          triggerupdate={triggerupdate}
          gstupdatedata={gstupdatedata}
          key={`${gstupdatedata?.id}-${triggerupdate}-${datareload}`}
        />
      )}
      {showsearchform && (
        <SearchGSTMaster
          setshowsearchform={setshowsearchform}
          setsearchedtabledata={setsearchedtabledata}
        />
      )}
      <Table
        tablehead={tablehead}
        tabledata={tabledata}
        setshowaddform={setshowaddform}
        settriggerupdate={settriggerupdate}
        fetchdata={fetchgstdata}
        url="GST/DeleteGST"
        reload={reload}
        setReload={setReload}
        setdatareload={setdatareload}
        datareload={datareload}
      />
    </section>
  );
}

export default GSTMaster;
