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

  const searchNews = async (keyword) => {
    _setIsSearching();
    try {
      const res = await newsApi.getNews(keyword);
      if (res.articles.length > 0) {
        setNews(res.articles);
        setKeyword(keyword);
      } else setIsNotFound(true);
      return res;
    } catch (err) {
      return console.log("error:", err);
    } finally {
      setIsSearching(false);
    }
  };

  return { news, searchNews, isSearching, isNotFound, keyword };
};
