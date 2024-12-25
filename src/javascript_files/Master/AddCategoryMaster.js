import React from "react";
import "../../css_files/Master/AddCategoryMaster.css";
import CloseForm from "./CloseForm";

function AddCategoryMaster({ setshowaddcategorymaster }) {
  return (
    <form className="add-category-master">
      <blockquote>
        <label>Category Name</label>
        <input type="text" placeholder="Enter Category Name" />
      </blockquote>
      <blockquote>
        <label>Category Description</label>
        <textarea rows={5} placeholder="Enter Category Description"></textarea>
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddcategorymaster} />
    </form>
  );
}

export default AddCategoryMaster;
