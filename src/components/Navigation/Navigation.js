import React from "react";
import { Link } from "react-router-dom";
import { usePopup } from "../../contexts/PopupContext";
import { useStore } from "../../contexts/GlobalContext";
import menuIcon from "../../images/icons/menu_icon.svg";
import menuIconSaved from "../../images/icons/menu_icon_saved.svg";
import "./Navigation.css";

const Navigation = ({ isMain }) => {
  const { openPopup } = usePopup();
  const { currentUser, loggedIn, handleLogout } = useStore();

  const handleNavButtonClick = () => {
    loggedIn ? handleLogout() : openPopup("signin");
  };

  const handleMenuClick = () => {
    openPopup("menu");
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
        <Link
          to="/"
          className={
            isMain
              ? "navigation__link"
              : "navigation__link navigation__link_type_saved"
          }
        >
          NewsExplorer
        </Link>
      </p>
      <div className="navigation__area">
        <ul className="navigation__links">
          <li
            className={
              isMain
                ? "navigation__link-item navigation__link_home-active"
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
          {loggedIn && (
            <li
              className={
                isMain
                  ? "navigation__link-item"
                  : "navigation__link-item navigation__link_saved-active"
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
          )}
        </ul>
        <button
          className={
            isMain
              ? "navigation__button"
              : "navigation__button navigation__button_type_saved"
          }
          onClick={handleNavButtonClick}
        >
          {!loggedIn ? "Sign in" : currentUser.username}
          {loggedIn && (
            <span
              className={
                isMain
                  ? "navigation__button_logout_icon"
                  : "navigation__button_logout_icon navigation__button_logout_icon_saved"
              }
              alt="logout icon"
            />
          )}
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
