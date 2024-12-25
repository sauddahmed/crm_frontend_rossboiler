import React from "react";
import "../../css_files/Master/AddPartsMaster.css";
import CloseForm from "./CloseForm";

function AddPartsMaster({ setshowaddform }) {
  return (
    <form className="add-parts-master">
      <blockquote>
        <label>Part Number</label>
        <input type="text" placeholder="Enter Part Number" />
      </blockquote>
      <blockquote>
        <label>Part Name</label>
        <input type="text" placeholder="Enter Part Name" />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <textarea rows={5} placeholder="Enter Part Description"></textarea>
      </blockquote>
      <blockquote>
        <label>Under Group</label>
        <select>
          <option value="">Select Category</option>
          <option>Electronics</option>
          <option>Kitchen Appliances</option>
          <option>Vehicles</option>
          <option>Books</option>
        </select>
        <select>
          <option value="">Select Sub-Category</option>
          <option>Laptop</option>
          <option>Mobile</option>
          <option>Smartwatch</option>
          <option>TV</option>
        </select>
      </blockquote>
      <blockquote>
        <label>Units</label>
        <select>
          <option value="">Select Unit</option>
          <option>Kilogram</option>
          <option>Pounds</option>
        </select>
      </blockquote>
      <blockquote>
        <label>GST Percentage</label>
        <select>
          <option value="">Select GST Percentage</option>
          <option>15%</option>
          <option>20%</option>
          <option>25%</option>
          <option>30%</option>
        </select>
      </blockquote>
      <blockquote>
        <label>HSN Details</label>
        <select>
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
