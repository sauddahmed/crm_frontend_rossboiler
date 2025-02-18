import React, { useEffect } from "react";
import { useState } from "react";
import "../../css_files/Master/AddBoilerSeriesMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function AddBoilerSeriesMaster({
  setshowaddform,
  reload,
  setReload,
  triggerupdate,
  boilerseriesupdatedata,
}) {
  const [boilerSeriesData, setBoilerSeriesData] = useState({
    Head: triggerupdate ? boilerseriesupdatedata?.head : "",
    SeriesCode: triggerupdate ? boilerseriesupdatedata?.seriesCode : "",
    Description: triggerupdate ? boilerseriesupdatedata?.description : "",
  });

  const [boilerData, setBoilerData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (triggerupdate) {
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/BoilerSeries/UpdateBoilerSeries`;
      axios
        .put(URL, {
          id: boilerseriesupdatedata.id,
          head: boilerSeriesData.Head,
          seriesCode: boilerSeriesData.SeriesCode,
          description: boilerSeriesData.Description,
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          toast.error("Failed to Update Record", {
            position: "bottom-center",
          });
          console.log(error);
        });
    } else {
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/BoilerSeries`;
      axios
        .post(URL, boilerSeriesData)
        .then((response) => {
          toast.success("Record Added Successfully", {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          toast.error("Failed to Add Record", {
            position: "bottom-center",
          });
          console.log(error);
        });
    }
  }

  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Boiler`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setBoilerData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching boiler data:", error);
      });
  }, []);

  return (
    <form className="add-boiler-series-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Boiler Head</label>
        <select
          onChange={(e) =>
            setBoilerSeriesData({
              ...boilerSeriesData,
              Head: e.target.value,
            })
          }
        >
          <option value="">Select Boiler Head</option>
          {boilerData.map((boiler, index) => (
            <option
              value={boiler.head}
              key={index}
              selected={boilerSeriesData.Head === boiler.head}
            >
              {boiler.head}
            </option>
          ))}
        </select>
      </blockquote>
      <blockquote>
        <label>Series Code</label>
        <input
          type="number"
          placeholder="Enter Series Code"
          onChange={(e) =>
            setBoilerSeriesData({
              ...boilerSeriesData,
              SeriesCode: e.target.value,
            })
          }
          value={boilerSeriesData.SeriesCode}
        />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <textarea
          rows={5}
          placeholder="Enter Description"
          onChange={(e) =>
            setBoilerSeriesData({
              ...boilerSeriesData,
              Description: e.target.value,
            })
          }
          value={boilerSeriesData.Description}
        ></textarea>
      </blockquote>
      <button type="submit">{triggerupdate ? "Update" : "Add"} </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddBoilerSeriesMaster;
