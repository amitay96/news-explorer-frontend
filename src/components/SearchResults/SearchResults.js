import React, { useState } from "react";
import { useStore } from "../../contexts/GlobalContext";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import "./SearchResults.css";

const SearchResults = () => {
  const { news, isSearching, isNotFound } = useStore().NewsActions;
  const [newsToShow, setNewsToShow] = useState(3);
  const isMoreCards = news.length > newsToShow;

  return (
    <>
      {isSearching && <Preloader />}
      {news.length > 1 && (
        <section className="section search-results">
          <h3 className="search-results__title">Search results</h3>
          <NewsCardList news={news.slice(0, newsToShow)} />
          {isMoreCards && (
            <button
              className="search-results__button"
              onClick={() => setNewsToShow((prev) => (prev += 3))}
            >
              Show more
            </button>
          )}
        </section>
      )}
      {isNotFound && <NotFound />}
    </>
  );
};

export default SearchResults;
