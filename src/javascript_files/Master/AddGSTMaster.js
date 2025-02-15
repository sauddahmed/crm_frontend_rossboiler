import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddGSTMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";

function AddGSTMaster({ setshowaddform, reload, setReload }) {
  const [gstData, setGstData] = useState({
    Rate: "",
    Description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/gst`;
    axios
      .post(URL, gstData)
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
    <form className="add-gst-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Rate</label>
        <input
          type="text"
          placeholder="Enter GST Rate (in percentage)"
          onChange={(e) => setGstData({ ...gstData, Rate: e.target.value })}
        />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <textarea
          rows={5}
          placeholder="Enter Description"
          onChange={(e) =>
            setGstData({ ...gstData, Description: e.target.value })
          }
        ></textarea>
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddGSTMaster;
