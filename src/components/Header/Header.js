import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">NewsExplorer</p>
        <Navigation></Navigation>
      </div>
      <div className="header__seperator"/>
    </header>
  );
};

export default Header;
