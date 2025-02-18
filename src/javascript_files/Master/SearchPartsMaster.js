import React, { useState } from "react";
import "../../css_files/Master/SearchPartsMaster.css";
import CloseForm from "./CloseForm";
import { toast } from "react-toastify";
import axios from "axios";

function SearchPartsMaster({ setshowsearchform, setsearchedtabledata }) {
  const [Id, setId] = useState(0);

  function handleSearch(e, id) {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/api/v1/Parts/GetPartById?id=${id}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        toast.success("Fetched", {
          position: "bottom-center",
        });
        setsearchedtabledata(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to Fetch. Please Check Id", {
          position: "bottom-center",
        });
      });
  }
  return (
    <form
      className="search-parts-master-form"
      onSubmit={(e) => handleSearch(e, Id)}
    >
      <h3>Search Parts Master By Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input
          type="number"
          placeholder="Enter Part Master Id"
          onChange={(e) => setId(e.target.value)}
        />
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
