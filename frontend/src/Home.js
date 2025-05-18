import React from 'react';
import './Home.css'; // Custom CSS for animations

// This component serves as the Landing page for the application.
function Home() {
  return (
    <div className="landing-container">
      <div className="text-center mb-5">
        <h1 className="landing-title"> Generative Text Model App</h1>
        <p className="landing-subtitle">Unleash AI-powered creativity in a click. Login or Register to start generating text magic!</p>
      </div>

      <div className="card-grid">
        <div className="landing-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Login</h3>
              <p>Access your account and explore the power of generative text.</p>
            </div>
            <div className="card-back">
              <a href="/login" className="btn btn-outline-light">Go to Login</a>
            </div>
          </div>
        </div>

        <div className="landing-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Register</h3>
              <p>Sign up now and start creating AI-generated Text in minutes.</p>
            </div>
            <div className="card-back">
              <a href="/register" className="btn btn-outline-light">Go to Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
