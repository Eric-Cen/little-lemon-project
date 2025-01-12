import React from "react";
import logo from "./images/Logo.svg";
import "./Nav.css";

const Nav: React.FC<{}> = () => {
  return (
    <nav className="App-nav">
      <img src={logo} alt="restaurant logo" width="202" />
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
