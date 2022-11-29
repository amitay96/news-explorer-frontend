import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import Tooltip from "../Tooltip/Tooltip";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/saved-news" element={<SavedNews />} />
        <Route exact={true} path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <Signin />
      <Signup />
      <Tooltip />
    </div>
  );
}

export default App;
