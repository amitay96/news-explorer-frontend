import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchResults.css";

const SearchResults = () => {
  return (
    <div className="searchResults">
      <h3 className="searchResults__title">Search results</h3>
      <NewsCardList />
      <button className="searchResults__button">Show more</button>
    </div>
  );
};

export default SearchResults;
