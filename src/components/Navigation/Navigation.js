import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <Popup
      className={`navigation ${props.isOpen ? "header__menu_active" : ""}`}
    >
      <ul className="header__links navigation__links">
        <li className="header__link-item">Elise</li>
        <li className="header__link-item">
          <Link to="/signin" className="header__link">
            Log out
          </Link>
        </li>
      </ul>
    </Popup>
  );
};

export default Navigation;
