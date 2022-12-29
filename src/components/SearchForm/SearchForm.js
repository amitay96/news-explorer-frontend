import React from "react";
import { useForm } from "../../utils/useForm";
import { useStore } from "../../contexts/GlobalContext";
import "./SearchForm.css";

const SearchForm = () => {
  const { values, handleChange } = useForm({ keyword: "" });
  const { searchNews } = useStore().NewsActions;

  // const handleInput = (evt) => {
  //   evt.preventDefault();
  //   handleChange(evt);
  //   handleSubmit(evt);
  // };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchNews(values.keyword);
    // setTimeout(() => {
    // }, 300);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <h1 className="searchForm__title">What's going on in the world?</h1>
      <p className="searchForm__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="searchForm__search-container">
        <input
          name="keyword"
          className="searchForm__search_input"
          placeholder="Enter topic"
          value={values.keyword || ""}
          onChange={handleChange}
        />
        <button className="searchForm__search_button">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
