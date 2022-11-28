import React from "react";
import Navigation from "../Navigation/Navigation";
import { useLocations } from "../../contexts/LocationContext";
import "./SavedNewsHeader.css";

const SavedNewsHeader = () => {
  const { isMain } = useLocations();

  return (
    <header className="header saved__header">
      <div className="header__container saved__header_container">
        <p className="header__logo saved__header_logo">NewsExplorer</p>
        <Navigation isMain={isMain} />
      </div>
    </header>
  );
};

export default SavedNewsHeader;
