import React from "react";
// import { Link } from "react-router-dom";
// import Menu from "./Menu";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="Navigation">
      <ul className={"navigation__links"}>
        <li className="navigation__link-item">
          {/* <Link to="/home" className="navigation__link"> */}
          Home
          {/* </Link> */}
        </li>
        <li className="navigation__link-item">
          {/* <Link to="/saved" className="navigation__link"> */}
          Saved Articles
          {/* </Link> */}
        </li>
        <li className="navigation__link-item">
          {/* <Link to="/signin" className="navigation__link"> */}
          Sign in
          {/* </Link> */}
        </li>
      </ul>
      {/* <Menu></Menu> */}
    </nav>
  );
}

export default Navigation;
