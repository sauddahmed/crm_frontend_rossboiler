import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddCustomerMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function AddCustomerMaster({
  setshowaddform,
  reload,
  setReload,
  triggerupdate,
  customerupdatedata,
}) {
  const [customerData, setCustomerData] = useState({
    OrgName: triggerupdate ? customerupdatedata?.orgName : "",
    Description: triggerupdate ? customerupdatedata?.description : "",
    Addresses: triggerupdate ? customerupdatedata?.addresses : "",
    ContactCentres: triggerupdate ? customerupdatedata?.contactCentres : "",
    CustomerBoilers: triggerupdate ? customerupdatedata?.customerBoilers : "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (triggerupdate) {
      console.log(customerData);
      const url = `${process.env.REACT_APP_API_URL}/api/v1/Customer/UpdateCustomerCommand`;
      axios
        .put(url, {
          id: customerupdatedata.id,
          orgName: customerData.OrgName,
          description: customerData.Description,
          addresses: customerData.Addresses,
          contactCentres: customerData.ContactCentres,
          customerBoilers: customerData.CustomerBoilers,
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((err) => {
          toast.error("Failed to Update", {
            position: "bottom-center",
          });
          console.log(err);
        });
    } else {
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/Customer`;
      axios
        .post(URL, customerData)
        .then((response) => {
          toast.success("Record Added Successfully", {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          console.error("Error adding customer data:", error);
          toast.error("Failed to Add Record", {
            position: "bottom-center",
          });
        });
    }
  }
  return (
    <form className="add-customer-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Customer Name</label>
        <input
          type="text"
          placeholder="Enter Customer Name"
          value={customerData.OrgName}
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
          value={customerData.Description}
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
          value={customerData.Addresses}
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
          value={customerData.ContactCentres}
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
          value={customerData.CustomerBoilers}
          onChange={(e) =>
            setCustomerData({
              ...customerData,
              CustomerBoilers: e.target.value,
            })
          }
        />
      </blockquote>
      <button type="submit">{triggerupdate ? "Update" : "Add"} </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddCustomerMaster;
