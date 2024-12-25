import React from "react";
import "../../css_files/Master/AddTechnicianMaster.css";
import CloseForm from "./CloseForm";

function AddTechnicianMaster({ setshowaddform }) {
  return (
    <form className="add-technician-master">
      <blockquote>
        <label>Technician Name</label>
        <input type="text" placeholder="Enter Name of Technician" />
      </blockquote>
      <blockquote>
        <label>Company Phone Number</label>
        <input type="number" placeholder="Enter Company Phone Number" />
      </blockquote>
      <aside>
        <blockquote>
          <label>Age</label>
          <input type="number" placeholder="Enter Age" />
        </blockquote>
        <blockquote>
          <label>Experience</label>
          <input type="number" placeholder="Enter Experience in Years" />
        </blockquote>
      </aside>
      <blockquote>
        <label>Qualification</label>
        <input type="text" placeholder="Enter Qualification" />
      </blockquote>
      <aside>
        <blockquote>
          <label>Number of Years with Ross</label>
          <input type="number" placeholder="Enter Number of Years with Ross" />
        </blockquote>
        <blockquote>
          <label>CTC</label>
          <input type="number" placeholder="Enter CTC" />
        </blockquote>
      </aside>
      <blockquote>
        <label>Posting Location</label>
        <input type="text" placeholder="Enter Posting Location" />
      </blockquote>
      <blockquote>
        <label>Aadhar Number</label>
        <input type="number" placeholder="Enter Aadhar Number" />
      </blockquote>
      <blockquote>
        <label>PAN</label>
        <input type="text" placeholder="Enter Pan Card Number" />
      </blockquote>
      <blockquote>
        <label>Residential Address</label>
        <input type="text" placeholder="Enter Residential Address" />
      </blockquote>
      <blockquote>
        <label>Personal Phone Number</label>
        <input type="number" placeholder="Enter Personal Phone Number" />
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddTechnicianMaster;
