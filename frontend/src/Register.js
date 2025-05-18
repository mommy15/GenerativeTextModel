import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Add matching custom styles


// This component handles user Registration functionality.
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/register', { email, password });
      alert(res.data.message);
    } catch (error) {
      alert("Error during registration");
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="text-center mb-4">Register</h2>
        <input
          type="email"
          className="form-control mb-3 register-input"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-4 register-input"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn register-btn w-100" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
