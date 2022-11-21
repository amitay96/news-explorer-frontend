import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import { savedArticles } from "../../data";
import Login from "../Login/Login";
import "./App.css";

function App() {
  const [isSigninPopupOpen, setIsSigninPopupOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    name: "Loading...",
  });

  const [userData, setUserData] = useState({
    name: "",
  });

  const [token, setToken] = useState(localStorage.getItem("jwt"));

  const [loggedIn, setLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  //----------------Event Handlers----------------

  const handleSigninClick = () => {
    setIsSigninPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsSigninPopupOpen(false);
  };
  console.log(isSigninPopupOpen);
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                loggedIn={loggedIn}
                userData={userData}
                handleLoginClick={handleSigninClick}
              />
            }
          />
          <Route path="/saved" element={<SavedNews news={savedArticles} />} />
        </Routes>
        <Footer />
        <Login
          isOpen={isSigninPopupOpen}
          onClose={closeAllPopups}
          onSubmit=""
          isLoading={isLoading}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
