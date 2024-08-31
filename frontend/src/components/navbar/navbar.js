import React, { useState } from "react";
import Menu from "../photos/menu.svg";
import "./navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      <header>
        <nav className="navbar-container">
          <div className="navbar-logo">
            <h4 data-aos="fade-down">LOGO</h4>
            <div className="navbar-logo-overlay"></div>
          </div>

          <ul className="navbar-menu" data-aos="fade-down">
            <li
              className={activeItem === "home" ? "active" : ""}
              onClick={() => handleItemClick("home")}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={activeItem === "heatmap" ? "active" : ""}
              onClick={() => handleItemClick("heatmap")}
            >
              <a href="#heatmap">HeatMap</a>
            </li>
            <li
              className={activeItem === "map" ? "active" : ""}
              onClick={() => handleItemClick("map")}
            >
              <a href="#map">Map</a>
            </li>
            <li
              className={activeItem === "logs" ? "active" : ""}
              onClick={() => handleItemClick("logs")}
            >
              <a href="#logs">Logs</a>
            </li>
          </ul>

          <ul className="navbar-login">
            <li>
              <button className="navbar-login-button">Login</button>
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
