import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import "./Main.css";

const Main = (props) => {
  return (
    <section className="Main">
      <Header />
      <SearchForm />
      <SearchResults />
      <About />
    </section>
  );
};

export default Main;
