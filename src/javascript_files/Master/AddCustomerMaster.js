import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddCustomerMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";

function AddCustomerMaster({ setshowaddform, reload, setReload }) {
  const [customerData, setCustomerData] = useState({
    OrgName: "",
    Description: "",
    Addresses: "",
    ContactCentres: "",
    CustomerBoilers: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Customer`;
    axios
      .post(URL, customerData)
      .then((response) => {
        console.log(response.data);
        setshowaddform(false);
        setReload(!reload);
      })
      .catch((error) => {
        console.error("Error adding customer data:", error);
      });
  }
  return (
    <form className="add-customer-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Customer Name</label>
        <input
          type="text"
          placeholder="Enter Customer Name"
          onChange={(e) =>
            setCustomerData({ ...customerData, OrgName: e.target.value })
          }
        />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) =>
            setCustomerData({ ...customerData, Description: e.target.value })
          }
        />
      </blockquote>
      <blockquote>
        <label>Customer Address</label>
        <input
          type="text"
          placeholder="Enter Customer Address"
          onChange={(e) =>
            setCustomerData({ ...customerData, Addresses: e.target.value })
          }
        />
      </blockquote>
      <blockquote>
        <label>Contact</label>
        <input
          type="number"
          placeholder="Enter Customer Phone Number"
          onChange={(e) =>
            setCustomerData({ ...customerData, ContactCentres: e.target.value })
          }
        />
      </blockquote>
      <blockquote>
        <label>Customer Boilers</label>
        <input
          type="text"
          placeholder="Enter Customer Boilers"
          onChange={(e) =>
            setCustomerData({
              ...customerData,
              CustomerBoilers: e.target.value,
            })
          }
        />
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddCustomerMaster;
