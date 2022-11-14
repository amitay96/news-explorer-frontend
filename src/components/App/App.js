import React, { useState, useEffect, useHistory } from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import savedArticles from "../../data";
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

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} name={userData.name} />
        <Main />
        <SavedNews news={savedArticles} />
        <Routes>
          {/* <Route path="/"></Route> */}
          {/* <Route path="/saved"></Route> */}
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
