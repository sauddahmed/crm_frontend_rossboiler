import React, { useEffect } from "react";
import { useState } from "react";
import "../../css_files/Master/AddSubCategoryMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";

function AddSubCategoryMaster({ setshowaddform, reload, setReload }) {
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState({
    Name: "",
    Description: "",
    CategoryId: "",
  });

  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Category`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setCategoryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/SubCategory`;
    axios
      .post(URL, subCategoryData)
      .then((response) => {
        console.log(response.data);
        setshowaddform(false);
        setReload(!reload);
      })
      .catch((error) => {
        console.error("Error adding sub category data:", error);
      });
  }
  return (
    <form className="add-sub-category-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Sub-Category Name</label>
        <textarea
          placeholder="Enter Sub-Category Name"
          onChange={(e) =>
            setSubCategoryData({
              ...subCategoryData,
              Name: e.target.value,
            })
          }
        ></textarea>
      </blockquote>
      <blockquote>
        <label>Sub-Category Description</label>
        <textarea
          rows={5}
          placeholder="Enter Sub-Category Description"
          onChange={(e) =>
            setSubCategoryData({
              ...subCategoryData,
              Description: e.target.value,
            })
          }
        ></textarea>
      </blockquote>
      {/* <blockquote>
        <label>Category Id</label>
        <input
          type="text"
          placeholder="Enter Category Id"
          onChange={(e) =>
            setSubCategoryData({
              ...subCategoryData,
              CategoryId: e.target.value,
            })
          }
        />
      </blockquote> */}
      <blockquote>
        <label>Category Name</label>
        <select
          onChange={(e) =>
            setSubCategoryData({
              ...subCategoryData,
              CategoryId: e.target.value,
            })
          }
        >
          <option value="">Select Category</option>
          {categoryData.map((category, index) => (
            <option key={index} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </blockquote>

      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddSubCategoryMaster;
