import React from "react";
import { Link } from "react-router-dom";
import { usePopup } from "../../contexts/PopupContext";
import menuIcon from "../../images/icons/menu_icon.svg";
import menuIconSaved from "../../images/icons/menu_icon_saved.svg";
import "./Navigation.css";

const Navigation = ({ isMain }) => {
  const { openPopup } = usePopup();

  const handleLoginClick = () => {
    openPopup("signin");
  };

  const handleMenuClick = () => {
    openPopup("navigation");
  };

  return (
    <nav
      className={isMain ? "navigation" : "navigation saved__header_container"}
    >
      <p
        className={
          isMain
            ? "navigation__logo"
            : "navigation__logo navigation__logo_type_saved"
        }
      >
        NewsExplorer
      </p>
      <div className="navigation__area">
        <ul className="navigation__links">
          <li
            className={
              isMain
                ? "navigation__link-item navigation__link-home_active"
                : "navigation__link-item"
            }
          >
            <Link
              to="/"
              className={
                isMain
                  ? "navigation__link"
                  : "navigation__link navigation__link_type_saved"
              }
            >
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
            <Link
              to="/saved-news"
              className={
                isMain
                  ? "navigation__link"
                  : "navigation__link navigation__link_type_saved"
              }
            >
              Saved Articles
            </Link>
          </li>
        </ul>
        <button
          className={
            isMain
              ? "navigation__button"
              : "navigation__button navigation__button_type_saved"
          }
          onClick={handleLoginClick}
        >
          {isMain ? "Sign in" : "Elise"}
          <span
            className={
              isMain
                ? "navigation__user_logout-icon"
                : "navigation__user_logout-icon navigation__user_logout-icon_active"
            }
            alt="logout icon"
          />
        </button>
      </div>
      <button
        className="navigation__menu_button"
        onClick={handleMenuClick}
        style={{ backgroundImage: `url(${isMain ? menuIcon : menuIconSaved})` }}
      />
    </nav>
  );
};

export default Navigation;
