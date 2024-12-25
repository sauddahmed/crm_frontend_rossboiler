import React from "react";
import "../../css_files/Master/SearchPartsMaster.css";
import CloseForm from "./CloseForm";

function SearchPartsMaster({ setshowsearchform }) {
  return (
    <form className="search-parts-master-form">
      <h3>Search Parts Master By Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input type="number" placeholder="Enter Part Master Id" />
      </blockquote>
      <blockquote>
        <label>Number</label>
        <input type="text" placeholder="Enter Part Number" />
      </blockquote>
      <blockquote>
        <label>Name</label>
        <input type="text" placeholder="Enter Part Name" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchPartsMaster;
