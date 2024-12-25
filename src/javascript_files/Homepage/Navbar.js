import React from "react";
import "../../css_files/Homepage/Navbar.css";

function Navbar({ setshowsidebar, showsidebar }) {
  return (
    <>
      <nav className="navbar">
        <figure>
          <button onClick={() => setshowsidebar(!showsidebar)}>
            <i class="fa-solid fa-bars"></i>
          </button>
          <img src="/images/Image 689.png" id="navbar-logo" />
        </figure>
        <aside>
          <blockquote>
            <i className="fa-solid fa-info-circle" />
            <h3>About Us</h3>
          </blockquote>
          <blockquote>
            <i className="fa-solid fa-user" />
            <h3>Contact Us</h3>
          </blockquote>
          <blockquote>
            <i class="fa-solid fa-gear"></i>
            <h3>Settings</h3>
          </blockquote>
          <blockquote>
            <i class="fa-solid fa-bell"></i>
            <h3>Notifications</h3>
          </blockquote>
          <figure className="navbar-profile">
            <img src="/images/profile_image.png" />
          </figure>
        </aside>
      </nav>
    </>
  );
}

export default Navbar;
