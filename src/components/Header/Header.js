import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <p className="logo">NewsExplorer</p>
        <Navigation></Navigation>
      </div>
    </header>
  );
}

export default Header;
