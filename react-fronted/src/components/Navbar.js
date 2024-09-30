import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          NextSemester
        </a>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/graph">גרף הקדמים</a>
          </li>
          <li>
            <a href="/table">טבלת הקורסים</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
