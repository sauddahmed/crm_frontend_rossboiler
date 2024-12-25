import React from "react";
import "../../css_files/Homepage/Navbar.css";

function Navbar({ setshowsidebar, showsidebar }) {
  return (
    <>
      <nav className="navbar">
        <figure>
          <button
            onClick={() => {
              if (showsidebar) {
                setshowsidebar(false);
              } else {
                setshowsidebar(true);
              }
            }}
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <img src="/images/Image 689.png" id="navbar-logo" />
        </figure>
        <aside>
          <blockquote>
            <i
              className="fa-solid fa-info-circle"
              title={showsidebar && "About Us"}
            />
            {showsidebar === false && <h3>About Us</h3>}
          </blockquote>
          <blockquote>
            <i
              className="fa-solid fa-user"
              title={showsidebar && "Contact Us"}
            />
            {showsidebar === false && <h3>Contact Us</h3>}
          </blockquote>
          <blockquote>
            <i class="fa-solid fa-gear" title={showsidebar && "Settings"}></i>
            {showsidebar === false && <h3>Settings</h3>}
          </blockquote>
          <blockquote>
            <i
              class="fa-solid fa-bell"
              title={showsidebar && "Notifications"}
            ></i>
            {showsidebar === false && <h3>Notifications</h3>}
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
