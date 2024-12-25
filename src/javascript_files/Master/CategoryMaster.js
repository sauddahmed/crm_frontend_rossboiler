import React, { useState } from "react";
import "../../css_files/Master/CategoryMaster.css";
import AddCategoryMaster from "./AddCategoryMaster";
import Table from "../Homepage/Table";
import SearchCategoryMaster from "./SearchCategoryMaster";

function CategoryMaster() {
  const [showaddcategorymaster, setshowaddcategorymaster] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  return (
    <section className="category-master">
      <h1>Category Master</h1>
      <blockquote className="category-master-forms">
        <button onClick={() => setshowaddcategorymaster(true)}>
          Add Category Master
        </button>
        <button onClick={() => setshowsearchform(true)}>
          Search Category Master
        </button>
      </blockquote>
      {showaddcategorymaster && (
        <AddCategoryMaster
          setshowaddcategorymaster={setshowaddcategorymaster}
        />
      )}
      {showsearchform && (
        <SearchCategoryMaster setshowsearchform={setshowsearchform} />
      )}
      <Table />
    </section>
  );
}

export default CategoryMaster;
