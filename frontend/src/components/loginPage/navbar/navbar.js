import React from "react";
import "../../loginPage/navbar/navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar-container">
          <div className="navbar-logo">
            <h4 data-aos="fade-down">LOGO</h4>
            <div className="navbar-logo-overlay"></div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
