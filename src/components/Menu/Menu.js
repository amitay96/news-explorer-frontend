import React from "react";
import Popup from "../Popup/Popup";
import { usePopup } from "../../contexts/PopupContext";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const { popupStates, openPopup, closeAllPopups } = usePopup();
  const { menu } = popupStates;

  const handleLoginClick = () => {
    openPopup("signin");
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
              className={!menu ? "menu__link" : "menu__link menu__link_active"}
            >
              Home
            </Link>
          </li>
          {/* {loggedIn && (
              <li className="menu__list-item">
                <Link
                  to="/saved-news"
                  className="menu__link"
                  activeClassName="menu__link_active"
                >
                  Saved articles
                </Link>
              </li>
            )} */}
        </ul>

        <button className="menu__button" onClick={handleLoginClick}>
          Sign in
          {/* {loggedIn && (
              <img className="menu__icon" src={logoutIcon} alt="logout" />
            )} */}
        </button>
      </nav>
    </Popup>
  );
};

export default Menu;
