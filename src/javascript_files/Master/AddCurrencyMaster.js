import React from "react";
import "../../css_files/Master/AddCurrecyMaster.css";
import CloseForm from "./CloseForm";

function AddCurrencyMaster({ setshowaddform }) {
  return (
    <form className="add-currency-master">
      <blockquote>
        <label>Currency Name</label>
        <input type="text" placeholder="Enter Currency Name" />
      </blockquote>
      <blockquote>
        <label>Currenct Code</label>
        <input type="text" placeholder="Enter Currency Code" />
      </blockquote>
      <blockquote>
        <label>Rate</label>
        <input type="number" placeholder="Enter Currency Rate" />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <textarea rows={5} placeholder="Enter Currency Description"></textarea>
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddCurrencyMaster;
