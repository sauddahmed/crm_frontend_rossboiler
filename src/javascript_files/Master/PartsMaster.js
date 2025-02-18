import React, { useState, useEffect } from "react";
import "../../css_files/Master/PartsMaster.css";
import Table from "../Homepage/Table";
import AddPartsMaster from "./AddPartsMaster";
import SearchPartsMaster from "./SearchPartsMaster";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function PartsMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = [
    "Part Id",
    "Part Number",
    "Part Name",
    "Part Description",
    "Units",
    "GST Rate (Percentage)",
    "HSN Code",
    "Types of Supply",
    "Selling Price",
    "Weight",
    "Dimensions",
    "Packing",
    "Material of Construction",
  ];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [partsupdatedata, setpartsupdatedata] = useState(null);
  const [datareload, setdatareload] = useState(0);

  async function setsearchedtabledata(tabledata) {
    setTableData([]);

    try {
      const [unit, gst, hsn, packing] = await Promise.all([
        fetchunitdatabyid(tabledata.unitId),
        fetchgstdatabyid(tabledata.gstId),
        fetchhsndatabyid(tabledata.hsnDetailsId),
        fetchpackingdatabyid(tabledata.packingId),
      ]);

      const tablearr = [
        tabledata.id,
        tabledata.partNumber,
        tabledata.name,
        tabledata.description,
        unit,
        gst,
        hsn,
        tabledata.supplyType,
        tabledata.sellingPrice,
        tabledata.weight,
        tabledata.dimensions,
        packing,
        tabledata.materialOfConstruction,
      ];
      setTableData([tablearr]);

      setshowsearchform(false);
    } catch (error) {
      console.error("Error fetching additional data:", error);
    }
  }

  useEffect(() => {
    setTableData([]);
    const fetchData = async () => {
      try {
        const URL = `${process.env.REACT_APP_API_URL}/api/v1/Parts`;
        const response = await axios.get(URL);
        console.log(response.data);

        const promises = response.data.map(async (part) => {
          const unit = await fetchunitdatabyid(part.unitId);
          const gst = await fetchgstdatabyid(part.gstId);
          const hsn = await fetchhsndatabyid(part.hsnDetailsId);
          const packing = await fetchpackingdatabyid(part.packingId);

          return [
            part.id,
            part.partNumber,
            part.name,
            part.description,
            unit,
            gst,
            hsn,
            part.supplyType,
            part.sellingPrice,
            part.weight,
            part.dimensions,
            packing,
            part.materialOfConstruction,
          ];
        });

        const tableData = await Promise.all(promises);
        setTableData(tableData); // Update state once
      } catch (error) {
        console.error("There was an error fetching parts data!", error);
      }
    };

    fetchData();
  }, [reload]);

  function fetchunitdatabyid(unitid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/Unit/GetUnitByFilter?id=${unitid}`;
    return axios
      .get(url)
      .then((res) => {
        return res.data.name;
      })
      .catch((err) => {
        return "";
      });
  }

  function fetchgstdatabyid(gstid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/GST/GetGSTById?id=${gstid}`;
    return axios
      .get(url)
      .then((res) => {
        return res.data.rate;
      })
      .catch((err) => {
        return "";
      });
  }

  function fetchhsndatabyid(hsnid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/HSN/GetHSNByFilter?id=${hsnid}`;
    return axios
      .get(url)
      .then((res) => {
        return res.data.hsnCode;
      })
      .catch((err) => {
        return "";
      });
  }

  function fetchpackingdatabyid(packingid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/Packing/GetPackingByFilter?id=${packingid}`;
    return axios
      .get(url)
      .then((res) => {
        return res.data.name;
      })
      .catch((err) => {
        return "";
      });
  }

  function fetchpartsdata(partid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/Parts/GetPartById?id=${partid}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setpartsupdatedata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className="parts-master">
      <ToastContainer />
      <h1>Parts Master</h1>
      <blockquote className="parts-master-forms">
        <button
          onClick={() => {
            setshowaddform(true);
            settriggerupdate(false);
          }}
        >
          Add Parts Master
        </button>
        <button onClick={() => setshowsearchform(true)}>
          Search Parts Master
        </button>
      </blockquote>
      {showaddform && (
        <AddPartsMaster
          setshowaddform={setshowaddform}
          reload={reload}
          setReload={setReload}
          triggerupdate={triggerupdate}
          partsupdatedata={partsupdatedata}
          key={`${partsupdatedata?.id}-${triggerupdate}-${datareload}`}
        />
      )}
      {showsearchform && (
        <SearchPartsMaster
          setshowsearchform={setshowsearchform}
          setsearchedtabledata={setsearchedtabledata}
        />
      )}
      <Table
        tablehead={tablehead}
        tabledata={tabledata}
        setshowaddform={setshowaddform}
        settriggerupdate={settriggerupdate}
        fetchdata={fetchpartsdata}
        url="Parts/DeletePart"
        reload={reload}
        setReload={setReload}
        setdatareload={setdatareload}
        datareload={datareload}
      />
    </section>
  );
}

export default PartsMaster;
