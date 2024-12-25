import React from "react";
import "../../css_files/Master/SearchGSTMaster.css";
import CloseForm from "./CloseForm";

function SearchGSTMaster({ setshowsearchform }) {
  return (
    <form className="search-gst-master-form">
      <h3>Search GST Master</h3>
      <blockquote>
        <label>Id</label>
        <input type="number" placeholder="Enter GST Master Id" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchGSTMaster;
