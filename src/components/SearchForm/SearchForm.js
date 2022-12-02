import React from "react";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="searchForm">
      <h1 className="searchForm__title">What's going on in the world?</h1>
      <p className="searchForm__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="searchForm__container">
        <input className="searchForm__container_input" />
        <button className="searchForm__container_button">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
