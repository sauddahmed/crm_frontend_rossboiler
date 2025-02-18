import React, { useEffect } from "react";
import { useState } from "react";
import "../../css_files/Master/AddPartsMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function AddPartsMaster({
  setshowaddform,
  reload,
  setReload,
  triggerupdate,
  partsupdatedata,
}) {
  const [unitData, setUnitData] = useState([]);
  const [gstData, setGstData] = useState([]);
  const [hsnData, setHsnData] = useState([]);
  const [packingData, setPackingData] = useState([]);
  const [partsData, setPartsData] = useState({
    PartNumber: triggerupdate ? partsupdatedata?.partNumber : "",
    Name: triggerupdate ? partsupdatedata?.name : "",
    Description: triggerupdate ? partsupdatedata?.description : "",
    SupplyType: triggerupdate ? partsupdatedata?.supplyType : "",
    SellingPrice: triggerupdate ? partsupdatedata?.sellingPrice : "",
    Weight: triggerupdate ? partsupdatedata?.weight : "",
    Length: triggerupdate ? partsupdatedata?.dimensions.split("x")[0] : "",
    Breadth: triggerupdate ? partsupdatedata?.dimensions.split("x")[1] : "",
    Height: triggerupdate ? partsupdatedata?.dimensions.split("x")[2] : "",
    MaterialOfConstruction: triggerupdate
      ? partsupdatedata?.materialOfConstruction
      : "",
    UnitId: triggerupdate ? partsupdatedata?.unitId : "",
    GSTId: triggerupdate ? partsupdatedata?.gstId : "",
    HSNDetailsId: triggerupdate ? partsupdatedata?.hsnDetailsId : "",
    PackingId: triggerupdate ? partsupdatedata?.packingId : "",
  });

  useEffect(() => {
    const unitURL = `${process.env.REACT_APP_API_URL}/api/v1/Unit`;
    axios
      .get(unitURL)
      .then((response) => {
        console.log(response.data);
        setUnitData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const gsturl = `${process.env.REACT_APP_API_URL}/api/v1/GST`;
    axios
      .get(gsturl)
      .then((res) => {
        console.log(res.data);
        setGstData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const hsnurl = `${process.env.REACT_APP_API_URL}/api/v1/HSN`;
    axios
      .get(hsnurl)
      .then((res) => {
        console.log(res.data);
        setHsnData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const packingurl = `${process.env.REACT_APP_API_URL}/api/v1/Packing`;
    axios
      .get(packingurl)
      .then((res) => {
        console.log(res.data);
        setPackingData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (triggerupdate) {
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/Parts/UpdatePart`;
      axios
        .put(URL, {
          id: partsupdatedata.id,
          partNumber: partsData.PartNumber,
          name: partsData.Name,
          description: partsData.Description,
          supplyType: partsData.SupplyType,
          sellingPrice: partsData.SellingPrice,
          weight: partsData.Weight,
          dimensions:
            partsData.Length + "x" + partsData.Breadth + "x" + partsData.Height,
          materialOfConstruction: partsData.MaterialOfConstruction,
          unitId: partsData.UnitId,
          gstId: partsData.GSTId,
          hsnDetailsId: partsData.HSNDetailsId,
          packingId: partsData.PackingId,
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to Update Record", {
            position: "bottom-center",
          });
        });
    } else {
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/Parts`;
      axios
        .post(URL, {
          PartNumber: partsData.PartNumber,
          Name: partsData.Name,
          Description: partsData.Description,
          SupplyType: partsData.SupplyType,
          SellingPrice: partsData.SellingPrice,
          Weight: partsData.Weight,
          Dimensions:
            partsData.Length + "x" + partsData.Breadth + "x" + partsData.Height,
          MaterialOfConstruction: partsData.MaterialOfConstruction,
          UnitId: partsData.UnitId,
          GSTId: partsData.GSTId,
          HSNDetailsId: partsData.HSNDetailsId,
          PackingId: partsData.PackingId,
        })
        .then((response) => {
          toast.success("Record Added Successfully", {
            position: "bottom-center",
          });
          console.log(response.data);
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          toast.error("Failed to Add Record", {
            position: "bottom-center",
          });
        });
    }
  }
  return (
    <form className="add-parts-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Part Number</label>
        <input
          type="number"
          placeholder="Enter Part Number"
          value={partsData.PartNumber}
          onChange={(e) =>
            setPartsData({ ...partsData, PartNumber: e.target.value })
          }
        />
      </blockquote>
      <blockquote>
        <label>Part Name</label>
        <input
          type="text"
          value={partsData.Name}
          placeholder="Enter Part Name"
          onChange={(e) => setPartsData({ ...partsData, Name: e.target.value })}
        />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <textarea
          rows={5}
          placeholder="Enter Part Description"
          value={partsData.Description}
          onChange={(e) =>
            setPartsData({ ...partsData, Description: e.target.value })
          }
        ></textarea>
      </blockquote>
      {/*
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
      </blockquote>*/}
      <blockquote>
        <label>Units</label>
        <select
          onChange={(e) =>
            setPartsData({ ...partsData, UnitId: e.target.value })
          }
        >
          <option value="">Select Unit</option>
          {unitData.map((unit, index) => (
            <option
              key={index}
              value={unit.id}
              selected={partsData.UnitId === unit.id}
            >
              {unit.name}
            </option>
          ))}
        </select>
      </blockquote>
      <blockquote>
        <label>GST Rate</label>
        <select
          onChange={(e) =>
            setPartsData({ ...partsData, GSTId: e.target.value })
          }
        >
          <option value="">Select GST Rate (Percentage)</option>
          {gstData.map((gst, index) => (
            <option
              value={gst.id}
              key={index}
              selected={partsData.GSTId === gst.id}
            >
              {gst.rate}%
            </option>
          ))}
        </select>
      </blockquote>
      <blockquote>
        <label>HSN Code</label>
        <select
          onChange={(e) =>
            setPartsData({ ...partsData, HSNDetailsId: e.target.value })
          }
        >
          <option value="">Select HSN Code</option>
          {hsnData.map((hsn, index) => (
            <option
              value={hsn.id}
              key={index}
              selected={partsData.HSNDetailsId === hsn.id}
            >
              {hsn.hsnCode}
            </option>
          ))}
        </select>
      </blockquote>
      <blockquote>
        <label>Types of Supply</label>
        <aside>
          <mark>
            <p>Goods</p>
            <input
              type="radio"
              name="supply"
              onChange={(e) =>
                setPartsData({ ...partsData, SupplyType: e.target.value })
              }
              value="Goods"
              checked={partsData.SupplyType === "Goods"}
            />
          </mark>
          <mark>
            <p>Service</p>
            <input
              type="radio"
              name="supply"
              onChange={(e) =>
                setPartsData({ ...partsData, SupplyType: e.target.value })
              }
              value="Service"
              checked={partsData.SupplyType === "Service"}
            />
          </mark>
        </aside>
      </blockquote>
      <blockquote>
        <label>Selling Price</label>
        <input
          type="number"
          placeholder="Enter Selling Price"
          onChange={(e) =>
            setPartsData({ ...partsData, SellingPrice: e.target.value })
          }
          value={partsData.SellingPrice}
        />
      </blockquote>
      <blockquote>
        <label>Weight</label>
        <input
          type="number"
          placeholder="Enter Weight"
          onChange={(e) =>
            setPartsData({ ...partsData, Weight: e.target.value })
          }
          value={partsData.Weight}
        />
      </blockquote>
      <blockquote>
        <label>Dimensions (Centimetre)</label>
        <aside>
          <mark>
            <p>Length</p>
            <input
              type="number"
              placeholder="Enter Length"
              onChange={(e) =>
                setPartsData({ ...partsData, Length: e.target.value })
              }
              value={partsData.Length}
            />
          </mark>
          <mark>
            <p>Breadth</p>
            <input
              type="number"
              placeholder="Enter Breadth"
              onChange={(e) =>
                setPartsData({ ...partsData, Breadth: e.target.value })
              }
              value={partsData.Breadth}
            />
          </mark>
          <mark>
            <p>Height</p>
            <input
              type="number"
              placeholder="Enter Height"
              onChange={(e) =>
                setPartsData({ ...partsData, Height: e.target.value })
              }
              value={partsData.Height}
            />
          </mark>
        </aside>
      </blockquote>
      <blockquote>
        <label>Packing</label>
        <select
          onChange={(e) =>
            setPartsData({ ...partsData, PackingId: e.target.value })
          }
        >
          <option value="">Select Packing</option>
          {packingData.map((packing, index) => (
            <option
              value={packing.id}
              key={index}
              selected={partsData.PackingId === packing.id}
            >
              {packing.name}
            </option>
          ))}
        </select>
      </blockquote>
      <blockquote>
        <label>Material of Construction (MOC)</label>
        <input
          type="text"
          placeholder="Enter Material of Construction (MOC)"
          onChange={(e) =>
            setPartsData({
              ...partsData,
              MaterialOfConstruction: e.target.value,
            })
          }
          value={partsData.MaterialOfConstruction}
        />
      </blockquote>
      {/*
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
      </blockquote>*/}
      <button type="submit">{triggerupdate ? "Update" : "Add"} </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddPartsMaster;
