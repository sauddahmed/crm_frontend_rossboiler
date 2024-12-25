import React, { useState } from "react";
import "../../css_files/Master/SubCategoryMaster.css";
import AddSubCategoryMaster from "./AddSubCategoryMaster";
import SearchSubCategoryMaster from "./SearchSubCategoryMaster";
import Table from "../Homepage/Table";

function SubCategoryMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);

  return (
    <>
      <section className="sub-category-master">
        <h1>Sub Category Master</h1>
        <blockquote className="sub-category-master-forms">
          <button onClick={() => setshowaddform(true)}>
            Add Sub-Category Master
          </button>
          <button onClick={() => setshowsearchform(true)}>
            Search Sub-Category Master
          </button>
        </blockquote>
        {showaddform && (
          <AddSubCategoryMaster setshowaddform={setshowaddform} />
        )}
        {showsearchform && (
          <SearchSubCategoryMaster setshowsearchform={setshowsearchform} />
        )}
        <Table />
      </section>
    </>
  );
}

export default SubCategoryMaster;
