import React from "react";
import Navigation from "../Navigation/Navigation";
import { useLocations } from "../../contexts/LocationContext";
import "./Header.css";

const Header = () => {
  const { isMain } = useLocations();

  return (
    <header className="header">
      <div className="header__container">
        <Navigation isMain={isMain} />
      </div>
    </header>
  );
};

export default Header;
