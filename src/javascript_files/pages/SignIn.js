import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css_files/SignIn.css";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Sample users for testing
    const users = [
      { email: "saud@example.com", password: "password123", name: "Saud" },
      { email: "asad@example.com", password: "password456", name: "Asad" },
    ];

    // Find the user that matches the input credentials
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setError(""); // Clear any errors

      // Save user info to localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuthenticated", "true"); // Store login status

      navigate("/"); // Redirect to the dashboard
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="signin-button">
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
