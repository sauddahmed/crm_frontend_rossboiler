import React from "react";
import "../../css_files/Master/SearchCurrencyMaster.css";
import CloseForm from "./CloseForm";

function SearchCurrencyMaster({ setshowsearchform }) {
  return (
    <form className="search-currency-master-form">
      <h3>Search Currency Master By Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input type="number" placeholder="Enter Currency Master Id" />
      </blockquote>
      <blockquote>
        <label>Name</label>
        <input type="text" placeholder="Enter Currency Name" />
      </blockquote>
      <blockquote>
        <label>Code</label>
        <input type="text" placeholder="Enter Currency Code" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchCurrencyMaster;
