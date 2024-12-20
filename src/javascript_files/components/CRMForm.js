import React from "react";
import "../css_files/Form.css"; // Add CSS for styling if required

const CRMForm = ({ formData, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        placeholder="Company Name"
        onChange={onInputChange}
        required
      />
      <textarea
        name="companyAddress"
        value={formData.companyAddress}
        placeholder="Company Address"
        onChange={onInputChange}
        required
      ></textarea>
      <input
        type="text"
        name="city"
        value={formData.city}
        placeholder="City/District"
        onChange={onInputChange}
        required
      />
      <input
        type="text"
        name="contactPerson"
        value={formData.contactPerson}
        placeholder="Contact Person Name"
        onChange={onInputChange}
        required
      />
      <input
        type="tel"
        name="contactNumber"
        value={formData.contactNumber}
        placeholder="Contact Number"
        onChange={onInputChange}
        required
      />
      <input
        type="text"
        name="requirement"
        value={formData.requirement}
        placeholder="Requirement"
        onChange={onInputChange}
        required
      />
      <textarea
        name="comments"
        value={formData.comments}
        placeholder="Comments"
        onChange={onInputChange}
      ></textarea>
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Email Address"
        onChange={onInputChange}
        required
      />
      <input
        type="text"
        name="unitModel"
        value={formData.unitModel}
        placeholder="Unit/Product Model"
        onChange={onInputChange}
      />
      <input
        type="text"
        name="serviceNo"
        value={formData.serviceNo}
        placeholder="Service No."
        onChange={onInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CRMForm;
