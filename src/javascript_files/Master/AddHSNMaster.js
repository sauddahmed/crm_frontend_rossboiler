import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddHSNMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function AddHSNMaster({
  setshowaddform,
  reload,
  setReload,
  triggerupdate,
  hsnupdatedata,
}) {
  const [hsnData, setHsnData] = useState({
    HsnCode: triggerupdate ? hsnupdatedata?.hsnCode : "",
    Description: triggerupdate ? hsnupdatedata?.description : "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (triggerupdate) {
      const url = `${process.env.REACT_APP_API_URL}/api/v1/HSN/UpdateHSN`;
      axios
        .put(url, {
          hsnID: hsnupdatedata.id,
          hsnCode: hsnData.HsnCode,
          description: hsnData.Description,
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((err) => {
          toast.error("Failed to Update", {
            position: "bottom-center",
          });
          console.log(err);
        });
    } else {
      const url = `${process.env.REACT_APP_API_URL}/api/v1/HSN`;
      axios
        .post(url, hsnData)
        .then((response) => {
          toast.success("Record Added Successfully", {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          console.error("Error adding hsn data:", error);
          toast.error("Failed to Add Record", {
            position: "bottom-center",
          });
        });
    }
  }

  return (
    <form className="add-hsn-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>HSN Code</label>
        <input
          type="text"
          placeholder="Enter HSN Code (minimum 4 to maximum 8 characters)"
          value={hsnData.HsnCode}
          onChange={(e) => setHsnData({ ...hsnData, HsnCode: e.target.value })}
        />
      </blockquote>

      <blockquote>
        <label>HSN Description</label>
        <textarea
          rows={5}
          placeholder="Enter HSN Description"
          value={hsnData.Description}
          onChange={(e) =>
            setHsnData({ ...hsnData, Description: e.target.value })
          }
        ></textarea>
      </blockquote>

      <button type="submit">{triggerupdate ? "Update" : "Add"} </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddHSNMaster;
