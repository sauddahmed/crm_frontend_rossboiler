import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddCourierMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";

function AddCourierMaster({ setshowaddform, reload, setReload }) {
  const [courierData, setCourierData] = useState({
    BasicDetails: "",
    Contacts: "",
    Address: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Courier`;
    axios
      .post(URL, courierData)
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
    <form className="add-courier-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Details</label>
        <input
          type="text"
          placeholder="Enter Courier Name"
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
          onChange={(e) =>
            setCourierData({ ...courierData, Address: e.target.value })
          }
        />
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddCourierMaster;
