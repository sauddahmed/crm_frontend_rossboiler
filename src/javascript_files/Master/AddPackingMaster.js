import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddPackingMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";

function AddPackingMaster({ setshowaddform, reload, setReload }) {
  const [packingData, setPackingData] = useState({
    Name: "",
    UsedFor: "",
    Description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/packing`;
    axios
      .post(URL, packingData)
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
    <form className="add-packing-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Packing Name</label>
        <input
          type="text"
          placeholder="Enter Packing Master Name"
          onChange={(e) =>
            setPackingData({ ...packingData, Name: e.target.value })
          }
        />
      </blockquote>
      <blockquote>
        <label>Used For</label>
        <input
          type="text"
          placeholder="Enter Used For"
          onChange={(e) =>
            setPackingData({ ...packingData, UsedFor: e.target.value })
          }
        />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <textarea
          rows={5}
          placeholder="Enter Description"
          onChange={(e) =>
            setPackingData({ ...packingData, Description: e.target.value })
          }
        ></textarea>
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddPackingMaster;
