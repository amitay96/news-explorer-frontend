import React from "react";
import logout_icon from "../../images/icons/logout.svg";
// import { Link } from "react-router-dom";
// import Menu from "./Menu";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className={"navigation__links"}>
        <li className="navigation__link-item navigation__link-home_active">
          {/* <Link to="/home" className="navigation__link"> */}
          Home
          {/* </Link> */}
        </li>
        <li className="navigation__link-item navigation__link-saved_active">
          {/* <Link to="/saved" className="navigation__link"> */}
          Saved Articles
          {/* </Link> */}
        </li>
        <li className="navigation__link-item navigation__user_login">
          {/* <Link to="/signin" className="navigation__link"> */}
          Sign in
          <img
            src={logout_icon}
            className="navigation__user_logout-icon"
            alt="logout icon"
          />
          {/* </Link> */}
        </li>
      </ul>
      {/* <Menu></Menu> */}
    </nav>
  );
};

export default Navigation;
