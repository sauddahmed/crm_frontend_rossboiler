import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddUnitMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";

function AddUnitMaster({ setshowaddform, reload, setReload }) {
  const [unitData, setUnitData] = useState({
    Name: "",
    Code: "",
    Description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Unit`;
    axios
      .post(URL, unitData)
      .then((response) => {
        console.log(response.data);
        setshowaddform(false);
        setReload(!reload);
      })
      .catch((error) => {
        console.error("Error adding packing data:", error);
      });
  }
  return (
    <form className="add-unit-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Unit Name</label>
        <input
          type="text"
          placeholder="Enter Unit Name"
          onChange={(e) => setUnitData({ ...unitData, Name: e.target.value })}
        />
      </blockquote>
      <blockquote>
        <label>Unit Code</label>
        <input
          type="text"
          placeholder="Enter Unit Code"
          onChange={(e) => setUnitData({ ...unitData, Code: e.target.value })}
        />
      </blockquote>

      <blockquote>
        <label>Description</label>
        <textarea
          rows={5}
          placeholder="Enter Description"
          onChange={(e) =>
            setUnitData({ ...unitData, Description: e.target.value })
          }
        ></textarea>
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddUnitMaster;
