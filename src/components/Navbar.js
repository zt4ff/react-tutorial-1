import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRLV <i className="fab fa-typo3" />
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "navbar-menu active" : "navbar-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
            </ul>
          </Link>
        </div>
      </nav>
    </>
  );
};
