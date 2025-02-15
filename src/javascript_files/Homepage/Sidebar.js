import React, { useState } from "react";
import "../../css_files/Homepage/Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const nav = useNavigate();
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  const toggleMasterDropdown = () => setIsMasterOpen(!isMasterOpen);

  const masterItems = [
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
      label: "Unit\nMaster",
    },
    {
      path: "master/packing-master",
      icon: "fa-solid fa-box",
      label: "Packing Master",
    },
    {
      path: "master/currency-master",
      icon: "fa-solid fa-dollar-sign",
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
      icon: "fa-solid fa-file-invoice",
      label: "Boiler Series Master",
    },
    {
      path: "master/boiler-series-parts-mapping-master",
      icon: "fa-solid fa-map",
      label: "Boiler Series Mapping Master",
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
      path: "master/customer-pricing-master",
      icon: "fa-solid fa-money-bill",
      label: "Customer Pricing",
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
        <aside
          className="sidebar-item"
          onClick={() => nav("/dashboard")}
          title="Dashboard"
        >
          <i className="fa-solid fa-chart-pie"></i>
          <span className="sidebar-text">Dashboard</span>
        </aside>

        {/* Master Dropdown */}
        <aside
          className="sidebar-item"
          onClick={toggleMasterDropdown}
          title="Master"
        >
          <i
            className={`fa-solid ${
              isMasterOpen ? "fa-folder-open" : "fa-folder"
            }`}
          ></i>
          <span className="sidebar-text">Master</span>
        </aside>

        {isMasterOpen && (
          <div className="dropdown-menu">
            {masterItems.map((item, index) => (
              <aside
                key={index}
                className="dropdown-item"
                onClick={() => nav(item.path)}
                title={item.label}
              >
                <i className={item.icon}></i>
                <span className="dropdown-text">{item.label}</span>
              </aside>
            ))}
          </div>
        )}

        {/* Settings Button */}
        <aside
          className="sidebar-item"
          onClick={() => nav("/settings")}
          title="Settings"
        >
          <i className="fa-solid fa-cog"></i>
          <span className="sidebar-text">Settings</span>
        </aside>
      </div>
    </section>
  );
}

export default Sidebar;
