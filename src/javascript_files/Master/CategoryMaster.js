import React, { useEffect, useState } from "react";
import "../../css_files/Master/CategoryMaster.css";
import AddCategoryMaster from "./AddCategoryMaster";
import Table from "../Homepage/Table";
import SearchCategoryMaster from "./SearchCategoryMaster";

function CategoryMaster() {
  const [showaddcategorymaster, setshowaddcategorymaster] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Category Id", "Category Name", "Description"];
  const [tabledata, setTabledata] = useState([
    [1, "Electronics", "Devices and gadgets"],
    [2, "Furniture", "Home and office furniture"],
    [3, "Clothing", "Apparel and garments"],
    [4, "Books", "Educational and recreational books"],
    [5, "Toys", "Toys and games for kids"],
    [6, "Sports", "Sporting goods and equipment"],
    [7, "Beauty", "Beauty and personal care products"],
    [8, "Kitchen", "Kitchen appliances and utensils"],
    [9, "Gardening", "Gardening tools and supplies"],
    [10, "Automotive", "Car parts and accessories"],
    [11, "Jewelry", "Rings, necklaces, and other accessories"],
    [12, "Music", "Musical instruments and accessories"],
    [13, "Health", "Healthcare and wellness products"],
    [14, "Stationery", "Office and school supplies"],
    [15, "Travel", "Travel gear and accessories"],
    [16, "Pets", "Pet food and accessories"],
    [17, "Art", "Art supplies and craft materials"],
    [18, "Fitness", "Fitness equipment and accessories"],
    [19, "Gaming", "Gaming consoles and accessories"],
    [20, "Photography", "Cameras and photography tools"],
  ]);

  return (
    <section className="category-master-container">
      {" "}
      <div className="category-master">
        <div className="category-master-header">
          <h1>Category Master</h1>
          <div className="category-master-buttons">
            <button onClick={() => setshowaddcategorymaster(true)}>Add</button>
            <button onClick={() => setshowsearchform(true)}>Search</button>
          </div>
        </div>
        {showaddcategorymaster && (
          <AddCategoryMaster
            setshowaddcategorymaster={setshowaddcategorymaster}
          />
        )}
        {showsearchform && (
          <SearchCategoryMaster setshowsearchform={setshowsearchform} />
        )}
        <Table tablehead={tablehead} tabledata={tabledata} />
      </div>
    </section>
  );
}

export default CategoryMaster;
