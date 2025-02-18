import React, { useState } from "react";
import "../../css_files/Master/SearchTechnicianMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function SearchTechnicianMaster({ setshowsearchform, setsearchedtabledata }) {
  const [Id, setId] = useState(0);

  function handleSearch(e, id) {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/api/v1/Technician/GetTechnicianById?id=${id}`;
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
      className="search-technician-master-form"
      onSubmit={(e) => handleSearch(e, Id)}
    >
      <h3>Search Technician Master By Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input
          type="number"
          placeholder="Enter Technician Master Id"
          onChange={(e) => setId(e.target.value)}
        />
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
