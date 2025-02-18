import React, { useState } from "react";
import "../../css_files/Master/SearchCustomerPricingMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function SearchCustomerPricingMaster({
  setshowsearchform,
  setsearchedtabledata,
}) {
  const [Id, setId] = useState(0);

  function handleSearch(e, id) {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/api/v1/CustomerPricing/GetCustomerPricingById?id=${id}`;
    axios
      .get(url)
      .then((res) => {
        toast.success("Fetched", {
          position: "bottom-center",
        });
        setsearchedtabledata(res.data);
      })
      .catch((err) => {
        toast.error("Failed to Search. Please Check Id", {
          position: "bottom-center",
        });
      });
  }
  return (
    <form
      className="search-customer-pricing-master-form"
      onSubmit={(e) => handleSearch(e, Id)}
    >
      <h3>Search Customer Pricing Master by Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input
          type="number"
          placeholder="Enter Customer Id"
          onChange={(e) => setId(e.target.value)}
        />
      </blockquote>
      <blockquote>
        <label>Name</label>
        <input type="number" placeholder="Enter Customer Code" />
      </blockquote>
      <blockquote>
        <label>Email</label>
        <input type="email" placeholder="Enter Percentage" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchCustomerPricingMaster;
