import React from "react";
import { useForm } from "../../utils/useForm";
import { useNews } from "../../contexts/hooks/useNews";
import "./SearchForm.css";

const SearchForm = () => {
  const { values, handleChange } = useForm({ keyword: "" });
  const { searchNews } = useNews();
  console.log(values);
  const handleTyping = (evt) => {
    evt.preventDefault();
    handleChange(evt);
    console.log(values);
    setTimeout(() => {
      searchNews(values.keyword);
    }, 300);
    console.log(values);
  };
  console.log(values);

  return (
    <form className="searchForm">
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
          value={values.keyword}
          onChange={handleTyping}
        />
        <button className="searchForm__search_button">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
