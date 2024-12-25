import React from "react";
import "../../css_files/Master/AddBoilerMaster.css";
import CloseForm from "./CloseForm";

function AddBoilerMaster({ setshowaddform }) {
  return (
    <form className="add-boiler-master">
      <blockquote>
        <label>Head</label>
        <input type="text" placeholder="Enter Boiler Head" />
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

export default AddBoilerMaster;
