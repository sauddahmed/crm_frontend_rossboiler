import React from "react";
import "../../css_files/Master/AddCustomerMaster.css";
import CloseForm from "./CloseForm";

function AddCustomerMaster({ setshowaddform }) {
  return (
    <form className="add-customer-master">
      <blockquote>
        <label>Customer Name</label>
        <input type="text" placeholder="Enter Customer Name" />
      </blockquote>
      <blockquote>
        <label>Name of Company or Organization</label>
        <input
          type="text"
          placeholder="Enter Name of Company or Organization"
        />
      </blockquote>
      <blockquote>
        <label>Customer Email</label>
        <input type="email" placeholder="Enter Customer Email" />
      </blockquote>
      <blockquote>
        <label>Customer Phone Number</label>
        <input type="number" placeholder="Enter Customer Phone Number" />
      </blockquote>
      <blockquote>
        <label>Customer Address</label>
        <input type="text" placeholder="Enter Customer Address" />
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddCustomerMaster;
