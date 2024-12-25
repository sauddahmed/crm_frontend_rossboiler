import React from "react";
import "../../css_files/Master/AddUnitMaster.css";
import CloseForm from "./CloseForm";

function AddUnitMaster({ setshowaddform }) {
  return (
    <form className="add-unit-master">
      <blockquote>
        <label>Unit Name</label>
        <input type="text" placeholder="Enter Unit Name" />
      </blockquote>
      <blockquote>
        <label>Unit Code</label>
        <input type="text" placeholder="Enter Unit Code" />
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

export default AddUnitMaster;
