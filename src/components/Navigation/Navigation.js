import React from "react";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <Popup isOpen={props.isOpen} name="navigation" onClose={props.onClose}>
      <div className="nav">
        <ul className="header__links navigation__links">
          <li className="header__link-item">Elise</li>
          <li className="header__link-item">
            <Link to="/signin" className="header__link">
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </Popup>
  );
};

export default Navigation;
