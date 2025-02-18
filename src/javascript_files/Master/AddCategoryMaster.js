import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddCategoryMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function AddCategoryMaster({
  setshowaddform,
  reload,
  setReload,
  triggerupdate,
  categoryupdatedata,
}) {
  const [categoryData, setCategoryData] = useState({
    Name: triggerupdate ? categoryupdatedata?.name : "",
    Description: triggerupdate ? categoryupdatedata?.description : "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (triggerupdate) {
      const url = `${process.env.REACT_APP_API_URL}/api/v1/Category/UpdateCategory`;
      axios
        .put(url, {
          id: categoryupdatedata.id,
          name: categoryData.Name,
          description: categoryData.Description,
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((err) => {
          toast.error("Failed to Update", {
            position: "bottom-center",
          });
          console.log(err);
        });
    } else {
      const url = `${process.env.REACT_APP_API_URL}/api/v1/Category`;
      axios
        .post(url, categoryData)
        .then((response) => {
          toast.success("Record Added Successfully", {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          console.error("Error adding hsn data:", error);
          toast.error("Failed to Add Record", {
            position: "bottom-center",
          });
        });
    }
  }

  return (
    <form className="add-category-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Category Name</label>
        <input
          type="text"
          placeholder="Enter Category Master Name"
          value={categoryData.Name}
          onChange={(e) =>
            setCategoryData({ ...categoryData, Name: e.target.value })
          }
        />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <textarea
          rows={5}
          placeholder="Enter Description"
          value={categoryData.Description}
          onChange={(e) =>
            setCategoryData({ ...categoryData, Description: e.target.value })
          }
        ></textarea>
      </blockquote>
      <button type="submit">{triggerupdate ? "Update" : "Add"}</button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddCategoryMaster;
