import React from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "../photos/menu.svg";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const getActiveClass = (itemPath) => (path === itemPath ? "active" : "");

  return (
    <div>
      <header>
        <nav className="navbar-container">
          <div className="navbar-logo">
            <h4 data-aos="fade-down">LOGO</h4>
            <div className="navbar-logo-overlay"></div>
          </div>

          <ul className="navbar-menu" data-aos="fade-down">
            <li className={getActiveClass("/home")}>
              <Link to="/home">Home</Link>
            </li>
            <li className={getActiveClass("/heatmap")}>
              <Link to="/heatmap">HeatMap</Link>
            </li>
            <li className={getActiveClass("/map")}>
              <Link to="/map">Map</Link>
            </li>
            <li className={getActiveClass("/logs")}>
              <Link to="/logs">Logs</Link>
            </li>
            <li className={getActiveClass("/resources")}>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>

          <ul className="navbar-login">
            <li>
              <button className="navbar-login-button">Logout</button>
            </li>
          </ul>

          <ul className="navbar-mobile" data-aos="fade-down">
            <li>
              <img src={Menu} alt="Menu" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
