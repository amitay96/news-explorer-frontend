import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserApi from "../../utils/MainApi";

export const useUser = () => {
  const history = useNavigate();
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("jwt"));

  const handleSaveArticle = async (article) => {
    try {
      const res = await UserApi.saveArticle(article, token);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetSaved = async () => {
    try {
      const res = await UserApi.getSavedArticles(token);
      if (!res.message) {
        setSavedArticles(res);
      }
    } catch (err) {
      console.log(err);
      setSavedArticles([]);
    }
  };

  const handleDeleteSaved = async (id) => {
    try {
      const res = await UserApi.deleteArticle(id, token);
      if (res.message) {
        const newSavedArticles = savedArticles.filter(
          (card) => card._id !== id
        );
        setSavedArticles(newSavedArticles);
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (data) => {
    setIsLoading(true);
    try {
      const res = await UserApi.login(data);
      if (res.token) {
        console.log(res);
        localStorage.setItem("jwt", res.token);
        setCurrentUser({ username: res.user.name });
        setToken(res.token);
        setLoggedIn(true);
        return res.user;
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (data) => {
    setIsLoading(true);
    try {
      const res = await UserApi.register(data);
      if (res) {
        return res;
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setCurrentUser({ username: "" });
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    setSavedArticles([]);
    window.location.reload();
  };

  useEffect(() => {
    if (token) {
      setIsLoading(true);
      UserApi.checkToken(token)
        .then((user) => {
          if (user._id) {
            setLoggedIn(true);
            setCurrentUser({ username: user.name });
          }
        })
        .catch((err) => {
          console.log(err);
          handleLogout();
        })
        .finally(() => setIsLoading(false));
    }
  }, [history]);

  return {
    currentUser,
    savedArticles,
    isLoading,
    loggedIn,
    handleRegister,
    handleLogin,
    handleLogout,
    handleSaveArticle,
    handleGetSaved,
    handleDeleteSaved,
  };
};
