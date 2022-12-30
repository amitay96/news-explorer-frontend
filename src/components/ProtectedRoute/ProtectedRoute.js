import React from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "../../contexts/GlobalContext";

const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useStore().UserActions;

  return loggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
