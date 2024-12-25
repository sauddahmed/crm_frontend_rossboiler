import React from "react";
import "../../css_files/Master/SearchHSNMaster.css";
import CloseForm from "./CloseForm";

function SearchHSNMaster({ setshowsearchform }) {
  return (
    <form className="search-hsn-master-form">
      <h3>Search HSN Master By Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input type="number" placeholder="Enter HSN Master Id" />
      </blockquote>
      <blockquote>
        <label>HSN Code</label>
        <input type="text" placeholder="Enter HSN Code" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchHSNMaster;
