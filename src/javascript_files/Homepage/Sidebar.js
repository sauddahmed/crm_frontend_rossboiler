import React from "react";
import "../../css_files/Homepage/Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const nav = useNavigate();

  const menuItems = [
    { path: "/dashboard", icon: "fa-solid fa-user", label: "Dashboard" },
    {
      path: "master/category-master",
      icon: "fa-solid fa-tags",
      label: "Category Master",
    },
    {
      path: "master/sub-category-master",
      icon: "fa-solid fa-sitemap",
      label: "Sub-Category Master",
    },
    {
      path: "master/hsn-master",
      icon: "fa-solid fa-code",
      label: "HSN Master",
    },
    {
      path: "master/unit-master",
      icon: "fa-solid fa-ruler",
      label: "Unit Master",
    },
    {
      path: "master/packing-master",
      icon: "fa-solid fa-box",
      label: "Packing Master",
    },
    {
      path: "master/currency-master",
      icon: "fa-solid fa-coins",
      label: "Currency Master",
    },
    {
      path: "master/gst-master",
      icon: "fa-solid fa-file-invoice",
      label: "GST Master",
    },
    {
      path: "master/parts-master",
      icon: "fa-solid fa-cogs",
      label: "Parts Master",
    },
    {
      path: "master/boiler-master",
      icon: "fa-solid fa-fire",
      label: "Boiler Master",
    },
    {
      path: "master/boiler-series-master",
      icon: "fa-solid fa-stream",
      label: "Boiler Series Master",
    },
    {
      path: "master/courier-master",
      icon: "fa-solid fa-truck",
      label: "Courier Master",
    },
    {
      path: "master/customer-master",
      icon: "fa-solid fa-users",
      label: "Customer Master",
    },
    {
      path: "master/technician-master",
      icon: "fa-solid fa-tools",
      label: "Technician Master",
    },
  ];

  return (
    <section className="sidebar">
      <div>
        {menuItems.map((item, index) => (
          <aside
            key={index}
            className="sidebar-item"
            onClick={() => nav(item.path)}
            title={item.label} // Tooltip for accessibility
          >
            <i className={item.icon}></i>
            <span className="sidebar-text">{item.label}</span>
          </aside>
        ))}
      </div>
    </section>
  );
}

export default Sidebar;
