import React from "react";
import "../../css_files/Master/SearchBoilerSeriesMaster.css";
import CloseForm from "./CloseForm";

function SearchBoilerSeriesMaster({ setshowsearchform }) {
  return (
    <form className="search-boiler-series-master-form">
      <h3>
        Search Boiler-Series Master By <br />
        Entering at least One Field
      </h3>
      <blockquote>
        <label>Id</label>
        <input type="number" placeholder="Enter Boiler-Series Master Id" />
      </blockquote>
      <blockquote>
        <label>Series Code</label>
        <input type="text" placeholder="Enter Series Code" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchBoilerSeriesMaster;
