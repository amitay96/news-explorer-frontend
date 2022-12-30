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

  // useEffect(() => {
  //   if (token) {
  //     console.log(token);
  //     setIsLoading(true);
  //     UserApi.checkToken(token)
  //       .then((user) => {
  //         console.log(user);
  //         if (user._id) {
  //           setLoggedIn(true);
  //           setCurrentUser({ username: user.name });
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .finally(() => setIsLoading(false));
  //   }
  // }, [history]);

  const handleLogin = (data) => {
    setIsLoading(true);
    UserApi.login(data)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          console.log(res);
          setCurrentUser({ username: res.data.name });
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleRegister = (data) => {
    setIsLoading(true);
    UserApi.register(data)
      .then((res) => {
        if (res) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({ username: "" });
    setLoggedIn(false);
    history("/");
  };

  const handleSaveArticle = (article) => {
    UserApi.saveArticle(article, token)
      .then((res) => {
        if (res) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetSaved = () => {
    UserApi.getSavedArticles(token)
      .then((res) => {
        if (!res.message) {
          console.log(res);
          setSavedArticles(res);
        } else setSavedArticles([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteSaved = (id) => {
    UserApi.deleteArticle(id, token)
      .then((res) => {
        if (!res.message) {
          const newSavedArticles = savedArticles.filter(
            (card) => card._id !== res._id
          );
          console.log(res);
          setSavedArticles(newSavedArticles);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
