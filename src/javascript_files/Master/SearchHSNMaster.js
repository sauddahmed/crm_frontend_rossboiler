import React, { useState } from "react";
import "../../css_files/Master/SearchHSNMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";

function SearchHSNMaster({ setshowsearchform, setsearchedtabledata }) {
  const [Id, setId] = useState(0);

  function handleSearch(e, id) {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/api/v1/HSN/GetHSNByFilter?id=${id}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setsearchedtabledata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <form
      className="search-hsn-master-form"
      onSubmit={(e) => handleSearch(e, Id)}
    >
      <h3>Search HSN Master By Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input
          type="number"
          placeholder="Enter HSN Master Id"
          onChange={(e) => setId(e.target.value)}
        />
      </blockquote>
      <blockquote>
        <label>HSN Code</label>
        <input type="text" placeholder="Enter HSN Code" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchHSNMaster;
