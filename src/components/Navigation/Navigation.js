import React from "react";
import { Link } from "react-router-dom";
import { usePopup } from "../../contexts/PopupContext";

import "./Navigation.css";

const Navigation = (isMain) => {
  const { openPopup } = usePopup();

  const handleLoginClick = () => {
    openPopup("signin");
  };

  return (
    <nav className="navigation" onClick={() => console.log(isMain)}>
      <ul
        className={
          isMain
            ? "navigation__links"
            : "navigation__links navigation__links_saved"
        }
      >
        <li
          className={
            isMain
              ? "navigation__link-item navigation__link-home_active"
              : "navigation__link-item"
          }
        >
          <Link to="/" className="navigation__link">
            Home
          </Link>
        </li>
        <li
          className={
            isMain
              ? "navigation__link-item"
              : "navigation__link-item navigation__link-saved_active"
          }
        >
          <Link to="/saved-news" className="navigation__link">
            Saved Articles
          </Link>
        </li>
      </ul>
      <button className="navigation__button" onClick={handleLoginClick}>
        Sign in
        <span className="navigation__user_logout-icon" alt="logout icon" />
      </button>
    </nav>
  );
};

export default Navigation;
