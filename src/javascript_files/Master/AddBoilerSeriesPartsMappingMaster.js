import React, { useEffect } from "react";
import { useState } from "react";
import "../../css_files/Master/AddBoilerSeriesPartsMappingMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function AddBoilerSeriesPartsMappingMaster({
  setshowaddform,
  reload,
  setReload,
  triggerupdate,
  boilerseriespartsupdatedata,
}) {
  const [boilerSeriesPartsMappingData, setBoilerSeriesPartsMappingData] =
    useState({
      SeriesId: triggerupdate ? boilerseriespartsupdatedata?.seriesId : "",
      Description: triggerupdate
        ? boilerseriespartsupdatedata?.description
        : "",
      DisplayAllParts: triggerupdate
        ? boilerseriespartsupdatedata?.displayAllParts
        : "",
    });

  const [boilerSeriesData, setBoilerSeriesData] = useState([]);
  const [boilerSeriesHead, setBoilerSeriesHead] = useState(
    triggerupdate ? boilerseriespartsupdatedata?.head : ""
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (triggerupdate) {
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/BoilerSeriesPartsMapping/UpdateBoilerSeriesPartsMapping`;
      axios
        .put(URL, {
          id: boilerseriespartsupdatedata.id,
          Head: boilerSeriesHead,
          SeriesId: boilerSeriesPartsMappingData.SeriesId,
          Description: boilerSeriesPartsMappingData.Description,
          DisplayAllParts: boilerSeriesPartsMappingData.DisplayAllParts,
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed to Update Record", {
            position: "bottom-center",
          });
        });
    } else {
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/BoilerSeriesPartsMapping`;
      axios
        .post(URL, {
          Head: boilerSeriesHead,
          SeriesId: boilerSeriesPartsMappingData.SeriesId,
          Description: boilerSeriesPartsMappingData.Description,
          DisplayAllParts: boilerSeriesPartsMappingData.DisplayAllParts,
        })
        .then((response) => {
          console.log(response.data);
          toast.success("Record Added Successfully", {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed to Add Record", {
            position: "bottom-center",
          });
        });
    }
  }

  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/BoilerSeries`;
    axios
      .get(URL)
      .then((response) => {
        setBoilerSeriesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching boiler series data:", error);
      });
  }, []);

  function fetchboilerserieshead(boilerseriesid) {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/BoilerSeries/GetBoilerSeriesById?id=${boilerseriesid}`;
    axios
      .get(url)
      .then((res) => {
        setBoilerSeriesHead(res.data.head);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form
      className="add-boiler-series-parts-mapping-master"
      onSubmit={handleSubmit}
    >
      <blockquote>
        <label>Series Id</label>
        <select
          onChange={(e) => {
            setBoilerSeriesPartsMappingData({
              ...boilerSeriesPartsMappingData,
              SeriesId: e.target.value,
            });
            fetchboilerserieshead(e.target.value);
          }}
        >
          <option value="">Select Boiler Series Id</option>
          {boilerSeriesData.map((boilerseries, index) => (
            <option
              key={index}
              value={boilerseries.id}
              selected={
                boilerSeriesPartsMappingData.SeriesId === boilerseries.id
              }
            >
              {boilerseries.id}
            </option>
          ))}
        </select>
      </blockquote>
      {/*<blockquote>
        <label>Boiler Series Head</label>
        <select
          onChange={(e) =>
            setBoilerSeriesPartsMappingData({
              ...boilerSeriesPartsMappingData,
              Head: e.target.value,
            })
          }
        >
          <option value="">Select Boiler Series Head</option>
          {boilerSeriesData.map((boilerseries, index) => (
            <option key={index} value={boilerseries.head}>
              {boilerseries.head}
            </option>
          ))}
        </select>
      </blockquote>*/}
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
          value={boilerSeriesPartsMappingData.Description}
        ></textarea>
      </blockquote>
      <blockquote>
        <label>Display All Parts</label>
        <mark>
          Yes:{" "}
          <input
            type="radio"
            value="Yes"
            name="displayallparts"
            onChange={(e) =>
              setBoilerSeriesPartsMappingData({
                ...boilerSeriesPartsMappingData,
                DisplayAllParts: e.target.value,
              })
            }
            checked={boilerSeriesPartsMappingData.DisplayAllParts === "Yes"}
          />{" "}
          &nbsp; No:{" "}
          <input
            type="radio"
            value="No"
            name="displayallparts"
            onChange={(e) =>
              setBoilerSeriesPartsMappingData({
                ...boilerSeriesPartsMappingData,
                DisplayAllParts: e.target.value,
              })
            }
            checked={boilerSeriesPartsMappingData.DisplayAllParts === "No"}
          />
        </mark>
      </blockquote>
      <button type="submit">{triggerupdate ? "Update" : "Add"} </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddBoilerSeriesPartsMappingMaster;
