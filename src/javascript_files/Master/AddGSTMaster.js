import React from "react";
import "../../css_files/Master/AddGSTMaster.css";
import CloseForm from "./CloseForm";

function AddGSTMaster({ setshowaddform }) {
  return (
    <form className="add-gst-master">
      <blockquote>
        <label>Rate</label>
        <input type="text" placeholder="Enter GST Rate (in percentage)" />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <textarea rows={5} placeholder="Enter Description"></textarea>
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddGSTMaster;
