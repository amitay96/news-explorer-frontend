import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import { savedArticles } from "../../data";
import Login from "../Login/Login";
import "./App.css";

function App() {
  const [isSigninPopupOpen, setIsSigninPopupOpen] = useState(false);

  //----------------Event Handlers----------------

  const handleSigninClick = () => {
    setIsSigninPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsSigninPopupOpen(false);
  };

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Main handleLoginClick={handleSigninClick} />}
        />
        <Route
          path="/saved-news"
          element={<SavedNews news={savedArticles} />}
        />
      </Routes>
      <Footer />
      <Login isOpen={isSigninPopupOpen} onClose={closeAllPopups} onSubmit="" />
    </div>
  );
}

export default App;
