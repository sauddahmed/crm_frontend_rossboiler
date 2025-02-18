import React, { createContext, useRef } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../../css_files/Homepage/Homepage.css";
import { Outlet } from "react-router-dom";

export const triggerscroll = createContext();
function Homepage() {
  const insidehomepageref = useRef();

  function triggerscrollupwords() {
    if (insidehomepageref.current) {
      insidehomepageref.current.scrollTo({
        top: 0,
        behaviour: "smooth",
      });
    }
  }
  return (
    <section className="homepage">
      <Navbar />
      <section className="inside-homepage">
        <Sidebar />
        <triggerscroll.Provider value={triggerscrollupwords}>
          <section className="inside-homepage-content" ref={insidehomepageref}>
            <Outlet />
          </section>
        </triggerscroll.Provider>
      </section>
    </section>
  );
}

export default Homepage;
