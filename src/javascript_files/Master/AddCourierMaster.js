import React from "react";
import "../../css_files/Master/AddCourierMaster.css";
import CloseForm from "./CloseForm";

function AddCourierMaster({ setshowaddform }) {
  return (
    <form className="add-courier-master">
      <blockquote>
        <label>Name of Courier</label>
        <input type="text" placeholder="Enter Courier Name" />
      </blockquote>
      <blockquote>
        <label>Email of Courier</label>
        <input type="email" placeholder="Enter Courier Email" />
      </blockquote>
      <blockquote>
        <label>Phone Number</label>
        <input type="number" placeholder="Enter Phone Number of Courier" />
      </blockquote>
      <blockquote>
        <label>Address</label>
        <input type="text" placeholder="Enter Address of Courier" />
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddCourierMaster;
