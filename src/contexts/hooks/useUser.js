import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserApi from "../../utils/MainApi";

export const useUser = () => {
  const history = useNavigate();
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [token, setToken] = useState(localStorage.getItem("jwt"));

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoading(true);
      UserApi.checkToken(token)
        .then((res) => {
          console.log(res);
          if (res._id) {
            setLoggedIn(true);
            setCurrentUser({ username: res.name });
          }
        })
        .catch((err) => {
          console.log(err);
          history("/");
        })
        .finally(() => setIsLoading(false));
    }
  }, [history]);

  const checkToken = async () => {
    try {
      const token = localStorage.getItem("jwt");
      setIsLoading(true);
      if (token) {
        const user = await UserApi.checkToken(token);
        setCurrentUser(user);
        return user;
      } else {
        handleLogout();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = (data) => {
    setIsLoading(true);
    UserApi.login(data)
      .then((res) => {
        if (res) {
          console.log(res);
          localStorage.setItem("jwt", res.token);
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

  return {
    currentUser,
    setCurrentUser,
    loggedIn,
    handleRegister,
    handleLogin,
    handleLogout,
    isLoading,
  };
};
