import React from "react";
import { Link } from "react-router-dom";
import { usePopup } from "../../contexts/PopupContext";
import logout_icon from "../../images/icons/logout.svg";
import "./Navigation.css";

const Navigation = (props) => {
  const { openPopup } = usePopup();

  const handleLoginClick = () => {
    openPopup("signin");
  };

  return (
    <nav className="header__navigation">
      <ul className="header__links">
        <li className="header__link-item header__link-home_active">
          <Link to="/" className="header__link">
            Home
          </Link>
        </li>
        <li className="header__link-item">
          <Link to="/saved-news" className="header__link">
            Saved Articles
          </Link>
        </li>
        <li
          className="header__link-item header__user_login"
          onClick={handleLoginClick}
        >
          Sign in
          <img
            src={logout_icon}
            className="header__user_logout-icon"
            alt="logout icon"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
