import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import Tooltip from "../Tooltip/Tooltip";
import Menu from "../Menu/Menu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/saved-news"
          element={
            <ProtectedRoute>
              <SavedNews />
            </ProtectedRoute>
          }
        />
        <Route exact={true} path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <Signin />
      <Signup />
      <Tooltip />
      <Menu />
    </div>
  );
}

export default App;
