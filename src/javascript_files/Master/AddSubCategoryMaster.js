import React from "react";
import "../../css_files/Master/AddSubCategoryMaster.css";
import CloseForm from "./CloseForm";

function AddSubCategoryMaster({ setshowaddform }) {
  return (
    <form className="add-sub-category-master">
      <blockquote>
        <label>Category Name</label>
        <select>
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Appliances">Kitchen Appliances</option>
          <option value="Accessories">Accessories</option>
          <option value="clothing">Clothing</option>
        </select>
      </blockquote>
      <blockquote>
        <label>Sub-Category Name</label>
        <input type="text" placeholder="Enter Sub Category Name" />
      </blockquote>
      <blockquote>
        <label>Sub-Category Description</label>
        <textarea
          rows={5}
          placeholder="Enter Sub-Category Description"
        ></textarea>
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddSubCategoryMaster;
