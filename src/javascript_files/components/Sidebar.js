import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import mainlogo from "../css_files/Sidebar.css"; // Ensure CSS is linked properly
import logo from "./../../assets/ross-logo.png"; // Adjust the path as necessary

import {
  FaFileAlt,
  FaCogs,
  FaSignOutAlt,
  FaInfoCircle,
  FaBook,
  FaArrowCircleRight,
  FaDashcube,
  FaThLarge,
  FaArrowCircleDown,
} from "react-icons/fa"; // Add appropriate icons

// Sidebar Header component
const SidebarHeader = () => (
  <div className="sidebar-header">
    <img src={logo} alt="Ross Logo" />
  </div>
);

const Sidebar = () => {
  const [isMasterDropdownOpen, setIsMasterDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  // Open dropdown on hover
  const handleMouseEnter = () => {
    setIsMasterDropdownOpen(true);
  };

  // Close dropdown when mouse leaves
  const handleMouseLeave = () => {
    setIsMasterDropdownOpen(false);
  };

  const handleMainLinkClick = (e) => {
    e.stopPropagation();
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user"); // Remove user data upon logout
    navigate("/signin");
  };

  return (
    <aside className="sidebar">
      {/* Sidebar Header */}
      <SidebarHeader />

      {/* Sidebar Menu */}
      <ul className="sidebar-menu">
        {/* Dashboard Link */}
        <li>
          <a href="#Dashboard" className="sidebar-link">
            <FaThLarge className="menu-icon" />
            Dashboard
          </a>
        </li>
        {/* Master Dropdown */}
        <li
          className="sidebar-item"
          onMouseEnter={handleMouseEnter} // Trigger open on hover
          onMouseLeave={handleMouseLeave} // Trigger close when hover leaves
        >
          <a href="#master" className="sidebar-link">
            <FaBook className="menu-icon" />
            Master
            <span
              className={`dropdown-arrow ${isMasterDropdownOpen ? "open" : ""}`}
            >
              <FaArrowCircleDown />
            </span>
          </a>

          <ul className={`submenu ${isMasterDropdownOpen ? "active" : ""}`}>
            <li>
              <a href="/CategoryMaster">Category</a>
            </li>
            <li>
              <a href="/SubCategoryMaster">Sub Category</a>
            </li>
            <li>
              <a href="/hsn-master">HSN</a>
            </li>
            <li>
              <a href="/unit-master">Unit</a>
            </li>
            <li>
              <a href="/packaging-master">Packaging</a>
            </li>
            <li>
              <a href="/currency-master">Currency</a>
            </li>
            <li>
              <a href="/customer-pricing">Customer Pricing</a>
            </li>
            <li>
              <a href="/gst-master">GST</a>
            </li>
            <li>
              <a href="/parts-master">Parts</a>
            </li>
            <li>
              <a href="/boiler-master">Boiler</a>
            </li>
            <li>
              <a href="/boiler-series-master">Boiler Series</a>
            </li>
            <li>
              <a href="/boiler-series-parts-mapping">Parts Mapping</a>
            </li>
            <li>
              <a href="/courier-master">Courier</a>
            </li>
            <li>
              <a href="/customer-master">Customer</a>
            </li>
            <li>
              <a href="/user-management">User Management</a>
            </li>
            <li>
              <a href="/technician-master">Technician</a>
            </li>
          </ul>
        </li>

        {/* Settings */}
        <div className="sidebar-bottom-section">
          <li>
            <a href="/settings" className="sidebar-link">
              <FaCogs className="menu-icon" />
              Settings
            </a>
          </li>

          {/* Help Center */}
          <li>
            <a href="/Help Center" className="sidebar-link">
              <FaInfoCircle className="menu-icon" />
              Help Center
            </a>
          </li>

          {/* Logout */}
          <li>
            <a href="/signin" className="sidebar-link">
              <FaSignOutAlt className="menu-icon" onClick={handleLogout} />
              Logout
            </a>
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
