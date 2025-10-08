// src/pages/Login.jsx
import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fake login for demo. Replace with real API endpoint if needed
    if (credentials.email === "admin@example.com" && credentials.password === "password") {
      alert("Login successful!");
      setCredentials({ email: "", password: "" });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="page-container">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
