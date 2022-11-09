import React from "react";
import { Link } from "react-router-dom";
import logout_icon from "../../images/icons/logout.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <div className="header__container">
        <p className="header__logo">NewsExplorer</p>
        <nav className="header__navigation">
          <ul className={"header__links"}>
            <li className="header__link-item header__link-home_active">
              <Link to="/home" className="header__link">
                Home
              </Link>
            </li>
            <li className="header__link-item header__link-saved_active">
              <Link to="/saved" className="header__link">
                Saved Articles
              </Link>
            </li>
            <li className="header__link-item header__user_login">
              Sign in
              <img
                src={logout_icon}
                className="header__user_logout-icon"
                alt="logout icon"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
