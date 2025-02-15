import React, { useState, useEffect } from "react";
import "../../css_files/Master/TechnicianMaster.css";
import Table from "../Homepage/Table";
import AddTechnicianMaster from "./AddTechnicianMaster";
import SearchTechnicianMaster from "./SearchTechnicianMaster";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function TechnicianMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = [
    "Id",
    "Name",
    "Company Phone No.",
    "Age",
    "Qualification",
    "Experience",
    "Years With Ross",
    "CTC",
    "Posting Location",
    "Aadhar",
    "Pan",
    "Residential Address",
    "Personal Phone No.",
  ];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [technicianupdatedata, settechnicianupdatedata] = useState([]);

  function setsearchedtabledata(tabledata) {
    setTableData([]);
    const tablearr = [];
    tablearr.push(tabledata.id);
    tablearr.push(tabledata.name);
    tablearr.push(tabledata.companyPhoneNumber);
    tablearr.push(tabledata.age);
    tablearr.push(tabledata.qualification);
    tablearr.push(tabledata.experience);
    tablearr.push(tabledata.yearsWithRoss);
    tablearr.push(tabledata.ctc);
    tablearr.push(tabledata.postingLocation);
    tablearr.push(tabledata.aadhar);
    tablearr.push(tabledata.pan);
    tablearr.push(tabledata.residentialAddress);
    tablearr.push(tabledata.personalPhoneNumber);
    setTableData((prev) => {
      const arr = [...prev];
      arr.push(tablearr);
      return arr;
    });
    setshowsearchform(false);
  }

  function fetchtechniciandata(techniciandataarr) {
    settechnicianupdatedata(techniciandataarr);
  }

  useEffect(() => {
    setTableData([]);
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Technician`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          const data = [];
          data.push(response.data[i].id);
          data.push(response.data[i].name);
          data.push(response.data[i].companyPhoneNumber);
          data.push(response.data[i].age);
          data.push(response.data[i].qualification);
          data.push(response.data[i].experience);
          data.push(response.data[i].yearsWithRoss);
          data.push(response.data[i].ctc);
          data.push(response.data[i].postingLocation);
          data.push(response.data[i].aadhar);
          data.push(response.data[i].pan);
          data.push(response.data[i].residentialAddress);
          data.push(response.data[i].personalPhoneNumber);
          setTableData((prev) => {
            const arr = [...prev];
            arr.push(data);
            return arr;
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching technician data:", error);
      });
  }, [reload]);

  return (
    <>
      <section className="technician-master">
        <ToastContainer />
        <h1>Technician Master</h1>
        <blockquote className="technician-master-forms">
          <button
            onClick={() => {
              setshowaddform(true);
              settriggerupdate(false);
            }}
          >
            Add Technician Master
          </button>
          <button onClick={() => setshowsearchform(true)}>
            Search Technician Master
          </button>
        </blockquote>
        {showaddform && (
          <AddTechnicianMaster
            setshowaddform={setshowaddform}
            reload={reload}
            setReload={setReload}
            triggerupdate={triggerupdate}
            technicianupdatedata={technicianupdatedata}
            key={`${technicianupdatedata}-${triggerupdate}`}
          />
        )}
        {showsearchform && (
          <SearchTechnicianMaster
            setshowsearchform={setshowsearchform}
            setsearchedtabledata={setsearchedtabledata}
          />
        )}
        <Table
          tablehead={tablehead}
          tabledata={tabledata}
          setshowaddform={setshowaddform}
          settriggerupdate={settriggerupdate}
          fetchdata={fetchtechniciandata}
          url="Technician/DeleteTechnician"
          reload={reload}
          setReload={setReload}
        />
      </section>
    </>
  );
}

export default TechnicianMaster;
