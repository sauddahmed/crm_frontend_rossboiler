import React from "react";
import "../../css_files/Master/SearchTechnicianMaster.css";
import CloseForm from "./CloseForm";

function SearchTechnicianMaster({ setshowsearchform }) {
  return (
    <form className="search-technician-master-form">
      <h3>Search Technician Master By Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input type="number" placeholder="Enter Technician Master Id" />
      </blockquote>
      <blockquote>
        <label>Name</label>
        <input type="text" placeholder="Enter Technician Name" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchTechnicianMaster;
