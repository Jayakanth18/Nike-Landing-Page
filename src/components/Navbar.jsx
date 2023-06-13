import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src="/images/nike-logo.png" alt="nike-logo" />
        </div>
        <ul className="links">
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="login">
          <button className="login">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
