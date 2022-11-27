import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import { savedArticles } from "../../data";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
