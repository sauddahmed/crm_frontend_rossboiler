import React, { useState } from "react";
import "../../css_files/Homepage/Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [showmenu, setshowmenu] = useState(false);
  const nav = useNavigate();
  return (
    <section className="sidebar">
      <div>
        <aside>
          <blockquote onClick={() => nav("/")}>
            <i className="fa-solid fa-user"></i>
            <h3>Dashboard</h3>
          </blockquote>
        </aside>
        <aside>
          <blockquote onClick={() => setshowmenu(!showmenu)}>
            <i class="fa-solid fa-book"></i>
            <h3>Master</h3>
            <i
              class={
                showmenu ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
              }
            ></i>
          </blockquote>
          {showmenu && (
            <blockquote>
              <mark onClick={() => nav("/master/category-master")}>
                <h4>Category Master</h4>
              </mark>
              <mark onClick={() => nav("/master/sub-category-master")}>
                <h4>Sub-Category Master</h4>
              </mark>
              <mark onClick={() => nav("/master/hsn-master")}>
                <h4>HSN Master</h4>
              </mark>
              <mark>
                <h4>Unit Master</h4>
              </mark>
              <mark>
                <h4>Packing Master</h4>
              </mark>
              <mark>
                <h4>Currency Master</h4>
              </mark>
              <mark>
                <h4>Customer Pricing</h4>
              </mark>
              <mark>
                <h4>GST Master</h4>
              </mark>
              <mark>
                <h4>Parts Master</h4>
              </mark>
              <mark>
                <h4>Boiler Master</h4>
              </mark>
              <mark>
                <h4>Boilder Series Master</h4>
              </mark>
              <mark>
                <h4>Boilder Series Parts Mapping</h4>
              </mark>
              <mark>
                <h4>Courier Master</h4>
              </mark>
              <mark>
                <h4>User Management</h4>
              </mark>
              <mark>
                <h4>Technician Master</h4>
              </mark>
            </blockquote>
          )}
        </aside>
      </div>
    </section>
  );
}

export default Sidebar;
