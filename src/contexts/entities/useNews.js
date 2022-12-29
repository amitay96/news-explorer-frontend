import { useState } from "react";
import newsApi from "../../utils/NewsApi";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFound, setIsFound] = useState(false);

  const _setIsLoading = () => {
    setIsSearching(true);
    setNews([]);
  };

  const searchNews = (keyword) => {
    _setIsLoading();
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

  console.log(isFound);

  // const checkFound = () => {
  //   return !isSearching && isFound;
  // };

  return { news, searchNews, isSearching, isFound };
};
