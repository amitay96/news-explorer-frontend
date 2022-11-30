import React from "react";
import { searchArticles } from "../../data/index";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchResults.css";

const SearchResults = () => {
  return (
    <section className="section search-results">
      <h3 className="search-results__title">Search results</h3>
      <NewsCardList news={searchArticles} />
      <button className="search-results__button">Show more</button>
    </section>
  );
};

export default SearchResults;
