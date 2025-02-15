import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddCustomerPricingMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";

function AddCustomerPricingMaster({ setshowaddform, reload, setReload }) {
  const [customerPricingData, setCustomerPricingData] = useState({
    Code: "",
    Percentage: "",
    Description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/CustomerPricing`;
    axios
      .post(URL, customerPricingData)
      .then((response) => {
        console.log(response.data);
        setshowaddform(false);
        setReload(!reload);
      })
      .catch((error) => {
        console.error("Error adding customer pricing data:", error);
      });
  }
  return (
    <form className="add-customer-pricing-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Customer Code</label>
        <input
          type="text"
          placeholder="Enter Customer Code"
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
