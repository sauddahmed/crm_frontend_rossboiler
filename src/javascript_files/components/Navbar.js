import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaCog, FaSearch } from "react-icons/fa";
import "../css_files/Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null); // State to hold user data
  const navigate = useNavigate();

  useEffect(() => {
    // Load user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser || { name: "Guest" });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user"); // Remove user data upon logout
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* User Profile */}
        <div className="user-profile">
          <img
            src={user?.profilePicture || "/assets/default-profile-picture.png"} // Default profile picture if none is provided
            alt="User Profile"
            className="profile-picture"
          />
          <span className="user-name">{user?.name || "Guest"}</span>
        </div>
      </div>

      <div className="navbar-logo">{/* Add your logo here */}</div>

      <div className="navbar-actions">
        {/* Search Bar */}
        <div className="navbar-search">
          <div className="search-icon">
            <FaSearch size={15} />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        {/* Notifications Icon */}
        <button className="icon-button">
          <FaBell size={20} />
        </button>

        {/* Settings Icon */}
        <button className="icon-button">
          <FaCog size={20} />
        </button>

        {/* Logout Button */}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
