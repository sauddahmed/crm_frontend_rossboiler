import React, { useEffect } from "react";
import { useState } from "react";
import "../../css_files/Master/AddPartsMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";

function AddPartsMaster({ setshowaddform, reload, setReload }) {
  const [categoryData, setCategoryData] = useState([]);
  const [partsData, setPartsData] = useState({
    Name: "",
    PartNumber: "",
    Description: "",
    SupplyType: "",
    SellingPrice: "",
    Weight: "",
    Dimensions: "",
    MaterialOfConstruction: "",
    UnitId: "",
    GSTId: "",
    HSNDetailsId: "",
    PackingId: "",
    CategoryId: "",
    SubcategoryId: "",
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
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Parts`;
    axios
      .post(URL, partsData)
      .then((response) => {
        console.log(response.data);
        setshowaddform(false);
        setReload(!reload);
      })
      .catch((error) => {
        console.error("Error adding packing data:", error);
      });
  }
  return (
    <form className="add-parts-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Part Number</label>
        <input
          type="text"
          placeholder="Enter Part Number"
          onChange={(e) =>
            setPartsData({ ...partsData, PartNumber: e.target.value })
          }
        />
      </blockquote>
      <blockquote>
        <label>Part Name</label>
        <input
          type="text"
          placeholder="Enter Part Name"
          onChange={(e) => setPartsData({ ...partsData, Name: e.target.value })}
        />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <textarea
          rows={5}
          placeholder="Enter Part Description"
          onChange={(e) =>
            setPartsData({ ...partsData, Description: e.target.value })
          }
        ></textarea>
      </blockquote>
      <blockquote>
        <label>Category Name</label>
        <select
          onChange={(e) =>
            setPartsData({
              ...partsData,
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
      <blockquote>
        <label>Subcategory Name</label>
        <select
          onChange={(e) =>
            setPartsData({
              ...partsData,
              SubCategoryId: e.target.value,
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
      <blockquote>
        <label>Units</label>
        <select
          onChange={(e) =>
            setPartsData({ ...partsData, UnitId: e.target.value })
          }
        >
          <option value="">Select Unit</option>
          <option>Kilogram</option>
          <option>Pounds</option>
        </select>
      </blockquote>
      <blockquote>
        <label>GST Percentage</label>
        <select
          onChange={(e) =>
            setPartsData({ ...partsData, GSTId: e.target.value })
          }
        >
          <option value="">Select GST Percentage</option>
          <option>15%</option>
          <option>20%</option>
          <option>25%</option>
          <option>30%</option>
        </select>
      </blockquote>
      <blockquote>
        <label>HSN Details</label>
        <select
          onChange={(e) =>
            setPartsData({ ...partsData, HSNDetailsId: e.target.value })
          }
        >
          <option value="">Select HSN Details</option>
          <option>A123 (Electronics and gadgets)</option>
          <option>B4567 (Furniture and fittings)</option>
          <option>C78901 (Clothing and apparel)</option>
          <option>D234X (Books and publications)</option>
        </select>
      </blockquote>
      <blockquote>
        <label>Types of Supply</label>
        <aside>
          <mark>
            <p>Goods</p>
            <input type="radio" name="supply" />
          </mark>
          <mark>
            <p>Service</p>
            <input type="radio" name="supply" />
          </mark>
        </aside>
      </blockquote>
      <blockquote>
        <label>Selling Price</label>
        <input type="number" placeholder="Enter Selling Price" />
      </blockquote>
      <blockquote>
        <label>Weight</label>
        <input type="number" placeholder="Enter Weight" />
      </blockquote>
      <blockquote>
        <label>Dimensions</label>
        <aside>
          <mark>
            <p>Length</p>
            <input type="number" placeholder="Enter Length" />
          </mark>
          <mark>
            <p>Breadth</p>
            <input type="number" placeholder="Enter Breadth" />
          </mark>
        </aside>
      </blockquote>
      <blockquote>
        <label>Packing</label>
        <select>
          <option value="">Select Packing</option>
          <option>Small Box</option>
          <option>Medium Box</option>
          <option>Large Box</option>
        </select>
      </blockquote>
      <blockquote>
        <label>Material of Construction (MOC)</label>
        <input type="text" placeholder="Enter Material of Construction (MOC)" />
      </blockquote>
      <blockquote>
        <label>IBR Certification</label>
        <aside>
          <mark>
            <p>Yes</p>
            <input type="radio" name="IBR" />
          </mark>
          <mark>
            <p>No</p>
            <input type="radio" name="IBR" />
          </mark>
        </aside>
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddPartsMaster;
