import { useState } from "react";
import newsApi from "../../utils/NewsApi";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [keyword, setKeyword] = useState("");

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
        console.log(res);
        if (res.articles.length > 0) {
          setNews(res.articles);
          setKeyword(keyword);
        } else setIsNotFound(true);
      })
      .catch((err) => {
        console.log("Error:", err);
        setIsNotFound(true);
      })
      .finally(() => setIsSearching(false));
  };

  return { news, searchNews, isSearching, isNotFound, keyword };
};
