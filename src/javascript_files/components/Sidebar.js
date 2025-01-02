import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css_files/Sidebar.css";
import logo from "./../../assets/ross-logo.png";

import {
  FaCogs,
  FaSignOutAlt,
  FaInfoCircle,
  FaBook,
  FaThLarge,
  FaArrowCircleDown,
} from "react-icons/fa";

// SidebarHeader for displaying the logo and header content
const SidebarHeader = ({ isCollapsed }) => (
  <div className="sidebar-header">
    {!isCollapsed && (
      <img src={logo} alt="Ross Logo" className="sidebar-logo" />
    )}
  </div>
);

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMasterDropdownOpen, setIsMasterDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsCollapsed(false); // Expand sidebar on hover
  };

  const handleMouseLeave = () => {
    setIsCollapsed(true); // Collapse sidebar when not hovered
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <aside
      className={`sidebar ${isCollapsed ? "collapsed" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SidebarHeader isCollapsed={isCollapsed} />

      <ul className="sidebar-menu">
        <li>
          <a href="/Dashboard" className="sidebar-link">
            <FaThLarge className="menu-icon" />
            {!isCollapsed && "Dashboard"}
          </a>
        </li>

        <li
          className="sidebar-item"
          onMouseEnter={() => setIsMasterDropdownOpen(true)}
          onMouseLeave={() => setIsMasterDropdownOpen(false)}
        >
          <a href="#master" className="sidebar-link">
            <FaBook className="menu-icon" />
            {!isCollapsed && "Master"}
            {!isCollapsed && (
              <span
                className={`dropdown-arrow ${
                  isMasterDropdownOpen ? "open" : ""
                }`}
              >
                <FaArrowCircleDown />
              </span>
            )}
          </a>

          <ul className={`submenu ${isMasterDropdownOpen ? "active" : ""}`}>
            <li>
              <a
                href="/CategoryMaster"
                className={isCollapsed ? "collapsed" : ""}
              >
                Category
              </a>
            </li>
            <li>
              <a
                href="/SubCategoryMaster"
                className={isCollapsed ? "collapsed" : ""}
              >
                Sub Category
              </a>
            </li>
            <li>
              <a href="/HsnMaster" className={isCollapsed ? "collapsed" : ""}>
                HSN
              </a>
            </li>
            <li>
              <a href="/UnitMaster" className={isCollapsed ? "collapsed" : ""}>
                Unit
              </a>
            </li>
            <li>
              <a
                href="/PackagingMaster"
                className={isCollapsed ? "collapsed" : ""}
              >
                Packaging
              </a>
            </li>
            <li>
              <a
                href="/CurrencyMaster"
                className={isCollapsed ? "collapsed" : ""}
              >
                Currency
              </a>
            </li>
            <li>
              <a
                href="/CustomerPricing"
                className={isCollapsed ? "collapsed" : ""}
              >
                Customer Pricing
              </a>
            </li>
            <li>
              <a href="/GstMaster" className={isCollapsed ? "collapsed" : ""}>
                GST
              </a>
            </li>
            <li>
              <a href="/PartsMaster" className={isCollapsed ? "collapsed" : ""}>
                Parts
              </a>
            </li>
            <li>
              <a
                href="/BoilerMaster"
                className={isCollapsed ? "collapsed" : ""}
              >
                Boiler
              </a>
            </li>
            <li>
              <a
                href="/BoilerSeriesMaster"
                className={isCollapsed ? "collapsed" : ""}
              >
                Boiler Series
              </a>
            </li>
            <li>
              <a
                href="/BoilerSeriesPartsMapping"
                className={isCollapsed ? "collapsed" : ""}
              >
                Parts Mapping
              </a>
            </li>
            <li>
              <a
                href="/CourierMaster"
                className={isCollapsed ? "collapsed" : ""}
              >
                Courier
              </a>
            </li>
            <li>
              <a
                href="/CustomerMaster"
                className={isCollapsed ? "collapsed" : ""}
              >
                Customer
              </a>
            </li>
            <li>
              <a
                href="/UserManagement"
                className={isCollapsed ? "collapsed" : ""}
              >
                User Management
              </a>
            </li>
            <li>
              <a
                href="/TechnicianMaster"
                className={isCollapsed ? "collapsed" : ""}
              >
                Technician
              </a>
            </li>
          </ul>
        </li>

        <div className="sidebar-bottom-section">
          <li>
            <a href="/settings" className="sidebar-link">
              <FaCogs className="menu-icon" />
              {!isCollapsed && "Settings"}
            </a>
          </li>

          <li>
            <a href="/Help Center" className="sidebar-link">
              <FaInfoCircle className="menu-icon" />
              {!isCollapsed && "Help Center"}
            </a>
          </li>

          <li>
            <a href="/signin" className="sidebar-link" onClick={handleLogout}>
              <FaSignOutAlt className="menu-icon" />
              {!isCollapsed && "Logout"}
            </a>
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
