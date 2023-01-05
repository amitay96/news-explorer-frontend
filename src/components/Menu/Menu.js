import React from "react";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup";
import { usePopup } from "../../contexts/PopupContext";
import { useLocations } from "../../contexts/LocationContext";
import { useStore } from "../../contexts/GlobalContext";
import logoutIcon from "../../images/icons/logout_icon.svg";
import "./Menu.css";

const Menu = () => {
  const { popupStates, openPopup, closeAllPopups } = usePopup();
  const { currentUser, loggedIn, handleLogout } = useStore().UserActions;
  const { isMain } = useLocations();
  const { menu } = popupStates;

  const handleLoginClick = () => {
    closeAllPopups();
    loggedIn ? handleLogout() : openPopup("signin");
  };

  return (
    <Popup
      name="menu"
      isOpen={menu}
      className={`${menu ? "menu menu_active" : "menu"}`}
    >
      <div className="menu__header">
        <p className="navigation__logo">NewsExplorer</p>
        <button
          type="button"
          className="menu__close-button"
          aria-label="close button"
          onClick={closeAllPopups}
        ></button>
      </div>
      <nav className="menu__nav">
        <ul className="menu__nav-list">
          <li className="menu__list-item">
            <Link
              to="/"
              className={`menu__link ${isMain && "menu__link_active"}`}
              onClick={closeAllPopups}
            >
              Home
            </Link>
          </li>
          {loggedIn && (
            <li className="menu__list-item">
              <Link
                to="/saved-news"
                className={`menu__link ${!isMain && "menu__link_active"}`}
                onClick={closeAllPopups}
              >
                Saved articles
              </Link>
            </li>
          )}
        </ul>

        <button className="menu__button" onClick={handleLoginClick}>
          {!loggedIn ? "Sign in" : currentUser.username}
          {loggedIn && (
            <img className="menu__icon" src={logoutIcon} alt="logout" />
          )}
        </button>
      </nav>
    </Popup>
  );
};

export default Menu;
