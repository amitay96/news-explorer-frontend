import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  const signoutClick = () => {
    props.toggleMenu();
    props.handleSignout();
  };

  return (
    <div
      className={`header__menu ${
        props.isMenuOpen ? "header__menu_active" : ""
      }`}
    >
      <ul className="header__links header__links_menu">
        <li className="header__link-item">{props.name}</li>
        <li className="header__link-item">
          <Link to="/signin" className="header__link" onClick={signoutClick}>
            Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
