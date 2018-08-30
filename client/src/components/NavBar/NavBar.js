import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => (
    <ul className="nav nav-tabs">
    <a class="navbar-brand">Choose a year:</a>
    <li className="nav-item">
      <Link
        to="/2017"
        className={
          window.location.pathname === "/about" ? "nav-link active" : "nav-link"
        }
      >
        2017
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        2018
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/2019"
        className={
          window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
        }
      >
        2019
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/wishlist"
        className={
          window.location.pathname === "/wishlist" ? "nav-link active" : "nav-link"
        }
      >
        Reading Wish List
      </Link>
    </li>

  </ul>

)

export default NavBar;

