import React, { useState, useEffect } from "react";
import "../../css_files/Master/BoilerSeriesPartsMappingMaster.css";
import Table from "../Homepage/Table";
import AddBoilerSeriesPartsMappingMaster from "./AddBoilerSeriesPartsMappingMaster";
import SearchBoilerSeriesPartsMappingMaster from "./SearchBoilerSeriesPartsMappingMaster";
import axios from "axios";

function BoilerSeriesPartsMappingMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Id", "Head", "Series Id", "Description"];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
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
    <>
      <section className="boiler-series-parts-mapping-master">
        <h1>Boiler-Series Parts Mapping Master</h1>
        <blockquote className="boiler-series-parts-mapping-master-forms">
          <button onClick={() => setshowaddform(true)}>
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
          />
        )}
        {showsearchform && (
          <SearchBoilerSeriesPartsMappingMaster
            setshowsearchform={setshowsearchform}
          />
        )}
        <Table tablehead={tablehead} tabledata={tabledata} />
      </section>
    </>
  );
}

export default BoilerSeriesPartsMappingMaster;
