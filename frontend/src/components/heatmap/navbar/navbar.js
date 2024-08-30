import React from "react";
import Menu from "../../heatmap/photos/menu.svg";
import "../../heatmap/navbar/navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar-container">
          <div className="navbar-logo">
            <h4 data-aos="fade-down">LOGO</h4>
            <div className="navbar-logo-overlay"></div>
          </div>

          <ul className="navbar-menu" data-aos="fade-down">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <button>
                <a href="#heatmap">HeatMap</a>
              </button>
            </li>
            <li>
              <a href="#map">Map</a>
            </li>
            <li>
              <a href="#logs">Logs</a>
            </li>
          </ul>

          <ui className="navbar-login">
            <button className="navbar-login-button">Login</button>
          </ui>

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
