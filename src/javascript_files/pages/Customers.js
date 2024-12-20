import React, { useState, useEffect } from "react";
import "../css_files/Customers.css"; // Add CSS for styling if required

const Customers = () => {
  const [formValues, setFormValues] = useState({
    timestamp: new Date().toISOString().slice(0, 16), // Default to current date and time
    companyName: "",
    companyAddress: "",
    cityDistrict: "",
    contactPersonName: "",
    contactNumber: "",
    requirement: "",
    comments: "",
    emailAddress: "",
    unitProductModel: "",
    serviceNo: "",
    order: "",
    dispatchCallVisited: "",
    technicianName: "",
    serviceCallType: "",
    scAttendDate: "",
    visitFrom: "",
    visitTo: "",
    noOfDays: "",
    totalServiceSpareCharges: "",
    pmtRec: "",
    pmtBal: "",
    expenses: "",
    profitLoss: "",
    ncToTechnician: "",
    remark: "",
  });

  const [customersData, setCustomersData] = useState([]);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("customersData"));
    if (savedData) {
      setCustomersData(savedData);
    }
  }, []);

  // Save data to localStorage whenever customersData changes
  useEffect(() => {
    if (customersData.length > 0) {
      localStorage.setItem("customersData", JSON.stringify(customersData));
    }
  }, [customersData]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomersData((prevData) => [...prevData, formValues]);
    setFormValues({
      timestamp: new Date().toISOString().slice(0, 16), // Reset to current date after submission
      companyName: "",
      companyAddress: "",
      cityDistrict: "",
      contactPersonName: "",
      contactNumber: "",
      requirement: "",
      comments: "",
      emailAddress: "",
      unitProductModel: "",
      serviceNo: "",
      order: "",
      dispatchCallVisited: "",
      technicianName: "",
      serviceCallType: "",
      scAttendDate: "",
      visitFrom: "",
      visitTo: "",
      noOfDays: "",
      totalServiceSpareCharges: "",
      pmtRec: "",
      pmtBal: "",
      expenses: "",
      profitLoss: "",
      ncToTechnician: "",
      remark: "",
    });
  };

  return (
    <div>
      <h1>Customers</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Timestamp:</label>
          <input
            type="datetime-local"
            name="timestamp"
            value={formValues.timestamp}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formValues.companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Company Address:</label>
          <input
            type="text"
            name="companyAddress"
            value={formValues.companyAddress}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>City/District:</label>
          <input
            type="text"
            name="cityDistrict"
            value={formValues.cityDistrict}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Contact Person Name:</label>
          <input
            type="text"
            name="contactPersonName"
            value={formValues.contactPersonName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            value={formValues.contactNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Requirement:</label>
          <textarea
            name="requirement"
            value={formValues.requirement}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label>Comments:</label>
          <textarea
            name="comments"
            value={formValues.comments}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            name="emailAddress"
            value={formValues.emailAddress}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Unit/Product Model:</label>
          <input
            type="text"
            name="unitProductModel"
            value={formValues.unitProductModel}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Service No.:</label>
          <input
            type="text"
            name="serviceNo"
            value={formValues.serviceNo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Order:</label>
          <input
            type="text"
            name="order"
            value={formValues.order}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Dispatch/Call Attended/Visited:</label>
          <input
            type="text"
            name="dispatchCallVisited"
            value={formValues.dispatchCallVisited}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Technician Name:</label>
          <input
            type="text"
            name="technicianName"
            value={formValues.technicianName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Service Call Type:</label>
          <input
            type="text"
            name="serviceCallType"
            value={formValues.serviceCallType}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>SC Attend Date:</label>
          <input
            type="date"
            name="scAttendDate"
            value={formValues.scAttendDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Visit From:</label>
          <input
            type="datetime-local"
            name="visitFrom"
            value={formValues.visitFrom}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Visit To:</label>
          <input
            type="datetime-local"
            name="visitTo"
            value={formValues.visitTo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>No. of Days:</label>
          <input
            type="number"
            name="noOfDays"
            value={formValues.noOfDays}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Total Service/Spare Charges:</label>
          <input
            type="number"
            name="totalServiceSpareCharges"
            value={formValues.totalServiceSpareCharges}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Payment Received:</label>
          <input
            type="number"
            name="pmtRec"
            value={formValues.pmtRec}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Payment Balance:</label>
          <input
            type="number"
            name="pmtBal"
            value={formValues.pmtBal}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Expenses:</label>
          <input
            type="number"
            name="expenses"
            value={formValues.expenses}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Profit/Loss:</label>
          <input
            type="number"
            name="profitLoss"
            value={formValues.profitLoss}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>NC to Technician:</label>
          <input
            type="text"
            name="ncToTechnician"
            value={formValues.ncToTechnician}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Remark:</label>
          <textarea
            name="remark"
            value={formValues.remark}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display logged customer data */}
      <h2>Logged Customer Data</h2>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Company Name</th>
            <th>Company Address</th>
            <th>City District</th>
            <th>Contact Person Name</th>
            <th>Contact Number</th>
            <th>Requirement</th>
            <th>Comments</th>
            <th>Email Address</th>
            <th>Unit Product Model</th>
            <th>Service Number</th>
            <th>Order</th>
            <th>Dispatch / Call / Visited</th>
            <th>Technician Name</th>
            <th>Service Call Type</th>
            <th>SC Attend Date</th>
            <th>Visit From</th>
            <th>Visit To</th>
            <th>Number Of Days</th>
            <th>Total Service Spare Charges</th>
            <th>Pmt Rec</th>
            <th>Pmt Bal</th>
            <th>Expenses</th>
            <th>Profit/Loss</th>
            <th>NC To Technician</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {customersData.map((customer, index) => (
            <tr key={index}>
              <td>{customer.timestamp}</td>
              <td>{customer.companyName}</td>
              <td>{customer.companyAddress}</td>
              <td>{customer.cityDistrict}</td>
              <td>{customer.contactPersonName}</td>
              <td>{customer.contactNumber}</td>
              <td>{customer.requirement}</td>
              <td>{customer.comments}</td>
              <td>{customer.emailAddress}</td>
              <td>{customer.unitProductModel}</td>
              <td>{customer.serviceNo}</td>
              <td>{customer.order}</td>
              <td>{customer.dispatchCallVisited}</td>
              <td>{customer.technicianName}</td>
              <td>{customer.serviceCallType}</td>
              <td>{customer.scAttendDate}</td>
              <td>{customer.visitFrom}</td>
              <td>{customer.visitTo}</td>
              <td>{customer.noOfDays}</td>
              <td>{customer.totalServiceSpareCharges}</td>
              <td>{customer.pmtRec}</td>
              <td>{customer.pmtBal}</td>
              <td>{customer.expenses}</td>
              <td>{customer.profitLoss}</td>
              <td>{customer.ncToTechnician}</td>
              <td>{customer.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
