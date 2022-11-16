import React from "react";
import "./SavedNewsHeader.css";

const SavedNewsHeader = (props) => {
  return (
    <header className="header">
      <Navigation />
      <div className="savedHeader__container">
        <p className="header__logo">NewsExplorer</p>
        <nav className="header__navigation">
          <ul className="header__links">
            <li className="header__link-item header__link-home_active">
              <Link to="/" className="header__link">
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

export default SavedNewsHeader;
