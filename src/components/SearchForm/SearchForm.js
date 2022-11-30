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
      <div className="searchForm__input_container">
        <input className="searchForm__input" />
        <button className="searchForm__input_button">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
