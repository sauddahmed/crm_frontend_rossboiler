import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../css_files/Signin/Signin.css";
import { ToastContainer } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

function Signin() {
  const nav = useNavigate();
  useEffect(() => {
    nav("/login");
    sessionStorage.setItem("username", "user123");
    sessionStorage.setItem("password", "pass@123");
  }, []);

  return (
    <>
      <ToastContainer />
      <section className="signin">
        <img src="/images/Image689.png" alt="Logo" />
        <div>
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Signin;
