import React, { useState } from "react";
import "../../css_files/Master/AddCategoryMaster.css";
import CloseForm from "./CloseForm";

function AddCategoryMaster({ setshowaddcategorymaster }) {
  const [data, setdata] = useState({
    name: "",
    description: "",
  });

  function handlesubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-category-master" onSubmit={handlesubmit}>
      <blockquote>
        <label>Category Name</label>
        <input
          type="text"
          placeholder="Enter Category Name"
          onChange={(e) => setdata({ ...data, name: e.target.value })}
        />
      </blockquote>
      <blockquote>
        <label>Category Description</label>
        <textarea
          rows={5}
          placeholder="Enter Category Description"
          onChange={(e) => setdata({ ...data, description: e.target.value })}
        ></textarea>
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddcategorymaster} />
    </form>
  );
}

export default AddCategoryMaster;
