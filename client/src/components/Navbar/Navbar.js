import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">Battle Of Bastards</div>
        <div className="nav-wrapper">
          <ul className="menu-area">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/count">Count</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
