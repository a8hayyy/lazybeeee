import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/logo69.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
            <img className="navbar-logo fa" src={logo} alt="LazyBee" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/Products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Explore
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/shops" className="nav-links" onClick={closeMobileMenu}>
                Food
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
