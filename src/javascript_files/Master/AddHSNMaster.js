import React from "react";
import "../../css_files/Master/AddHSNMaster.css";
import CloseForm from "./CloseForm";

function AddHSNMaster({ setshowaddform }) {
  return (
    <form className="add-hsn-master">
      <blockquote>
        <label>HSN Code</label>
        <input
          type="text"
          placeholder="Enter HSN Code (minimum 4 to maximum 8 characters)"
        />
      </blockquote>
      <blockquote>
        <label>HSN Description</label>
        <textarea rows={5} placeholder="Enter HSN Description"></textarea>
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddHSNMaster;
