import React from "react";
import Navigation from "../Navigation/Navigation";
import { useLocations } from "../../contexts/LocationContext";
import "./Header.css";

const Header = () => {
  const { isMain } = useLocations();
  // console.log(isMain);

  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">NewsExplorer</p>
        <Navigation isMain={isMain} />
      </div>
    </header>
  );
};

export default Header;
