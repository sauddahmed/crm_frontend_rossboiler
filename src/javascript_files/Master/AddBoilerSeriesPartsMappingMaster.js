import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddBoilerSeriesPartsMappingMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";

function AddBoilerSeriesPartsMappingMaster({
  setshowaddform,
  reload,
  setReload,
}) {
  const [boilerSeriesPartsMappingData, setBoilerSeriesPartsMappingData] =
    useState({
      Head: "",
      SeriesId: "",
      Description: "",
    });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Sending Data:", boilerSeriesPartsMappingData);

    const URL = `${process.env.REACT_APP_API_URL}/api/v1/BoilerSeriesPartsMapping`;
    axios
      .post(URL, boilerSeriesPartsMappingData)
      .then((response) => {
        console.log(response.data);
        setshowaddform(false);
        setReload(!reload);
      })
      .catch((error) => {
        console.error("Error adding boiler series parts mapping data:", error);
      });
  }
  return (
    <form
      className="add-boiler-series-parts-mapping-master"
      onSubmit={handleSubmit}
    >
      <blockquote>
        <label>Boiler Head</label>
        <select
          onChange={(e) =>
            setBoilerSeriesPartsMappingData({
              ...boilerSeriesPartsMappingData,
              Head: e.target.value,
            })
          }
        >
          <option value="">Select Boiler Head</option>
          <option>Fire Tube Boiler</option>
          <option>Water Tube Boiler</option>
          <option>Electric Boiler</option>
        </select>
      </blockquote>
      <blockquote>
        <label>Series Id</label>
        <input
          type="text"
          placeholder="Enter Series Id"
          onChange={(e) =>
            setBoilerSeriesPartsMappingData({
              ...boilerSeriesPartsMappingData,
              SeriesId: Number(e.target.value),
            })
          }
        />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <textarea
          rows={5}
          placeholder="Enter Description"
          onChange={(e) =>
            setBoilerSeriesPartsMappingData({
              ...boilerSeriesPartsMappingData,
              Description: e.target.value,
            })
          }
        ></textarea>
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddBoilerSeriesPartsMappingMaster;
