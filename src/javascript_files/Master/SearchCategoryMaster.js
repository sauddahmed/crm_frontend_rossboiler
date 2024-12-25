import React from "react";
import "../../css_files/Master/SearchCategoryMaster.css";
import CloseForm from "./CloseForm";

function SearchCategoryMaster({ setshowsearchform }) {
  return (
    <form className="search-category-master-form">
      <h3>Search Category Master By Entering at least One Field</h3>
      <blockquote>
        <label>Id</label>
        <input type="number" placeholder="Enter Category Master Id" />
      </blockquote>
      <blockquote>
        <label>Name</label>
        <input type="text" placeholder="Enter Category Name" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchCategoryMaster;
