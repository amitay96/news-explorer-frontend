import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import "./Main.css";

const Main = () => {
  return (
    <div className="Main">
      <SearchForm />
      <SearchResults />
      <About />
    </div>
  );
};

export default Main;
