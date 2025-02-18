import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddGSTMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function AddGSTMaster({
  setshowaddform,
  reload,
  setReload,
  triggerupdate,
  gstupdatedata,
}) {
  const [gstData, setGstData] = useState({
    Rate: triggerupdate ? gstupdatedata?.rate : "",
    Description: triggerupdate ? gstupdatedata?.description : "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (triggerupdate) {
      const url = `${process.env.REACT_APP_API_URL}/api/v1/GST/UpdateGST`;
      axios
        .put(url, {
          id: gstupdatedata.id,
          rate: gstData.Rate,
          description: gstData.Description,
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
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/gst`;
      axios
        .post(URL, gstData)
        .then((response) => {
          toast.success("Record Added Successfully", {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          console.error("Error adding packing data:", error);
          toast.error("Failed to Add Record", {
            position: "bottom-center",
          });
        });
    }
  }
  return (
    <form className="add-gst-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Rate</label>
        <input
          type="number"
          placeholder="Enter GST Rate (in percentage)"
          value={gstData.Rate}
          onChange={(e) => setGstData({ ...gstData, Rate: e.target.value })}
        />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <textarea
          rows={5}
          placeholder="Enter Description"
          value={gstData.Description}
          onChange={(e) =>
            setGstData({ ...gstData, Description: e.target.value })
          }
        ></textarea>
      </blockquote>
      <button type="submit">{triggerupdate ? "Update" : "Add"} </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddGSTMaster;
