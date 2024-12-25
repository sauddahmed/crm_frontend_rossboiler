import React, { useState } from "react";
import "../../css_files/Master/SubCategoryMaster.css";
import AddSubCategoryMaster from "./AddSubCategoryMaster";
import SearchSubCategoryMaster from "./SearchSubCategoryMaster";
import Table from "../Homepage/Table";

function SubCategoryMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Sub-Category Id", "Sub-Category Name", "Description"];
  const tabledata = [
    [1, "Laptops", "Portable personal computers"],
    [2, "Smartphones", "Mobile phones with advanced features"],
    [3, "Chairs", "Seating furniture for various purposes"],
    [4, "Tables", "Furniture for dining or work"],
    [5, "Men's Clothing", "Apparel for men"],
    [6, "Women's Clothing", "Apparel for women"],
    [7, "Fiction Books", "Novels and stories"],
    [8, "Non-fiction Books", "Educational and informational books"],
    [9, "Board Games", "Games for multiple players"],
    [10, "Video Games", "Games for electronic devices"],
    [11, "Skincare", "Products for healthy skin"],
    [12, "Haircare", "Products for hair maintenance"],
    [13, "Cookware", "Utensils for cooking"],
    [14, "Bakeware", "Utensils for baking"],
    [15, "Gardening Tools", "Equipment for gardening tasks"],
    [16, "Plant Seeds", "Seeds for planting various crops"],
    [17, "Car Accessories", "Add-ons for vehicles"],
    [18, "Bike Accessories", "Add-ons for bikes"],
    [19, "Watches", "Wearable timekeeping devices"],
    [20, "Cameras", "Devices for capturing photographs"],
  ];
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
        <Table tablehead={tablehead} tabledata={tabledata} />
      </section>
    </>
  );
}

export default SubCategoryMaster;
