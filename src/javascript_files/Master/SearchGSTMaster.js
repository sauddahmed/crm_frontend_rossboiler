import React, { useState } from "react";
import "../../css_files/Master/SearchGSTMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function SearchGSTMaster({ setshowsearchform, setsearchedtabledata }) {
  const [Id, setId] = useState(0);

  function handleSearch(e, id) {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/api/v1/GST/GetGSTById?id=${id}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        toast.success("Fetched", {
          position: "bottom-center",
        });
        setsearchedtabledata(res.data);
      })
      .catch((err) => {
        toast.error("Failed to Fetch", {
          position: "bottom-center",
        });
        console.log(err);
      });
  }
  return (
    <form
      className="search-gst-master-form"
      onSubmit={(e) => handleSearch(e, Id)}
    >
      <h3>Search GST Master</h3>
      <blockquote>
        <label>Id</label>
        <input
          type="number"
          placeholder="Enter GST Master Id"
          onChange={(e) => setId(e.target.value)}
        />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchGSTMaster;
