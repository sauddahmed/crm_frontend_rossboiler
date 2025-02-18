import React, { useState } from "react";
import "../../css_files/Master/SearchBoilerMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function SearchBoilerMaster({ setshowsearchform, setsearchedtabledata }) {
  const [Id, setId] = useState(0);

  function handleSearch(e, id) {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/api/v1/Boiler/GetBoilerById?id=${id}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setsearchedtabledata(res.data);
        toast.success("Fetched", {
          position: "bottom-center",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to Search, Please Check Id", {
          position: "bottom-center",
        });
      });
  }
  return (
    <form
      className="search-boiler-master-form"
      onSubmit={(e) => handleSearch(e, Id)}
    >
      <h3>Search Boiler Master By Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input
          type="number"
          placeholder="Enter Boiler Master Id"
          onChange={(e) => setId(e.target.value)}
        />
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
