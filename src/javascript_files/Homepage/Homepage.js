import React, { useState } from "react";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Sidebar from "./Sidebar";
import "../../css_files/Homepage/Homepage.css";
import { Outlet } from "react-router-dom";

function Homepage({ setshowsidebar, showsidebar }) {
  return (
    <section className="homepage">
      {showsidebar && <Sidebar />}
      <section className="inside-homepage">
        <Navbar setshowsidebar={setshowsidebar} showsidebar={showsidebar} />
        <Outlet />
      </section>
    </section>
  );
}

export default Homepage;
