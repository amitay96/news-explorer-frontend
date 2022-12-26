import { useState } from "react";
import newsApi from "../../utils/NewsApi";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFound, setIsFound] = useState(false);

  const searchNews = (keyword) => {
    setIsSearching(true);
    newsApi
      .getNews(keyword)
      .then((res) => {
        if (res.articles) {
          console.log(res);
          setNews(res.articles);
          setIsFound(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsFound(false);
      })
      .finally(() => setIsSearching(false));
  };

  const checkFound = () => {
    if (!isSearching && isFound) return true;
  };

  return { news, searchNews, checkFound, isSearching, isFound };
};
