import React, { useState } from "react";
import "../../css_files/Signin/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [logindata, setlogindata] = useState({
    username: "",
    password: "",
  });
  const nav = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();

    if (
      logindata.username === sessionStorage.getItem("username") &&
      logindata.password === sessionStorage.getItem("password")
    ) {
      toast.success("Login Successful", { position: "bottom-center" });
      setTimeout(() => nav("/dashboard"), 3000);
    } else {
      toast.error("Login Failed", { position: "bottom-center" });
    }
  }
  return (
    <section className="login">
      <form onSubmit={handlesubmit}>
        <h1>Login</h1>
        <blockquote>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) =>
              setlogindata({ ...logindata, username: e.target.value })
            }
          />
        </blockquote>
        <blockquote>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) =>
              setlogindata({ ...logindata, password: e.target.value })
            }
          />
        </blockquote>
        <button type="submit">Login</button>
      </form>
      <p>
        Not a Member Yet. Click{" "}
        <Link to={"/register"}>
          <a>Here </a>
        </Link>
        to Register
      </p>
    </section>
  );
}

export default Login;
