import { useState } from "react";
import newsApi from "../../utils/NewsApi";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const _setIsSearching = () => {
    setIsSearching(true);
    setIsNotFound(false);
    setNews([]);
  };

  const searchNews = (keyword) => {
    _setIsSearching();
    newsApi
      .getNews(keyword)
      .then((res) => {
        if (res.articles) {
          console.log(res);
          setNews(res.articles);
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        setIsNotFound(true);
      })
      .finally(() => setIsSearching(false));
  };

  return { news, searchNews, isSearching, isNotFound };
};
