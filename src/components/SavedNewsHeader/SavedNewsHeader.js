import React from "react";
import { Link } from "react-router-dom";
import logout_icon from "../../images/icons/logout.svg";

import "./SavedNewsHeader.css";

const SavedNewsHeader = (props) => {
  return (
    <header className="header">
      <div className="header__container savedHeader__container">
        <p className="header__logo">NewsExplorer</p>
        <nav className="header__navigation">
          <ul className="header__links SavedHeader__link">
            <li className="header__link-item">
              <Link to="/" className="savedHeader__link">
                Home
              </Link>
            </li>
            <li className="header__link-item header__link-saved_active">
              <Link to="/saved" className="savedHeader__link">
                Saved Articles
              </Link>
            </li>
            <li className="header__link-item header__user_login savedHeader__user_login">
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

export default SavedNewsHeader;
