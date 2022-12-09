import React, { useState, createContext, useContext, useEffect } from "react";
import UserContext from "./UserContext";
import newsApi from "../utils/NewsApi";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState();
  const [isSearching, setIsSearching] = useState(false);
  const { token } = UserContext();

  //   useEffect(() => {
  //     if (token) {
  //       setIsLoading(true);
  //       api
  //         .checkToken(token)
  //         .then((res) => {
  //           if (res._id) {
  //             setLoggedIn(true);
  //             setCurrentUser({ username: res.name });
  //           }
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           history("/");
  //         })
  //         .finally(() => setIsLoading(false));
  //     }
  //   }, [loggedIn]);

  const loadNews = (keyword) => {
    setIsSearching(true);
    newsApi
      .getNews(keyword)
      .then((res) => {
        if (res) {
          console.log(res);
          setNews({ res });
          //   setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsSearching(false));
  };

  //   const checkSearchStatus = () => {
  //     if (!isSearching && news) return true;
  //   };

  //   const handleRegister = (data) => {
  //     setIsLoading(true);
  //     api
  //       .register(data)
  //       .then((res) => {
  //         if (res) {
  //           console.log(res);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .finally(() => setIsLoading(false));
  //   };

  //   const handle = () => {};

  return (
    <NewsContext.Provider
      value={{
        news,
        isSearching,
        loadNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;

export const useNews = () => {
  const context = useContext(NewsContext);
  return context;
};
