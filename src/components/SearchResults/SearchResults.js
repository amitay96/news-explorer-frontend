import React from "react";
import { useStore } from "../../contexts/GlobalContext";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchResults.css";

const SearchResults = () => {
  const { news, isSearching } = useStore().NewsActions;
  console.log(news);

  return (
    <>
      {!isSearching && (
        <section className="section search-results">
          <h3 className="search-results__title">Search results</h3>
          <NewsCardList news={[news]} />
          <button className="search-results__button">Show more</button>
        </section>
      )}
    </>
  );
};

export default SearchResults;
