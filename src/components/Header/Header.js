import React from "react";
import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">NewsExplorer</p>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
