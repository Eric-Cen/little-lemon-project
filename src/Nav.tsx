import React from "react";
import logo from "./images/Logo.svg";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav: React.FC<{}> = () => {
  return (
    <nav className="App-nav">
      <img src={logo} alt="restaurant logo" width="202" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
