import React from "react";
import "../../css_files/Master/SearchBoilerMaster.css";
import CloseForm from "./CloseForm";

function SearchBoilerMaster({ setshowsearchform }) {
  return (
    <form className="search-boiler-master-form">
      <h3>Search Boiler Master By Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input type="number" placeholder="Enter Boiler Master Id" />
      </blockquote>
      <blockquote>
        <label>Name</label>
        <input type="text" placeholder="Enter Boiler Head" />
      </blockquote>

      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchBoilerMaster;
