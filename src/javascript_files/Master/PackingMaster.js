import React, { useState, useEffect } from "react";
import "../../css_files/Master/PackingMaster.css";
import Table from "../Homepage/Table";
import AddPackingMaster from "./AddPackingMaster";
import SearchPackingMaster from "./SearchPackingMaster";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function PackingMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Packing Id", "Packing Name", "Used For", "Description"];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [packingupdatedata, setpackingupdatedata] = useState(null);
  const [datareload, setdatareload] = useState(0);

  function setsearchedtabledata(tabledata) {
    setTableData([]);
    const tablearr = [];
    tablearr.push(tabledata.id);
    tablearr.push(tabledata.name);
    tablearr.push(tabledata.usedFor);
    tablearr.push(tabledata.description);
    setTableData((prev) => {
      const arr = [...prev];
      arr.push(tablearr);
      return arr;
    });
    setshowsearchform(false);
  }

  function fetchpackingdata(packingid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/Packing/GetPackingByFilter?id=${packingid}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setpackingupdatedata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setTableData([]);
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/packing`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          const data = [];
          data.push(response.data[i].id);
          data.push(response.data[i].name);
          data.push(response.data[i].usedFor);
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
    <>
      <section className="packing-master">
        <ToastContainer />
        <h1>Packing Master</h1>
        <blockquote className="packing-master-forms">
          <button
            onClick={() => {
              setshowaddform(true);
              settriggerupdate(false);
            }}
          >
            Add Packing Master
          </button>
          <button onClick={() => setshowsearchform(true)}>
            Search Packing Master
          </button>
        </blockquote>
        {showaddform && (
          <AddPackingMaster
            setshowaddform={setshowaddform}
            reload={reload}
            setReload={setReload}
            triggerupdate={triggerupdate}
            packingupdatedata={packingupdatedata}
            key={`${packingupdatedata?.id}-${triggerupdate}-${datareload}`}
          />
        )}
        {showsearchform && (
          <SearchPackingMaster
            setshowsearchform={setshowsearchform}
            setsearchedtabledata={setsearchedtabledata}
          />
        )}
        <Table
          tablehead={tablehead}
          tabledata={tabledata}
          setshowaddform={setshowaddform}
          settriggerupdate={settriggerupdate}
          fetchdata={fetchpackingdata}
          url="Packing/DeletePacking"
          reload={reload}
          setReload={setReload}
          setdatareload={setdatareload}
          datareload={datareload}
        />
      </section>
    </>
  );
}

export default PackingMaster;
