import React, { useState, useEffect } from "react";
import "../../css_files/Master/CourierMaster.css";
import Table from "../Homepage/Table";
import AddCourierMaster from "./AddCourierMaster";
import SearchCourierMaster from "./SearchCourierMaster";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function CourierMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Id", "Details", "Contacts", "Address"];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [courierupdatedata, setcourierupdatedata] = useState([]);

  function setsearchedtabledata(tabledata) {
    setTableData([]);
    const tablearr = [];
    tablearr.push(tabledata.id);
    tablearr.push(tabledata.basicDetails);
    tablearr.push(tabledata.contacts);
    tablearr.push(tabledata.address);
    setTableData((prev) => {
      const arr = [...prev];
      arr.push(tablearr);
      return arr;
    });
    setshowsearchform(false);
  }

  function fetchcourierdata(courierdataarr) {
    setcourierupdatedata(courierdataarr);
  }

  useEffect(() => {
    setTableData([]);
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Courier`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          const data = [];
          data.push(response.data[i].id);
          data.push(response.data[i].basicDetails);
          data.push(response.data[i].contacts);
          data.push(response.data[i].address);
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
      <section className="courier-master">
        <ToastContainer />
        <h1>Courier Master</h1>
        <blockquote className="courier-master-forms">
          <button
            onClick={() => {
              setshowaddform(true);
              settriggerupdate(false);
            }}
          >
            Add Courier Master
          </button>
          <button onClick={() => setshowsearchform(true)}>
            Search Courier Master
          </button>
        </blockquote>
        {showaddform && (
          <AddCourierMaster
            setshowaddform={setshowaddform}
            reload={reload}
            setReload={setReload}
            triggerupdate={triggerupdate}
            courierupdatedata={courierupdatedata}
            key={`${courierupdatedata}-${triggerupdate}`}
          />
        )}
        {showsearchform && (
          <SearchCourierMaster
            setshowsearchform={setshowsearchform}
            setsearchedtabledata={setsearchedtabledata}
          />
        )}
        <Table
          tablehead={tablehead}
          tabledata={tabledata}
          setshowaddform={setshowaddform}
          settriggerupdate={settriggerupdate}
          fetchdata={fetchcourierdata}
          url="Courier/DeleteCourier"
          reload={reload}
          setReload={setReload}
        />
      </section>
    </>
  );
}

export default CourierMaster;
