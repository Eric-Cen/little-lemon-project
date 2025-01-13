import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Nav from "./Nav";
import logo from "./images/Logo.svg";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Contact from "./Contact";
import AboutLittleLemon from "./AboutLittleLemon";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Little Lemon Restaurant</title>
        <meta
          name="description"
          content="the website for little lemon restaurant"
        />
        <meta name="og:title" content="little lemon restaurant" />
        <meta
          name="og:description"
          content="the website for little lemon restaurant"
        />
        <meta name="og:image" content={logo} />
      </Helmet>

      <Nav />
      <div className="Page-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutLittleLemon />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
