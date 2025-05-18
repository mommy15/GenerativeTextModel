import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom styles for matching UI

// This component serves as the navigation bar for the application.
function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-4 py-3">
      <Link className="navbar-brand brand-glow" to="/">GenText</Link>
      <div className="ml-auto d-flex align-items-center">
        {isLoggedIn ? (
          <>
            <Link className="nav-link nav-btn" to="/generate">Generate</Link>
            <Link className="nav-link nav-btn" to="/" onClick={handleLogout}>Logout</Link>
          </>
        ) : (
          <>
            <Link className="nav-link nav-btn" to="/login">Login</Link>
            <Link className="nav-link nav-btn ml-3" to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

