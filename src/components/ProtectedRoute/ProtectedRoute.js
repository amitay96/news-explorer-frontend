import React from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "../../contexts/GlobalContext";
import { usePopup } from "../../contexts/PopupContext";


const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useStore().UserActions;
  const { openPopup } = usePopup();

  const backHome = () => {
    openPopup("signin");
    return <Navigate to="/" />
  }

  return loggedIn ? children : backHome();
};

export default ProtectedRoute;
