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
        <figure>
          <img src="/images/Signin/Image 706.png" />
        </figure>
        <div>
          <img src="/images/Image 689.png" />
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Signin;
