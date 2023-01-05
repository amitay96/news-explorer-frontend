import React from "react";
import { useFormWithValidation } from "../../utils/hooks";
import { useStore } from "../../contexts/GlobalContext";
import "./SearchForm.css";

const SearchForm = () => {
  const { values, handleChange } = useFormWithValidation({ keyword: "" });
  const { searchNews } = useStore().NewsActions;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchNews(values.keyword);
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
          required
        />
        <button className="searchForm__search_button">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
