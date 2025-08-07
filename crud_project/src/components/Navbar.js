import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Separate CSS for navbar

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbarBrand" to="/">
        Product Management
      </Link>

      <div className="navbarNav">
        <Link className="navLink" to="/">
          Dashboard
        </Link>
        <Link className="navLink" to="/products">
          Products
        </Link>
        <Link className="navLink" to="/categories">
          Categories
        </Link>
      </div>
    </nav>
  );
}
