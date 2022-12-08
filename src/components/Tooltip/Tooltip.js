import React from "react";
import Popup from "../Popup/Popup";
import { usePopup } from "../../contexts/PopupContext";
import "./Tooltip.css";

const Tooltip = () => {
  const popupContext = usePopup();

  const handleRedirect = (evt) => {
    evt.preventDefault();
    popupContext.closeAllPopups();
    popupContext.openPopup("signin");
  };

  return (
    <Popup name="tooltip" isOpen={popupContext.popupStates.registered}>
      <p className="tooltip__text">Registration successfully completed!</p>
      <span
        to="/signin"
        className="popup__footer-link"
        onClick={handleRedirect}
      >
        Sign in
      </span>
    </Popup>
  );
};

export default Tooltip;
