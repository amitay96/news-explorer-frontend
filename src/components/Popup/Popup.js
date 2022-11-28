import React, { useEffect } from "react";
import { usePopup } from "../../contexts/PopupContext";
import "./Popup.css";

const Popup = ({ isOpen, name, children }) => {
  const popupsContext = usePopup();

  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        popupsContext.closeAllPopups();
      }
    };
    const closeByOverlay = (e) => {
      if (e.target.classList.contains("popup__active")) {
        popupsContext.closeAllPopups();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    document.addEventListener("mousedown", closeByOverlay);

    return () => {
      document.removeEventListener("keydown", closeByEscape);
      document.removeEventListener("mousedown", closeByOverlay);
    };
  }, [isOpen, popupsContext.closeAllPopups]);

  return (
    <div
      className={`popup popup__type_${name} ${isOpen ? "popup__active" : ""}`}
    >
      <div className={`popup__container popup__container_type_${name}`}>
        {children}
        <button
          className={"popup__close-button"}
          type="button"
          onClick={popupsContext.closeAllPopups}
        />
      </div>
    </div>
  );
};

export default Popup;
