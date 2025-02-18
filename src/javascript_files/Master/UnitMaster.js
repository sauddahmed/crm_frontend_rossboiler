import React, { useState, useEffect } from "react";
import "../../css_files/Master/UnitMaster.css";
import Table from "../Homepage/Table";
import AddUnitMaster from "./AddUnitMaster";
import SearchUnitMaster from "./SearchUnitMaster";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function UnitMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Id", "Name", "Code", "Description"];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [unitupdatedata, setunitupdatedata] = useState(null);
  const [datareload, setdatareload] = useState(0);

  function setsearchedtabledata(tabledata) {
    setTableData([]);
    const tablearr = [];
    tablearr.push(tabledata.id);
    tablearr.push(tabledata.name);
    tablearr.push(tabledata.code);
    tablearr.push(tabledata.description);
    setTableData((prev) => {
      const arr = [...prev];
      arr.push(tablearr);
      return arr;
    });
    setshowsearchform(false);
  }

  function fetchunitdata(unitid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/Unit/GetUnitByFilter?id=${unitid}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setunitupdatedata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setTableData([]);
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Unit`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          const data = [];
          data.push(response.data[i].id);
          data.push(response.data[i].name);
          data.push(response.data[i].code);
          data.push(response.data[i].description);
          setTableData((prev) => {
            const arr = [...prev];
            arr.push(data);
            return arr;
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching unit data:", error);
      });
  }, [reload]);

  return (
    <>
      <section className="unit-master">
        <ToastContainer />
        <h1>Unit Master</h1>
        <blockquote className="unit-master-forms">
          <button
            onClick={() => {
              setshowaddform(true);
              settriggerupdate(false);
            }}
          >
            Add Unit Master
          </button>
          <button onClick={() => setshowsearchform(true)}>
            Search Unit Master
          </button>
        </blockquote>
        {showaddform && (
          <AddUnitMaster
            setshowaddform={setshowaddform}
            reload={reload}
            setReload={setReload}
            triggerupdate={triggerupdate}
            unitupdatedata={unitupdatedata}
            key={`${unitupdatedata?.id}-${triggerupdate}-${datareload}`}
          />
        )}
        {showsearchform && (
          <SearchUnitMaster
            setshowsearchform={setshowsearchform}
            setsearchedtabledata={setsearchedtabledata}
          />
        )}
        <Table
          tablehead={tablehead}
          tabledata={tabledata}
          setshowaddform={setshowaddform}
          settriggerupdate={settriggerupdate}
          fetchdata={fetchunitdata}
          url="Unit/DeleteUnit"
          reload={reload}
          setReload={setReload}
          setdatareload={setdatareload}
          datareload={datareload}
        />
      </section>
    </>
  );
}

export default UnitMaster;
