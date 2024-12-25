import React from "react";
import "../../css_files/Master/AddBoilerSeriesMaster.css";
import CloseForm from "./CloseForm";

function AddBoilerSeriesMaster({ setshowaddform }) {
  return (
    <form className="add-boiler-series-master">
      <blockquote>
        <label>Boiler Head</label>
        <select>
          <option value="">Select Boiler Head</option>
          <option>Fire Tube Boiler</option>
          <option>Water Tube Boiler</option>
          <option>Electric Boiler</option>
        </select>
      </blockquote>
      <blockquote>
        <label>Series Code</label>
        <input type="text" placeholder="Enter Series Code" />
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

export default AddBoilerSeriesMaster;
