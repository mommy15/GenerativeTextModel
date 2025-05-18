import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Custom styling

// This component handles user Login functionality.
function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });

      if (res.data.message === "Login successful.") {
        localStorage.setItem("userEmail", email);
        setIsLoggedIn(true);
        nav('/');
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Server error during login");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center mb-4">Login</h2>
        <input
          type="email"
          className="form-control mb-3 login-input"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-4 login-input"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn login-btn w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
