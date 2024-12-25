import React from "react";
import "../../css_files/Master/SearchCustomerMaster.css";
import CloseForm from "./CloseForm";

function SearchCustomerMaster({ setshowsearchform }) {
  return (
    <form className="search-customer-master-form">
      <h3>Search Customer Master by Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input type="number" placeholder="Enter Customer Master Id" />
      </blockquote>
      <blockquote>
        <label>Name</label>
        <input type="number" placeholder="Enter Customer Name" />
      </blockquote>
      <blockquote>
        <label>Email</label>
        <input type="email" placeholder="Enter Customer Email" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchCustomerMaster;
