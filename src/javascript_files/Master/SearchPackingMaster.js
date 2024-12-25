import React from "react";
import "../../css_files/Master/SearchPackingMaster.css";
import CloseForm from "./CloseForm";

function SearchPackingMaster({ setshowsearchform }) {
  return (
    <form className="search-packing-master-form">
      <h3>Search Packing Master By Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input type="number" placeholder="Enter Packing Master Id" />
      </blockquote>
      <blockquote>
        <label>Name</label>
        <input type="text" placeholder="Enter Packing Master Name" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchPackingMaster;
