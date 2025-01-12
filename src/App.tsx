import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Nav from "./Nav";
import logo from "./images/Logo.svg";

function App() {
  return (
    <>
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
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
