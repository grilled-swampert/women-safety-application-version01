import React from 'react';
import Menu from '../navbar/photos/menu.svg';
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <header>
                <nav className="navbar-container">
                    <div className="navbar-logo">
                        <h4 data-aos="fade-down">Rembrandt</h4>
                        <div className="navbar-logo-overlay"></div>
                    </div>

                    <ul className="navbar-menu" data-aos="fade-down">
                        <li><a href="#visit">Visit</a></li>
                        <li><a href="#yourbooks">Your Books</a></li>
                        <li><a href="#catalogue">Catalogue</a></li>
                        <li><a href="#about-us">About Us</a></li>
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
}

export default Navbar;
