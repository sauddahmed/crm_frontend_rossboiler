import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../../css_files/Homepage/Homepage.css";
import { Outlet } from "react-router-dom";

function Homepage() {
  return (
    <section className="homepage">
      <Navbar />
      <section className="inside-homepage">
        <Sidebar />
        <section className="inside-homepage-content">
          <Outlet />
        </section>
      </section>
    </section>
  );
}

export default Homepage;
