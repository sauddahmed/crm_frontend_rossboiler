import React from "react";
import "../../css_files/Master/AddPackingMaster.css";
import CloseForm from "./CloseForm";

function AddPackingMaster({ setshowaddform }) {
  return (
    <form className="add-packing-master">
      <blockquote>
        <label>Packing Name</label>
        <input type="text" placeholder="Enter Packing Master Name" />
      </blockquote>
      <blockquote>
        <label>Used For</label>
        <input type="text" placeholder="Enter Used For" />
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

export default AddPackingMaster;
