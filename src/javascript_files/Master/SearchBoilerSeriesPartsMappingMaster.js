import React from "react";
import "../../css_files/Master/SearchBoilerSeriesPartsMappingMaster.css";
import CloseForm from "./CloseForm";

function SearchBoilerSeriesPartsMappingMaster({ setshowsearchform }) {
  return (
    <form className="search-boiler-series-parts-mapping-master-form">
      <h3>
        Search Boiler-Series Parts Mapping Master By <br />
        Entering at least One Field
      </h3>
      <blockquote>
        <label>Id</label>
        <input
          type="number"
          placeholder="Enter Boiler-Series Parts Mapping Master Id"
        />
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

export default SearchBoilerSeriesPartsMappingMaster;
