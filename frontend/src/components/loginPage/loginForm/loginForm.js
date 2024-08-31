import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./loginForm.css";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    navigate('/home'); 
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-card-inner">
          <div className="login-card-front">
            <div className="login-title">Login</div>
            <form className="login-form" onSubmit={handleLogin}>
              <label className="login-label">Police ID:</label>
              <input
                className="login-input"
                name="policeId"
                placeholder="XXXXXXXXXXX"
                type="text" 
              />
              <label className="login-label">Password:</label>
              <input
                className="login-input"
                name="password"
                placeholder="XXXXXXXXXXX"
                type="password"
              />
              <button className="login-button" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
