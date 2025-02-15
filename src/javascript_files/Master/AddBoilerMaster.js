import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddBoilerMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";

function AddBoilerMaster({ setshowaddform, reload, setReload }) {
  const [boilerData, setBoilerData] = useState({
    Head: "",
    Description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Boiler`;
    axios
      .post(URL, boilerData)
      .then((response) => {
        console.log(response.data);
        setshowaddform(false);
        setReload(!reload);
      })
      .catch((error) => {
        console.error("Error adding boiler data:", error);
      });
  }
  return (
    <form className="add-boiler-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Head</label>
        <input
          type="text"
          placeholder="Enter Boiler Head"
          onChange={(e) =>
            setBoilerData({ ...boilerData, Head: e.target.value })
          }
        />
      </blockquote>

      <blockquote>
        <label>Description</label>
        <textarea
          rows={5}
          placeholder="Enter Description"
          onChange={(e) =>
            setBoilerData({ ...boilerData, Description: e.target.value })
          }
        ></textarea>
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddBoilerMaster;
