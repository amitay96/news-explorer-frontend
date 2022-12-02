import React, { useState, createContext, useContext } from "react";

const PopupContext = createContext();

const PopupProvider = ({ children }) => {
  const popupsClosed = {
    signin: false,
    signup: false,
    registered: false,
    menu: false,
  };

  const [popupStates, setPopupStates] = useState(popupsClosed);

  const openPopup = (popupType) => {
    setPopupStates({ [popupType]: true });
  };

  const closeAllPopups = () => {
    setPopupStates(popupsClosed);
  };

  const popups = { popupStates, setPopupStates, openPopup, closeAllPopups };

  return (
    <PopupContext.Provider value={popups}>{children}</PopupContext.Provider>
  );
};

export default PopupProvider;

export const usePopup = () => {
  return useContext(PopupContext);
};
