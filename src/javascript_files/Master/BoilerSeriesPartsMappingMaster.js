import React, { useState, useEffect } from "react";
import "../../css_files/Master/BoilerSeriesPartsMappingMaster.css";
import Table from "../Homepage/Table";
import AddBoilerSeriesPartsMappingMaster from "./AddBoilerSeriesPartsMappingMaster";
import SearchBoilerSeriesPartsMappingMaster from "./SearchBoilerSeriesPartsMappingMaster";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function BoilerSeriesPartsMappingMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = [
    "Id",
    "Head",
    "Series Id",
    "Description",
    "Display All Parts",
  ];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [boilerseriespartsupdatedata, setboilerseriespartsupdatedata] =
    useState(null);
  const [datareload, setdatareload] = useState(0);

  function setsearchedtabledata(tabledata) {
    setTableData([]);
    const tablearr = [];
    tablearr.push(tabledata.id);
    tablearr.push(tabledata.head);
    tablearr.push(tabledata.seriesId);
    tablearr.push(tabledata.description);
    tablearr.push(tabledata.displayAllParts);
    setTableData((prev) => {
      const arr = [...prev];
      arr.push(tablearr);
      return arr;
    });
    setshowsearchform(false);
  }

  function fetchboilerseriespartsdata(boilerseriespartsid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/BoilerSeriesPartsMapping/GetBoilerSeriesPartsMappingById?id=${boilerseriespartsid}`;
    axios
      .get(url)
      .then((res) => {
        setboilerseriespartsupdatedata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setTableData([]);
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/BoilerSeriesPartsMapping`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          const data = [];
          data.push(response.data[i].id);
          data.push(response.data[i].head);
          data.push(response.data[i].seriesId);
          data.push(response.data[i].description);
          data.push(response.data[i].displayAllParts);
          setTableData((prev) => {
            const arr = [...prev];
            arr.push(data);
            return arr;
          });
        }
      })
      .catch((error) => {
        console.error(
          "Error fetching boiler series parts mapping data:",
          error
        );
      });
  }, [reload]);

  return (
    <section className="boiler-series-parts-mapping-master">
      <ToastContainer />
      <h1>Boiler-Series Parts Mapping Master</h1>
      <blockquote className="boiler-series-parts-mapping-master-forms">
        <button
          onClick={() => {
            setshowaddform(true);
            settriggerupdate(false);
          }}
        >
          Add Boiler-Series Parts Mapping Master
        </button>
        <button onClick={() => setshowsearchform(true)}>
          Search Boiler-Series Parts Mapping Master
        </button>
      </blockquote>
      {showaddform && (
        <AddBoilerSeriesPartsMappingMaster
          setshowaddform={setshowaddform}
          reload={reload}
          setReload={setReload}
          triggerupdate={triggerupdate}
          boilerseriespartsupdatedata={boilerseriespartsupdatedata}
          key={`${boilerseriespartsupdatedata?.id}-${triggerupdate}-${datareload}`}
        />
      )}
      {showsearchform && (
        <SearchBoilerSeriesPartsMappingMaster
          setshowsearchform={setshowsearchform}
          setsearchedtabledata={setsearchedtabledata}
        />
      )}
      <Table
        tablehead={tablehead}
        tabledata={tabledata}
        setshowaddform={setshowaddform}
        settriggerupdate={settriggerupdate}
        fetchdata={fetchboilerseriespartsdata}
        url="BoilerSeriesPartsMapping/DeleteBoilerSeriesPartsMapping"
        reload={reload}
        setReload={setReload}
        setdatareload={setdatareload}
        datareload={datareload}
      />
    </section>
  );
}

export default BoilerSeriesPartsMappingMaster;
