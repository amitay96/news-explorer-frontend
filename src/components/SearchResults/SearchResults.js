import React from "react";
import { useStore } from "../../contexts/GlobalContext";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import "./SearchResults.css";

const SearchResults = () => {
  const { news, isSearching, isFound } = useStore().NewsActions;

  // useEffect(() => {
  //   setResults(news);
  // }, [isFound]);

  return (
    <>
      {isSearching && <Preloader />}
      {isFound && (
        <section className="section search-results">
          <h3 className="search-results__title">Search results</h3>
          <NewsCardList news={news} />
          <button className="search-results__button">Show more</button>
        </section>
      )}
      {/* {!isFound && <NotFound />} */}
    </>
  );
};

export default SearchResults;
