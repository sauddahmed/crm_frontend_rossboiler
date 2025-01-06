import React from "react";
import "../../css_files/Homepage/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Section: Logo */}
      <div className="navbar-left">
        <img src="/images/image689.png" alt="Company Logo" id="navbar-logo" />
        <span className="company-name">Ross Boilers</span>
      </div>

      {/* Right Section: Navigation Icons */}
      <div className="navbar-right">
        <button className="navbar-icon">
          <i className="fa-solid fa-home"></i>
          <span>Dashboard</span>
        </button>
        <button className="navbar-icon">
          <i className="fa-solid fa-envelope"></i>
          <span>INQUIRIES</span>
        </button>
        <button className="navbar-icon">
          <i className="fa-solid fa-building"></i>
          <span>Companies</span>
        </button>
        <button className="navbar-icon">
          <i className="fa-solid fa-box"></i>
          <span>Products</span>
        </button>
        <button className="navbar-icon">
          <i className="fa-solid fa-truck"></i>
          <span>Vendors</span>
        </button>
        <button className="navbar-icon">
          <i className="fa-solid fa-user"></i>
          <span>Users</span>
        </button>
        <button className="navbar-icon">
          <i className="fa-solid fa-users"></i>
          <span>Dealers</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
