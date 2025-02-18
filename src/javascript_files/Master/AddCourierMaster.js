import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddCourierMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function AddCourierMaster({
  setshowaddform,
  reload,
  setReload,
  triggerupdate,
  courierupdatedata,
}) {
  const [courierData, setCourierData] = useState({
    BasicDetails: triggerupdate ? courierupdatedata?.basicDetails : "",
    Contacts: triggerupdate ? courierupdatedata?.contacts : "",
    Address: triggerupdate ? courierupdatedata?.address : "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (triggerupdate) {
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/Courier/UpdateCourier`;
      axios
        .put(URL, {
          id: courierupdatedata.id,
          basicDetails: courierData.BasicDetails,
          contacts: courierData.Contacts,
          address: courierData.Address,
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          toast.error("Failed to Update Record", {
            position: "bottom-center",
          });
          console.log(error);
        });
    } else {
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/Courier`;
      axios
        .post(URL, courierData)
        .then((response) => {
          toast.success("Record Added Successfully", {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          toast.error("Failed to Add Record", {
            position: "bottom-center",
          });
          console.log(error);
        });
    }
  }
  return (
    <form className="add-courier-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Details</label>
        <input
          type="text"
          placeholder="Enter Courier Name"
          value={courierData.BasicDetails}
          onChange={(e) =>
            setCourierData({ ...courierData, BasicDetails: e.target.value })
          }
        />
      </blockquote>
      <blockquote>
        <label>Contacts</label>
        <input
          type="text"
          placeholder="Enter Courier Email"
          value={courierData.Contacts}
          onChange={(e) =>
            setCourierData({ ...courierData, Contacts: e.target.value })
          }
        />
      </blockquote>
      <blockquote>
        <label>Address</label>
        <input
          type="text"
          placeholder="Enter Address of Courier"
          value={courierData.Address}
          onChange={(e) =>
            setCourierData({ ...courierData, Address: e.target.value })
          }
        />
      </blockquote>
      <button type="submit">{triggerupdate ? "Update" : "Add"} </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddCourierMaster;
