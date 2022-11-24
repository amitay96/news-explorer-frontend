import React from "react";
import { Link } from "react-router-dom";
import logout_icon from "../../images/icons/logout.svg";

import "./SavedNewsHeader.css";

const SavedNewsHeader = (props) => {
  return (
    <header className="header saved-header">
      <div className="header__container saved-header__container">
        <p className="header__logo">NewsExplorer</p>
        <nav className="header__navigation">
          <ul className="header__links saved-header__link">
            <li className="header__link-item">
              <Link to="/" className="saved-header__link">
                Home
              </Link>
            </li>
            <li className="header__link-item saved-header__link_active">
              <Link to="/saved-news" className="saved-header__link">
                Saved Articles
              </Link>
            </li>
            <li className="header__link-item header__user_login saved-header__user_login">
              Elise
              <img
                src={logout_icon}
                className="header__user_logout-icon saved-header__user_logout-icon"
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
