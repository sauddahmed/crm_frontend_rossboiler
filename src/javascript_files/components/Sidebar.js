import React from "react";
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
    {/* Conditionally render the logo only when the sidebar is not collapsed */}
    {!isCollapsed && (
      <img src={logo} alt="Ross Logo" className="sidebar-logo" />
    )}
  </div>
);

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const [isMasterDropdownOpen, setIsMasterDropdownOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsMasterDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMasterDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <SidebarHeader isCollapsed={isCollapsed} />
      {/* Collapse button */}
      <button onClick={toggleSidebar} className="collapse-btn">
        {isCollapsed ? "O" : "X"}
      </button>

      <ul className="sidebar-menu">
        {/* Dashboard Link */}
        <li>
          <a href="/Dashboard" className="sidebar-link">
            <FaThLarge className="menu-icon" />
            {!isCollapsed && "Dashboard"} {/* Show text only when expanded */}
          </a>
        </li>

        {/* Master Dropdown */}
        <li
          className="sidebar-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#master" className="sidebar-link">
            <FaBook className="menu-icon" />
            {!isCollapsed && "Master"} {/* Show text only when expanded */}
            {/* Only show dropdown icon when not collapsed */}
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

        {/* Settings and Help Center */}
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

          {/* Logout */}
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
