import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddCustomerPricingMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function AddCustomerPricingMaster({
  setshowaddform,
  reload,
  setReload,
  triggerupdate,
  customerpricingupdatedata,
}) {
  const [customerPricingData, setCustomerPricingData] = useState({
    Code: triggerupdate ? customerpricingupdatedata?.code : "",
    Percentage: triggerupdate ? customerpricingupdatedata?.percentage : "",
    Description: triggerupdate ? customerpricingupdatedata?.description : "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (triggerupdate) {
      const url = `${process.env.REACT_APP_API_URL}/api/v1/CustomerPricing/UpdateCustomerPricing`;
      axios
        .put(url, {
          id: customerpricingupdatedata.id,
          code: customerPricingData.Code,
          percentage: customerPricingData.Percentage,
          description: customerPricingData.Description,
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
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/CustomerPricing`;
      axios
        .post(URL, customerPricingData)
        .then((response) => {
          toast.success("Record Added Successfully", {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          console.error("Error adding boiler data:", error);
          toast.error("Failed to Add Record", {
            position: "bottom-center",
          });
        });
    }
  }
  return (
    <form className="add-customer-pricing-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Customer Code</label>
        <input
          type="text"
          placeholder="Enter Customer Code"
          value={customerPricingData.Code}
          onChange={(e) =>
            setCustomerPricingData({
              ...customerPricingData,
              Code: e.target.value,
            })
          }
        />
      </blockquote>
      <blockquote>
        <label>Percentage</label>
        <input
          type="text"
          placeholder="Enter Percentage"
          value={customerPricingData.Percentage}
          onChange={(e) =>
            setCustomerPricingData({
              ...customerPricingData,
              Percentage: e.target.value,
            })
          }
        />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={customerPricingData.Description}
          onChange={(e) =>
            setCustomerPricingData({
              ...customerPricingData,
              Description: e.target.value,
            })
          }
        />
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddCustomerPricingMaster;
