import React, { useState, useEffect } from "react";
import "../../css_files/Master/BoilerSeriesMaster.css";
import Table from "../Homepage/Table";
import AddBoilerSeriesMaster from "./AddBoilerSeriesMaster";
import SearchBoilerSeriesMaster from "./SearchBoilerSeriesMaster";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function BoilerSeriesMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Id", "Head", "Series Code", "Description"];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [boilerseriesupdatedata, setboilerseriesupdatedata] = useState([]);

  function setsearchedtabledata(tabledata) {
    setTableData([]);
    const tablearr = [];
    tablearr.push(tabledata.id);
    tablearr.push(tabledata.boilerseriesCode);
    tablearr.push(tabledata.description);
    setTableData((prev) => {
      const arr = [...prev];
      arr.push(tablearr);
      return arr;
    });
    setshowsearchform(false);
  }

  function fetchboilerseriesdata(boilerseriesdataarr) {
    setboilerseriesupdatedata(boilerseriesdataarr);
  }

  useEffect(() => {
    setTableData([]);
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/BoilerSeries`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          const data = [];
          data.push(response.data[i].id);
          data.push(response.data[i].head);
          data.push(response.data[i].seriesCode);
          data.push(response.data[i].description);
          setTableData((prev) => {
            const arr = [...prev];
            arr.push(data);
            return arr;
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching boiler series data:", error);
      });
  }, [reload]);

  return (
    <>
      <section className="boiler-series-master">
        <ToastContainer />
        <h1>Boiler-Series Master</h1>
        <blockquote className="boiler-series-master-forms">
          <button
            onClick={() => {
              setshowaddform(true);
              settriggerupdate(false);
            }}
          >
            Add Boiler-Series Master
          </button>
          <button onClick={() => setshowsearchform(true)}>
            Search Boiler-Series Master
          </button>
        </blockquote>
        {showaddform && (
          <AddBoilerSeriesMaster
            setshowaddform={setshowaddform}
            reload={reload}
            setReload={setReload}
            triggerupdate={triggerupdate}
            boilerseriesupdatedata={boilerseriesupdatedata}
            key={`${boilerseriesupdatedata}-${triggerupdate}`}
          />
        )}
        {showsearchform && (
          <SearchBoilerSeriesMaster
            setshowsearchform={setshowsearchform}
            setsearchedtabledata={setsearchedtabledata}
          />
        )}
        <Table
          tablehead={tablehead}
          tabledata={tabledata}
          setshowaddform={setshowaddform}
          settriggerupdate={settriggerupdate}
          fetchdata={fetchboilerseriesdata}
          url="BoilerSeries/DeleteBoilerSeries"
          reload={reload}
          setReload={setReload}
        />
      </section>
    </>
  );
}

export default BoilerSeriesMaster;
