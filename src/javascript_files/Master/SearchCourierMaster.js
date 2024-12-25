import React from "react";
import "../../css_files/Master/SearchCourierMaster.css";
import CloseForm from "./CloseForm";

function SearchCourierMaster({ setshowsearchform }) {
  return (
    <form className="search-courier-master-form">
      <h3>Search Courier Master By Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input type="number" placeholder="Enter Courier Master Id" />
      </blockquote>
      <blockquote>
        <label>Name</label>
        <input type="text" placeholder="Enter Courier Name" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchCourierMaster;
