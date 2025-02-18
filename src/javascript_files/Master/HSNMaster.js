import React, { useState, useEffect } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/HSNMaster.css";
import AddHSNMaster from "./AddHSNMaster";
import SearchHSNMaster from "./SearchHSNMaster";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function HSNMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Id", "HSN Code", "Description"];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [hsnupdatedata, sethsnupdatedata] = useState(null);
  const [datareload, setdatareload] = useState(0);

  function setsearchedtabledata(tabledata) {
    setTableData([]);
    const tablearr = [];
    tablearr.push(tabledata.id);
    tablearr.push(tabledata.hsnCode);
    tablearr.push(tabledata.description);
    setTableData((prev) => {
      const arr = [...prev];
      arr.push(tablearr);
      return arr;
    });
    setshowsearchform(false);
  }

  function fetchhsndata(hsnid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/HSN/GetHSNByFilter?id=${hsnid}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        sethsnupdatedata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setTableData([]);
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/hsn`;
    axios
      .get(URL)
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          const data = [];
          data.push(response.data[i].id);
          data.push(response.data[i].hsnCode);
          data.push(response.data[i].description);
          setTableData((prev) => {
            const arr = [...prev];
            arr.push(data);
            return arr;
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching packing data:", error);
      });
  }, [reload]);

  return (
    <section className="hsn-master">
      <ToastContainer />
      <h1>HSN Master</h1>
      <blockquote className="hsn-master-forms">
        <button
          onClick={() => {
            setshowaddform(true);
            settriggerupdate(false);
          }}
        >
          Add HSN Master
        </button>
        <button onClick={() => setshowsearchform(true)}>
          Search HSN Master
        </button>
      </blockquote>
      {showaddform && (
        <AddHSNMaster
          setshowaddform={setshowaddform}
          reload={reload}
          setReload={setReload}
          triggerupdate={triggerupdate}
          hsnupdatedata={hsnupdatedata}
          key={`${hsnupdatedata?.id}-${triggerupdate}-${datareload}`}
        />
      )}
      {showsearchform && (
        <SearchHSNMaster
          setshowsearchform={setshowsearchform}
          setsearchedtabledata={setsearchedtabledata}
        />
      )}
      <Table
        tablehead={tablehead}
        tabledata={tabledata}
        setshowaddform={setshowaddform}
        settriggerupdate={settriggerupdate}
        fetchdata={fetchhsndata}
        url="HSN/DeleteHSN"
        reload={reload}
        setReload={setReload}
        setdatareload={setdatareload}
        datareload={datareload}
      />
    </section>
  );
}

export default HSNMaster;
