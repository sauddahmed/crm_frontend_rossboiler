import React from "react";
import "../../css_files/Master/SearchUnitMaster.css";
import CloseForm from "./CloseForm";

function SearchUnitMaster({ setshowsearchform }) {
  return (
    <form className="search-unit-master-form">
      <h3>Search Unit Master By Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input type="number" placeholder="Enter Unit Master Id" />
      </blockquote>
      <blockquote>
        <label>Name</label>
        <input type="text" placeholder="Enter Unit Name" />
      </blockquote>
      <blockquote>
        <label>Code</label>
        <input type="text" placeholder="Enter Unit Code" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchUnitMaster;
