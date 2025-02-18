import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddBoilerMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import { toast } from "react-toastify";

function AddBoilerMaster({
  setshowaddform,
  reload,
  setReload,
  triggerupdate,
  boilerupdatedata,
}) {
  const [boilerData, setBoilerData] = useState({
    Head: triggerupdate ? boilerupdatedata?.head : "",
    Description: triggerupdate ? boilerupdatedata?.description : "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (triggerupdate) {
      const url = `${process.env.REACT_APP_API_URL}/api/v1/Boiler/UpdateBoiler`;
      axios
        .put(url, {
          id: boilerupdatedata.id,
          head: boilerData.Head,
          description: boilerData.Description,
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
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/Boiler`;
      axios
        .post(URL, boilerData)
        .then((response) => {
          toast.success("Record Added Successfully", {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          console.error("Error adding boiler data:", error);
          toast.error("Failed to Add Record", {
            position: "bottom-center",
          });
        });
    }
  }
  return (
    <form className="add-boiler-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Head</label>
        <input
          type="text"
          placeholder="Enter Boiler Head"
          value={boilerData.Head}
          onChange={(e) =>
            setBoilerData({ ...boilerData, Head: e.target.value })
          }
        />
      </blockquote>

      <blockquote>
        <label>Description</label>
        <textarea
          rows={5}
          placeholder="Enter Description"
          value={boilerData.Description}
          onChange={(e) =>
            setBoilerData({ ...boilerData, Description: e.target.value })
          }
        ></textarea>
      </blockquote>
      <button type="submit">{triggerupdate ? "Update" : "Add"} </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddBoilerMaster;
