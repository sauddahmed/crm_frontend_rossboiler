import React, { useState } from "react";
import "../../css_files/Master/SearchBoilerSeriesPartsMappingMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function SearchBoilerSeriesPartsMappingMaster({
  setshowsearchform,
  setsearchedtabledata,
}) {
  const [Id, setId] = useState(0);

  function handleSearch(e, id) {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/api/v1/BoilerSeriesPartsMapping/GetBoilerSeriesPartsMappingById?id=${id}`;
    axios
      .get(url)
      .then((res) => {
        toast.success("Fetched", {
          position: "bottom-center",
        });
        setsearchedtabledata(res.data);
      })
      .catch((err) => {
        toast.error("Failed to Search. Please Check Id", {
          position: "bottom-center",
        });
      });
  }
  return (
    <form
      className="search-boiler-series-parts-mapping-master-form"
      onSubmit={(e) => handleSearch(e, Id)}
    >
      <h3>
        Search Boiler-Series Parts Mapping Master By <br />
        Entering at least One Field
      </h3>
      <blockquote>
        <label>Id</label>
        <input
          type="number"
          placeholder="Enter Boiler-Series Parts Mapping Master Id"
          onChange={(e) => setId(e.target.value)}
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
