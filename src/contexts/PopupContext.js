import React, { useState, createContext, useContext } from "react";

export const PopupContext = createContext();

const PopupProvider = ({ children }) => {
  const { popupStates, setPopupStates } = useState({
    signin: false,
    signup: false,
    registered: false,
    navigation: false,
  });

  const openPopup = (popupType) => {
    setPopupStates({ [popupType]: true });
  };

  const closeAllPopups = (popupType) => {
    setPopupStates({ [popupType]: true });
  };

  const popups = { popupStates, setPopupStates, openPopup, closeAllPopups };

  return (
    <PopupContext.Provider value={popups}>{children}</PopupContext.Provider>
  );
};

export default PopupProvider;

export const usePopup = () => {
  const context = useContext(PopupContext);
  return context;
};
