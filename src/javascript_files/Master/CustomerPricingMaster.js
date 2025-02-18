import React, { useState, useEffect } from "react";
import Table from "../Homepage/Table";
import "../../css_files/Master/CustomerPricingMaster.css";
import AddCustomerPricingMaster from "./AddCustomerPricing";
import SearchCustomerPricingMaster from "./SearchCustomerPricingMaster";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function CustomerPricingMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Id", "Code", "Percentage", "Description"];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [customerpricingupdatedata, setcustomerpricingupdatedata] =
    useState(null);
  const [datareload, setdatareload] = useState(0);

  function setsearchedtabledata(tabledata) {
    setTableData([]);
    const tablearr = [];
    tablearr.push(tabledata.id);
    tablearr.push(tabledata.code);
    tablearr.push(tabledata.percentage);
    tablearr.push(tabledata.description);
    setTableData((prev) => {
      const arr = [...prev];
      arr.push(tablearr);
      return arr;
    });
    setshowsearchform(false);
  }

  function fetchcustomerpricingdata(customerpricingid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/CustomerPricing/GetCustomerPricingById?id=${customerpricingid}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setcustomerpricingupdatedata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setTableData([]);
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/CustomerPricing`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          const data = [];
          data.push(response.data[i].id);
          data.push(response.data[i].code);
          data.push(response.data[i].percentage);
          data.push(response.data[i].description);
          setTableData((prev) => {
            const arr = [...prev];
            arr.push(data);
            return arr;
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching customer pricing data:", error);
      });
  }, [reload]);

  return (
    <section className="customer-pricing-master">
      <ToastContainer />
      <h1>Customer Pricing Master</h1>
      <blockquote className="customer-pricing-master-forms">
        <button
          onClick={() => {
            setshowaddform(true);
            settriggerupdate(false);
          }}
        >
          Add Customer Pricing Master
        </button>
        <button onClick={() => setshowsearchform(true)}>
          Search Customer Pricing Master
        </button>
      </blockquote>
      {showaddform && (
        <AddCustomerPricingMaster
          setshowaddform={setshowaddform}
          reload={reload}
          setReload={setReload}
          triggerupdate={triggerupdate}
          customerpricingupdatedata={customerpricingupdatedata}
          key={`${customerpricingupdatedata?.id}-${triggerupdate}-${datareload}`}
        />
      )}
      {showsearchform && (
        <SearchCustomerPricingMaster
          setshowsearchform={setshowsearchform}
          setsearchedtabledata={setsearchedtabledata}
        />
      )}
      <Table
        tablehead={tablehead}
        tabledata={tabledata}
        setshowaddform={setshowaddform}
        settriggerupdate={settriggerupdate}
        fetchdata={fetchcustomerpricingdata}
        url="CustomerPricing/DeleteCustomerPricing"
        reload={reload}
        setReload={setReload}
        setdatareload={setdatareload}
        datareload={datareload}
      />
    </section>
  );
}

export default CustomerPricingMaster;
