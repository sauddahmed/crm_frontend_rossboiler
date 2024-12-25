import React from "react";
import "../../css_files/Master/SearchSubCategoryMaster.css";
import CloseForm from "./CloseForm";

function SearchSubCategoryMaster({ setshowsearchform }) {
  return (
    <form className="search-sub-category-master-form">
      <h3>
        Search Sub-Category Master By <br />
        Entering at least One Field
      </h3>
      <blockquote>
        <label>Id</label>
        <input type="number" placeholder="Enter Sub-Category Master Id" />
      </blockquote>
      <blockquote>
        <label>Name</label>
        <input type="text" placeholder="Enter Sub-Category Name" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchSubCategoryMaster;
