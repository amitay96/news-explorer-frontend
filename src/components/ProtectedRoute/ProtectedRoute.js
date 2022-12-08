import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useUser();

  return loggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
