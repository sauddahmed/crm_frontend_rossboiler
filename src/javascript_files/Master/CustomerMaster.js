import React, { useState, useEffect } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/CustomerMaster.css";
import AddCustomerMaster from "./AddCustomerMaster";
import SearchCustomerMaster from "./SearchCustomerMaster";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function CustomerMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = [
    "Id",
    "Name",
    "Description",
    "Addresses",
    "Contact Centres",
    "Customer Boilers",
  ];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [customerupdatedata, setcustomerupdatedata] = useState(null);
  const [datareload, setdatareload] = useState(0);

  function setsearchedtabledata(tabledata) {
    setTableData([]);
    const tablearr = [];
    tablearr.push(tabledata.id);
    tablearr.push(tabledata.orgName);
    tablearr.push(tabledata.description);
    tablearr.push(tabledata.addresses);
    tablearr.push(tabledata.contactCentres);
    tablearr.push(tabledata.customerBoilers);
    setTableData((prev) => {
      const arr = [...prev];
      arr.push(tablearr);
      return arr;
    });
    setshowsearchform(false);
  }

  function fetchcustomerdata(customerid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/Customer/GetCustomerById?id=${customerid}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setcustomerupdatedata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setTableData([]);
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Customer`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          const data = [];
          data.push(response.data[i].id);
          data.push(response.data[i].orgName);
          data.push(response.data[i].description);
          data.push(response.data[i].addresses);
          data.push(response.data[i].contactCentres);
          data.push(response.data[i].customerBoilers);
          setTableData((prev) => {
            const arr = [...prev];
            arr.push(data);
            return arr;
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
      });
  }, [reload]);

  return (
    <>
      <section className="customer-master">
        <ToastContainer />
        <h1>Customer Master</h1>
        <blockquote className="customer-master-forms">
          <button
            onClick={() => {
              setshowaddform(true);
              settriggerupdate(false);
            }}
          >
            Add Customer Master
          </button>
          <button onClick={() => setshowsearchform(true)}>
            Search Customer Master
          </button>
        </blockquote>
        {showaddform && (
          <AddCustomerMaster
            setshowaddform={setshowaddform}
            reload={reload}
            setReload={setReload}
            triggerupdate={triggerupdate}
            customerupdatedata={customerupdatedata}
            key={`${customerupdatedata?.id}-${triggerupdate}-${datareload}`}
          />
        )}
        {showsearchform && (
          <SearchCustomerMaster
            setshowsearchform={setshowsearchform}
            setsearchedtabledata={setsearchedtabledata}
          />
        )}
        <Table
          tablehead={tablehead}
          tabledata={tabledata}
          setshowaddform={setshowaddform}
          settriggerupdate={settriggerupdate}
          fetchdata={fetchcustomerdata}
          url="Customer/DeleteCustomer"
          reload={reload}
          setReload={setReload}
          setdatareload={setdatareload}
          datareload={datareload}
        />
      </section>
    </>
  );
}

export default CustomerMaster;
